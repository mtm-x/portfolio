import { Award, Code2, Cpu, GraduationCap, Medal, ScrollText, User, Wrench } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Navigation } from "../components/nav";

export default function About() {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 pb-16">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
						About Me
					</h2>
					<p className="mt-4 text-zinc-400 leading-relaxed">
						Final year ECE student at GCT Coimbatore, passionate about systems
						programming, embedded systems, and open source development.
					</p>
				</div>
				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0" />

				{/* Bio Section */}
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
					<Card>
						<div className="p-8">
							<div className="flex items-center gap-3 mb-4">
								<div className="p-2 rounded-lg bg-zinc-800/50">
									<User className="w-5 h-5 text-zinc-400" />
								</div>
								<h3 className="text-xl font-bold text-zinc-100">
									Background
								</h3>
							</div>
							<div className="space-y-4 text-zinc-400 leading-relaxed">
								<p>
									Final year{" "}
									<span className="text-zinc-100 font-semibold">
										ECE student
									</span>{" "}
									at GCT Coimbatore. Currently doing a course on embedded
									systems and Linux kernel by Pyjamacafe (taught by Google
									engineers).
								</p>
								<p>
									I work with{" "}
									<span className="text-zinc-100 font-semibold">C</span> mostly,
									plus Python and shell scripts for automation. Did a 4-month
									internship at{" "}
									<span className="text-zinc-100 font-semibold">
										FOSSEE, IIT Bombay
									</span>{" "}
									building a PyQt6 app for OpenModelica simulations.
								</p>
							</div>
						</div>
					</Card>

					<Card>
						<div className="p-8 flex items-center justify-center h-full">
							<div className="relative group/img">
								<div className="absolute -inset-1 bg-gradient-to-r from-zinc-700/50 to-zinc-800/50 rounded-lg blur-sm group-hover/img:from-zinc-600/50 group-hover/img:to-zinc-700/50 transition-all duration-500" />
								<img
									src="/images/portfolio/myself.jpeg"
									alt="Thamaraimanalan M"
									className="relative w-full max-w-xs h-auto object-cover rounded-lg"
								/>
							</div>
						</div>
					</Card>
				</div>

				{/* Skills Section */}
				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0" />
				<div>
					<h3 className="text-2xl font-bold text-zinc-100 mb-8 font-display">
						Technical Skills
					</h3>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						<Card>
							<div className="p-6">
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 rounded-lg bg-zinc-800/50">
										<Code2 className="w-[18px] h-[18px] text-zinc-400" />
									</div>
									<h4 className="text-lg font-semibold text-zinc-100">
										Languages
									</h4>
								</div>
								<div className="space-y-3">
									{["C", "Python", "Shell Scripting"].map((skill) => (
										<div key={skill} className="flex items-center gap-3">
											<div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
											<span className="text-zinc-400 text-sm">{skill}</span>
										</div>
									))}
								</div>
							</div>
						</Card>

						<Card>
							<div className="p-6">
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 rounded-lg bg-zinc-800/50">
										<Cpu className="w-[18px] h-[18px] text-zinc-400" />
									</div>
									<h4 className="text-lg font-semibold text-zinc-100">
										Embedded & Systems
									</h4>
								</div>
								<div className="space-y-3">
									{["Linux Kernel", "Raspberry Pi", "ARM Cortex-M", "Qt Framework"].map((skill) => (
										<div key={skill} className="flex items-center gap-3">
											<div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
											<span className="text-zinc-400 text-sm">{skill}</span>
										</div>
									))}
								</div>
							</div>
						</Card>

						<Card>
							<div className="p-6">
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 rounded-lg bg-zinc-800/50">
										<Wrench className="w-[18px] h-[18px] text-zinc-400" />
									</div>
									<h4 className="text-lg font-semibold text-zinc-100">
										Tools
									</h4>
								</div>
								<div className="space-y-3">
									{["Git & GitHub", "GDB Debugger", "Make / CMake", "VS Code & Vim"].map((skill) => (
										<div key={skill} className="flex items-center gap-3">
											<div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
											<span className="text-zinc-400 text-sm">{skill}</span>
										</div>
									))}
								</div>
							</div>
						</Card>
					</div>
				</div>

				{/* Education Section */}
				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0" />
				<div>
					<h3 className="text-2xl font-bold text-zinc-100 mb-8 font-display">
						Education
					</h3>
					<Card>
						<div className="p-6 md:p-8">
							<div className="flex flex-col md:flex-row md:items-start md:justify-between">
								<div className="flex items-start gap-4">
									<div className="p-2 rounded-lg bg-zinc-800/50 mt-0.5">
										<GraduationCap className="w-5 h-5 text-zinc-400" />
									</div>
									<div>
										<h4 className="text-lg font-semibold text-zinc-100">
											B.E. Electronics & Communication Engineering
										</h4>
										<p className="text-zinc-300 text-sm mt-1">
											Government College of Technology, Coimbatore
										</p>
									</div>
								</div>
								<span className="text-sm text-zinc-500 mt-2 md:mt-0 md:ml-4 whitespace-nowrap">
									2022 — 2026
								</span>
							</div>
						</div>
					</Card>
				</div>

				{/* Achievements Section */}
				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0" />
				<div>
					<h3 className="text-2xl font-bold text-zinc-100 mb-8 font-display">
						Achievements
					</h3>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<Card>
							<div className="p-6">
								<div className="flex items-start gap-3">
									<div className="p-2 rounded-lg bg-zinc-800/50 mt-0.5">
										<Award className="w-5 h-5 text-zinc-400" />
									</div>
									<div>
										<h4 className="text-lg font-semibold text-zinc-100">
											NXP AIM 2025 — Regional Finalist
										</h4>
										<p className="mt-2 text-zinc-400 text-sm leading-relaxed">
											Selected as regional finalist in NXP's Artificial Intelligence
											in Mobility competition. Competed in robotic treasure hunt
											challenges using ROS2, SLAM, and computer vision.
										</p>
										<Link
											href="https://drive.google.com/file/d/1K9f_vX-XXlP34EO03iPNR43R37R-Xxt2/view?usp=sharing"
											target="_blank"
											className="mt-3 inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
										>
											View Certificate <span aria-hidden="true">→</span>
										</Link>
									</div>
								</div>
							</div>
						</Card>

						<Card>
							<div className="p-6">
								<div className="flex items-start gap-3">
									<div className="p-2 rounded-lg bg-zinc-800/50 mt-0.5">
										<Medal className="w-5 h-5 text-zinc-400" />
									</div>
									<div>
										<h4 className="text-lg font-semibold text-zinc-100">
											Qt Champion 2024 — 3rd Place
										</h4>
										<p className="mt-2 text-zinc-400 text-sm leading-relaxed">
											Recognized by Qt Group as one of the top 3 performers among
											100+ international teams in the global Qt-athon 2024.
										</p>
										<Link
											href="https://www.qt.io/blog/qtathon-2024-winners"
											target="_blank"
											className="mt-3 inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
										>
											Read More <span aria-hidden="true">→</span>
										</Link>
									</div>
								</div>
							</div>
						</Card>

						<Card>
							<div className="p-6 md:col-span-2">
								<div className="flex items-start gap-3">
									<div className="p-2 rounded-lg bg-zinc-800/50 mt-0.5">
										<ScrollText className="w-5 h-5 text-zinc-400" />
									</div>
									<div>
										<h4 className="text-lg font-semibold text-zinc-100">
											Embedded Systems Certification
										</h4>
										<p className="mt-2 text-zinc-400 text-sm leading-relaxed">
											Completed C Programming fundamentals from Pyjamabrah course,
											taught by Google engineers Piyush Itankar and Mahmad Bharmal.
										</p>
										<Link
											href="https://drive.google.com/drive/folders/1XsuvZvTWCEvBn0iHV7F41GOl6QI7UUVU?usp=sharing"
											target="_blank"
											className="mt-3 inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
										>
											View Certificate <span aria-hidden="true">→</span>
										</Link>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>

				{/* Experience Section */}
				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0" />
				<div>
					<h3 className="text-2xl font-bold text-zinc-100 mb-8 font-display">
						Experience
					</h3>
					<Card>
						<div className="p-6 md:p-8">
							<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
								<div className="flex items-start gap-4">
									<div className="hidden sm:flex flex-col items-center">
										<div className="w-3 h-3 rounded-full border-2 border-zinc-500 bg-zinc-900" />
										<div className="w-px h-full bg-zinc-700 mt-1" />
									</div>
									<div>
										<h4 className="text-lg font-semibold text-zinc-100">
											Project Intern
										</h4>
										<p className="text-zinc-300 text-sm">FOSSEE, IIT Bombay</p>
									</div>
								</div>
								<span className="text-sm text-zinc-500 mt-2 md:mt-0 md:ml-4 whitespace-nowrap">
									Feb 2025 — May 2025
								</span>
							</div>
							<p className="text-zinc-400 text-sm leading-relaxed sm:ml-7">
								Developed a cross-platform GUI for OpenModelica using Qt
								Framework. Collaborated with the FOSSEE team to improve
								OpenModelica's usability and performance. Enhanced the Qt/Python
								GUI's functionality and performance to improve user experience
								for OpenModelica's simulation and model selection processes.
							</p>
						</div>
					</Card>
				</div>

				{/* Links Section */}
				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0" />
				<div className="flex flex-wrap items-center gap-6">
					<Link
						href="mailto:devthamaraimanalan.m@gmail.com"
						target="_blank"
						className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm"
					>
						Email →
					</Link>
					<Link
						href="https://github.com/mtm-x"
						target="_blank"
						className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm"
					>
						GitHub →
					</Link>
					<Link
						href="https://www.linkedin.com/in/mtm-x"
						target="_blank"
						className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm"
					>
						LinkedIn →
					</Link>
					<span className="text-zinc-700 hidden sm:inline">·</span>
					<Link
						href="/resume/ThamaraimanalanM_Resume.pdf"
						target="_blank"
						className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm"
					>
						Download Resume →
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}
