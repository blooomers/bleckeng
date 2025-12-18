import Navigation from "@/components/Navigation";
import Link from "next/link";
import {
  Building2,
  Ruler,
  MapPin,
  Droplets,
  Mountain,
  HardHat,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Services - Bleck Engineering",
  description: "Comprehensive civil engineering and land surveying services",
};

export default function Services() {
  const services = [
    {
      id: "civil-engineering",
      icon: Building2,
      title: "Civil Engineering",
      description:
        "Bleck Engineering provides a full complement of civil engineering services for government, public facilities and private developers. In existence since 1945, we take projects from conception through construction.",
      items: [
        "Site Planning / Design",
        "Master Planning",
        "Land Development",
        "Drainage Studies and Watershed Management",
        "Storm Sewer Systems and Hydrological Modeling",
        "Sanitary Sewer Systems",
        "Water Distribution Systems",
        "Best Management Practices",
        "Traffic Engineering – Roads and Highways",
        "Streetscapes",
        "Parking Lots",
        "Bicycle and Pedestrian Trails",
        "Earth Retention Systems and Slope Stabilization",
        "Site Grading Plans",
        "Permitting",
        "Public Hearing and Expert Testimony",
      ],
      subServices: [
        {
          id: "municipal-engineering",
          icon: MapPin,
          title: "Municipal Engineering",
          description:
            "Bleck offers a full compliment services to assist municipalities. We pride ourselves in providing cost effective solutions that all stakeholders can buy into as a project progresses. Our design philosophy is to meet and exceed the goals of our client while conforming to the guidelines of the reviewing regulatory agencies.",
          items: [
            "Motor Fuel Tax (MFT) Projects",
            "Community Development Block Grant (CDBG) Projects",
            "Capital Improvement Projects and Planning",
            "Street Maintenance and Rehabilitation",
            "Stormwater Conveyance Systems",
            "Water Distribution Systems",
            "Sanitary Sewer Systems",
            "NPDES Planning and Compliance",
            "Pavement Inventory Analysis",
            "Bridge Inspections",
            "Green Infrastructure Planning and Design",
            "Infrastructure Master Planning",
            "Public Meetings and Open Houses",
            "Geographic Information Systems (GIS)",
            "Easement and Plat Preparation and Review",
            "Permitting",
            "Plan Reviews",
          ],
        },
        {
          id: "drainage-engineering",
          icon: Droplets,
          title: "Drainage Engineering",
          description:
            "Bleck's team has a wealth of knowledge and experience when it comes to Water Resources and Stormwater Management. Our design professionals can assist our clients from Best Management Practices and low impact design to stormwater master planning, retrofitting, and feasibility analysis.",
          items: [
            "Detention Facility Design",
            "Drainage Feasibility Studies",
            "Flood Control Analysis and Alternatives Design",
            "Floodproofing Design",
            "Stormwater Collection Systems",
            "Hydrologic Investigations",
            "Stormwater Master Planning",
            "Hydrology and Hydraulics",
            "Watershed Modeling and Design",
            "FEMA Letters of Map Amendments (LOMA) Submittals",
            "FEMA Letters of Map Revisions (LOMR) Submittals",
            "Floodplain/Floodway Analysis, Design, Permitting, and Construction",
            "Best Management Practices – Green Infrastructure",
            "Streambank Stabilization",
            "MS4 Community Compliance",
            "Ordinance Consulting",
            "Stream/Channel Modifications",
            "Erosion and Sediment Control",
          ],
        },
        {
          id: "bluffs-ravines",
          icon: Mountain,
          title: "Bluffs and Ravines",
          description:
            "Bleck has been providing engineered context sensitive solutions on ravines and bluffs for decades. Whether new development is occurring on a property, routine maintenance and inspections to help prevent property loss, or emergency repairs are needed, Bleck is one of the go-to engineers along the North Shore.",
          items: [
            "Bluff and Ravine Inspection Reports",
            "Topographic Mapping",
            "Aerial Photography and Mapping",
            "Earth Retention Systems",
            "Bluff Stabilization",
            "Ravine Stabilization",
            "Ravine Bed Restoration",
            "Slope and Wall Monitoring",
            "Best Management Practices",
            "US Army Corps of Engineers Permitting",
          ],
        },
      ],
    },
    {
      id: "land-surveying",
      icon: Ruler,
      title: "Land Surveying",
      description:
        "Our full-service, in-house survey staff is not only a convenience, but enhances quality control. Since the late '70s, when Bleck Engineering added surveying to its growing list of services, professional land surveyors have worked in concert with our engineers to provide them with reliable, accurate information from the field.",
      items: [
        "Plat of Surveys",
        "Topographic Mapping",
        "ALTA / NSPS Land Title Surveys",
        "Plats of Subdivision",
        "Plat of Easements",
        "Plat of Vacations",
        "Plats of Condominium",
        "Annexation Exhibits",
        "GPS/GIS Services",
        "Legal Descriptions",
        "Elevation Certificates",
        "Construction Staking and Layout",
        "Aerial Photography and Mapping",
      ],
    },
    {
      id: "construction-engineering",
      icon: HardHat,
      title: "Construction Management",
      description:
        "At Bleck Engineering, continuity of service is paramount. Clients work with one project manager from start to finish — someone they can count on to meet their needs. The most complex projects, requiring multi-agency interface, various funding sources, and detailed planning are ensured this high-level coordination.",
      items: [
        "Construction Administration",
        "Business and Resident Outreach",
        "Permitting",
        "Contract and Bid Negotiation",
        "Constructability Review",
        "Project Budgeting and Cost Analysis",
        "Construction Observation & Inspections",
        "Construction Progress Reports",
        "Construction Scheduling",
        "Shop Drawing Review",
        "Change Order Management",
        "Review of Applications for Payment",
        "SWPPP Inspection and Reporting",
        "Project Closeout",
      ],
    },
    {
      id: "design-build",
      icon: Layers,
      title: "Design Build",
      description:
        "Bleck Engineering offers design/build services which allows our clients to work with one entity, one contract, one unified flow of work, from initial design through completion of construction. We use this preferred method to reduce your project delivery schedule rather than a typical design – bid – construct with multiple contracts.",
      items: [],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] sm:min-h-[60vh] items-center justify-center overflow-hidden bg-white pt-24 sm:pt-28 md:pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#89300208_1px,transparent_1px),linear-gradient(to_bottom,#89300208_1px,transparent_1px)] bg-[size:6rem_6rem]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 text-center">
          <div className="mb-4 sm:mb-6 md:mb-8 inline-block">
            <div className="flex items-center gap-2 sm:gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
              <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
              Services
              <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
            </div>
          </div>
          <h1 className="mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight px-4">
            Our Services
          </h1>
          <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg font-light leading-relaxed text-gray-600 px-4">
            Comprehensive civil engineering and land surveying services tailored
            to meet the unique needs of each project and community we serve.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const servicePaths: Record<string, string> = {
                "civil-engineering": "/services/civil-engineering",
                "land-surveying": "/services/land-surveying",
                "construction-engineering":
                  "/services/construction-administration",
                "design-build": "/services/design-build",
              };
              const servicePath =
                servicePaths[service.id] || `/services#${service.id}`;

              return (
                <Link
                  key={service.id}
                  href={servicePath}
                  className="group relative overflow-hidden bg-white border border-gray-100 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    {service.id === "land-surveying" ? (
                      <>
                        <img
                          src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/surveying1.jpg"
                          alt="Land Surveying"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                      </>
                    ) : service.id === "civil-engineering" ? (
                      <>
                        <img
                          src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/hospital.jpg"
                          alt="Civil Engineering"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                      </>
                    ) : service.id === "construction-engineering" ? (
                      <>
                        <img
                          src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/IMG_3356-2.jpg"
                          alt="Construction Management"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                      </>
                    ) : service.id === "design-build" ? (
                      <>
                        <img
                          src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/L1230468%20(1).jpg"
                          alt="Design Build"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#893002]/10 to-gray-200" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon
                            className="text-gray-300 transition-transform duration-500 group-hover:scale-110"
                            size={96}
                            strokeWidth={0.5}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-light text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm font-light text-white/80">
                        {service.subServices
                          ? "Including municipal engineering, drainage engineering, and bluffs & ravines"
                          : service.id === "land-surveying"
                          ? "Professional surveying & mapping services"
                          : service.id === "construction-engineering"
                          ? "End-to-end project management"
                          : "One entity, one contract, unified workflow"}
                      </p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="mb-4 font-light leading-relaxed text-gray-600 text-sm">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-light text-[#893002] transition-all group-hover:gap-3">
                      Learn More <ArrowRight size={14} strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-100 bg-[#893002] py-32">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <div className="mb-8 inline-block">
            <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-white/40 uppercase">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/40"></div>
              Let's Talk
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/40"></div>
            </div>
          </div>
          <h2 className="mb-6 text-4xl font-light text-white md:text-5xl">
            Let's Discuss Your Project
          </h2>
          <p className="mb-12 text-lg font-light leading-relaxed text-white/80">
            Contact us to learn more about how our services can support your
            civil engineering and land surveying needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-white bg-white px-10 py-4 text-sm font-light tracking-wide text-[#893002] transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            Get in Touch
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
