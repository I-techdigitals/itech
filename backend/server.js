const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const contactRouter = require("./routes/contact");
const bookingRouter = require("./routes/booking");
const careersRouter = require("./routes/careers");

const app = express();
const PORT = process.env.PORT || 5000;

// Required on Vercel/proxies so rate limiting and req.ip work correctly.
app.set("trust proxy", 1);

// ── CORS ───────────────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  "https://itechdigitals.com",
  "https://www.itechdigitals.com",
  /^https:\/\/[\w-]+-[\w-]+\.vercel\.app$/,
  /^https:\/\/[\w-]+\.vercel\.app$/,
  /^http:\/\/localhost(:\d+)?$/,
  /^http:\/\/127\.0\.0\.1(:\d+)?$/,
];

if (process.env.FRONTEND_URL && !ALLOWED_ORIGINS.includes(process.env.FRONTEND_URL)) {
  ALLOWED_ORIGINS.push(process.env.FRONTEND_URL);
}

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const allowed = ALLOWED_ORIGINS.some((pattern) =>
        typeof pattern === "string" ? pattern === origin : pattern.test(origin)
      );

      if (allowed) {
        callback(null, true);
      } else {
        callback(new Error(`CORS: origin '${origin}' is not allowed`));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json({ limit: "25kb" }));
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  message: { error: "Too many requests. Please try again later." },
});
app.use("/api/", limiter);

app.use("/api/contact", contactRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/careers", careersRouter);

app.get("/api/health", (req, res) => {
  const hasSmtp = Boolean(
    String(process.env.SMTP_USER || "").trim() && String(process.env.SMTP_PASS || "").trim()
  );
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "I-TECH Digitals API",
    build: "email-only-v2",
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "local",
    email: hasSmtp || Boolean(process.env.BREVO_API_KEY) ? "configured" : "missing",
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || "Internal server error" });
});

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
  console.log("📦 Backend build: email-only-v2 (no MongoDB, no file storage)");
});

module.exports = app;
