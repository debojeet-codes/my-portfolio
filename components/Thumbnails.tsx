export default function Thumbnails() {
  return (
    <section className="w-full flex justify-center bg-white">
      <img
        src="/images/thumbnails.png"
        alt="Thumbnails"
        className="block w-full h-auto"
        draggable={false}
      />
    </section>
  );
}