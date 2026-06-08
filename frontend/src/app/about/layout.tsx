import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – I-TECH Digitals",
  description: "Learn about I-TECH Digitals — a leading tech and design agency with offices in Kuwait and Pakistan, delivering creative excellence since 2016.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
