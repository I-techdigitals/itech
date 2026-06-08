import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact I-TECH Digitals",
  description: "Send us a message. I-TECH Digitals responds within 24 hours. Based in Kuwait, serving clients worldwide.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
