"use client";

import Link from "next/link";
import { useState } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import PortfolioMedia from "@/components/PortfolioMedia";
import { serviceDetails } from "@/data/services";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { portfolioProjects } from "@/data/portfolio";

function CapabilityIcon({ icon, color }: { icon: string; color: string }) {
  const props = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "🌐":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "📱":
    case "📲":
      return (
        <svg {...props}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
        </svg>
      );
    case "🛒":
    case "🛍️":
      return (
        <svg {...props}>
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    case "⚙️":
    case "🔧":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "🔌":
      return (
        <svg {...props}>
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
          <line x1="12" y1="2" x2="12" y2="12" />
        </svg>
      );
    case "🚀":
      return (
        <svg {...props}>
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L13 10 9 6 4.5 16.5z" />
          <path d="M12 5l9-3-3 9-4-1-2-5z" />
          <path d="M9 15l3 3" />
        </svg>
      );
    case "📅":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "🎨":
      return (
        <svg {...props}>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19" />
          <circle cx="7.5" cy="10.5" r="1.5" fill={color} />
          <circle cx="11.5" cy="7.5" r="1.5" fill={color} />
          <circle cx="16.5" cy="9.5" r="1.5" fill={color} />
        </svg>
      );
    case "💬":
      return (
        <svg {...props}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "🤝":
      return (
        <svg {...props}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "📸":
    case "🎥":
      return (
        <svg {...props}>
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case "🎬":
    case "🎞️":
      return (
        <svg {...props}>
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      );
    case "🎉":
    case "✨":
      return (
        <svg {...props}>
          <path d="M12 3v1M12 20v1M4.22 4.22l.7.7M18.36 18.36l.7.7M1 12h1M22 12h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7" />
        </svg>
      );
    case "🚁":
      return (
        <svg {...props}>
          <path d="M21 16V8a2 2 0 0 0-2-2h-5L9 3H4v3H2a1 1 0 0 0 0 2h2v4H2a1 1 0 0 0 0 2h2v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2z" />
          <line x1="12" y1="6" x2="12" y2="16" />
          <line x1="3" y1="20" x2="21" y2="20" />
        </svg>
      );
    case "✂️":
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "🗿":
    case "🔷":
      return (
        <svg {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "📦":
      return (
        <svg {...props}>
          <polyline points="21 8 21 21 3 21 3 8" />
          <rect x="1" y="3" width="22" height="5" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      );
    case "🏙️":
    case "🏢":
      return (
        <svg {...props}>
          <rect x="2" y="10" width="10" height="12" />
          <rect x="12" y="2" width="10" height="20" />
        </svg>
      );
    case "💡":
    case "🪵":
      return (
        <svg {...props}>
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <line x1="9" y1="18" x2="15" y2="18" />
          <line x1="10" y1="22" x2="14" y2="22" />
        </svg>
      );
    case "🔄":
      return (
        <svg {...props}>
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
      );
    case "📝":
    case "📐":
    case "🗂️":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case "🔤":
      return (
        <svg {...props}>
          <polyline points="4 7 4 4 20 4 20 7" />
          <line x1="9" y1="20" x2="15" y2="20" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      );
    case "🔍":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "🎯":
    case "📍":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>
      );
  }
}

/* ─── Slug ↔ index map ───────────────────────────────────────────── */
const SERVICE_SLUGS: Record<string, number> = {
  "web-app-development": 0,
  "social-media-account-management": 1,
  "photography-videography": 2,
  "3d-design": 3,
  animation: 4,
  illustration: 5,
  "interior-design": 6,
  "digital-marketing": 7,
};

const PORTFOLIO_CAT_MAPPING: Record<string, string> = {
  "web-app-development": "Web & App Development",
  "social-media-account-management": "Social Media Account Manage",
  "photography-videography": "Photography & Videography",
  "3d-design": "3D Design",
  animation: "Animation",
  illustration: "Illustration",
  "interior-design": "Interior and Architecture Design",
  "digital-marketing": "Digital Marketing",
};



function getSlugForIndex(idx: number) {
  return Object.keys(SERVICE_SLUGS).find((k) => SERVICE_SLUGS[k] === idx) ?? "";
}

/* ─── Rich per-service content ───────────────────────────────────── */
interface SvcData {
  heroHeadline: string;
  heroHighlight: string;
  heroSub: string;
  trustBadge?: string;
  processTitle: string;
  processSteps: { num: string; title: string; desc: string }[];
  featureBand: { headline: string; sub: string; points: string[] };
  capabilitiesTitle: string;
  capabilities: { icon: string; title: string; desc: string }[];
  portfolioTitle: string;
  faqs: { q: string; a: string }[];
  ctaHeadline: string;
  ctaSub: string;
}

const SVC: Record<string, SvcData> = {
  "web-app-development": {
    heroHeadline: "Websites & Apps That",
    heroHighlight: "Actually Work For You",
    heroSub: "Custom-built, lightning-fast digital products — from landing pages to enterprise platforms — designed to convert visitors into customers.",
    trustBadge: "Trusted by 80+ businesses across Kuwait & Pakistan",
    processTitle: "Our Development Process",
    processSteps: [
      { num: "01", title: "Discovery", desc: "Goals, audience & architecture mapped out." },
      { num: "02", title: "Design", desc: "Wireframes & prototypes approved before code." },
      { num: "03", title: "Development", desc: "Clean, scalable code with modern frameworks." },
      { num: "04", title: "QA & Testing", desc: "Cross-device, performance & security testing." },
      { num: "05", title: "Launch", desc: "Zero-downtime deployment & post-launch support." },
    ],
    featureBand: {
      headline: "We Don't Just Build Websites.",
      sub: "We Build Digital Experiences That Generate Revenue",
      points: [
        "SEO-optimised from the ground up",
        "Mobile-first responsive design",
        "Integrated analytics & conversion tracking",
        "Scalable architecture that grows with you",
      ],
    },
    capabilitiesTitle: "What We Build For You",
    capabilities: [
      { icon: "🌐", title: "Custom Websites", desc: "Pixel-perfect, brand-aligned websites built for speed and conversions." },
      { icon: "📱", title: "Mobile Apps", desc: "iOS & Android apps with native performance and beautiful UX." },
      { icon: "🛒", title: "E-Commerce Stores", desc: "Full-featured online stores with seamless checkout and payments." },
      { icon: "⚙️", title: "CMS Integration", desc: "WordPress, Sanity, or Contentful — update content without touching code." },
      { icon: "🔌", title: "API & Integrations", desc: "Connect your systems with secure, robust REST or GraphQL APIs." },
      { icon: "🚀", title: "Performance Optimization", desc: "Core Web Vitals tuning, CDN, caching & Lighthouse audits." },
    ],
    portfolioTitle: "Projects We've Delivered",
    faqs: [
      { q: "How long does a website project take?", a: "A standard website takes 3–6 weeks. Complex web apps or e-commerce platforms may take 8–16 weeks depending on scope." },
      { q: "Do you work with existing designs or start from scratch?", a: "Both! We can build from your Figma files or take your project from zero to launch with our in-house design team." },
      { q: "Will my website work on mobile?", a: "Absolutely — every project we ship is fully responsive and tested across iOS, Android, and all modern browsers." },
      { q: "Can you integrate third-party tools?", a: "Yes. We regularly integrate Stripe, HubSpot, Salesforce, Supabase, Firebase, and many other platforms." },
      { q: "Do you offer hosting?", a: "Yes. We set up and manage cloud hosting on Vercel, AWS, or your preferred provider." },
    ],
    ctaHeadline: "Ready to Build Something Exceptional?",
    ctaSub: "Let's talk about your project. We'll scope it, plan it, and deliver it — on time and on budget.",
  },

  "social-media-account-management": {
    heroHeadline: "Social Media That",
    heroHighlight: "Actually Grows Your Brand",
    heroSub: "End-to-end social media management — content creation, posting, community management, and analytics — so you focus on your business.",
    trustBadge: "Managing 50+ brand accounts across the GCC & Pakistan",
    processTitle: "Our Social Media Process",
    processSteps: [
      { num: "01", title: "Audit", desc: "Review your current presence & competitors." },
      { num: "02", title: "Strategy", desc: "Platform-specific content plan & calendar." },
      { num: "03", title: "Creation", desc: "Designs, captions & reels produced in-house." },
      { num: "04", title: "Publish", desc: "Scheduled posts at optimal engagement times." },
      { num: "05", title: "Report", desc: "Monthly KPI dashboard & growth insights." },
    ],
    featureBand: {
      headline: "Stop Posting. Start Growing.",
      sub: "We Turn Followers Into Customers With Data-Backed Content",
      points: [
        "Content calendars approved 2 weeks ahead",
        "Platform-native content (not one-size-fits-all)",
        "Community management included",
        "Consistent brand voice across every post",
      ],
    },
    capabilitiesTitle: "What We Manage For You",
    capabilities: [
      { icon: "📅", title: "Content Strategy", desc: "Monthly content plans aligned to your business goals and seasonal trends." },
      { icon: "🎨", title: "Post Design & Copy", desc: "Eye-catching graphics and compelling captions crafted for each platform." },
      { icon: "🔧", title: "Account Optimization", desc: "Bio, highlights, link-in-bio, and profile branding across all platforms." },
      { icon: "💬", title: "Community Management", desc: "Replies to comments and DMs — keeping your audience engaged." },
      { icon: "📊", title: "Monthly Analytics", desc: "Clear KPI dashboards: reach, impressions, engagement, follower growth." },
      { icon: "🤝", title: "Influencer Coordination", desc: "Identify and manage creator partnerships to amplify your brand." },
    ],
    portfolioTitle: "Campaigns We've Grown",
    faqs: [
      { q: "How many posts per month do you create?", a: "Packages range from 12 to 30+ posts per month. We also include Stories and Reels in Growth plans." },
      { q: "Which platforms do you manage?", a: "Instagram, Facebook, TikTok, LinkedIn, Twitter/X, Pinterest, and YouTube Shorts." },
      { q: "Can I approve content before it goes live?", a: "Yes — every content calendar is shared for your approval 1–2 weeks in advance via a shared workspace." },
      { q: "Do you run paid ads as well?", a: "We offer paid social management as an add-on. Our Digital Marketing team handles ad campaigns and reporting." },
      { q: "How quickly will I see growth?", a: "You'll see improved consistency and engagement within 30 days. Significant follower growth typically takes 3–6 months." },
    ],
    ctaHeadline: "Ready to Dominate Your Social Channels?",
    ctaSub: "Let's build a social media presence that generates real business results — not just vanity metrics.",
  },

  "photography-videography": {
    heroHeadline: "Visual Content That",
    heroHighlight: "Stops the Scroll",
    heroSub: "Professional photography and cinematic video production for brands, products, and campaigns — capturing every moment with precision.",
    trustBadge: "200+ shoots completed across Kuwait & Pakistan",
    processTitle: "Our Production Process",
    processSteps: [
      { num: "01", title: "Brief", desc: "Creative direction & mood board aligned." },
      { num: "02", title: "Pre-Production", desc: "Shot lists, locations & talent coordinated." },
      { num: "03", title: "Shoot Day", desc: "Professional crew with studio-grade equipment." },
      { num: "04", title: "Post-Production", desc: "Editing, colour grading & sound design." },
      { num: "05", title: "Delivery", desc: "All formats for every platform — fast turnaround." },
    ],
    featureBand: {
      headline: "Great Visuals Don't Just Look Good.",
      sub: "They Drive Engagement, Trust & Sales",
      points: [
        "Full in-house crew — no subcontracting",
        "Platform-optimised outputs (16:9, 9:16, 1:1)",
        "Licensed drone operators for aerial shots",
        "48-hour standard post-production turnaround",
      ],
    },
    capabilitiesTitle: "What We Shoot For You",
    capabilities: [
      { icon: "📸", title: "Product Photography", desc: "Studio-quality shots that showcase your products with professional lighting." },
      { icon: "🎬", title: "Brand & Corporate Video", desc: "Compelling brand films that communicate your story and values." },
      { icon: "🎉", title: "Event Coverage", desc: "Comprehensive event documentation — stills and video of every key moment." },
      { icon: "📲", title: "Reels & Shorts", desc: "Short-form vertical content for Instagram, TikTok, and YouTube Shorts." },
      { icon: "🚁", title: "Drone & Aerial", desc: "Stunning aerial perspectives with licensed drone operators." },
      { icon: "✂️", title: "Post-Production", desc: "Colour grading, motion graphics, sound design & subtitling." },
    ],
    portfolioTitle: "Productions We're Proud Of",
    faqs: [
      { q: "How far in advance should I book?", a: "We recommend booking at least 2 weeks ahead for shoots and 4+ weeks for large productions." },
      { q: "Do you provide models or talent?", a: "Yes — we have a network of models, actors, and presenters we can source for your production." },
      { q: "What's included in post-production?", a: "Colour correction, audio mixing, basic motion graphics, format exports, and up to 2 revision rounds." },
      { q: "Do you travel for shoots?", a: "Absolutely. We operate across Kuwait and Pakistan, and can travel regionally for the right project." },
      { q: "Can I use the content commercially?", a: "Yes — all deliverables come with full commercial licensing." },
    ],
    ctaHeadline: "Ready to Create Content That Converts?",
    ctaSub: "Let's plan your shoot. Our team will handle everything — from brief to delivery.",
  },

  "3d-design": {
    heroHeadline: "3D Visuals So Real,",
    heroHighlight: "You'll Question Reality",
    heroSub: "Photorealistic 3D modeling, rendering, and visualization — turning your concepts into stunning, market-ready assets before they're physically built.",
    trustBadge: "150+ 3D projects delivered for brands worldwide",
    processTitle: "Our 3D Production Pipeline",
    processSteps: [
      { num: "01", title: "Concept", desc: "References, specs & style direction gathered." },
      { num: "02", title: "Modeling", desc: "Precision 3D geometry built with clean topology." },
      { num: "03", title: "Materials", desc: "PBR textures & HDR lighting applied." },
      { num: "04", title: "Render", desc: "High-resolution render with post-processing." },
      { num: "05", title: "Delivery", desc: "All formats: PNG, TIFF, MP4, FBX, GLTF." },
    ],
    featureBand: {
      headline: "See It Before You Build It.",
      sub: "Photorealistic 3D Renders That Replace the Need for Physical Prototypes",
      points: [
        "Up to 8K render resolution",
        "Product, architectural & concept visualization",
        "AR-ready asset export (GLTF/USDZ)",
        "Full animation capability for product reveals",
      ],
    },
    capabilitiesTitle: "What We Create For You",
    capabilities: [
      { icon: "🗿", title: "3D Modeling", desc: "Detailed, production-ready 3D models for any industry or use case." },
      { icon: "📦", title: "Product Visualization", desc: "Photorealistic product renders for e-commerce, marketing & packaging." },
      { icon: "🏙️", title: "Environment Design", desc: "Immersive 3D environments and architectural visualizations." },
      { icon: "💡", title: "Lighting & Materials", desc: "Advanced PBR shading and HDR lighting for cinematic results." },
      { icon: "🔄", title: "Concept to Render", desc: "From sketches or blueprints — we handle the full pipeline." },
      { icon: "📱", title: "AR-Ready Assets", desc: "Optimised 3D models in GLTF/USDZ format for AR experiences." },
    ],
    portfolioTitle: "3D Work We're Proud Of",
    faqs: [
      { q: "What software do you use?", a: "We work in Blender, Cinema 4D, and 3ds Max with V-Ray and Cycles rendering engines." },
      { q: "Can you model from a physical product?", a: "Yes — we work from photos, technical drawings, or physical samples to create accurate 3D models." },
      { q: "How long does a 3D project take?", a: "Simple product renders take 3–5 days. Complex environments or animations may take 2–4 weeks." },
      { q: "Do you do 3D animation as well?", a: "Yes — our Animation team works alongside 3D to deliver fully animated product reveals and explainers." },
      { q: "What file formats do you deliver?", a: "PNG, TIFF, EXR for stills; MP4/MOV for animation; FBX, OBJ, GLTF for 3D files." },
    ],
    ctaHeadline: "Ready to See Your Vision in 3D?",
    ctaSub: "Share your concept with us and we'll bring it to life with photorealistic precision.",
  },

  animation: {
    heroHeadline: "Motion Content That",
    heroHighlight: "Captures & Converts",
    heroSub: "2D/3D animation, motion graphics, and explainer videos — crafted to communicate clearly and engage your audience from the first frame.",
    trustBadge: "100+ animations delivered for brands globally",
    processTitle: "Our Animation Workflow",
    processSteps: [
      { num: "01", title: "Script", desc: "Story & messaging written and approved." },
      { num: "02", title: "Storyboard", desc: "Every scene mapped before animation begins." },
      { num: "03", title: "Design", desc: "Characters, environments & style finalized." },
      { num: "04", title: "Animation", desc: "Frame-by-frame motion with perfect timing." },
      { num: "05", title: "Sound & Delivery", desc: "VO, music, SFX mixed & exported in all formats." },
    ],
    featureBand: {
      headline: "Motion Is The New Static.",
      sub: "Animated Content Gets 3× More Engagement Than Still Images",
      points: [
        "Script writing included — brief to final copy",
        "2D vector, 3D, and mixed-media styles",
        "In-house voiceover & sound design",
        "Delivered in MP4, MOV, GIF, and WebM",
      ],
    },
    capabilitiesTitle: "What We Animate For You",
    capabilities: [
      { icon: "🎞️", title: "2D & 3D Animation", desc: "Fluid character and object animation in your brand's visual style." },
      { icon: "✨", title: "Motion Graphics", desc: "Dynamic typography and data visualizations for explainers and social." },
      { icon: "💡", title: "Explainer Videos", desc: "60–90 second animations that simplify complex products or services." },
      { icon: "🔤", title: "Logo Animations", desc: "Animated logo idents for intros, outs, and digital presentations." },
      { icon: "📲", title: "Social Animations", desc: "Short-form content optimised for Reels, TikTok, and YouTube Shorts." },
      { icon: "📝", title: "Storyboarding", desc: "Detailed boards before animation starts — no surprises at delivery." },
    ],
    portfolioTitle: "Animations We've Created",
    faqs: [
      { q: "How long does an animated video take?", a: "A 30-second piece takes 2–3 weeks. A 60–90 second explainer typically takes 4–6 weeks." },
      { q: "Do you write the script?", a: "Yes — script writing is included. You provide a brief and we handle the rest, with your sign-off at each stage." },
      { q: "Can you match an existing animation style?", a: "Absolutely. Share examples and our team will match or adapt the visual style to your brand." },
      { q: "How many revision rounds are included?", a: "We include 2 rounds of revisions per phase — storyboard, animation, and final delivery." },
      { q: "Do you provide source files?", a: "Source files (After Effects, Blender) can be included at an additional cost for full ownership." },
    ],
    ctaHeadline: "Ready to Bring Your Brand to Life?",
    ctaSub: "Share your brief and we'll create motion content that captures attention and drives action.",
  },

  illustration: {
    heroHeadline: "Illustrations That Make",
    heroHighlight: "Your Brand Unforgettable",
    heroSub: "Hand-crafted, 100% custom illustrations — from brand mascots and editorial art to social media sets and packaging visuals.",
    trustBadge: "300+ illustrations created for brands globally",
    processTitle: "Our Illustration Process",
    processSteps: [
      { num: "01", title: "Brief", desc: "Brand, audience & style direction explored." },
      { num: "02", title: "Sketches", desc: "Pencil concepts presented for direction." },
      { num: "03", title: "Digital Art", desc: "Vector or raster artwork developed." },
      { num: "04", title: "Refinement", desc: "Colour, composition & detail perfected." },
      { num: "05", title: "Delivery", desc: "AI, SVG, PNG, PDF — all formats included." },
    ],
    featureBand: {
      headline: "Stock Images Are Forgettable.",
      sub: "Custom Illustrations Make Your Brand Instantly Recognisable",
      points: [
        "100% original — never stock or AI-generated",
        "Full commercial rights with every project",
        "Print-ready and web-optimised formats",
        "20+ illustration styles from flat to editorial",
      ],
    },
    capabilitiesTitle: "What We Illustrate For You",
    capabilities: [
      { icon: "🎭", title: "Brand Mascots", desc: "Custom characters that give your brand a unique, memorable visual identity." },
      { icon: "📦", title: "Packaging Illustration", desc: "Illustrated packaging that stands out on shelves and drives purchase intent." },
      { icon: "📖", title: "Editorial & Storybook", desc: "Expressive editorial and children's book art with storytelling at the core." },
      { icon: "📲", title: "Social Media Sets", desc: "Cohesive illustration sets for feeds, Stories, and marketing campaigns." },
      { icon: "💡", title: "Campaign Concepts", desc: "Concept illustrations for marketing, pitch decks, and brand presentations." },
      { icon: "🔷", title: "Icon & Asset Packs", desc: "Bespoke icon libraries and UI illustration sets in your brand's style." },
    ],
    portfolioTitle: "Illustrations We've Created",
    faqs: [
      { q: "What illustration styles do you offer?", a: "Flat vector, isometric, character illustration, editorial, watercolour-digital, and geometric styles, among others." },
      { q: "How long does a custom illustration take?", a: "A single illustration takes 3–5 days. Full brand illustration systems may take 2–4 weeks." },
      { q: "Can I use the illustrations commercially?", a: "Yes — all illustrations come with full commercial licensing. The artwork belongs to you." },
      { q: "Do you create animated versions of illustrations?", a: "Yes! Our Animation team can bring your illustrations to life with motion." },
      { q: "Can you work with our existing brand guidelines?", a: "Absolutely — we match your brand's colour palette, typography, and overall aesthetic." },
    ],
    ctaHeadline: "Ready to Give Your Brand a Unique Visual Voice?",
    ctaSub: "Share your brief and we'll create custom illustrations that make your brand unforgettable.",
  },

  "interior-design": {
    heroHeadline: "Spaces That Reflect",
    heroHighlight: "Your Brand's Identity",
    heroSub: "Commercial interiors designed for impact — offices, retail spaces, and showrooms that balance aesthetics, flow, and functionality.",
    trustBadge: "80+ spaces transformed across Kuwait & Pakistan",
    processTitle: "Our Design Process",
    processSteps: [
      { num: "01", title: "Discovery", desc: "Brand, workflow & space requirements understood." },
      { num: "02", title: "Concept", desc: "Mood boards & initial layouts presented." },
      { num: "03", title: "3D Viz", desc: "Photorealistic renders for full approval." },
      { num: "04", title: "Drawings", desc: "Technical plans, specs & material selections." },
      { num: "05", title: "Coordinate", desc: "Contractor & supplier management to handover." },
    ],
    featureBand: {
      headline: "See Your Space Before It's Built.",
      sub: "Approve Every Detail in 3D Before a Single Wall Is Touched",
      points: [
        "Photorealistic 3D renders included in every project",
        "Full contractor coordination & site management",
        "Brand-aligned design — not generic 'nice' spaces",
        "Itemised budget planning at every stage",
      ],
    },
    capabilitiesTitle: "What We Design For You",
    capabilities: [
      { icon: "🏢", title: "Office & Commercial", desc: "Productive, inspiring workspace environments that reflect your culture." },
      { icon: "🛍️", title: "Retail & Showroom", desc: "Customer journey-focused retail layouts that drive engagement and sales." },
      { icon: "🖥️", title: "3D Visualization", desc: "Photorealistic renders of your space before any construction begins." },
      { icon: "📐", title: "Space Planning", desc: "Optimised layouts maximising flow, usability, and occupancy." },
      { icon: "🪵", title: "Material Selection", desc: "Curated material palettes and furniture sourcing for every budget." },
      { icon: "🗂️", title: "Project Coordination", desc: "End-to-end management from design sign-off to final handover." },
    ],
    portfolioTitle: "Spaces We've Designed",
    faqs: [
      { q: "Do you handle fit-outs as well as design?", a: "Yes — we coordinate with trusted contractors and manage the full fit-out process on your behalf." },
      { q: "Can I see the design in 3D before committing?", a: "Absolutely. Every project includes photorealistic 3D renders for full approval before any work begins." },
      { q: "How long does a typical interior project take?", a: "Design takes 4–6 weeks. Construction and fit-out timelines depend on scope and contractor availability." },
      { q: "Do you work with specific industries?", a: "We specialise in offices, co-working spaces, retail boutiques, showrooms, and F&B outlets." },
      { q: "Can you design remotely for international projects?", a: "Yes — we provide full design packages including technical drawings for international clients." },
    ],
    ctaHeadline: "Ready to Transform Your Space?",
    ctaSub: "Book a discovery call and we'll plan your transformation from concept to handover.",
  },

  "digital-marketing": {
    heroHeadline: "Digital Marketing That",
    heroHighlight: "Actually Drives Results",
    heroSub: "SEO, Google Ads, Meta Ads, and content strategy — all working together to increase visibility, traffic, and qualified leads for your business.",
    trustBadge: "Managing 5M+ monthly impressions for clients in Kuwait & Pakistan",
    processTitle: "Our Marketing Process",
    processSteps: [
      { num: "01", title: "Audit", desc: "Full SEO & paid media performance review." },
      { num: "02", title: "Strategy", desc: "Keyword, audience & platform plan built." },
      { num: "03", title: "Setup", desc: "Campaigns structured & tracking implemented." },
      { num: "04", title: "Launch", desc: "Campaigns go live — optimised from day one." },
      { num: "05", title: "Report", desc: "Monthly KPIs with clear ROI attribution." },
    ],
    featureBand: {
      headline: "We Turned $284 Into 241K Impressions.",
      sub: "Data-Driven Campaigns That Deliver Measurable Business Growth",
      points: [
        "Certified Google & Meta ads specialists",
        "Full-funnel: SEO + Paid + Content",
        "Weekly optimisation — not set-and-forget",
        "Transparent reporting — every dollar tracked",
      ],
    },
    capabilitiesTitle: "What We Do For You",
    capabilities: [
      { icon: "🔍", title: "Technical SEO", desc: "Audits covering crawlability, page speed, structured data & Core Web Vitals." },
      { icon: "📝", title: "On-Page Optimization", desc: "Titles, meta, headings, internal linking & content depth improvements." },
      { icon: "🎯", title: "Google Ads", desc: "Search, Display, Shopping & YouTube campaigns managed end-to-end." },
      { icon: "📲", title: "Meta Ads", desc: "Facebook, Instagram & WhatsApp ad campaigns optimised for your goals." },
      { icon: "📍", title: "Local SEO", desc: "Google Business Profile & local citations for geo-targeted visibility." },
      { icon: "📊", title: "Analytics & Reports", desc: "GA4, Search Console & ad dashboards — reported clearly every month." },
    ],
    portfolioTitle: "Campaigns We've Run",
    faqs: [
      { q: "How long until I see SEO results?", a: "SEO is a 3–6 month investment. You'll see improved rankings and traffic within that window, growing steadily over time." },
      { q: "What ad platforms do you manage?", a: "Google Search, Display, Shopping, YouTube, Meta (Facebook & Instagram), TikTok, and LinkedIn Ads." },
      { q: "Do you create the ad creatives?", a: "Yes — copywriting, graphic design, and video ads are handled in-house by our creative team." },
      { q: "What's the minimum ad spend?", a: "We recommend $500–$1,000/month ad spend minimum to gather meaningful optimisation data." },
      { q: "How do you measure success?", a: "We agree on KPIs at the start — leads, purchases, ROAS, impressions — and report against them every month." },
    ],
    ctaHeadline: "Ready to Grow Your Business Online?",
    ctaSub: "Let's build a data-driven digital marketing strategy that generates real, measurable results.",
  },
};

/* ─── Template Props ──────────────────────────────────────────────── */
interface ServiceDetailTemplateProps {
  slug: string;
}

/* ─── Template Component ──────────────────────────────────────────── */
export default function ServiceDetailTemplate({ slug }: ServiceDetailTemplateProps) {
  const { t, isRTL } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const serviceIndex = SERVICE_SLUGS[slug];
  const service = serviceIndex !== undefined ? serviceDetails[serviceIndex] : null;
  const localizedService = serviceIndex !== undefined ? t.serviceDetails[serviceIndex] : null;
  const serviceTitle = serviceIndex !== undefined ? t.services.cards[serviceIndex]?.title : null;
  const svc = SVC[slug];

  const C = service?.color ?? "#5350a2";
  const categoryName = PORTFOLIO_CAT_MAPPING[slug] || "";
  const activeProjects = portfolioProjects.filter((p) => p.cat === categoryName);

  if (!service || !localizedService || !svc) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <h1 style={{ color: "var(--text-dark)" }}>Service not found</h1>
        <Link href="/services" className="btn-primary">Back to Services</Link>
      </div>
    );
  }

  const otherServices = serviceDetails.filter((_, i) => i !== serviceIndex).slice(0, 3);
  const imageFit = (slug === "web-app-development" || slug === "digital-marketing") ? "contain" : "cover";

  const sectionPad: React.CSSProperties = { padding: "90px 0" };
  const center: React.CSSProperties = { textAlign: "center" };

  return (
    <div style={{ direction: isRTL ? "rtl" : "ltr", fontFamily: "'Inter', sans-serif" }}>

      {/* ════════════ 1. HERO ════════════ */}
      <section style={{ background: "#ffffff", padding: "150px 0 60px", borderBottom: "1px solid #f0f0f0" }}>
        <div className="container">
          <div className="slug-hero-grid">
            {/* LEFT */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h1 style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)", fontWeight: 800, color: "#111", lineHeight: 1.1, marginBottom: 24 }}>
                {svc.heroHeadline}{" "}
                <span style={{ color: C }}>{svc.heroHighlight}</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
                {svc.heroSub}
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                  background: C, color: "#fff", fontWeight: 700, fontSize: "0.97rem",
                  height: "50px", padding: "0 32px", borderRadius: 50, textDecoration: "none",
                  boxShadow: `0 8px 24px ${C}40`, transition: "all 0.3s ease",
                  boxSizing: "border-box", lineHeight: 1,
                }}>
                  Get a Free Quote
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="#portfolio" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                  background: "transparent", color: "#333", fontWeight: 700, fontSize: "0.97rem",
                  height: "50px", padding: "0 30px", borderRadius: 50, textDecoration: "none",
                  border: "2px solid #e0e0e0", transition: "all 0.3s ease",
                  boxSizing: "border-box", lineHeight: 1,
                }}>
                  See Our Work
                </Link>
              </div>
            </div>

            {/* RIGHT — Image card */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{
                borderRadius: 24, overflow: "hidden",
                width: "100%", maxWidth: 520,
              }}>
                {service.video ? (
                  <video src={service.video}
                    autoPlay muted loop playsInline preload="auto"
                    style={{ width: "100%", aspectRatio: "4/3", objectFit: imageFit, display: "block" }}
                  />
                ) : (
                  <OptimizedImage src={service.image} alt={serviceTitle ?? ""} width={760} height={570}
                    sizes="(max-width: 991px) 100vw, 520px"
                    style={{ width: "100%", aspectRatio: "4/3", objectFit: imageFit, display: "block" }}
                  />
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 2. PROCESS STRIP ════════════ */}
      <section style={{ background: "#f8f8f8", padding: "80px 0", borderBottom: "1px solid #ececec" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C, marginBottom: 10 }}>
              Our Process
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 800, color: "#111", margin: 0, lineHeight: 1.2 }}>
              {svc.processTitle}
            </h2>
          </div>
          <div className="slug-process-strip">
            {svc.processSteps.map((step) => (
              <div
                key={step.num}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "24px 20px",
                  border: "1.5px solid #e8e8e8",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${C}40`;
                  e.currentTarget.style.boxShadow = `0 12px 28px ${C}15`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e8e8e8";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.03)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: "1.4rem", fontWeight: 900, color: C, marginBottom: 8, letterSpacing: "-0.02em" }}>
                  {step.num}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111", marginBottom: 6 }}>
                  {step.title}
                </div>
                <div style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.5, flexGrow: 1 }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 3. FEATURE BAND ════════════ */}
      <section className="bg-brand-pattern" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="slug-feature-grid">
            <div>
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>
                {svc.featureBand.headline}
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#e0dffd", fontWeight: 700, marginBottom: 0, lineHeight: 1.4 }}>
                {svc.featureBand.sub}
              </p>
            </div>
            <div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: 16 }}>
                {svc.featureBand.points.map((point) => (
                  <li key={point} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{
                      width: 24, height: 24, borderRadius: "50%", background: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <svg width="11" height="11" fill="none" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" stroke={C} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)", fontWeight: 500 }}>{point}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#fff", color: C, fontWeight: 700, fontSize: "0.97rem",
                padding: "15px 32px", borderRadius: 50, textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 14px rgba(0,0, 0, 0.1)",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.background = "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.background = "#fff";
                }}
              >
                Start Your Project
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 4. CAPABILITIES ════════════ */}
      <section style={{ background: "#fff", ...sectionPad }}>
        <div className="container">
          <div style={{ ...center, marginBottom: 60 }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C, marginBottom: 10 }}>
              Capabilities
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "#111", marginBottom: 14 }}>
              {svc.capabilitiesTitle}
            </h2>
            <p style={{ fontSize: "1rem", color: "#666", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
              Everything you need, delivered from a single team — no fragmented handoffs, no excuses.
            </p>
          </div>
          <div className="slug-capabilities-grid">
            {svc.capabilities.map((cap, i) => (
              <div key={cap.title} style={{
                padding: "28px 24px", borderRadius: 18,
                border: "1.5px solid #f0f0f0",
                background: i % 2 === 0 ? "#fff" : "#5350a206",
                transition: "all 0.3s ease", cursor: "default",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#5350a240";
                  e.currentTarget.style.boxShadow = "0 12px 32px #5350a212";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#f0f0f0";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "#5350a212",
                  color: "#5350a2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <CapabilityIcon icon={cap.icon} color="#5350a2" />
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111", marginBottom: 10 }}>{cap.title}</h3>
                <p style={{ fontSize: "0.86rem", color: "#666", lineHeight: 1.75, margin: 0 }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 5. PORTFOLIO ════════════ */}
      <section id="portfolio" style={{ background: "#f8f8f8", ...sectionPad }}>
        <div className="container">
          <div style={{ ...center, marginBottom: 56 }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C, marginBottom: 10 }}>Portfolio</div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "#111", marginBottom: 14 }}>
              {svc.portfolioTitle}
            </h2>
            <p style={{ fontSize: "1rem", color: "#666", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}>
              A selection of real work we&apos;re proud of — delivered on time and beyond expectations.
            </p>
          </div>
          <div className="slug-portfolio-grid">
            {activeProjects.map((project) => {
              return (
                <div key={project.title} style={{
                  display: "block", borderRadius: 18, overflow: "hidden",
                  border: "1.5px solid #e8e8e8",
                  background: "#fff", transition: "all 0.3s ease",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = `0 16px 40px ${C}20`;
                    e.currentTarget.style.borderColor = `${C}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#e8e8e8";
                  }}
                >
                  <div style={{ aspectRatio: "4 / 3", minHeight: 260, background: `${C}06`, position: "relative", overflow: "hidden", borderBottom: "1px solid #e8e8e8" }}>
                    <PortfolioMedia
                      project={project}
                      width={520}
                      height={390}
                      sizes="(max-width: 768px) 100vw, 360px"
                      imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "18px 20px" }}>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111", marginBottom: 6 }}>{project.title}</div>
                    <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.5, margin: 0 }}>{project.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ 8. CONTACT FORM ════════════ */}
      <section style={{ background: "#fff", ...sectionPad }}>
        <div className="container">
          <div className="slug-contact-grid">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5350a2", marginBottom: 14 }}>
                Get In Touch
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "#111", marginBottom: 18, lineHeight: 1.2 }}>
                {svc.ctaHeadline}
              </h2>
              <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.8, marginBottom: 36 }}>
                {svc.ctaSub}
              </p>
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5350a2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  ),
                  title: "Fast Response",
                  desc: "We reply within 4 business hours."
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5350a2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  ),
                  title: "Free Consultation",
                  desc: "No obligation — just a real conversation about your goals."
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5350a2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                  title: "Kuwait & Pakistan",
                  desc: "Serving clients locally and worldwide."
                },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "flex-start" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, background: "#5350a212",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 2,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111", marginBottom: 2 }}>{item.title}</div>
                    <div style={{ fontSize: "0.83rem", color: "#777" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#f8f8f8", borderRadius: 24, padding: "40px 36px", border: "1.5px solid #ececec" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[
                  { key: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                  { key: "email", label: "Email Address", placeholder: "you@example.com", type: "email" },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#333", marginBottom: 6 }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      style={{
                        width: "100%", padding: "12px 16px", borderRadius: 12,
                        border: "1.5px solid #e0e0e0", fontSize: "0.9rem",
                        background: "#fff", color: "#111", outline: "none",
                        transition: "border-color 0.2s ease", boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#333", marginBottom: 6 }}>Phone Number</label>
                <input
                  type="tel" placeholder="+965 XXXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: 12,
                    border: "1.5px solid #e0e0e0", fontSize: "0.9rem",
                    background: "#fff", color: "#111", outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#333", marginBottom: 6 }}>Tell Us About Your Project</label>
                <textarea
                  placeholder="Describe what you're looking to achieve..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: 12,
                    border: "1.5px solid #e0e0e0", fontSize: "0.9rem",
                    background: "#fff", color: "#111", outline: "none",
                    resize: "vertical", fontFamily: "inherit", boxSizing: "border-box",
                  }}
                />
              </div>
              <Link href={`/contact?service=${encodeURIComponent(serviceTitle ?? "")}&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&message=${encodeURIComponent(formData.message)}`}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  background: "#5350a2", color: "#fff", fontWeight: 700, fontSize: "1rem",
                  padding: "16px 24px", borderRadius: 50, textDecoration: "none",
                  width: "100%", transition: "all 0.3s ease", boxSizing: "border-box",
                  boxShadow: "0 8px 20px rgba(83, 80, 162, 0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(83, 80, 162, 0.35)";
                  e.currentTarget.style.background = "#48468b";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(83, 80, 162, 0.25)";
                  e.currentTarget.style.background = "#5350a2";
                }}
              >
                Start Your Project
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p style={{ fontSize: "0.75rem", color: "#aaa", textAlign: "center", marginTop: 14 }}>
                🔒 Your information is safe. We never share your details.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* ════════════ 10. FAQ ACCORDION ════════════ */}
      <section style={{ background: "#f8f8f8", ...sectionPad, borderTop: "1px solid #ececec" }}>
        <div className="container">
          <div style={{ ...center, marginBottom: 56 }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C, marginBottom: 10 }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "#111", marginBottom: 14 }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: "1rem", color: "#666", maxWidth: 460, margin: "0 auto", lineHeight: 1.75 }}>
              Everything you need to know before getting started.
            </p>
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
            {svc.faqs.map((faq, i) => (
              <div key={i} style={{
                borderRadius: 16, background: "#fff",
                border: `1.5px solid ${openFaq === i ? `${C}30` : "#ececec"}`,
                overflow: "hidden", transition: "border-color 0.25s ease",
              }}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", background: "transparent", border: "none",
                    padding: "20px 24px", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 16, cursor: "pointer", textAlign: "left",
                  }}>
                  <span style={{ fontSize: "0.97rem", fontWeight: 700, color: "#111", lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{
                    width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                    background: openFaq === i ? C : "#f0f0f0",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.25s ease",
                  }}>
                    <svg width="14" height="14" fill="none" stroke={openFaq === i ? "#fff" : "#666"} strokeWidth="2.5" viewBox="0 0 24 24"
                      style={{ transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.3s ease" }}>
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", fontSize: "0.9rem", color: "#555", lineHeight: 1.78, animation: "portfolioFadeIn 0.3s ease" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 11. OTHER SERVICES ════════════ */}
      <section style={{ background: "#fff", padding: "72px 0" }}>
        <div className="container">
          <div style={{ ...center, marginBottom: 44 }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Explore More</div>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 800, color: "#111" }}>Other Services</h2>
          </div>
          <div className="other-services-grid">
            {otherServices.map((s) => {
              const idx = serviceDetails.indexOf(s);
              const targetSlug = getSlugForIndex(idx);
              return (
                <Link key={s.num} href={`/services/${targetSlug}`}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10,
                    padding: "26px 24px", borderRadius: 18, border: "2px solid #f0f0f0",
                    background: "#fff", textDecoration: "none", transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 16px 40px ${s.color}18`;
                    e.currentTarget.style.borderColor = `${s.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#f0f0f0";
                  }}
                >
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", color: s.color, textTransform: "uppercase" }}>{s.num}</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111" }}>{t.services.cards[idx]?.title}</span>
                  <span style={{ fontSize: "0.84rem", color: "#666", lineHeight: 1.65 }}>{t.services.cards[idx]?.description}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.82rem", fontWeight: 700, color: s.color, marginTop: "auto" }}>
                    Learn More
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
