import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item, index) => (
            <React.Fragment key={item.href}>
              <Link
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
              {index < navigation.length - 1 && (
                <span className="text-zinc-700 select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />

      <div className="z-10 flex flex-col items-center">
        <div className="animate-fade-in mb-5">
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-zinc-500 font-mono">
            Embedded Systems Engineer
          </span>
        </div>

        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
          Thamaraimanalan M
        </h1>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in max-w-xl mx-auto px-6">
        <h2 className="text-sm text-zinc-500 leading-relaxed">
          Building systems close to the metal — from{" "}
          <Link
            target="_blank"
            href="https://github.com/mtm-x"
            className="underline duration-500 hover:text-zinc-300"
          >
            Linux Kernel
          </Link>{" "}
          modules to bare-metal firmware. Open source contributor and
          systems programming enthusiast.
        </h2>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="/projects"
            className="text-xs sm:text-sm px-5 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-zinc-400 duration-500 transition-all"
          >
            View Projects →
          </Link>
          <Link
            href="/resume/ThamaraimanalanM_Resume.pdf"
            target="_blank"
            className="text-xs sm:text-sm px-5 py-2 rounded-full bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-100 duration-500 transition-all"
          >
            Resume ↓
          </Link>
        </div>
      </div>
    </div>
  );
}
