export default function About() {
  return (
    <section className="w-full flex justify-center bg-white overflow-x-auto">
      <img
        src="/images/about.png"
        alt="About Section"
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