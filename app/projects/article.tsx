import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
	project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
	const href = project.path ?? `/projects/${project.slug}`;
	return (
		<Link href={href}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					{project.repository && (
						<span className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-700/50 text-zinc-600 group-hover:text-zinc-400 group-hover:border-zinc-600 duration-500">
							Open Source
						</span>
					)}
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 leading-relaxed">
					{project.description}
				</p>
				<span className="mt-4 inline-flex items-center gap-1 text-xs text-zinc-600 group-hover:text-zinc-400 duration-500">
					Read more <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
				</span>
			</article>
		</Link>
	);
};
