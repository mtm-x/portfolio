import { notFound } from "next/navigation";
import { allProjects } from "@/.contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug ?? p.path?.split("/").pop() ?? "",
    }));
}

export default async function PostPage({ params }: Props) {
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
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={0} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
