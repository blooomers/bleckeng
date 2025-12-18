"use client";

import ProjectPage from "@/components/projects/ProjectPage";
import { projects } from "../data";

export default function VillageOfKenilworth2023PlanPage() {
  const project = projects.find((p) => p.id === 17);
  if (!project) return null;
  return <ProjectPage project={project} allProjects={projects} />;
}




