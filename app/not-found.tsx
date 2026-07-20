import Link from "next/link";
import Particles from "./components/particles";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={80}
			/>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text">
				404
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<div className="my-16 text-center animate-fade-in">
				<p className="text-sm text-zinc-500 mb-8">This page doesn't exist.</p>
				<Link
					href="/"
					className="text-sm px-5 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-zinc-400 duration-500 transition-all"
				>
					Go home
				</Link>
			</div>
		</div>
	);
}
