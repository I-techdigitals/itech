import { mediaUrl } from "@/lib/supabase";

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Web & App Development",
  "Social Media Account Manage",
  "Photography & Videography",
  "3D Design",
  "Animation",
  "Illustration",
  "Interior Design",
  "Digital Marketing",
  "Branding",
] as const;

export type PortfolioCategoryFilter = (typeof PORTFOLIO_CATEGORIES)[number];
export type PortfolioServiceType = Exclude<PortfolioCategoryFilter, "All">;

export interface PortfolioProject {
  title: string;
  cat: PortfolioServiceType;
  desc: string;
  img: string;
  images?: string[];
  color: string;
  year: string;
}

function extractNicheKey(project: PortfolioProject) {
  const cleaned = project.title
    .replace(/\b(branding|social media|website|e-commerce|app|development|photography|illustration|campaign|collateral|cms|calendar|design|management|growth)\b/gi, "")
    .replace(/&/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  return cleaned || project.title.toLowerCase();
}

function projectYearValue(project: PortfolioProject) {
  const year = Number.parseInt(project.year, 10);
  return Number.isNaN(year) ? 0 : year;
}

const rawPortfolioProjects: PortfolioProject[] = [
  { title: "Afreya Kuwait Branding", cat: "Branding", desc: "Luxurious brand identity design, logo mark, and typography system for a perfume brand.", img: "/images/portfolio/Afreya Kuwait Branding.png", color: "#5d5ca3", year: "2023" },
  { title: "Afreya Product Illustration", cat: "Illustration", desc: "Creative 3D-style product visuals and motion-ready brand assets for premium fragrance campaigns.", img: "/images/portfolio/Afreya Product Illustration.png", color: "#6c6bb0", year: "2023" },
  { title: "Afreya Product Photography", cat: "Photography & Videography", desc: "Elegant, minimalist product photography campaign for the premium fragrance line.", img: "/images/portfolio/Afreya Scented Product Photography.png", color: "#5d5ca3", year: "2023" },
  { title: "Afreya Social Media Management", cat: "Social Media Account Manage", desc: "Curated content grids, copy design, and community management for the fragrance launch.", img: "/images/portfolio/Afreya Social Media Management.png", color: "#6c6bb0", year: "2024" },
  { title: "Afreya Website Development", cat: "Web & App Development", desc: "High-performance e-commerce storefront with custom checkout and localization support.", img: "/images/portfolio/Afreya Website Development.png", color: "#5d5ca3", year: "2023" },
  { title: "Alnouri Group Social Media", cat: "Social Media Account Manage", desc: "Social strategy, content creation, and monthly campaign planning for a leading Kuwait business group.", img: "/images/portfolio/Alnouri Group Social Media Management.png", color: "#6c6bb0", year: "2024" },
  { title: "Ambrose Abayas Illustration", cat: "Illustration", desc: "Artistic fashion illustrations and custom graphics for print and digital collections.", img: "/images/portfolio/Ambrose Abayas Illustration.png", color: "#5d5ca3", year: "2023" },
  { title: "Ambrose Abayas Photography", cat: "Photography & Videography", desc: "High-fashion editorial photoshoot showcasing seasonal designer abayas.", img: "/images/portfolio/Ambrose Abayas Photography.png", color: "#6c6bb0", year: "2023" },
  { title: "Ambrose Abayas Social Media", cat: "Social Media Account Manage", desc: "Aesthetic grids, story designs, and customer interactions for a premium fashion house.", img: "/images/portfolio/Ambrose Abayas Social Media Management.png", color: "#5d5ca3", year: "2024" },
  { title: "Ambrose Abayas E-Commerce", cat: "Web & App Development", desc: "A fast, fully responsive shop with advanced filtering, lookbook, and cart workflows.", img: "/images/portfolio/Ambrose Abayas Website Development.png", color: "#6c6bb0", year: "2023" },
  { title: "I-Tech Office Design", cat: "Interior Design", desc: "Interior concept and styling direction designed to create a practical, elegant, and brand-aligned office environment.", img: "/video/IMG_1416.mp4", color: "#5d5ca3", year: "2024" },
  {
    title: "Living Rooms Interior Design",
    cat: "Interior Design",
    desc: "Elegant living room concepts with refined seating plans, statement lighting, and warm residential detail.",
    img: "/images/portfolio/Living_Rooms/Classical-Living-Room-Crystal-Chandelier.jpg",
    images: [
      "/images/portfolio/Living_Rooms/Classical-Living-Room-Crystal-Chandelier.jpg",
      "/images/portfolio/Living_Rooms/Living-Room-Navy-Sofas-Fireplace.jpg",
    ],
    color: "#6c6bb0",
    year: "2024",
  },
  {
    title: "Dining Rooms Interior Design",
    cat: "Interior Design",
    desc: "Formal and modern dining room styling with balanced materials, lighting, and polished hospitality-ready layouts.",
    img: "/images/portfolio/Dining_Rooms/Formal-Dining-Room-Neoclassical.jpg",
    images: [
      "/images/portfolio/Dining_Rooms/Formal-Dining-Room-Neoclassical.jpg",
      "/images/portfolio/Dining_Rooms/Modern-Dining-Room-Marble-Stone-Wall.jpg",
    ],
    color: "#5d5ca3",
    year: "2024",
  },
  {
    title: "Commercial & Hospitality Spaces",
    cat: "Interior Design",
    desc: "Commercial cafe and restaurant concepts shaped around atmosphere, guest flow, and memorable brand experience.",
    img: "/images/portfolio/Commercial_Hospitality_Spaces/Industrial-Cafe-Coffee-Bar.jpg",
    images: [
      "/images/portfolio/Commercial_Hospitality_Spaces/Industrial-Cafe-Coffee-Bar.jpg",
      "/images/portfolio/Commercial_Hospitality_Spaces/Industrial-Restaurant-Station.jpg",
    ],
    color: "#6c6bb0",
    year: "2024",
  },
  {
    title: "Bedrooms Interior Design",
    cat: "Interior Design",
    desc: "Comfort-focused bedroom interiors with layered textures, sculptural details, and calm luxury finishes.",
    img: "/images/portfolio/Bedrooms/Modern-Luxury-Bedroom-Sculptural-Art.jpg",
    images: [
      "/images/portfolio/Bedrooms/Modern-Luxury-Bedroom-Sculptural-Art.jpg",
      "/images/portfolio/Bedrooms/Wood-Paneled-Bedroom-Sitting-Area.jpg",
    ],
    color: "#5d5ca3",
    year: "2024",
  },
  {
    title: "Bavaria Tower Interior Design",
    cat: "Interior Design",
    desc: "Modern interior planning and visual styling for a refined commercial tower experience with functional flow and premium finishes.",
    img: "/images/portfolio/Bavaria Tower/PHOTO-2024-11-05-23-28-44 2.jpg",
    images: [
      "/images/portfolio/Bavaria Tower/PHOTO-2024-11-05-23-28-44 2.jpg",
      "/images/portfolio/Bavaria Tower/PHOTO-2024-11-05-23-28-44.jpg",
      "/images/portfolio/Bavaria Tower/PHOTO-2024-11-09-05-29-33 3.jpg",
      "/images/portfolio/Bavaria Tower/PHOTO-2024-11-09-05-29-33.jpg",
      "/images/portfolio/Bavaria Tower/Render  (5).jpg",
    ],
    color: "#6c6bb0",
    year: "2024",
  },
  { title: "Bavaria Group Social Media", cat: "Social Media Account Manage", desc: "Corporate communications and social marketing strategy for Bavaria Group.", img: "/images/portfolio/Bavaria Group Social Media Management.png", color: "#5d5ca3", year: "2024" },
  { title: "Birthday Bliss Photography", cat: "Photography & Videography", desc: "Capturing candid family moments, joy, and custom details at a themed birthday celebration.", img: "/images/portfolio/Birthday Bliss Photography.png", color: "#6c6bb0", year: "2024" },
  { title: "Carly Vehicle Rental App", cat: "Web & App Development", desc: "End-to-end design and cross-platform mobile app development for a smart car-rental service.", img: "/images/portfolio/Carly Vehicle Rental App Development.png", color: "#5d5ca3", year: "2024" },
  { title: "Challenge Sports Academy", cat: "Social Media Account Manage", desc: "Dynamic sports action content, student highlights, and campaign management.", img: "/images/portfolio/Challenge Sports Academy Social Media Management.png", color: "#6c6bb0", year: "2024" },
  { title: "Cords CMS Development", cat: "Web & App Development", desc: "Custom-built headless content management system tailored for media publications.", img: "/images/portfolio/Cords CMS Development.png", color: "#5d5ca3", year: "2023" },
  { title: "Delisana Cookies Social Media", cat: "Social Media Account Manage", desc: "Appealing food styling posts, interactive reels, and community growth campaigns.", img: "/images/portfolio/Delisana Cookies Social Media Management.png", color: "#6c6bb0", year: "2024" },
  { title: "Duffle Bag 3D Showcase", cat: "3D Design", desc: "A polished 3D product showcase demonstrating realistic materials, lighting, and motion-focused presentation for a duffle bag concept.", img: "/images/portfolio/video/Duffle Bag.mp4", color: "#5d5ca3", year: "2024" },
  { title: "Snooze Sleeping Pod 3D Showcase", cat: "3D Design", desc: "Immersive 3D product presentation highlighting form, materials, and spatial experience for the Snooze sleeping pod concept.", img: "/images/portfolio/video/Snooze_Sleeping_Pod.mp4", color: "#6c6bb0", year: "2024" },
  { title: "KDIPA Animation Showcase", cat: "Animation", desc: "Dynamic animation showcase developed to communicate the KDIPA concept with smooth motion, clear storytelling, and brand-focused visual direction.", img: "/images/portfolio/video/KDIPA.mp4", color: "#5d5ca3", year: "2024" },
  { title: "Hajat Express Animation Showcase", cat: "Animation", desc: "Brand-focused animation sequence created for Hajat Express with clear messaging, energetic transitions, and campaign-ready motion storytelling.", img: "/images/portfolio/video/Hajat Express.mp4", color: "#6c6bb0", year: "2024" },
  { title: "Tagged App Animation Showcase", cat: "Animation", desc: "Smooth UI animation reel for the Tagged App, designed to highlight interactions, transitions, and user-focused motion behavior.", img: "/images/portfolio/video/Tagged App.MP4", color: "#5d5ca3", year: "2024" },
  { title: "Diana & Roma Illustration", cat: "Illustration", desc: "Colorful custom storyboards and cartoon assets prepared for animated children's digital content.", img: "/images/portfolio/Diana & Roma Illustration.png", color: "#5d5ca3", year: "2023" },
  { title: "Fajar Cattan Photography", cat: "Photography & Videography", desc: "Outdoor commercial photography session highlighting seasonal styles.", img: "/images/portfolio/Fajar Cattan Photography.png", color: "#6c6bb0", year: "2023" },
  { title: "Freaking Fried Ice Cream", cat: "Illustration", desc: "Fun, vibrant food character illustrations and promotional graphics.", img: "/images/portfolio/Freaking Fried Ice Cream Illustration.jpg", color: "#5d5ca3", year: "2023" },
  { title: "Google Ads Campaign", cat: "Digital Marketing", desc: "Structured search and display campaigns driving positive ROI for client services.", img: "/images/portfolio/Google Ads Campaign.avif", color: "#6c6bb0", year: "2024" },
  { title: "Hoodifit Kuwait Branding", cat: "Branding", desc: "Sporty, energetic brand identity, packaging, and digital assets design.", img: "/images/portfolio/Hoodifit Kuwait Branding.png", color: "#5d5ca3", year: "2023" },
  { title: "JWood Branding", cat: "Branding", desc: "Organic, premium brand mark and marketing collateral for a custom wood studio.", img: "/images/portfolio/JWood Branding.png", color: "#6c6bb0", year: "2023" },
  { title: "JY Restaurant Photography", cat: "Photography & Videography", desc: "High-contrast culinary photography showcasing signature dishes and ambiance.", img: "/images/portfolio/JY Restaurant Photography.png", color: "#5d5ca3", year: "2023" },
  { title: "JY Restaurant Social Media", cat: "Social Media Account Manage", desc: "Mouth-watering content streams, dining promotions, and local influencer campaigns.", img: "/images/portfolio/JY Restaurant Social Media Management.png", color: "#6c6bb0", year: "2024" },
  { title: "Mama-to-Be Photography", cat: "Photography & Videography", desc: "Warm, emotional maternity portraits captured in natural light settings.", img: "/images/portfolio/Mama-to-Be Photography.png", color: "#5d5ca3", year: "2023" },
  { title: "Mandarin Gourmet Photography", cat: "Photography & Videography", desc: "Food styling and commercial menu photoshoots for a fine dining Asian kitchen.", img: "/images/portfolio/Mandarin Gourmet Photography.png", color: "#6c6bb0", year: "2023" },
  { title: "Mandarin Gourmet Social Media", cat: "Social Media Account Manage", desc: "Premium content grids and brand representation for an upscale dining hotspot.", img: "/images/portfolio/Mandarin Gourmet Social Media Management.png", color: "#5d5ca3", year: "2024" },
  { title: "Mayatara Branding", cat: "Branding", desc: "Sleek, fashion-forward brand strategy, packaging, and custom labels.", img: "/images/portfolio/Mayatara Branding.png", color: "#6c6bb0", year: "2023" },
  { title: "Modest Kuwait Website", cat: "Web & App Development", desc: "Clean, editorial style fashion e-commerce website with fast loading performance.", img: "/images/portfolio/Modest Kuwait Website Development.png", color: "#5d5ca3", year: "2023" },
  { title: "My Simit CMS Development", cat: "Web & App Development", desc: "A custom blog, inventory manager, and landing page backend for a café chain.", img: "/images/portfolio/My Simit CMS Development.png", color: "#6c6bb0", year: "2023" },
  { title: "Newborn Memories Photography", cat: "Photography & Videography", desc: "Soft, adorable baby portrait photography done in a cozy home studio setting.", img: "/images/portfolio/Newborn Memories Photography.png", color: "#5d5ca3", year: "2023" },
  { title: "Ojairy and Zain Calendar", cat: "Illustration", desc: "Custom interactive web calendar with daily details and clean translations.", img: "/images/portfolio/Ojairy and Zain Calendar Design.png", color: "#6c6bb0", year: "2023" },
  { title: "Out Of Blue Branding", cat: "Branding", desc: "Bold branding style, featuring striking graphics, blue themes, and sleek print designs.", img: "/images/portfolio/Out Of Blue Branding.png", color: "#5d5ca3", year: "2022" },
  { title: "Promise Portraits", cat: "Photography & Videography", desc: "Beautiful outdoor family shoots and memorable anniversary event coverages.", img: "/images/portfolio/Promise Portraits Photography.png", color: "#6c6bb0", year: "2022" },
  { title: "Protect Me Illustration", cat: "Illustration", desc: "Vibrant and engaging educational illustrations for a safety campaign.", img: "/images/portfolio/Protect Me Illustration Design.png", color: "#5d5ca3", year: "2023" },
  { title: "SEO & Growth Campaign", cat: "Digital Marketing", desc: "Deep technical search engine optimization driving keywords to ranking spot #1.", img: "/images/portfolio/SEO Campaign.avif", color: "#6c6bb0", year: "2024" },
  { title: "Story Book Illustrations", cat: "Illustration", desc: "Full book illustrations, cover art, and digital publishing format setup.", img: "/images/portfolio/Story Book Illustrations.png", color: "#5d5ca3", year: "2023" },
  { title: "Teni Time Branding", cat: "Branding", desc: "Vibrant visual identity, mascot concept design, and business branding package.", img: "/images/portfolio/Teni Time Branding.png", color: "#6c6bb0", year: "2023" },
  { title: "Timeless Engagements", cat: "Photography & Videography", desc: "Capturing love, joy, and delicate details of engagement ceremonies.", img: "/images/portfolio/Timeless Engagements Photography.png", color: "#5d5ca3", year: "2023" },
  { title: "Twins Birthday Photography", cat: "Photography & Videography", desc: "Fun-filled, colorful outdoor double birthday bash coverage.", img: "/images/portfolio/Twins Birthday Photography.png", color: "#6c6bb0", year: "2024" },
];

export const portfolioProjects: PortfolioProject[] = rawPortfolioProjects.map((project) => ({
  ...project,
  img: mediaUrl(project.img),
  images: project.images?.map((image) => mediaUrl(image)),
}));

function isAfreyaProject(project: PortfolioProject) {
  return project.title.toLowerCase().includes("afreya");
}

function rankForFeaturedSelection(a: PortfolioProject, b: PortfolioProject) {
  const aAfreya = isAfreyaProject(a) ? 1 : 0;
  const bAfreya = isAfreyaProject(b) ? 1 : 0;
  if (aAfreya !== bAfreya) return aAfreya - bAfreya;
  return projectYearValue(b) - projectYearValue(a);
}

/** Homepage featured grid: one project per category, diverse clients, non-Afreya preferred. */
export function getFeaturedPortfolioProjects(limit = 6) {
  const categories = PORTFOLIO_CATEGORIES.filter((c): c is PortfolioServiceType => c !== "All");
  const picked: PortfolioProject[] = [];
  const usedClients = new Set<string>();

  for (const category of categories) {
    const inCategory = portfolioProjects.filter((p) => p.cat === category);
    if (inCategory.length === 0) continue;

    const sorted = [...inCategory].sort(rankForFeaturedSelection);
    const chosen =
      sorted.find((p) => !usedClients.has(extractNicheKey(p))) ?? sorted[0];

    picked.push(chosen);
    usedClients.add(extractNicheKey(chosen));
  }

  return picked.slice(0, limit);
}

export function getCuratedPortfolioProjects() {
  const bestByCategoryAndNiche = new Map<string, PortfolioProject>();

  for (const project of portfolioProjects) {
    const niche = extractNicheKey(project);
    const key = `${project.cat}::${niche}`;
    const existing = bestByCategoryAndNiche.get(key);
    if (!existing || projectYearValue(project) > projectYearValue(existing)) {
      bestByCategoryAndNiche.set(key, project);
    }
  }

  return [...bestByCategoryAndNiche.values()];
}

export function getProjectsByCategory(category: PortfolioCategoryFilter) {
  const curated = getCuratedPortfolioProjects();
  if (category === "All") return curated;
  return curated.filter((p) => p.cat === category);
}

export function portfolioCategorySlug(category: PortfolioServiceType) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function getGroupedProjects() {
  const curated = getCuratedPortfolioProjects();
  return PORTFOLIO_CATEGORIES.filter((c): c is PortfolioServiceType => c !== "All")
    .map((category) => ({
      category,
      slug: portfolioCategorySlug(category),
      projects: curated.filter((p) => p.cat === category),
    }))
    .filter((group) => group.projects.length > 0);
}
