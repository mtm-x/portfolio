import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Photography", href: "/photography" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen min-h-[100svh] overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav
        className="absolute left-1/2 -translate-x-1/2 z-20 animate-fade-in"
        style={{ top: "max(4.5rem, calc(env(safe-area-inset-top) + 2rem))" }}
      >
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
      <div className="w-[92vw] max-w-6xl h-px animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />

      <div className="z-10 flex flex-col items-center px-4 gap-3">
        <h1 className="py-3.5 px-0.5 z-10 text-center text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-6xl sm:whitespace-nowrap bg-clip-text">
          Thamaraimanalan M
        </h1>
      </div>

      <div className="w-[92vw] max-w-6xl h-px animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    </div>
  );
}
