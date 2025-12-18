"use client";

import PersonPage from "@/components/people/PersonPage";

export default function WilliamJBleckPage() {
  return (
    <PersonPage
      name="William J. Bleck"
      title="Field Crew Chief"
      credentials="Professional Surveyor"
      bio="Bill has been a member of the firm since 1979 and spends the vast majority of his time out of the office surveying land throughout Northern Illinois and Southeastern Wisconsin. With over 45 years of experience, Bill brings unparalleled expertise in field surveying and has been instrumental in countless projects throughout the region."
      affiliations={[
        "Illinois Professional Land Surveyors Association",
        "National Society of Professional Surveyors",
      ]}
      expertise={[
        "Land Surveying",
        "Boundary Surveys",
        "Construction Layout",
        "Topographic Mapping",
      ]}
    />
  );
}

