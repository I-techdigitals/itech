import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import ImagePrefetcher from "@/components/ImagePrefetcher";
import { getFeaturedPortfolioProjects } from "@/data/portfolio";
import { mediaUrl } from "@/lib/supabase";

const nextLikelyImages = [
  mediaUrl("/images/4d40ec48-1229-4a4d-9afc-874fcc654642.png"),
  mediaUrl("/images/creatopy-M35xxKGb_tA-unsplash.jpg"),
  mediaUrl("/images/bernd-dittrich-pYlBAu3de0w-unsplash.jpg"),
  ...getFeaturedPortfolioProjects(6)
    .slice(0, 6)
    .map((project) => project.img)
    .filter((src) => !/\.(mp4|webm|ogg)$/i.test(src)),
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImagePrefetcher images={nextLikelyImages} width={960} />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
