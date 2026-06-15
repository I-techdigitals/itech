import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "3D Design & Visualization – I-TECH Digitals",
  description:
    "Photorealistic 3D modeling, rendering, and visualization services. Turn your concepts into stunning market-ready assets before they're physically built.",
};

export default function ThreeDDesignPage() {
  return <ServiceDetailTemplate slug="3d-design" />;
}
