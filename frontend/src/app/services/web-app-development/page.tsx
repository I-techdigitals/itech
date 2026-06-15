import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Web & App Development – I-TECH Digitals",
  description:
    "Custom websites and mobile apps built for speed, conversions, and scalability. From landing pages to enterprise platforms — I-TECH Digitals delivers digital products that work.",
};

export default function WebAppDevelopmentPage() {
  return <ServiceDetailTemplate slug="web-app-development" />;
}
