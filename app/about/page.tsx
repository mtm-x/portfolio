import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/nav";

export const metadata: Metadata = {
	title: "About",
	description:
		"About Thamaraimanalan M — ECE student, embedded systems, Linux kernel.",
};

export default function About() {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 pb-16">
			<Navigation />
			<div className="px-6 pt-20 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-32">
				{/* Header — photo + intro side by side */}
				<div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-10 items-start">
					<div>
						<h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
							Thamaraimanalan M
						</h1>
						<p className="mt-4 text-zinc-400 leading-relaxed">
							Just open source :)
						</p>
						<p className="mt-3 text-zinc-500 leading-relaxed text-sm">
							Currently an Embedded Software Intern at Linumiz and selected
							for the Linux Kernel Mentorship Program (Spring 2026).
							Previously interned at FOSSEE, IIT Bombay.
						</p>
					</div>
					<div className="flex justify-center md:justify-start">
						<img
							src="/images/portfolio/myself.jpeg"
							alt="Thamaraimanalan M"
							className="w-56 md:w-full h-auto object-contain rounded-lg border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500"
						/>
					</div>
				</div>

				<div className="mt-16">
					<h2 className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-mono mb-8">
						Current work
					</h2>
					<div className="space-y-4">
						<p className="text-sm text-zinc-300">Embedded Software Intern · Linumiz</p>
						<p className="text-sm text-zinc-300">
							Linux Kernel Mentee (Spring 2026) · Linux Foundation Mentorship Program
						</p>
					</div>
				</div>

				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0 mt-16" />

				{/* Links */}
				<div className="mt-16 flex flex-wrap items-center gap-6">
					{[
						{ label: "GitHub", href: "https://github.com/mtm-x" },
						{
							label: "LinkedIn",
							href: "https://www.linkedin.com/in/mtm-x",
						},
						{
							label: "Email",
							href: "mailto:devthamaraimanalan.m@gmail.com",
						},
						{
							label: "Discord (mtm_xx)",
							href: "https://discordapp.com/users/mtm-xx",
						},
					].map((link) => (
						<Link
							key={link.label}
							href={link.href}
							target={link.href.startsWith("/") ? "_blank" : "_blank"}
							className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
						>
							{link.label}
							<ArrowUpRight className="w-3.5 h-3.5" />
						</Link>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
