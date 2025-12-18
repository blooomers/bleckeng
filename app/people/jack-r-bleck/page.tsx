"use client";

import PersonPage from "@/components/people/PersonPage";

export default function JackRBleckPage() {
  return (
    <PersonPage
      name="Jack R. Bleck"
      title="Surveyor"
      credentials="P.L.S."
      bio="Jack R. Bleck was one of Jack Bleck's four sons who played a significant role in carrying forward the family legacy at Bleck Engineering. As part of the second generation of the Bleck family, Jack R. contributed to the firm's growth and continued commitment to excellence in civil engineering and land surveying."
      expertise={[
        "Land Surveying",
        "Boundary Surveys",
        "Topographic Mapping",
      ]}
    />
  );
}

