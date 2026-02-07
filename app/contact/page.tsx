"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Navigation } from "../components/nav";

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:devthamaraimanalan.m@gmail.com",
		label: "Email",
		handle: "devthamaraimanalan.m@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/mtm-x",
		label: "Github",
		handle: "mtm-x",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/mtm-x",
		label: "LinkedIn",
		handle: "mtm-x",
	},
];

export default function Contact() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
				<div className="text-center mb-16 pt-32">
					<span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-mono">
						Let&apos;s connect
					</span>
					<h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
						Get in Touch
					</h2>
					<p className="mt-4 text-zinc-400 max-w-md mx-auto leading-relaxed">
						Have a project idea, want to collaborate, or just want to say hi?
						Reach out through any of these channels.
					</p>
				</div>
				<div className="grid w-full grid-cols-1 gap-8 mx-auto max-w-4xl sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card key={s.href}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display break-all">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
