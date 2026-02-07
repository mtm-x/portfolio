import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Navigation } from "../components/nav";

export const metadata: Metadata = {
	title: "About",
	description:
		"About Thamaraimanalan M — ECE student, embedded systems, Linux kernel.",
};

const skills = [
	"C",
	"Python",
	"Shell",
	"Linux Kernel",
	"ARM Cortex-M",
	"Raspberry Pi",
	"Qt / PyQt",
	"Git",
	"GDB",
	"Make",
	"Vim",
];

const timeline = [
	{
		period: "2026",
		title: "First contribution to Zephyr RTOS",
		org: "Zephyr Project",
		description:
			"Docs and compliance script fixes. Got the Zephyr Technical Contribution badge.",
	},
	{
		period: "2025",
		title: "FOSSIndia 2025",
		org: "Bangalore",
		description:
			"Attended the FOSSIndia conference.",
	},
	{
		period: "2025",
		title: "NXP AIM — Regional Finalist",
		org: "NXP Semiconductors",
		description:
			"Regional finalist in the AI in Mobility competition. Robotic treasure hunt using ROS2, SLAM, and computer vision.",
		link: {
			label: "Certificate",
			href: "https://drive.google.com/file/d/1K9f_vX-XXlP34EO03iPNR43R37R-Xxt2/view?usp=sharing",
		},
	},
	{
		period: "Feb — May 2025",
		title: "Project Intern",
		org: "FOSSEE, IIT Bombay",
		description:
			"Built a cross-platform PyQt6 GUI for OpenModelica. Worked with the FOSSEE team on simulation tooling, improving model selection and execution workflows.",
	},
	{
		period: "2024",
		title: "Qt-athon 2024 — 3rd Place",
		org: "Qt Group",
		description:
			"Top 3 out of 100+ international teams in the global Qt-athon competition.",
		link: {
			label: "Read more",
			href: "https://www.qt.io/blog/qtathon-2024-winners",
		},
	},
	{
		period: "2022 — 2026",
		title: "B.E. Electronics & Communication",
		org: "Government College of Technology, Coimbatore",
		description:
			"Final year. Focused coursework in embedded systems, digital signal processing, and microcontrollers.",
	},
];

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
							Final year ECE student at GCT Coimbatore. I'm into embedded
							systems and systems programming — mostly C, some Python and
							shell scripts. Currently reading through K.N. King's C book
							and The Linux Programming Interface, and getting into kernel
							internals through Pyjamacafe's course.
						</p>
						<p className="mt-3 text-zinc-500 leading-relaxed text-sm">
							Did a 4-month internship at FOSSEE, IIT Bombay where I worked
							on a PyQt6 GUI for OpenModelica. Recently made my first
							contribution to the Zephyr RTOS project.
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

				{/* Skills — inline tags */}
				<div className="mt-16">
					<h2 className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-mono mb-4">
						Stack
					</h2>
					<div className="flex flex-wrap gap-2">
						{skills.map((s) => (
							<span
								key={s}
								className="px-3 py-1 text-xs rounded-full border border-zinc-800 text-zinc-400 bg-zinc-900/50"
							>
								{s}
							</span>
						))}
					</div>
				</div>

				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0 mt-16" />

				{/* Timeline */}
				<div className="mt-16">
					<h2 className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-mono mb-8">
						Timeline
					</h2>
					<div className="space-y-0">
						{timeline.map((item, i) => (
							<div
								key={item.title}
								className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-8 gap-y-1 py-6 border-t border-zinc-800/60 first:border-t-0 first:pt-0"
							>
								<span className="text-xs text-zinc-600 font-mono pt-0.5 whitespace-nowrap">
									{item.period}
								</span>
								<div>
									<h3 className="text-sm font-medium text-zinc-200">
										{item.title}
									</h3>
									<p className="text-sm text-zinc-500 mt-0.5">{item.org}</p>
									<p className="text-sm text-zinc-400 mt-2 leading-relaxed">
										{item.description}
									</p>
									{item.link && (
										<Link
											href={item.link.href}
											target="_blank"
											className="inline-flex items-center gap-1 mt-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
										>
											{item.link.label}
											<ArrowUpRight className="w-3 h-3" />
										</Link>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0 mt-16" />

				{/* Certifications — compact */}
				<div className="mt-16">
					<h2 className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-mono mb-6">
						Certifications
					</h2>
					<div className="space-y-4">
						<Card>
							<div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
								<div>
									<h3 className="text-sm font-medium text-zinc-200">
										A Beginner's Guide to Linux Kernel Development (LFD103)
									</h3>
									<p className="text-xs text-zinc-500 mt-1">
										The Linux Foundation
									</p>
								</div>
								<Link
									href="https://www.credly.com/badges/36a1ec72-801d-4309-a237-d9505b476576/"
									target="_blank"
									className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors whitespace-nowrap"
								>
									View credential
									<ArrowUpRight className="w-3 h-3" />
								</Link>
							</div>
						</Card>
						<Card>
							<div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
								<div>
									<h3 className="text-sm font-medium text-zinc-200">
										C Programming Fundamentals — Pyjamabrah
									</h3>
									<p className="text-xs text-zinc-500 mt-1">
										Taught by Google engineers Piyush Itankar and Mahmad Bharmal
									</p>
								</div>
								<Link
									href="https://drive.google.com/drive/folders/1XsuvZvTWCEvBn0iHV7F41GOl6QI7UUVU?usp=sharing"
									target="_blank"
									className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors whitespace-nowrap"
								>
									View certificate
									<ArrowUpRight className="w-3 h-3" />
								</Link>
							</div>
						</Card>
					</div>
				</div>

				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0 mt-16" />

				{/* Currently reading */}
				<div className="mt-16">
					<h2 className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-mono mb-6">
						Currently reading
					</h2>
					<div className="space-y-4">
						{[
							{ title: "C Programming: A Modern Approach", author: "K.N. King" },
							{ title: "The Linux Programming Interface", author: "Michael Kerrisk" },
						].map((book) => (
							<div key={book.title} className="flex items-baseline gap-3">
								<span className="text-sm text-zinc-300 italic">{book.title}</span>
								<span className="text-xs text-zinc-600">— {book.author}</span>
							</div>
						))}
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
							label: "Resume",
							href: "/resume/ThamaraimanalanM_Resume.pdf",
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
