import Hero from "@/components/Hero";
import About from "@/components/About";
import Logofolio from "@/components/Logofolio";
import Branding from "@/components/Branding";
import Posters from "@/components/Posters";
import Drinks from "@/components/Drinks";
import Brands from "@/components/Brands";
import Mobview from "@/components/Mobview";
import Hangingposters from "@/components/Hangingposters";
import Threeposters from "@/components/Threeposters";
import Myposters from "@/components/Myposters";
import Idcard from "@/components/Idcard";
import Thumbnails from "@/components/Thumbnails";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Imgpreloader from "@/components/Imgpreloader";

export default function Home() {
  return (
    <main>

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="logofolio">
        <Logofolio />
      </section>

      <section id="branding">
        <Branding />
        <Drinks />
        <Brands />
        <Mobview />
      </section>

      <section id="posters">
        <Posters />
        <Hangingposters />
        <Threeposters />
        <Myposters />
      </section>

      <section id="idcards">
        <Idcard />
      </section>

      <section id="thumbnails">
        <Thumbnails />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </main>
  );
}