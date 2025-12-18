import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Droplets,
  Mountain,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { getProjectsForService } from "@/lib/project-filters";

export const metadata = {
  title: "Civil Engineering - Bleck Engineering",
  description:
    "Comprehensive civil engineering services including municipal engineering, drainage engineering, and bluffs & ravines.",
};

export default function CivilEngineering() {
  const services = [
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
  ];

  const subServices = [
    {
      id: "municipal-engineering",
      icon: MapPin,
      title: "Municipal Engineering",
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/LF-METRA/L1230332.jpg",
      description:
        "BLECK offers a full compliment services to assist municipalities. We pride ourselves in providing cost effective solutions that all stakeholders can buy into as a project progresses. Our design philosophy is to meet and exceed the goals of our client while conforming to the guidelines of the reviewing regulatory agencies.",
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
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/WALDEN/IMG_3137.jpg",
      description:
        "BLECK has a wealth of knowledge and experience when it comes to Water Resources and Stormwater Management. Our design professionals can assist our clients from Best Management Practices and low impact design to stormwater master planning, retrofitting, and feasibility analysis.",
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
      image: "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/IMG_9064.jpg",
      description:
        "BLECK has been providing engineered context sensitive solutions on ravines and bluffs for decades. Whether new development is occurring on a property, routine maintenance and inspections to help prevent property loss, or emergency repairs are needed, Bleck is one of the go-to engineers along the North Shore.",
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
  ];

  const relatedProjects = getProjectsForService("civil-engineering").slice(
    0,
    6
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] sm:min-h-[70vh] items-center justify-center overflow-hidden bg-white pt-24 sm:pt-28 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/hospital.jpg"
            alt="Civil Engineering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 text-center">
          <div className="mb-4 sm:mb-6 md:mb-8 inline-block">
            <div className="flex items-center gap-2 sm:gap-3 text-xs font-light tracking-[0.3em] text-white/80 uppercase">
              <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-white/80"></div>
              Services
              <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-white/80"></div>
            </div>
          </div>
          <h1 className="mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight px-4">
            Civil Engineering
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/90 px-4">
            Comprehensive civil engineering services from conception through
            construction, since 1945.
          </p>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="border-t border-gray-100 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-light text-gray-600 hover:text-[#893002] transition-colors"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
              All Services
            </Link>
            <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                href="/services/construction-management"
                className="text-sm font-light text-gray-600 hover:text-[#893002] transition-colors"
              >
                Construction Management
              </Link>
              <Link
                href="/services/land-surveying"
                className="text-sm font-light text-gray-600 hover:text-[#893002] transition-colors"
              >
                Land Surveying
              </Link>
              <Link
                href="/services/design-build"
                className="text-sm font-light text-gray-600 hover:text-[#893002] transition-colors"
              >
                Design Build
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-4xl font-light text-gray-900">
              Comprehensive Civil Engineering Solutions
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
              <p>
                With over 75 years of experience, Bleck Engineering has
                established itself as a trusted partner in civil engineering
                across the North Shore and beyond. Our team combines technical
                expertise with a deep understanding of local regulations,
                environmental considerations, and community needs.
              </p>
              <p>
                We work closely with municipalities, private developers, and
                public institutions to deliver projects that enhance
                infrastructure, improve quality of life, and respect the natural
                environment. From initial site planning through final
                construction, we ensure every project meets the highest
                standards of quality and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="border-t border-gray-100 bg-gray-50 py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-light text-gray-900">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base font-light leading-relaxed text-gray-600">
              A comprehensive range of civil engineering services to meet your
              project needs
            </p>
          </div>

          <div className="grid gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4 md:grid-cols-2 max-w-4xl mx-auto">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0">
                  <Check className="h-4 w-4 text-[#893002]" strokeWidth={2.5} />
                </div>
                <span className="font-light text-gray-700 text-sm sm:text-base">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-light text-gray-900">
              Specialized Services
            </h2>
            <p className="mx-auto max-w-2xl font-light leading-relaxed text-gray-600">
              Deep expertise in specialized areas of civil engineering
            </p>
          </div>

          <div className="space-y-24">
            {subServices.map((subService, index) => {
              const SubIcon = subService.icon;
              const servicePath = `/services/civil-engineering/${subService.id}`;
              return (
                <div
                  key={subService.id}
                  id={subService.id}
                  className="scroll-mt-32"
                >
                  <div className="grid gap-16 md:grid-cols-2 md:items-start">
                    <div
                      className={`${
                        index % 2 === 0 ? "order-2" : "order-2 md:order-1"
                      } relative aspect-square overflow-hidden bg-gray-100`}
                    >
                      <Image
                        src={subService.image}
                        alt={subService.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <div
                      className={
                        index % 2 === 0 ? "order-1" : "order-1 md:order-2"
                      }
                    >
                      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center border border-[#893002]/20">
                        <SubIcon
                          className="text-[#893002]"
                          size={24}
                          strokeWidth={1.5}
                        />
                      </div>
                      <Link href={servicePath}>
                        <h3 className="mb-6 text-3xl font-light text-gray-900 hover:text-[#893002] transition-colors cursor-pointer">
                          {subService.title}
                        </h3>
                      </Link>
                      <p className="mb-8 font-light leading-relaxed text-gray-700">
                        {subService.description}
                      </p>
                      <div className="grid gap-x-8 gap-y-3 md:grid-cols-2">
                        {subService.items.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <div className="mt-1.5 flex-shrink-0">
                              <Check
                                className="h-4 w-4 text-[#893002]"
                                strokeWidth={2.5}
                              />
                            </div>
                            <span className="font-light text-gray-700 text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <Link
                          href={servicePath}
                          className="inline-flex items-center gap-2 text-sm font-light text-[#893002] transition-all hover:gap-3"
                        >
                          Learn More <ArrowRight size={14} strokeWidth={1.5} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="border-t border-gray-100 bg-gray-50 py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-light text-gray-900">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl font-light leading-relaxed text-gray-600">
              Explore our civil engineering work across diverse project types
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project) => {
              const ProjectCard = (
                <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md border border-gray-200 hover:border-[#893002]/20">
                  {/* Image Section */}
                  <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-50">
                        <MapPin size={48} strokeWidth={1} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {project.categories.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="px-2.5 py-1 rounded border border-gray-100 bg-gray-50 text-[10px] font-bold tracking-wider text-gray-500 uppercase"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-2 text-lg font-light text-gray-900 leading-tight group-hover:text-[#893002] transition-colors">
                      {project.title}
                    </h3>

                    <div className="mb-4 flex items-center gap-3 text-xs text-gray-500 font-medium uppercase tracking-wider">
                      <span>{project.location}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                      <span>{project.year}</span>
                    </div>

                    <p className="mb-6 line-clamp-3 text-sm font-light leading-relaxed text-gray-600">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-light uppercase tracking-widest text-[#893002] group-hover:underline underline-offset-4">
                        {project.path ? "View Project" : "View Details"}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-[#893002] transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#893002]/10">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              );

              if (project.path) {
                return (
                  <Link
                    key={project.id}
                    href={project.path}
                    className="block h-full"
                  >
                    {ProjectCard}
                  </Link>
                );
              }

              return (
                <div key={project.id} className="h-full">
                  {ProjectCard}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 border border-[#893002] bg-[#893002] px-10 py-4 text-sm font-light tracking-wide text-white transition-all duration-300 hover:bg-[#a03a03]"
            >
              View All Projects
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
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
            Ready to Start Your Project?
          </h2>
          <p className="mb-12 text-lg font-light leading-relaxed text-white/80">
            Contact us to discuss how our civil engineering expertise can
            support your next project.
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
