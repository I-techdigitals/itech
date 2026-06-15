import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing Services – I-TECH Digitals",
  description:
    "SEO, Google Ads, Meta Ads, and content strategy that drives real results. Managing 5M+ monthly impressions for clients across Kuwait and Pakistan.",
};

export default function DigitalMarketingPage() {
  return <ServiceDetailTemplate slug="digital-marketing" />;
}
