import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import CTA from "../components/CTA";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import StickyCTA from "../components/StickyCTA";
// import FloatingSocial from "../components/FloatingSocial";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <CTA />
      <Footer />
      {/* <StickyCTA /> */}
      {/* <FloatingSocial /> */}
    </main>
  );
}