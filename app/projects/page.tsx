import { allProjects } from "@/.contentlayer/generated";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Navigation } from "../components/nav";
import { Article } from "./article";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Projects by Thamaraimanalan M — embedded systems, kernel modules, and systems programming.",
};

export const revalidate = 60;
export default async function ProjectsPage() {
	const sorted = allProjects
		.filter((p) => p.published)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	const featured = sorted[0];
	const rest = sorted.slice(1);

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<span className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-mono">
						Portfolio
					</span>
					<h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400 leading-relaxed">
						Embedded systems, kernel modules, and systems programming —
						built with C and open source tools.
					</p>
				</div>
				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0" />

				{/* Featured project */}
				{featured && (
					<div className="mx-auto lg:mx-0">
						<h3 className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-mono mb-4">
							Latest
						</h3>
						<Card>
							<Link href={featured.path ?? `/projects/${featured.slug}`}>
								<article className="relative w-full p-6 md:p-12">
									<div className="flex items-center justify-between gap-2 mb-4">
										<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
											{featured.date ? (
												<time dateTime={new Date(featured.date).toISOString()}>
													{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(featured.date))}
												</time>
											) : (
												<span>SOON</span>
											)}
										</span>
										<span className="text-xs px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-500">
											Featured
										</span>
									</div>
									<h2 className="z-20 text-2xl font-medium duration-1000 lg:text-4xl text-zinc-200 group-hover:text-white font-display">
										{featured.title}
									</h2>
									<p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 max-w-2xl leading-relaxed">
										{featured.description}
									</p>
									<span className="mt-6 inline-flex items-center gap-1 text-sm text-zinc-500 group-hover:text-zinc-300 duration-500">
										Read more <span aria-hidden="true">→</span>
									</span>
								</article>
							</Link>
						</Card>
					</div>
				)}

				<div className="w-full h-px bg-gradient-to-r from-zinc-800/0 via-zinc-800 to-zinc-800/0" />

				{/* Rest of projects */}
				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{rest
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{rest
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{rest
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
