"use client";
import HeroBanner from "@/components/HeroBanner";
import MotoPark from "@/components/MotoPark";
import HowWeWork from "@/components/HowWeWork";
import Advantages from "@/components/Advantages";
import Contacts from "@/components/Contacts";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <MotoPark />
      <HowWeWork />
      <Advantages />
      <Contacts />
      {/* <ContactForm />
      <ContactMap /> */}
    </>
  );
};

export default HomePage;
