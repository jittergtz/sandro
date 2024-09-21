import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Galaxy from "./components/galaxy";

import { Lato, Playfair_Display, Lora } from "@next/font/google";


const navigation = [
  { name: "Projekte", href: "/projects" },
  { name: "Kontakt", href: "/contact" },
];

const lato = Lora({
  subsets: ['latin'],
  weight: [ '400', '700'],
});



export default function Home() {
  return (
    <div className="flex relative flex-col items-center justify-center w-screen h-screen overflow-hidden bg-[#0f0f0f] ">
   
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm  z-40 duration-500 text-zinc-100 bg-black/80 p-2 px-4 rounded-2xl border border-neutral-700 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 opacity-25 z-10 pointer-events-none animate-fade-in"
        quantity={80}
      />
      <div className=" rounded-lg w-full p-2 z-50 flex justify-center items-center">
      <h1 className={`z-10 font-semibold HeroTextShadow  text-5xl text-transparent duration-1000 bg-gradient-to-t from-[#dadbdd] to-[#c4c2c2] cursor-default animate-title sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text`}>
        Hi, Sandro hier
      </h1>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-100 to-zinc-300" />
      <div className="my-16 text-center animate-fade-in">
       
      </div>
    </div>
  );

}
