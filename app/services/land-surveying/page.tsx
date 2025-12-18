import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, ChevronRight, Ruler } from "lucide-react";
import { getProjectsForService } from "@/lib/project-filters";

export const metadata = {
  title: "Land Surveying - Bleck Engineering",
  description:
    "Full-service in-house surveying with reliable field accuracy and professional land surveying services.",
};

export default function LandSurveying() {
  const services = [
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
  ];

  const relatedProjects = getProjectsForService("land-surveying").slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] sm:min-h-[70vh] items-center justify-center overflow-hidden bg-white pt-24 sm:pt-28 md:pt-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/surveying1.jpg"
            alt="Land Surveying"
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
            Land Surveying
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/90 px-4">
            In-house survey staff providing reliable, accurate field information
            and topographic mapping.
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
                href="/services/civil-engineering"
                className="text-sm font-light text-gray-600 hover:text-[#893002] transition-colors"
              >
                Civil Engineering
              </Link>
              <Link
                href="/services/construction-management"
                className="text-sm font-light text-gray-600 hover:text-[#893002] transition-colors"
              >
                Construction Management
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
              Precision Surveying Services
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
              <p>
                Having an in-house survey team means seamless coordination
                between surveying and engineering. Our professional land
                surveyors work directly with our engineers, ensuring that field
                data is accurately captured, properly interpreted, and
                effectively integrated into design work.
              </p>
              <p>
                This integrated approach eliminates communication gaps and
                ensures that every project benefits from precise, reliable
                survey data from the very beginning. Our surveyors understand
                the engineering requirements, and our engineers understand the
                survey process, creating a unified team that delivers superior
                results.
              </p>
              <p>
                We utilize state-of-the-art equipment and technology, including
                GPS/GIS services, to provide accurate surveys for projects of
                all sizes. From simple boundary surveys to complex topographic
                mapping for large-scale developments, we have the expertise and
                equipment to meet your needs.
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
              Comprehensive land surveying services for all your project needs
            </p>
          </div>

          <div className="grid gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4 md:grid-cols-2 max-w-4xl mx-auto">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3">
                <div className="mt-2 h-px w-4 flex-shrink-0 bg-[#893002]"></div>
                <span className="font-light text-gray-700 text-sm sm:text-base">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-light text-gray-900">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl font-light leading-relaxed text-gray-600">
              Explore projects where our surveying expertise made a difference
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
                        <Ruler size={48} strokeWidth={1} />
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
            Contact us to discuss your land surveying needs and how we can
            support your project.
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
