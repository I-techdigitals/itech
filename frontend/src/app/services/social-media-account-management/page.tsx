import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Social Media Account Management – I-TECH Digitals",
  description:
    "End-to-end social media management for brands in Kuwait and Pakistan. Content creation, community management, analytics, and growth strategy — all handled by I-TECH Digitals.",
};

export default function SocialMediaPage() {
  return <ServiceDetailTemplate slug="social-media-account-management" />;
}
