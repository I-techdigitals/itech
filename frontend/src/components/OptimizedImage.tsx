"use client";

import Image, { type ImageLoader, type ImageProps } from "next/image";
import { isResizableMediaImage, mediaTransformUrl } from "@/lib/supabase";

type OptimizedImageProps = Omit<ImageProps, "loader" | "unoptimized"> & {
  loader?: ImageLoader;
  transformAspectRatio?: number;
  unoptimized?: boolean;
};

export default function OptimizedImage({
  src,
  alt,
  width: intrinsicWidth,
  height: intrinsicHeight,
  loader,
  transformAspectRatio,
  unoptimized,
  quality = 75,
  ...props
}: OptimizedImageProps) {
  const srcString = typeof src === "string" ? src : "";
  const shouldOptimize = srcString ? isResizableMediaImage(srcString) : false;
  const transformHeightRatio =
    transformAspectRatio ??
    (intrinsicWidth && intrinsicHeight
      ? Number(intrinsicHeight) / Number(intrinsicWidth)
      : undefined);
  const supabaseImageLoader: ImageLoader = ({ src, width, quality }) =>
    mediaTransformUrl(src, {
      width,
      height: transformHeightRatio ? Math.round(width * transformHeightRatio) : undefined,
      quality: quality || 75,
    });

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      width={intrinsicWidth}
      height={intrinsicHeight}
      quality={quality}
      loader={loader ?? (shouldOptimize ? supabaseImageLoader : undefined)}
      unoptimized={unoptimized ?? !shouldOptimize}
    />
  );
}
