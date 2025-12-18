"use client";

import ProjectPage from "@/components/projects/ProjectPage";
import { projects } from "../data";

export default function RegentsRowPage() {
  const project = projects.find((p) => p.id === 9);
  if (!project) return null;
  return <ProjectPage project={project} allProjects={projects} />;
}




