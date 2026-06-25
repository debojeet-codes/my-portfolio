type SectionImageProps = {
  src: string;
  alt: string;
};

export default function SectionImage({
  src,
  alt,
}: SectionImageProps) {
  return (
    <section className="w-full flex justify-center bg-white overflow-x-auto">
      <img
        src={src}
        alt={alt}
        style={{
          width: "1440px",
          height: "auto",
          maxWidth: "100%",
          imageRendering: "auto",
        }}
        draggable={false}
      />
    </section>
  );
}