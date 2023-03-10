"use client";

import AvantajeSection from "../components/Home/Avantaje/AvantajeSection";
import BlogSection from "../components/Home/Blog/BlogSection";
import HeroSection from "../components/Home/Hero/HeroSection";
import IntrebariSection from "../components/Home/Intrebari/IntrebariSection";
import NevoiSection from "../components/Home/Nevoi/NevoiSection";
import ParteneriSection from "../components/Home/Parteneri/ParteneriSection";
import ServiciiSection from "../components/Home/Servicii/ServiciiSection";

export default function Home() {
  return (
    <div
      className=" grid  grid-cols-1  items-center justify-center "
      id="container-home"
    >
    
        <HeroSection />
    
      <div className="  translate-y-[-2%] lg:translate-y-[-4%]">
        <div
          className="mx-2 flex flex-col rounded-t-[10px] bg-white pt-16  md:items-center md:justify-center lg:mx-4    lg:py-36 lg:px-48"
          id="background"
        >
          <AvantajeSection />
        </div>
        <div
          className="mx-2 flex flex-col bg-[#506673]  md:items-center  md:justify-center lg:mx-4  lg:px-48 lg:pr-16 "
          id="background"
        >
          <NevoiSection />
        </div>
        <div
          className="mx-2 flex flex-col   bg-white md:items-center  md:justify-center md:lg:items-center lg:mx-4  lg:px-48 "
          id="background"
        >
          <ServiciiSection />
        </div>{" "}
        <div
          className="mx-2 flex  flex-col bg-white pb-28  text-center md:items-center  md:justify-center  lg:mx-4 lg:px-48 "
          id="background"
        >
          <h1 className=" text-[20px] leading-[30px]  lg:m-24 lg:text-[28px] lg:font-[700] lg:leading-[42px] ">
            Intrebari frecvente adresate de clientii Human Source
          </h1>
        </div>
        <div
          className="mx-2 flex flex-col  bg-[#506673]  md:items-center md:justify-center lg:mx-4  lg:px-48 "
          id="background"
        >
          <IntrebariSection />{" "}
        </div>
        <div
          className="mx-2 flex flex-col rounded-b-[10px] bg-white  md:items-center  md:justify-center lg:mx-4  lg:px-48 "
          id="background"
        >
          <ParteneriSection />
          <BlogSection />
        </div>
      </div>
    </div>
  );
}
