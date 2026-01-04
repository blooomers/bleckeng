"use client";

import ProjectPage from "@/components/projects/ProjectPage";
import { projects } from "../data";

export default function WaukeganCommunityBankPage() {
  const project = projects.find((p) => p.id === 23);
  if (!project) return null;
  return <ProjectPage project={project} allProjects={projects} />;
}
