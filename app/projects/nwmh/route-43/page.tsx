"use client";

import ProjectPage from "@/components/projects/ProjectPage";
import { projects } from "../../data";

export default function NwmhRoute43RightInRightOutPage() {
  const project = projects.find((p) => p.id === 19);
  if (!project) return null;
  return <ProjectPage project={project} allProjects={projects} />;
}


