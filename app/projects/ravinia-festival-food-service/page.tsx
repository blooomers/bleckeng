"use client";

import ProjectPage from "@/components/projects/ProjectPage";
import { projects } from "../data";

export default function RaviniaFestivalFoodServicePage() {
  const project = projects.find((p) => p.id === 5);
  if (!project) return null;
  return <ProjectPage project={project} allProjects={projects} />;
}




