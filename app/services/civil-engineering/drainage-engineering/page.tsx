import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { Droplets, ArrowRight, Waves } from "lucide-react";
import { getProjectsForService } from "@/lib/project-filters";

export const metadata = {
  title: "Drainage Engineering - Bleck Engineering",
  description:
    "Expert water resources and stormwater management services including detention design, flood control, and watershed modeling.",
};

export default function DrainageEngineering() {
  const services = [
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
  ];

  const relatedProjects = getProjectsForService("drainage-engineering").slice(
    0,
    6
  );

  const galleryImages = [
    {
      src: "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/hospital.jpg",
      alt: "Stormwater management system",
    },
    {
      src: "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/surveying1.jpg",
      alt: "Drainage infrastructure",
    },
    {
      src: "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/IMG_3356-2.jpg",
      alt: "Watershed planning",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-white pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/hospital.jpg"
            alt="Drainage Engineering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
          <div className="mb-8 inline-block">
            <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-white/80 uppercase">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/80"></div>
              Civil Engineering
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/80"></div>
            </div>
          </div>
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center border border-white/30 bg-white/10 backdrop-blur-sm">
            <Droplets className="text-white" size={40} strokeWidth={1.5} />
          </div>
          <h1 className="mb-8 text-6xl font-light text-white md:text-7xl">
            Drainage Engineering
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-white/90">
            Bleck's team has a wealth of knowledge and experience when it comes
            to Water Resources and Stormwater Management. Our design
            professionals can assist from Best Management Practices to
            stormwater master planning.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-4xl font-light text-gray-900">
              Expert Water Resources Management
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
              <p>
                Our design professionals can assist our clients from Best
                Management Practices and low impact design to stormwater master
                planning, retrofitting, and feasibility analysis. We understand
                that effective water management is critical to protecting
                property, preserving natural resources, and ensuring regulatory
                compliance.
              </p>
              <p>
                With extensive experience in FEMA floodplain mapping, watershed
                modeling, and green infrastructure design, Bleck Engineering
                provides comprehensive solutions that balance development needs
                with environmental stewardship. Our team stays current with
                evolving regulations and best practices to deliver innovative,
                sustainable drainage solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-gray-100 bg-gray-50 py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-light text-gray-900">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl font-light leading-relaxed text-gray-600">
              Comprehensive drainage and stormwater management services
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3">
                <div className="mt-2 h-px w-4 flex-shrink-0 bg-[#893002]"></div>
                <span className="font-light text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-light text-gray-900">Our Work</h2>
            <p className="mx-auto max-w-2xl font-light leading-relaxed text-gray-600">
              Showcasing drainage engineering and stormwater management projects
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#893002]/0 transition-all duration-500 group-hover:bg-[#893002]/10" />
              </div>
            ))}
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
              Explore our drainage engineering work across diverse project types
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
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-50">
                        <Droplets size={48} strokeWidth={1} />
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
            Ready to Address Your Drainage Needs?
          </h2>
          <p className="mb-12 text-lg font-light leading-relaxed text-white/80">
            Contact us to discuss how our drainage engineering expertise can
            solve your water management challenges.
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
