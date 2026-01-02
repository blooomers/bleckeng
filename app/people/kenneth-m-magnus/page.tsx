"use client";

import PersonPage from "@/components/people/PersonPage";

export default function KennethMMagnusPage() {
  return (
    <PersonPage
      name="Kenneth M. Magnus"
      title="Project Manager"
      credentials="P.E., C.F.M."
      bio="After 32 years as an engineer with Chicago, Villa Park, and Lake Forest, Ken joined Bleck in 2011 to work on municipal engineering, project management, and bridge inspections. His extensive municipal experience brings valuable perspective to both public and private sector projects."
      expertise={[
        "Municipal Engineering",
        "Bridge Inspections",
        "Project Management",
        "Public Works",
      ]}
    />
  );
}








