"use client";

import PersonPage from "@/components/people/PersonPage";

export default function MichaelGBleckPage() {
  return (
    <PersonPage
      name="Michael G. Bleck"
      title="Vice President"
      credentials="P.E."
      bio="Mike has worked at Bleck Engineering for over 35 years. In his current role as vice president, Mike manages large-scale public and private projects from schematic design to final acceptance. Construction and bid document preparation, specifications, cost estimates, permitting, bidding and negotiating, as well as construction management and final acceptance of development improvements are within his purview. Healthcare is an area of expertise. He has overseen numerous projects at Northwestern Lake Forest Hospital and Grayslake Hospital. Municipalities also look to Mike to solve problems with sanitary and storm sewers, stormwater management, new and reconstructed roadways, parking lots, highways, site grading, soil erosion and sedimentation control. He also manages numerous private projects, both residential and commercial, some as big as 450 acres."
      personalInterests="When he's not working, Mike spends a lot of time woodworking and has built his own canoe and kayak. He loves to travel, enjoys the outdoors, and has a deep appreciation for nature and hiking."
      additionalPhotos={[
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/people/IMG_1984.jpg",
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/people/dad-2.jpg",
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/people/dad5-2.jpg",
      ]}
      email="mbleck@bleckeng.com"
      education="B.S. in Civil Engineering, Marquette University, Milwaukee, Wisconsin"
      image="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/people/GA5A5358.jpg"
      certificates={[
        "Licensed Professional Engineer (Illinois, Indiana, Michigan, Minnesota, Wisconsin)",
      ]}
      affiliations={[
        "American Society of Civil Engineers",
        "National Society of Professional Engineers",
        "Illinois Society of Professional Engineers",
        "The Construction Specifications Institute",
        "American Water Works Association",
      ]}
      boards={[
        "Cedar Vineyard Advisory Committee, City of Lake Forest",
        "Construction Codes Commission, City of Lake Forest",
        "Building Review Board, City of Lake Forest (past member)",
        "Forest Park Engineering and Technical Committee, City of Lake Forest (past member)",
        "Forest Park – South Beach Access Road Advisory Committee, City of Lake Forest",
      ]}
      expertise={[
        "Healthcare Projects",
        "Project Management",
        "Municipal Infrastructure",
        "Construction Administration",
        "Site Development",
      ]}
    />
  );
}
