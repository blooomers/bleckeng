export type ProjectCategory =
  | "Healthcare"
  | "Municipal"
  | "Education"
  | "Commercial"
  | "Residential"
  | "Recreation"
  | "Transportation"
  | "Highway"
  | "Restoration"
  | "Stormwater"
  | "Surveying"
  | "Master Planning";

export interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  categories: ProjectCategory[];
  description: string;
  scope: string[];
  image?: string;
  additionalImages?: string[];
  path?: string;
  featured?: boolean;
  awards?: string[];
  clients?: string[];
  permittingAgencies?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "USDA – National Nursery System Optimization Planning",
    location: "National (8 Locations)",
    year: "2024",
    categories: ["Master Planning"],
    description:
      "Providing master planning services to prepare the U.S. Forest Service for the future and meet REPLANT Act targets. The project focuses on optimizing 8 nursery and seed extractory locations across the United States to support planting 1.2 billion trees.",
    scope: [
      "Master Planning",
      "Facility Assessment",
      "Operational Optimization",
      "Sustainability Planning",
    ],
    path: "/projects/usda-nursery",
    featured: true,
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/USDA/Lucky%20Peak/5734200698_e48e24924d.webp",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/USDA/Lucky%20Peak/5734200698_e48e24924d.webp",
    ],
  },
  {
    id: 2,
    title: "Northwestern Lake Forest Hospital – Campus Revitalization",
    location: "Lake Forest, IL",
    year: "2017",
    categories: ["Healthcare", "Master Planning", "Stormwater"],
    description:
      "Bleck Engineering provided civil engineering services for a 160-acre campus featuring a new 483,500 square foot state-of-the-art hospital. The project integrated medical care with health and wellness through walking and biking trails and community spaces.",
    scope: [
      "Master Planning",
      "Drainage Study",
      "Construction Documents",
      "Permitting",
    ],
    path: "/projects/nwmh",
    featured: true,
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/hospital.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/hospital.jpg",
    ],
  },
  {
    id: 3,
    title: "Fort Sheridan Ravine & Coastal Restoration",
    location: "Along Lake Michigan in Lake Forest & Highland Park, IL",
    year: "2015",
    categories: ["Surveying", "Restoration", "Stormwater"],
    description:
      "In 2015, John Keno & Company was awarded a 5-year construction contract for ravine and coastal restoration by the U.S. Army Corps of Engineers. John Keno in turn looked to Bleck to layout new ravine thread lines, stone step pools, rock riffles, earth retaining structures, and walkways. As part of their contract with the Army the contractor was required to submit shop drawings for riprap that were sized and signed by a professional engineer. Bleck was able to leverage their knowledge of the immediate watershed in order to get the proper sizing of the stone to keep the construction project on schedule. The Fort Sheridan Ravine and Coastal Section 506 Great Lakes Fishery and Ecosystem Restoration Project spanned across four main ravines and 1.5 miles of coast line on Lake Michigan.",
    scope: [
      "Supplemental Topographic Survey",
      "Construction Staking and Layout",
      "Civil Engineering – Shop Drawings & Design Calculations",
      "Stormwater Management",
    ],
    path: "/projects/fort-sheridan-ravine",
    featured: true,
    clients: ["John Keno & Company"],
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/FORT-SHERIDAN-RAVINE/Fort-Sheridan-Surveying-1.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/FORT-SHERIDAN-RAVINE/Fort-Sheridan-Surveying-2.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/FORT-SHERIDAN-RAVINE/Fort-Sheridan-Surveying-3.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/FORT-SHERIDAN-RAVINE/Fort-Sheridan-Surveying-4.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/FORT-SHERIDAN-RAVINE/Fort-Sheridan-Surveying-5.jpg",
    ],
  },
  {
    id: 4,
    title: "Forest Park Restoration",
    location: "Lake Forest, IL",
    year: "2014",
    categories: ["Recreation"],
    description:
      "The City of Lake Forest approved a comprehensive Forest Park Master Plan prepared by Stephen Stimson Associates with the goal to restore, enhance and preserve the City's preeminent park. Founded in 1856 by the City's Original Planner Almerin Hotchkiss \"as a natural resource for passive enjoyment\", Forest Park was created as the City of Lake Forest's first conserved open space. In 1896 the City hired O.C. Simonds to develop a plan for the park.\n\nThe Master Plan serves as a guide to future decisions about Forest Park, honoring the legacy of Hotchkiss and Simonds and their influence upon the park, while acknowledging a century of change and the need to rehabilitate the park to meet today's passive recreation needs.\n\nBleck Engineering prepared construction documents for this 37 acre park to meet the Vision and Goals identified in the Master Plan. Construction commenced in 2013 and the park was reopened to the public in 2014.\n\nEnvironmental stewardship was at the center of the design as the area is directly tributary to our most valuable resource, Lake Michigan. The reduction of impervious area and the enhancement of the stormwater treatment train and the restoration of native areas. The realignment of walking paths and the roadway offers new vistas from the tableland out to Lake Michigan.",
    scope: [
      "Master Planning",
      "Topographic Survey",
      "Civil Engineering – Construction Documents",
      "Site Grading",
      "Site Utilities",
      "Roadways and Parking",
      "Pedestrian & Bike Trails",
      "Best Management Practices",
    ],
    path: "/projects/forest-park-restoration",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/FOREST-PARK/forest-park.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/FOREST-PARK/forest-park.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/FOREST-PARK/forest-park1.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/FOREST-PARK/forest-park2.jpg",
    ],
  },
  {
    id: 5,
    title: "Ravinia Festival Food Service Building",
    location: "Ravinia Festival, Highland Park, IL",
    year: "2007",
    categories: ["Commercial"],
    description:
      "Bleck Engineering was selected by Lohan Anderson LLC to provide civil engineering design services for a 43,200 square foot food service and dining facility at Ravinia Festival. Careful planning and coordination had to be taken in order to ensure that construction would have minimal impact on the visitor experience and be complete by the beginning of the upcoming season. Plans were prepared in a timely fashion to allow for the existing food pavilion to be demolished at the conclusion of the 2006 season. Construction ran through the winter and the new Food Service And Dining Pavilion was open for business at the start of the 2007 season.\n\nBleck Engineering was responsible for surveying the Festival grounds, preparing all site civil related construction documents, assisting in the permitting and entitlement process, construction administration, and construction staking and layout. The new facility includes 6,000 square feet of outdoor dining patios that were thoughtfully arranged around several significant existing oak trees. Site paths were reconfigured to allow for the better movement of the visitors throughout the grounds and all utility services to the building were upgraded.",
    scope: [
      "Surveying",
      "Topographic Survey",
      "Plat of Survey",
      "Plat of Consolidation",
      "Civil Engineering – Construction Documents",
      "Permitting",
      "Construction staking and layout",
    ],
    path: "/projects/ravinia-festival-food-service",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/RAVINIA/L1230660.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/RAVINIA/L1230629.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/RAVINIA/L1230630.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/RAVINIA/L12307421.jpg",
    ],
    awards: [
      "Chicago Building Congress – New Construction Suburbs – Merit Award Winner 2008",
      "Midwest Construction – Best of 2007",
    ],
  },
  {
    id: 6,
    title: "Lake Forest Academy – Athletic Field Improvements",
    location: "Lake Forest, IL",
    year: "2018",
    categories: ["Recreation"],
    description:
      "In the fall of 2016, BLECK was approached by Lake Forest Academy to conduct a feasibility study for converting existing natural turf playing fields on campus to synthetic turf fields. The Academy had an issue where their existing turf fields frequently flooded and they would lose days of games and practice time due to poor field conditions.\n\nAfter the feasibility study was completed, construction documents were created for a 3.5 acre multipurpose athletic field. The design of the proposed field cross-section enabled the client to construct the new field while meeting all water quality and run-off reduction requirements by authorities having jurisdiction. The preparation of the construction documents allowed for the leadership to present a shovel ready project to the school board.\n\nAfter fundraising efforts were complete the field was constructed during the summer of 2018 and was ready for students and teams to use at the start of the school year. The new multi-purpose athletic field features 6 fields that meet NFHS standards including, 2 Field Hockey Fields, 1 Boy's Lacrosse Field, 1 Girls Lacrosse Field, 1 Softball Field, and 1 Soccer Field.\n\nThe new field design allows teams to practice and play almost immediately after rain events compared to the multiple day wait the teams used to have when it was a natural turf field.",
    scope: [
      "Topographic Mapping",
      "Drainage Study & Stormwater Management",
      "Civil Engineering – Construction Documents",
      "Site Grading",
      "Site Utilities",
      "Artificial Turf Field",
      "Permitting",
      "Construction Engineering / Administration",
      "Construction Staking and Layout",
      "Aerial Photography and Mapping",
    ],
    clients: [
      "Lake Forest Academy",
      "Altounian Construction",
      "DK Contractors",
    ],
    permittingAgencies: [
      "Lake County Stormwater Management Commission",
      "City of Lake Forest",
    ],
    path: "/projects/lake-forest-academy-athletic-field",
    image: "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/LFA/lfa.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/LFA/lfa-1.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/LFA/lfa-2.jpg",
    ],
  },
  {
    id: 7,
    title: "Walden Ravine Stabilization",
    location: "Ringwood Rd, Lake Forest, IL",
    year: "2019",
    categories: ["Restoration", "Municipal", "Surveying", "Stormwater"],
    description:
      "The City of Lake Forest identified a critical infrastructure issue when a headwall at the upstream end of the culvert beneath the Ringwood Road land bridge collapsed, obstructing water flow through Walden Ravine. In response, Bleck Engineering was retained to evaluate the structural stability of the ravine and conduct a comprehensive survey of both its upstream and downstream segments. The culvert, a brick structure over a century old, was in need of substantial rehabilitation. The project was approached through a multi-phase design process focused on restoring aging infrastructure, improving water quality within the ravine, and enhancing roadway safety.\n\nOn the upstream side of the ravine, the design included the construction of a new concrete headwall and the restoration of approximately 130 linear feet of stream channel. This restoration incorporated hydraulic features such as rock riffles and stone step pools to moderate water flow, along with channel armoring using glacial and fluvial stone to control erosion. Toe protection was also provided, incorporating crevices designed to support amphibian habitat. Additionally, the ravine bottom was stabilized and revitalized through the use of native plantings to support long-term ecological health. To preserve the existing culvert, a spray-in-place pipe lining method was used to reinforce its structural integrity while minimizing disturbance to the surrounding environment.\n\nOn the downstream side, a new storm sewer system was installed to effectively manage roadway drainage. This system included three separate drainage structures, each protected with glacial and fluvial stone to dissipate energy and prevent scour along the ravine slopes. Toe protection was further reinforced with the installation of gabion baskets and additional stone armoring, ensuring long-term slope stability.\n\nAs part of the roadway improvements, approximately 300 feet of Ringwood Road was milled and resurfaced. A B6.12 combination curb and gutter system was installed along the land bridge to control stormwater runoff and reduce erosion along the ravine slopes. To improve vehicular safety, timber guardrails were placed along both sides of the roadway, addressing the steep 35-foot drop from the bridge to the ravine bed below.\n\nFollowing completion of the design, Bleck Engineering provided permitting assistance to the City of Lake Forest, coordinating with Lake County Stormwater Management Commission, the Illinois Environmental Protection Agency, and the U.S. Army Corps of Engineers to secure all necessary regulatory approvals for the project.",
    scope: [
      "Land Surveying",
      "sUAS Aerial Mapping",
      "Drainage Study & Stormwater Management",
      "Wetland Delineation and Permitting",
      "Civil Engineering – Construction Documents",
      "Site Grading",
      "Site Utilities",
      "Roadways",
      "Guardrails",
      "Ravine Stabilization",
      "Streambank Stabilization",
      "Demolition Plans",
      "Earth Retention System",
      "Soil Erosion & Sediment Control",
      "Permitting",
      "Value Engineering",
      "Bidding & Negotiating",
    ],
    clients: ["City of Lake Forest"],
    permittingAgencies: [
      "City of Lake Forest",
      "Illinois Environmental Protection Agency",
      "Lake County Stormwater Management Commission",
      "U.S. Army Corps of Engineers",
    ],
    path: "/projects/walden-ravine-stabilization",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/WALDEN/IMG_3137.jpg",
    additionalImages: [],
  },
  {
    id: 8,
    title: "Waukegan Municipal Beach",
    location: "Waukegan, IL",
    year: "2017",
    categories: ["Surveying"],
    description:
      "In the fall of 2017 the City of Waukegan Engineering Department reached out to Bleck to complete a plat of survey with topographic information of their municipal beach. The survey encompassed over 60 acres of land and was done on International Great Lakes Datum 1985 (IGLD85). Bleck Engineering also captured aerial imagery of the entire property to aid in future planning for the city.",
    scope: [
      "Surveying",
      "Plat of Survey",
      "Topographic Survey",
      "Aerial Mapping / Photography",
    ],
    clients: ["City of Waukegan"],
    path: "/projects/waukegan-municipal-beach",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/WAUKEGAN-MUNICIPAL-BEACH/DSC01317.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/WAUKEGAN-MUNICIPAL-BEACH/DSC00989.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/WAUKEGAN-MUNICIPAL-BEACH/DSC01089.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/WAUKEGAN-MUNICIPAL-BEACH/DSC01295.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/WAUKEGAN-MUNICIPAL-BEACH/DSC01733.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/WAUKEGAN-MUNICIPAL-BEACH/DSC01304.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/WAUKEGAN-MUNICIPAL-BEACH/DSC01800.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/WAUKEGAN-MUNICIPAL-BEACH/DSC01937.jpg",
    ],
  },
  {
    id: 9,
    title: "Regents Row",
    location: "1000 North Western Avenue, Lake Forest, IL",
    year: "2007",
    categories: ["Residential"],
    description:
      "This 2 acre site was a former building material yard located near the Central Business District of Lake Forest. The site was redeveloped as a luxury, 22 unit, rowhouse development with two end unit commercial spaces within walking distance of shops, restaurants, train station and beach.",
    scope: [
      "Surveying",
      "Civil Engineering – Construction Documents",
      "Permitting",
      "Construction Engineering / Administration",
      "Construction Staking and Layout",
      "Plat of Condominium",
      "Plat of Easement",
    ],
    clients: ["Windward Builders LLC"],
    path: "/projects/regents-row",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/REGENTS-ROW/L1230305.jpg",
  },
  {
    id: 10,
    title: "Northwestern Medicine Grayslake – ASTC Parking Lot",
    location: "Grayslake, IL",
    year: "2016",
    categories: ["Healthcare", "Transportation"],
    description:
      "Rehabilitation design and build for the Ambulatory Surgery Treatment Center parking facilities.",
    scope: ["Design/Build", "Healthcare", "Pavement Design"],
    path: "/projects/northwestern-medicine-grayslake-astc",
  },
  {
    id: 11,
    title: "Pioneer Park Wetland Restoration",
    location: "1212 S. Washington Street, Naperville, IL",
    year: "2012",
    categories: ["Stormwater"],
    description:
      "Pioneer Park is nestled along the DuPage River in Naperville. Bleck Engineering was tasked with the design of a two phase habitat restoration plan along the river. The design work for phase one included shoreline stabilization and boulder riffle outcroppings along the DuPage River. Phase two improvements included wet prairie, riparian woodland, and non-riparian woodland restoration within the floodway of the river.",
    scope: [
      "Drainage Study & Stormwater Management",
      "Civil Engineering – Construction Documents",
      "Site Grading",
      "Habitat Restoration",
      "Shoreline Stabilization",
      "Best Management Practices",
      "Permitting",
    ],
    clients: ["Naperville Park District"],
    path: "/projects/pioneer-park-wetland-restoration",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/PIONEER-PARK/Pioneer-Park-1.jpg",
  },
  {
    id: 12,
    title: "Lake Forest Metra Station",
    location: "Lake Forest, IL",
    year: "2012",
    categories: ["Transportation", "Municipal"],
    description:
      "Design-build services for station improvements, enhancing accessibility and commuter experience.",
    scope: ["Design/Build", "Public/Municipal", "Transportation"],
    path: "/projects/lake-forest-metra-station",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/LF-METRA/L1230332.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/LF-METRA/L1230335.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/LF-METRA/L1230468.jpg",
    ],
  },
  {
    id: 13,
    title: "Northwestern LFH – Support Services Building",
    location: "Lake Forest, IL",
    year: "2017",
    categories: ["Healthcare"],
    description:
      "Site engineering for the new support services building and associated Parking Lot 4.",
    scope: ["Healthcare", "Site Development", "Stormwater"],
    path: "/projects/northwestern-lfh-support-services",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/SUPPORT-SERVICES/IMG_4394.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/SUPPORT-SERVICES/IMG_4445.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/SUPPORT-SERVICES/IMG_84011.jpg",
    ],
  },
  {
    id: 14,
    title: "Private Residence – Soldier Beam and Lagging Wall",
    location: "North Shore of Illinois",
    year: "2012",
    categories: ["Residential"],
    description:
      "Bleck Engineering was hired to design a retaining wall to replace a timber retaining wall that was failing. The property overlooks Lake Michigan with a 65 foot high bluff. The home is situated 40 feet from an existing timber retaining wall that was failing.\n\nThe new wall is 140' in length, with an exposed face 13' high. The wall was designed as a soldier pile retaining wall with drilled in steel H-piles and white oak timber lagging.",
    scope: [
      "Topographic Survey",
      "Ravine and Retaining Wall Inspection",
      "Civil Engineering – Construction Documents",
      "Site Grading",
      "Site Utilities",
      "Soldier Beam and Lagging Retaining Wall",
      "Permitting",
      "Bidding & Negotiating",
      "Construction Engineering / Administration",
      "Construction Layout",
    ],
    path: "/projects/private-residence-soldier-beam-wall",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/SOLDIER-PILE-1/1.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/SOLDIER-PILE-1/1.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/SOLDIER-PILE-1/2.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/SOLDIER-PILE-1/3.jpg",
    ],
  },
  {
    id: 18,
    title: "Private Residence – Soldier Beam and Lagging Wall",
    location: "North Shore of Illinois",
    year: "2011",
    categories: ["Residential"],
    description:
      "Bleck Engineering was approached by a homeowner who had a failing concrete and timber retaining wall that went right up to the detached garage and was 8 feet away from the residence. After assessing the site with the homeowner and gathering topographic and soil information, Bleck proposed that a new retaining wall be built in front of the existing failing wall.\n\nA soldier beam and lagging wall with concrete panels and a channel cap was chosen to help protect the real estate for the long term. The new wall is 400' in length with a maximum exposed face of 12' in height. Construction plans were designed to try and minimize the disruption to the table land as well as to provide an aesthetic quality to neighboring properties.",
    scope: [
      "Bluff and Retaining Wall Inspection",
      "Civil Engineering – Construction Documents",
      "Site Grading",
      "Site Utilities",
      "Soldier Beam and Lagging Retaining Wall",
      "Permitting",
      "Bidding & Negotiating",
      "Construction Engineering / Administration",
      "Construction Layout",
    ],
    path: "/projects/private-residence-soldier-beam-wall-2011",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/SOLDIER-PILE-2/HP-RetainingWall-3.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/SOLDIER-PILE-2/HP-RetainingWall-3.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/SOLDIER-PILE-2/HP-RetainingWall-2.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/SOLDIER-PILE-2/HP-RetainingWall-4.jpg",
    ],
  },
  {
    id: 15,
    title: "Dalitsch Pond Enhancements",
    location: "800 N. Field Drive, Lake Forest, IL",
    year: "2010",
    categories: ["Stormwater"],
    description:
      "This 3.62 acre site was a former 1960's borrow pit used for the construction of the Illinois Tollway. There are 199 acres tributary to the Dalitsch pond, which is classified as a Waters of the United States. The majority of the 199-ac watershed to the pond is from off-site areas comprised of high and low/medium density development, including the I-94 tollway. The pond is located within the Regulatory Floodplain and is directly upstream of the Middlefork Savannah (an extremely high quality wetland complex). The pond condition (water quality and shoreline) was extremely degraded.\n\nBased on its location, the pond was identified as having potential to filter and improve water quality entering the Middlefork Savanna Wetland. The objective of the project was to preserve and protect the high quality Middlefork Savanna Wetland by improving water quality entering the wetland. The Middlefork Savanna is considered the highest quality tallgrass savanna of its kind in the nation. The site also provides habitat for the Blanding's turtle, a threatened and endangered species.\n\nThe project included converting the existing pond into an emergent complex. This was accomplished by raising the bottom elevation of the pond and creating varying planting zones including:\n\nBlanding Turtle Habitat (deep open water)\nAquatic\nEmergent\nUpland Dry Prairie\nWet Prairie (shallow mudflats)\n\nShallow mudflats were used to maximize the flow path length from the primary inlet to the outlet. Funding sources included IEPA 319 Grant, Lake County Stormwater Management Commission – Wetland Restoration Fund, City of Lake Forest, Lake County Forest Preserve, and Lake Forest Open Lands.",
    scope: [
      "Assist City in obtaining project funding",
      "Civil Engineering – Construction Documents",
      "Assist City in Bidding & Negotiating Phase",
      "Assist City in obtaining permit approvals",
      "Construction staking and layout",
      "Construction Engineering",
    ],
    clients: ["City of Lake Forest"],
    permittingAgencies: [
      "US Army Corps of Engineers",
      "Lake County Stormwater Management Commission",
      "IEPA",
    ],
    awards: [
      "Lake County Stormwater Management Commission – Development of the Year – 2010",
    ],
    path: "/projects/dalitsch-pond-enhancements",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/DALITSCH-POND/IMG_1868.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/DALITSCH-POND/Dalitsch-Pond-1-1.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/DALITSCH-POND/IMG_1603.jpg",
    ],
  },

  {
    id: 17,
    title: "Village of Kenilworth 2023 Plan Phase I – Plan Review",
    location: "Kenilworth, IL",
    year: "2016",
    categories: ["Municipal"],
    description:
      'The Village of Kenilworth, Illinois has experienced severe street and basement flooding, especially within the portion of the town served by a combined sewer system. After significant flooding in 2008, the Village embarked upon a path to identify and mitigate the causes of sewer surcharging and flooding. The initial study determined that the 1920\'s infrastructure system provides only 15 to 20% of the needed capacity.\n\nTo address this problem, the Village moved forward with its "Green Streets" initiative. Cumberland, Roslyn Avenues and Melrose Road were selected as the first streets for improvement. The design includes 4,363-linear feet of porous asphalt streets, underground detention, porous turf parkways and a separate storm sewer system. A potential long term design component, which would maximize flood reduction benefits, includes a separate storm sewer outfall into Lake Michigan.\n\nThe inclusion of the Green Infrastructure approach not only has typical environmental benefits such as increased infiltration and evaporation, which in turn reduces the volume of runoff and improves runoff quality, but is intended to provide sufficient BMPs to procure a permit from the IEPA for a separate storm sewer outfall into Lake Michigan. The overall project cost is approximately $6.5 million.\n\nBleck assisted the Village with resident coordination, design selection, final design and construction implementation. The project was completed in Fall of 2016.',
    scope: [
      "Peer Plan Review",
      "Value Engineering",
      "Civil Engineering – Construction Documents",
      "Site Grading",
      "Site Utilities",
      "Demolition Plans",
      "Permitting",
    ],
    path: "/projects/village-of-kenilworth-2023-plan",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/KENILWORTH/kenilworth.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/KENILWORTH/kenilworth.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/KENILWORTH/Kenilworth-streets.jpg",
    ],
  },
  {
    id: 19,
    title: "Northwestern Lake Forest Hospital – IL Route 43 Right-In/Right-Out",
    location: "1000 N Westmoreland Road, Lake Forest, IL",
    year: "2014",
    categories: ["Highway", "Healthcare"],
    description:
      "Northwestern Lake Forest Hospital tasked Bleck Engineering with the design, permitting, and construction administration services for a new right-in / right-out access point on North Bound Waukegan Road in anticipation of the construction of a new replacement hospital on campus. Several locations for this access point just south of a traffic light were studied until a good balance was struck to minimize truck traffic impact on the neighboring residential subdivision to the south while preserving an existing mature oak grove to north and maintaining an ideal distance from the signalized intersection.",
    scope: [
      "Drainage Study & Stormwater Management",
      "Civil Engineering – Construction Documents",
      "Site Grading",
      "Site Utilities",
      "Roadways and Parking",
      "Highway Improvements",
      "Best Management Practices",
      "Permitting",
      "Construction Engineering / Administration",
      "Construction Layout",
    ],
    clients: [
      "Northwestern Medicine & Northwestern Memorial Healthcare",
      "HGA",
      "Turner Construction Company",
      "DK Contractors",
    ],
    permittingAgencies: [
      "US Army Corps of Engineers",
      "Lake County Stormwater Management Commission",
      "Illinois Department of Transportation",
      "Illinois Environmental Protection Agency",
      "City of Lake Forest",
      "McHenry County Soil & Water Conservation District",
    ],
    path: "/projects/northwestern-lfh-route-43-right-in-right-out",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/ROUTE-43/IMG_8983.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/ROUTE-43/IMG_8982.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/ROUTE-43/IMG_8987.jpg",
    ],
  },
  {
    id: 20,
    title: "Recycled Waste Materials Transfer Station",
    location: "1381 Kennedy Road, Lake Forest, IL",
    year: "2008",
    categories: ["Municipal", "Surveying"],
    description:
      "After receiving feedback from citizens on how the city could increase their dedication to the environment and sustainability, the City of Lake Forest decided to expand their recycling services. This expansion required the need to make a new recycled waste materials transfer station on city property. The idea behind this transfer station is that existing city garbage trucks could be reused and solely dedicated to collecting recycled materials. The trucks would all dump the recycled material at one location where it would then be collected and moved into a tractor trailer. This reduces the carbon footprint of the operation by only having one truck leave the city limits instead of each collection vehicle. Bleck designed the station so that a front end loader could push the recycled material up a ramp and into a tractor trailer. The area was surrounded by netting to reduce the amount of debris leaving the area. The weigh scale for the trucks is powered by solar energy.",
    scope: [
      "Surveying",
      "Civil Engineering – Construction Documents",
      "Site Grading",
      "Site Utilities",
    ],
    path: "/projects/recycled-waste-materials-transfer-station",
    clients: ["City of Lake Forest"],
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/RECYCLED-WASTE/LF-Transfer-Station-3.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/RECYCLED-WASTE/LF-Transfer-Station-1.jpg",
    ],
  },
  {
    id: 21,
    title: "Northwestern Medicine Grayslake Outpatient",
    location: "1475 Belivdere Road, Grayslake, IL",
    year: "2004",
    categories: ["Healthcare"],
    description:
      "Bleck Engineering has been involved with the Northwestern Lake Forest Hospital Grayslake Campus from the initial 136,000 square foot Outpatient and Acute Care Center built in 2004, to its Free Standing Emergency Center in 2009, Ambulatory and Surgery Treatment Center, and Cancer Care Center completed in 2011, and site access improvements to Illinois Route 120 in 2015. The campus was designed utilizing best management practices in conservation and sustainable design. Recent additions to the Hospital are LEED Silver Certified. One of the main features of Northwestern Grayslake Hospital is the native landscape. The campus was designed utilizing best management practices in conservation and sustainable design for the treatment of water quality and reduction in runoff quantity. Bleck Engineering designed a series of measures to reduce stormwater volumes and associated pollutant loads (nitrogen, phosphorus, sediment, road salt, etc.) through an innovative stormwater management concept. This was the one of the first major installation of the Stormwater Treatment Train in Lake County. The system is composed of open swales with deep rooted native vegetation for stormwater conveyance, upland prairie bio‐filtration, preservation of wetlands, settling basins and open water detention ponds. Working in combination, these methods increase opportunities for pollutant removal through biological and mechanical means, while significantly reducing the rate and volume of stormwater runoff.",
    scope: [
      "Surveying",
      "Civil Engineering – Construction Documents",
      "Stormwater Management",
      "Site Utilities",
      "IL Route 120 Highway Access and Improvements",
      "Internal Roads",
      "Parking lots",
      "Permitting",
      "Construction Administration",
    ],
    path: "/projects/northwestern-medicine-grayslake-outpatient",
    clients: [
      "Northwestern Lake Forest Hospital",
      "Plunkett Raysich Architects",
      "Pepper Construction",
    ],
    permittingAgencies: [
      "Village of Grayslake",
      "Lake County",
      "Lake County Public Works",
      "IEPA",
      "IDOT",
      "Lake County Stormwater Management",
      "U.S. Army Corps of Engineers",
    ],
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/GRAYSLAKE-OUTPATIENT/L1240074.jpg",
    additionalImages: [
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/GRAYSLAKE-OUTPATIENT/L1240081.jpg",
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/GRAYSLAKE-OUTPATIENT/L1240094.jpg",
    ],
  },
];
