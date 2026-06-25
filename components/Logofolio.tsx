export default function Logofolio() {
  return (
    <section className="w-full flex justify-center bg-white overflow-x-auto pt-16">
      <img
        src="/images/logofolio.png"
        alt="Logofolio"
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