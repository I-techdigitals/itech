"use client";

import Image, { type ImageLoader, type ImageProps } from "next/image";
import { isResizableMediaImage, mediaTransformUrl } from "@/lib/supabase";

type OptimizedImageProps = Omit<ImageProps, "loader" | "unoptimized"> & {
  loader?: ImageLoader;
  unoptimized?: boolean;
};

const supabaseImageLoader: ImageLoader = ({ src, width, quality }) =>
  mediaTransformUrl(src, { width, quality: quality || 75 });

export default function OptimizedImage({
  src,
  alt,
  loader,
  unoptimized,
  quality = 75,
  ...props
}: OptimizedImageProps) {
  const srcString = typeof src === "string" ? src : "";
  const shouldOptimize = srcString ? isResizableMediaImage(srcString) : false;

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      quality={quality}
      loader={loader ?? (shouldOptimize ? supabaseImageLoader : undefined)}
      unoptimized={unoptimized ?? !shouldOptimize}
    />
  );
}
