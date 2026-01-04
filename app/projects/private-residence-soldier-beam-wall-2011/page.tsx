"use client";

import ProjectPage from "@/components/projects/ProjectPage";
import { projects } from "../data";

export default function PrivateResidenceSoldierBeamWall2011Page() {
  const project = projects.find((p) => p.id === 18);
  if (!project) return null;
  return <ProjectPage project={project} allProjects={projects} />;
}







