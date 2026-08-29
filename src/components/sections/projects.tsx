// src/components/sections/projects.tsx
import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";

export async function Projects() {
  const projectRows = await db
    .select()
    .from(projects)
    .where(eq(projects.isPublished, true))
    .orderBy(asc(projects.displayOrder));

  return (
    <section id="projects" className="min-h-screen w-full bg-background py-24">
      <Container>
        <h2 className="text-2xl">Projects</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {projectRows.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
