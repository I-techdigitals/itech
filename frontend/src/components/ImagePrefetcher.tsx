"use client";

import { useEffect } from "react";
import { mediaPrefetchUrl } from "@/lib/supabase";

type ImagePrefetcherProps = {
  images: string[];
  width?: number;
};

export default function ImagePrefetcher({ images, width = 960 }: ImagePrefetcherProps) {
  useEffect(() => {
    const uniqueUrls = [...new Set(images.filter(Boolean).map((src) => mediaPrefetchUrl(src, width)))];
    if (uniqueUrls.length === 0) return;

    const links: HTMLLinkElement[] = [];
    const addLinks = () => {
      for (const href of uniqueUrls) {
        if (document.querySelector(`link[rel="prefetch"][href="${href}"]`)) continue;

        const link = document.createElement("link");
        link.rel = "prefetch";
        link.as = "image";
        link.href = href;
        document.head.appendChild(link);
        links.push(link);
      }
    };

    let cancelPrefetch: () => void;

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(addLinks, { timeout: 1800 });
      cancelPrefetch = () => window.cancelIdleCallback(idleId);
    } else {
      const timeoutId = globalThis.setTimeout(addLinks, 900);
      cancelPrefetch = () => globalThis.clearTimeout(timeoutId);
    }

    return () => {
      cancelPrefetch();

      for (const link of links) {
        link.remove();
      }
    };
  }, [images, width]);

  return null;
}
