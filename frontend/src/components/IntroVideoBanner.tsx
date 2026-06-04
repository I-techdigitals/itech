"use client";

import { useEffect, useRef } from "react";
import { mediaUrl } from "@/lib/supabase";

const INTRO_VIDEO_SRC = mediaUrl("/video/I-Tech.mp4");

export default function IntroVideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="intro-video-banner">
      <video
        ref={videoRef}
        className="intro-video-banner__media"
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        aria-label="I-TECH Digitals introduction"
      >
        <source src={INTRO_VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
