import OptimizedImage from "@/components/OptimizedImage";

type PageHeroImageProps = {
  src: string;
  alt: string;
};

export default function PageHeroImage({ src, alt }: PageHeroImageProps) {
  return (
    <>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(108, 107, 176,0.88), rgba(108, 107, 176,0.95))",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
