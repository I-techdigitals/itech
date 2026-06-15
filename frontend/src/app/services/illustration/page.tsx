import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Illustration Services – I-TECH Digitals",
  description:
    "100% custom hand-crafted illustrations for brands — mascots, packaging, editorial art, social media sets, and icon packs. Full commercial rights with every project.",
};

export default function IllustrationPage() {
  return <ServiceDetailTemplate slug="illustration" />;
}
