import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import VeliPortal from "@/components/VeliPortal";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <VeliPortal />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}