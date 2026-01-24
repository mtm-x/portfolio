import Link from "next/link";
import React from "react";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

export default function About() {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 pb-16">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						About Me
					</h2>
					<p className="mt-4 text-zinc-400">
						Final year ECE student at GCT Coimbatore, much interested in systems
						programming embedded systems and open source.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				{/* Bio Section */}
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
					<Card>
						<div className="p-8">
							<h3 className="text-xl font-bold text-zinc-100 mb-4">
								Background
							</h3>
							<div className="space-y-4 text-zinc-400">
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
										FOSSEE (Free/Libre and Open Source Software for Education),
										IIT Bombay
									</span>{" "}
									building a PyQt6 app for OpenModelica simulations.
								</p>
							</div>
						</div>
					</Card>

					<Card>
						<div className="p-8 flex items-center justify-center h-full">
							<img
								src="/images/portfolio/myself.jpeg"
								alt="Thamaraimanalan M"
								className="w-full max-w-xs h-auto object-cover rounded-lg"
							/>
						</div>
					</Card>
				</div>

				{/* Skills Section */}
				<div className="w-full h-px bg-zinc-800" />
				<div>
					<h3 className="text-2xl font-bold text-zinc-100 mb-6">
						Technical Skills
					</h3>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						<Card>
							<div className="p-6">
								<h4 className="text-lg font-semibold text-zinc-100 mb-4">
									Programming Languages
								</h4>
								<ul className="space-y-2 text-zinc-400">
									<li>• C</li>
									<li>• Python</li>
									<li>• Shell Scripting</li>
								</ul>
							</div>
						</Card>

						<Card>
							<div className="p-6">
								<h4 className="text-lg font-semibold text-zinc-100 mb-4">
									Embedded Systems & IoT
								</h4>
								<ul className="space-y-2 text-zinc-400">
									<li>• Linux Kernel</li>
									<li>• Raspberry Pi</li>
									<li>• Arm cortex-M</li>
									<li>• Qt Framework</li>
								</ul>
							</div>
						</Card>

						<Card>
							<div className="p-6">
								<h4 className="text-lg font-semibold text-zinc-100 mb-4">
									Tools & Technologies
								</h4>
								<ul className="space-y-2 text-zinc-400">
									<li>• Git</li>
									<li>• GitHub</li>
								</ul>
							</div>
						</Card>
					</div>
				</div>

				{/* Achievements Section */}
				<div className="w-full h-px bg-zinc-800" />
				<div>
					<h3 className="text-2xl font-bold text-zinc-100 mb-6">
						Achievements
					</h3>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<Card>
							<div className="p-6">
								<h4 className="text-lg font-semibold text-zinc-100">
									NXP AIM 2025 - Regional Finalist
								</h4>
								<p className="mt-2 text-zinc-400">
									Selected as regional finalist in NXP's Artificial Intelligence
									in Mobility competition. Competed in robotic treasure hunt
									challenges using ROS2, SLAM, and computer vision.
								</p>
								<Link
									href="https://drive.google.com/file/d/1K9f_vX-XXlP34EO03iPNR43R37R-Xxt2/view?usp=sharing"
									target="_blank"
									className="mt-3 inline-block text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
								>
									View Certificate →
								</Link>
							</div>
						</Card>

						<Card>
							<div className="p-6">
								<h4 className="text-lg font-semibold text-zinc-100">
									Qt Champion 2024 - 3rd Place
								</h4>
								<p className="mt-2 text-zinc-400">
									Recognized by Qt Group as one of the top 3 performers among
									100+ international teams in the global Qt-athon 2024
									competition.
								</p>
								<Link
									href="https://www.qt.io/blog/qtathon-2024-winners"
									target="_blank"
									className="mt-3 inline-block text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
								>
									Read More →
								</Link>
							</div>
						</Card>

						<Card>
							<div className="p-6 md:col-span-2">
								<h4 className="text-lg font-semibold text-zinc-100">
									Embedded Systems Certification
								</h4>
								<p className="mt-2 text-zinc-400">
									Completed C Programming fundamentals from Pyjamabrah course,
									taught by Google engineers Piyush Itankar and Mahmad Bharmal.
								</p>
								<Link
									href="https://drive.google.com/drive/folders/1XsuvZvTWCEvBn0iHV7F41GOl6QI7UUVU?usp=sharing"
									target="_blank"
									className="mt-3 inline-block text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
								>
									View Certificate →
								</Link>
							</div>
						</Card>
					</div>
				</div>

				{/* Experience Section */}
				<div className="w-full h-px bg-zinc-800" />
				<div>
					<h3 className="text-2xl font-bold text-zinc-100 mb-6">Experience</h3>
					<Card>
						<div className="p-6">
							<div className="flex flex-col md:flex-row md:items-start md:justify-between">
								<div>
									<h4 className="text-lg font-semibold text-zinc-100">
										Project Intern
									</h4>
									<p className="text-zinc-300">FOSSEE, IIT Bombay</p>
								</div>
								<p className="text-sm text-zinc-400 mt-2 md:mt-0">
									Feb 2025 - May 2025
								</p>
							</div>
							<p className="mt-4 text-zinc-400">
								Developing a cross-platform GUI for OpenModelica using Qt
								Framework. Collaborating with the FOSSEE team to improve
								OpenModelica's usability and performance. Enhanced the Qt/Python
								GUI's functionality and performance to improve user experience
								for OpenModelica's specific simulation and model selection
								processes.
							</p>
						</div>
					</Card>
				</div>

				{/* Links Section */}
				<div className="w-full h-px bg-zinc-800" />
				<div className="flex gap-4">
					<Link
						href="mailto:devthamaraimanalan.m@gmail.com"
						target="_blank"
						className="text-zinc-400 hover:text-zinc-100 transition-colors"
					>
						Email
					</Link>
					<Link
						href="https://github.com/mtm-x"
						target="_blank"
						className="text-zinc-400 hover:text-zinc-100 transition-colors"
					>
						GitHub
					</Link>
					<Link
						href="https://www.linkedin.com/in/mtm-x"
						target="_blank"
						className="text-zinc-400 hover:text-zinc-100 transition-colors"
					>
						LinkedIn
					</Link>
				</div>
			</div>
		</div>
	);
}
