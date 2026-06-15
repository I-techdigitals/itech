"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/* Redirect legacy /services/[slug] URLs to the new static service pages */
export default function ServiceSlugRedirect() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.slug === "string" ? params.slug : "";

  useEffect(() => {
    if (slug) {
      router.replace(`/services/${slug}`);
    } else {
      router.replace("/services");
    }
  }, [slug, router]);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", fontFamily: "'Inter', sans-serif",
    }}>
      <p style={{ color: "#999", fontSize: "0.95rem" }}>Redirecting…</p>
    </div>
  );
}
