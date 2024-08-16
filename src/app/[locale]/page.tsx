import Faq from "@/components/sections/Faq";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Location";
import Testimonials from "@/components/testimonials/Testimonials";

export default function LocaleHomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Location />
      <Faq />
    </>
  );
}
