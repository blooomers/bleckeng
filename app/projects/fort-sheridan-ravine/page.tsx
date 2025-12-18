"use client";

import ProjectPage from "@/components/projects/ProjectPage";
import { projects } from "../data";

export default function FortSheridanRavinePage() {
  const project = projects.find((p) => p.id === 3);
  if (!project) return null;
  return <ProjectPage project={project} allProjects={projects} />;
}




