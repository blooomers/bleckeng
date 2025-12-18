"use client";

import PersonPage from "@/components/people/PersonPage";

export default function PatrickJBleckPage() {
  return (
    <PersonPage
      name="Patrick J. Bleck"
      title="President"
      credentials="P.E., C.F.M."
      bio="Pat Bleck joined his family's company over 35 years ago and is currently the president of Bleck Engineering. He specializes in municipal engineering, including sanitary and storm sewer systems, water distribution, pavement evaluations, and road maintenance programs. With decades of experience, Pat brings a deep understanding of both the technical and business aspects of civil engineering, ensuring projects are completed successfully while maintaining the firm's commitment to excellence and client service."
      email="pbleck@bleckeng.com"
      education="B.S. in Civil Engineering, Bradley University, Peoria, Illinois"
      certificates={[
        "Licensed Professional Engineer in Illinois",
        "Lake County Stormwater Management Commission Enforcement Officer",
        "Certified Floodplain Manager, Illinois Association for Floodplain and Stormwater Management",
        "Licensed Septic Designer, Lake County Health Department",
        "Designated Erosion Control Inspector, Lake County, Illinois",
      ]}
      affiliations={[
        "National Society of Professional Engineers",
        "Illinois Society of Professional Engineers",
        "The Construction Specifications Institute",
        "American Water Works Association",
        "Illinois Association for Floodplain and Stormwater Management",
      ]}
      boards={[
        "Illinois Society of Professional Engineers (Treasurer and past President, Lake County)",
        "Technical Advisory Committees for Stormwater Management, Lake and McHenry counties",
      ]}
      expertise={[
        "Municipal Engineering",
        "Infrastructure Design",
        "Project Leadership",
        "Water Distribution",
        "Sewer Systems",
        "Stormwater Management",
        "Floodplain Management",
      ]}
    />
  );
}

