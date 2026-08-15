import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { ProjectDetailView } from "@/components/ProjectDetailView";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.shortTitle}, Rahma Soltani`,
    description: project.tagline.en,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <ProjectDetailView project={project} />;
}
