"use client";

import { useEffect, useState, type CSSProperties } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import type { PortfolioProject } from "@/data/portfolio";

const videoPattern = /\.(mp4|webm|ogg|mov|m4v)(?:[?#].*)?$/i;

type PortfolioMediaProps = {
  project: Pick<PortfolioProject, "title" | "img" | "images">;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  imageClassName?: string;
  style?: CSSProperties;
  imageStyle?: CSSProperties;
};

export default function PortfolioMedia({
  project,
  width,
  height,
  sizes,
  className,
  imageClassName,
  style,
  imageStyle,
}: PortfolioMediaProps) {
  const mediaItems = project.images?.length ? project.images : [project.img];
  const isVideo = videoPattern.test(project.img);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);

  useEffect(() => {
    if (mediaItems.length <= 1) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setPreviousIndex(activeIndex);
      setActiveIndex((activeIndex + 1) % mediaItems.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, mediaItems.length]);

  useEffect(() => {
    if (previousIndex === null) return;

    const timeoutId = window.setTimeout(() => {
      setPreviousIndex(null);
    }, 1500);

    return () => window.clearTimeout(timeoutId);
  }, [previousIndex]);

  if (isVideo) {
    return (
      <video
        src={project.img}
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        className={className}
        style={{ width: "100%", height: "100%", objectFit: "cover", ...style }}
      />
    );
  }

  if (mediaItems.length > 1) {
    return (
      <div className="portfolio-media-carousel" style={style}>
        {mediaItems.map((src, index) => (
          <OptimizedImage
            key={src}
            src={src}
            alt={`${project.title} ${index + 1}`}
            width={width}
            height={height}
            loading="lazy"
            sizes={sizes}
            className={`portfolio-media-carousel__image${index === activeIndex ? " portfolio-media-carousel__image--active" : ""}${index === previousIndex ? " portfolio-media-carousel__image--previous" : ""}${imageClassName ? ` ${imageClassName}` : ""}`}
            style={imageStyle}
          />
        ))}
      </div>
    );
  }

  return (
    <OptimizedImage
      src={project.img}
      alt={project.title}
      width={width}
      height={height}
      loading="lazy"
      sizes={sizes}
      className={imageClassName}
      style={imageStyle}
    />
  );
}
