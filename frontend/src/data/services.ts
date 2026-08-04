import { mediaUrl } from "@/lib/supabase";

export interface ServiceCard {
  title: string;
  description: string;
  slug: string;
}

export interface ServiceDetail extends ServiceCard {
  num: string;
  color: string;
  image: string;
  video?: string;
  features: string[];
}

export const serviceCards: ServiceCard[] = [
  {
    title: "Web & App Development",
    description: "Custom websites, mobile apps, and e-commerce platforms built for performance and scale.",
    slug: "web-app-development",
  },
  {
    title: "Social Media Account Management",
    description: "Strategy, content creation, posting, and community growth across your social channels.",
    slug: "social-media-account-management",
  },
  {
    title: "Photography & Videography",
    description: "Professional photo and video production for brands, products, events, and campaigns.",
    slug: "photography-videography",
  },
  {
    title: "3D Design",
    description: "High-quality 3D modeling, rendering, and visual assets that bring your concepts to life.",
    slug: "3d-design",
  },
  {
    title: "Animation",
    description: "Engaging motion graphics and animated content crafted for campaigns, products, and brand stories.",
    slug: "animation",
  },
  {
    title: "Illustration",
    description: "Creative custom illustrations for brands, campaigns, packaging, and visual storytelling.",
    slug: "illustration",
  },
  {
    title: "Interior and Architecture Design",
    description: "Functional, beautiful spaces for offices, retail, and commercial environments.",
    slug: "interior-design",
  },
  {
    title: "Digital Marketing",
    description: "SEO and paid media campaigns that grow visibility, traffic, and qualified leads.",
    slug: "digital-marketing",
  },
];

export const serviceFormOptions = [...serviceCards.map((s) => s.title), "Other"];

const rawServiceDetails: ServiceDetail[] = [
  {
    num: "01",
    title: "Web & App Development",
    slug: "web-app-development",
    color: "#6c6bb0",
    image: "/images/portfolio/weband app.png",
    description:
      "We craft high-performance websites and mobile applications tailored to your business goals. From landing pages to complex enterprise platforms, we deliver scalable solutions using modern technologies.",
    features: [
      "Custom Website Design & Development",
      "Mobile App Development (iOS & Android)",
      "E-Commerce Platforms",
      "CMS Integration",
      "API Development & Integration",
      "Performance Optimization",
    ],
  },
  {
    num: "02",
    title: "Social Media Account Management",
    slug: "social-media-account-management",
    color: "#5d5ca3",
    image: "/images/portfolio/Socail media.png",
    description:
      "We manage your brand's social presence end to end — content planning, creative design, publishing, engagement, and reporting so your accounts stay active and on-brand.",
    features: [
      "Content Strategy & Calendars",
      "Post Design & Copywriting",
      "Account Setup & Optimization",
      "Community Management",
      "Analytics & Monthly Reports",
      "Influencer & Collaboration Support",
    ],
  },
  {
    num: "03",
    title: "Photography & Videography",
    slug: "photography-videography",
    color: "#6c6bb0",
    image: "/images/portfolio/photograpy.png",
    description:
      "Our visual team captures your story through professional photography and cinematic video — from product shoots and events to full brand campaigns.",
    features: [
      "Product & Commercial Photography",
      "Brand & Corporate Video",
      "Event Coverage",
      "Social Media Reels & Shorts",
      "Drone & Aerial Footage",
      "Post-Production & Editing",
    ],
  },
  {
    num: "04",
    title: "3D Design",
    slug: "3d-design",
    color: "#5d5ca3",
    image: "/images/portfolio/3ddesign.png",
    description:
      "From product renders to environment visualizations, we create high-quality 3D assets that elevate your presentations, campaigns, and digital experiences.",
    features: [
      "3D Modeling & Rendering",
      "Product Visualization",
      "3D Environment Design",
      "Lighting & Material Setup",
      "Concept-to-Render Workflow",
      "AR-Ready Assets",
      "3D Asset Optimization",
    ],
  },
  {
    num: "05",
    title: "Animation",
    slug: "animation",
    color: "#5d5ca3",
    image: "/images/portfolio/",
    video: "/images/portfolio/video/KDIPA.mp4",
    description:
      "We produce motion-first content that helps brands communicate clearly and capture attention across digital platforms.",
    features: [
      "2D & 3D Animation",
      "Motion Graphics",
      "Explainer Videos",
      "Logo & Brand Animations",
      "Social Media Animated Content",
      "Storyboarding & Timing",
    ],
  },
  {
    num: "06",
    title: "Illustration",
    slug: "illustration",
    color: "#6c6bb0",
    image: "/images/portfolio/Story Book Illustrations.png",
    description:
      "We create hand-crafted and digital illustrations tailored to your brand, products, and campaigns — from character art to editorial and packaging visuals.",
    features: [
      "Brand & Mascot Illustration",
      "Product & Packaging Illustration",
      "Editorial & Storybook Art",
      "Social Media Illustration Sets",
      "Campaign Visual Concepts",
      "Custom Icon & Asset Packs",
    ],
  },
  {
    num: "07",
    title: "Interior and Architecture Design",
    slug: "interior-design",
    color: "#6c6bb0",
    image: "/images/portfolio/Interior.png",
    description:
      "We design inspiring interiors that reflect your brand — balancing aesthetics, flow, and practicality for offices, retail, and commercial spaces.",
    features: [
      "Commercial & Office Design",
      "Retail & Showroom Layouts",
      "3D Visualization & Rendering",
      "Space Planning",
      "Material & Furniture Selection",
      "Project Coordination",
    ],
  },
  {
    num: "08",
    title: "Digital Marketing",
    slug: "digital-marketing",
    color: "#5d5ca3",
    image: "/images/portfolio/Seo.png",
    description:
      "We combine technical SEO with paid media strategy to improve rankings, increase quality traffic, and deliver measurable lead growth across search and social platforms.",
    features: [
      "Technical SEO Audits",
      "On-Page Optimization",
      "Keyword Research & Strategy",
      "Local SEO",
      "Content & Blog SEO",
      "Analytics & Ranking Reports",
      "Google Ads (Search & Display)",
      "Meta & Instagram Ads",
      "Campaign Strategy & Setup",
      "Audience & Keyword Targeting",
      "A/B Testing & Optimization",
      "Conversion Tracking & Reporting",
    ],
  },
];

export const serviceDetails: ServiceDetail[] = rawServiceDetails.map((service) => ({
  ...service,
  image: mediaUrl(service.image),
  video: service.video ? mediaUrl(service.video) : undefined,
}));
