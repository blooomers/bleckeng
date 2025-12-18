"use client";

import PersonPage from "@/components/people/PersonPage";

export default function MatthewGBleckPage() {
  return (
    <PersonPage
      name="Matthew G. Bleck"
      title="Project Engineer"
      credentials="P.E."
      bio="Matt joined the Bleck team full-time in 2015 after graduating from the University of Illinois at Urbana-Champaign. He works on site due diligence, data management, and construction administration for various projects including bluff and ravine stabilization. Matt brings a fresh perspective and modern engineering approaches to the team."
      education="B.S. in Civil Engineering, University of Illinois at Urbana-Champaign"
      certificates={[
        "Licensed Professional Engineer in Connecticut",
        "Licensed Professional Engineer in Illinois",
        "Licensed Professional Engineer in Iowa",
        "Licensed Professional Engineer in Wisconsin",
        "FAA sUAS Part 107 Remote Pilot",
      ]}
      affiliations={[
        "American Society of Civil Engineers",
        "National Society of Professional Engineers",
        "Illinois Society of Professional Engineers",
        "Construction Specifications Institute",
      ]}
      expertise={[
        "Site Design",
        "Permitting",
        "Construction Administration",
        "Bluff and Ravine Stabilization",
        "Drone/UAS Operations",
      ]}
    />
  );
}

