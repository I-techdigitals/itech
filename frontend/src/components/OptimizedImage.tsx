import Image, { type ImageLoader, type ImageProps } from "next/image";
import { isResizableMediaImage, mediaImageLoader } from "@/lib/supabase";

type OptimizedImageProps = Omit<ImageProps, "loader" | "unoptimized"> & {
  loader?: ImageLoader;
  unoptimized?: boolean;
};

export default function OptimizedImage({
  src,
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
      quality={quality}
      loader={loader ?? (shouldOptimize ? mediaImageLoader : undefined)}
      unoptimized={unoptimized ?? !shouldOptimize}
    />
  );
}
