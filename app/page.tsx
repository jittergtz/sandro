import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Galaxy from "./components/galaxy";

const navigation = [
  { name: "Projekte", href: "/projects" },
  { name: "Kontakt", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex relative flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black   via-neutral-700/20   ">
      <Galaxy/>
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm  z-40 duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 z-10 pointer-events-none animate-fade-in"
        quantity={200}
      />
      <h1 className="z-10 text-5xl text-transparent duration-1000 bg-gradient-to-b from-white cursor-default  animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        hi, Sandro hier
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm md:text-lg text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 px-12 md:px-0 md:w-[30rem]">
        Ich bin Web developer mit interesse 
        an jeglichen Technologien. Ein besonderer Fokus 
        liegt bei mir auf Frontend-Entwicklung und Design.
        </h2>
      </div>
    </div>
  );

}
