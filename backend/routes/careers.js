const express = require("express");
const path = require("path");
const multer = require("multer");
const CareerApplication = require("../models/CareerApplication");
const {
  brandedWrapper,
  emailLink,
  escapeHtml,
  getCompanyEmail,
  getSenderAddress,
  infoRow,
  sendEmail,
  stripTags,
} = require("../utils/mailer");
const { saveFallbackSubmission } = require("../utils/submissionStore");

const router = express.Router();
const sanitize = stripTags;

const POSITIONS = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Digital Marketing Specialist",
  "Sales Executive",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const allowedTypes = new Map([
  ["application/pdf", ".pdf"],
  ["application/msword", ".doc"],
  ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", ".docx"],
]);

// Use memoryStorage so resume files are kept in RAM as req.file.buffer.
// diskStorage is NOT suitable for Vercel and other serverless platforms
// because the filesystem is read-only (writes will throw EROFS / ENOENT).
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE, files: 1 },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const validMime = allowedTypes.has(file.mimetype);
    const validExt = [".pdf", ".doc", ".docx"].includes(ext);
    if (!validMime || !validExt) {
      return cb(new Error("Resume must be a PDF, DOC, or DOCX file."));
    }
    cb(null, true);
  },
});

// No cleanup needed — memoryStorage keeps files in RAM only; they are
// automatically discarded when the serverless function finishes.

function handleUpload(req, res, next) {
  upload.single("resume")(req, res, (error) => {
    if (!error) return next();

    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "Resume file must be 5 MB or smaller." });
    }

    return res.status(400).json({ error: error.message || "Resume upload failed." });
  });
}

router.post("/", handleUpload, async (req, res) => {
  try {
    const { fullName, email, phone, position, experience, coverLetter, website } = req.body;

    if (website) {
      return res.status(400).json({ error: "Application could not be submitted." });
    }

    if (!fullName || !email || !phone || !position || !experience || !coverLetter) {
      return res.status(400).json({ error: "Please complete all required fields." });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Please upload your resume/CV." });
    }

    const cleanPosition = sanitize(position);
    if (!POSITIONS.includes(cleanPosition)) {
      return res.status(400).json({ error: "Please select a valid position." });
    }

    const cleanEmail = sanitize(email).toLowerCase();
    const applicationPayload = {
      fullName: sanitize(fullName),
      email: cleanEmail,
      phone: sanitize(phone),
      position: cleanPosition,
      experience: sanitize(experience),
      coverLetter: sanitize(coverLetter),
      resume: {
        originalName: sanitize(req.file.originalname),
        mimetype: req.file.mimetype,
        size: req.file.size,
      },
      ip: req.ip,
    };

    let application = null;
    let fallbackId = null;

    try {
      application = await CareerApplication.create(applicationPayload);
    } catch (dbErr) {
      console.warn("Career DB save failed; trying file fallback:", dbErr.message);
      try {
        fallbackId = await saveFallbackSubmission("career-applications", applicationPayload);
      } catch (fsErr) {
        // Vercel and other serverless platforms have a read-only filesystem.
        // Log the error but continue — emails are the primary notification channel.
        console.warn("File fallback also failed (likely read-only fs on serverless):", fsErr.message);
      }
    }

    const adminBody = `
      <h2 style="color:#1a237e;font-size:20px;margin:0 0 6px;">New Career Application</h2>
      <p style="color:#666;font-size:14px;margin:0 0 24px;">A candidate submitted the careers form on the website.</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${infoRow("Name", escapeHtml(fullName))}
        ${infoRow("Email", emailLink(cleanEmail))}
        ${infoRow("Phone", escapeHtml(phone))}
        ${infoRow("Position", escapeHtml(cleanPosition))}
        ${infoRow("Experience", escapeHtml(experience), true)}
      </table>
      <div style="margin-top:20px;padding:20px;background:#fff3e0;border-radius:10px;border-left:4px solid #ff6b35;">
        <div style="font-weight:600;color:#ff6b35;margin-bottom:8px;font-size:14px;">Cover Letter</div>
        <p style="color:#444;line-height:1.7;margin:0;font-size:14px;">${escapeHtml(coverLetter)}</p>
      </div>
      <p style="color:#999;font-size:12px;margin-top:20px;">Application ID: ${application?._id || fallbackId}</p>`;

    const userBody = `
      <h2 style="color:#1a237e;font-size:22px;margin:0 0 8px;">Thanks for applying, ${escapeHtml(fullName)}.</h2>
      <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 24px;">
        We received your application for <strong>${escapeHtml(cleanPosition)}</strong>. Our team will review your profile and contact you if there is a strong match.
      </p>
      <p style="color:#888;font-size:13px;line-height:1.7;margin:0;">
        - The i-TECH Digitals Team
      </p>`;

    await Promise.all([
      sendEmail({
        from: `"i-TECH Digitals Careers" <${getSenderAddress()}>`,
        to: process.env.NOTIFY_EMAIL || getCompanyEmail(),
        replyTo: cleanEmail,
        subject: "New Career Application",
        html: brandedWrapper(adminBody, `Resume attached: ${escapeHtml(req.file.originalname)}`),
        attachments: [
          {
            // Use in-memory buffer (memoryStorage) — no file path needed
            filename: req.file.originalname,
            content: req.file.buffer,
            contentType: req.file.mimetype,
          },
        ],
      }),
      sendEmail({
        from: `"i-TECH Digitals Careers" <${getSenderAddress()}>`,
        to: cleanEmail,
        subject: "We received your application - i-TECH Digitals",
        html: brandedWrapper(userBody, "You're receiving this because you applied through the i-TECH Digitals careers page."),
      }),
    ]);

    res.status(201).json({
      success: true,
      message: "Application submitted successfully. Please check your email for confirmation.",
      applicationId: application?._id || fallbackId,
    });
  } catch (error) {
    console.error("Careers route error:", error);
    res.status(500).json({ error: "Application could not be submitted. Please try again." });
  }
});

router.get("/", async (req, res) => {
  try {
    const adminKey = req.headers["x-admin-key"];
    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const applications = await CareerApplication.find()
      .sort({ createdAt: -1 })
      .limit(100)
      .select("-resume.path");

    res.json({ total: applications.length, applications });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
