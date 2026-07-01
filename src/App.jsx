import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import Platform from "./components/Platform";
import Process from "./components/Process";
import { Stats, CTA, Footer } from "./components/Sections";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Platform />
        <Process />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
