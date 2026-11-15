import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Collections } from "@/components/site/Collections";
import { Featured } from "@/components/site/Featured";
import { WhyUs } from "@/components/site/WhyUs";
import { Wholesale } from "@/components/site/Wholesale";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Collections />
      <Featured />
      <WhyUs />
      <Wholesale />
      <Gallery />
      <Contact />
    </>
  );
}
