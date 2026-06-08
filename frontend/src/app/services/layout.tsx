import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services – I-TECH Digitals",
  description:
    "Explore I-TECH Digitals services: web & app development, social media management, photography & videography, 3D design, animation, interior design, printing, and digital marketing.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
