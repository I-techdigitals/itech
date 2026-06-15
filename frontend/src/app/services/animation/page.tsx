import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Animation Services – I-TECH Digitals",
  description:
    "2D/3D animation, motion graphics, and explainer videos crafted to engage your audience. From logo animations to full brand films — I-TECH Digitals brings your brand to life.",
};

export default function AnimationPage() {
  return <ServiceDetailTemplate slug="animation" />;
}
