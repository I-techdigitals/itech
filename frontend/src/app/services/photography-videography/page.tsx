import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Photography & Videography – I-TECH Digitals",
  description:
    "Professional photography and cinematic video production for brands, products, and campaigns in Kuwait and Pakistan. Studio-grade quality with fast turnaround.",
};

export default function PhotographyVideographyPage() {
  return <ServiceDetailTemplate slug="photography-videography" />;
}
