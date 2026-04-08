import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
   return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
