"use client";
import HeroBanner from "@/components/HeroBanner";
import MotoPark from "@/components/MotoPark";
import HowWeWork from "@/components/HowWeWork";
import Advantages from "@/components/Advantages";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <MotoPark />
      <HowWeWork />
      <Advantages />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default HomePage;
