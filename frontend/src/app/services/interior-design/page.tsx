import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Interior Design Services – I-TECH Digitals",
  description:
    "Commercial interior design for offices, retail spaces, and showrooms in Kuwait and Pakistan. Photorealistic 3D renders, space planning, and full contractor coordination.",
};

export default function InteriorDesignPage() {
  return <ServiceDetailTemplate slug="interior-design" />;
}
