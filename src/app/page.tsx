"use client";
import HeroBanner from "@/components/HeroBanner";
import MotoPark from "@/components/MotoPark";
import HowWeWork from "@/components/HowWeWork";
import Advantages from "@/components/Advantages";
import Contacts from "@/components/Contacts";
import BackToTopButton from "@/components/BackToTopButton";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <MotoPark />
      <section id="howWeWork"></section>
      <HowWeWork />
      <section id="benefits"></section>
      <Advantages />
      <section id="contacts"></section>
      <Contacts />
      {/* <ContactForm />
      <ContactMap /> */}
      <BackToTopButton />
    </>
  );
};

export default HomePage;
