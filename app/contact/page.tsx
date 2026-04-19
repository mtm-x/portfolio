"use client";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Navigation } from "../components/nav";

const socials = [
	{
		icon: <Github size={24} />,
		href: "https://github.com/mtm-x",
		label: "Github",
	},
	{
		icon: <Linkedin size={24} />,
		href: "https://www.linkedin.com/in/mtm-x",
		label: "LinkedIn",
	},
	{
		icon: <MessageCircle size={24} />,
		href: "https://discordapp.com/users/mtm-xx",
		label: "Discord",
	},
	{
		icon: <Mail size={24} />,
		href: "mailto:devthamaraimanalan.m@gmail.com",
		label: "Email",
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
				</div>
				<div className="grid w-full grid-cols-2 gap-6 mx-auto max-w-2xl sm:grid-cols-4">
					{socials.map((s) => (
						<Card key={s.href}>
							<Link
								href={s.href}
								target="_blank"
								aria-label={s.label}
								className="relative flex items-center justify-center p-10 sm:p-12 duration-700 group"
							>
								<span className="relative z-10 flex items-center justify-center w-14 h-14 duration-500 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
									{s.icon}
								</span>
							</Link>
						</Card>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
