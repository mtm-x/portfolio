import { allProjects } from "@/.contentlayer/generated";
import type { Metadata } from "next";
import { Mdx } from "@/app/components/mdx";
import { notFound } from "next/navigation";
import { Header } from "./header";
import "./mdx.css";

export const revalidate = 60;

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug ?? p.path?.split("/").pop() ?? "",
		}));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
	const params = await props.params;
	const slug = params?.slug;
	const normalizedSlug = Array.isArray(slug) ? slug.join("/") : slug;
	const project = allProjects.find(
		(p) =>
			p.slug === normalizedSlug ||
			p.path === normalizedSlug ||
			p.path === `/projects/${normalizedSlug}` ||
			p.path?.endsWith(`/${normalizedSlug}`) ||
			p._raw.flattenedPath === `projects/${normalizedSlug}`,
	);

	return {
		title: project?.title,
		description: project?.description,
	};
}

export default async function PostPage(props: Props) {
	const params = await props.params;
	const slug = params?.slug;
	const normalizedSlug = Array.isArray(slug) ? slug.join("/") : slug;
	const project = allProjects.find(
		(project) =>
			project.slug === normalizedSlug ||
			project.path === normalizedSlug ||
			project.path === `/projects/${normalizedSlug}` ||
			project.path?.endsWith(`/${normalizedSlug}`) ||
			project._raw.flattenedPath === `projects/${normalizedSlug}`,
	);

	if (!project) {
		notFound();
	}

	return (
		<div className="bg-zinc-950 min-h-screen">
			<Header project={project} />

			<article className="px-4 py-12 mx-auto prose prose-invert prose-zinc prose-quoteless">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}
