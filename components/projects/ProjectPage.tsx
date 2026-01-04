"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  ChevronLeft,
  ChevronRight,
  Award,
  X,
  Users,
  FileText,
} from "lucide-react";
import { Project } from "@/app/projects/data";
import ProjectMap from "@/components/maps/ProjectMap";

interface ProjectPageProps {
  project: Project;
  allProjects: Project[];
}

export default function ProjectPage({
  project,
  allProjects,
}: ProjectPageProps) {
  // Find current project index
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);

  // Get next and previous projects
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : allProjects[0];
  const prevProject =
    currentIndex > 0
      ? allProjects[currentIndex - 1]
      : allProjects[allProjects.length - 1];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Combine all images (hero + gallery)
  const allImages = [
    ...(project.image ? [project.image] : []),
    ...(project.additionalImages || []),
  ];

  // Open lightbox
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Navigate to next image
  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  };

  // Navigate to previous image
  const prevImage = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex(
          (prev) => (prev - 1 + allImages.length) % allImages.length
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % allImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen, allImages.length]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-white pt-32">
        <div className="absolute inset-0 z-0">
          {project.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : project.image ? (
            <div
              className="relative h-full w-full cursor-pointer"
              onClick={() => openLightbox(0)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-opacity hover:opacity-90"
                priority
              />
            </div>
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#89300208_1px,transparent_1px),linear-gradient(to_bottom,#89300208_1px,transparent_1px)] bg-[size:6rem_6rem]" />
          )}
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 w-full">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-xs font-bold tracking-wider text-white uppercase"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="mb-6 text-4xl font-light text-white md:text-6xl leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description and Additional Info Section */}
      <section className="border-t border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-6xl px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Description - Left Column */}
            <div className="lg:col-span-2">
              <div className="text-lg font-light leading-relaxed text-gray-700 space-y-3">
                {project.description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Sidebar - Right Column */}
            <div className="lg:col-span-1 space-y-8">
              {/* Clients Section */}
              {project.clients && project.clients.length > 0 && (
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#893002]/20 bg-[#893002]/5 text-[#893002]">
                      <Users size={18} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl font-light text-gray-900">Client</h2>
                  </div>
                  <ul className="space-y-2">
                    {project.clients.map((client, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 font-light text-gray-700"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#893002]"></div>
                        <span className="leading-relaxed text-sm">
                          {client}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Permitting Agencies Section */}
              {project.permittingAgencies &&
                project.permittingAgencies.length > 0 && (
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#893002]/20 bg-[#893002]/5 text-[#893002]">
                        <FileText size={18} strokeWidth={1.5} />
                      </div>
                      <h2 className="text-xl font-light text-gray-900">
                        Permitting
                      </h2>
                    </div>
                    <ul className="space-y-2">
                      {project.permittingAgencies.map((agency, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 font-light text-gray-700"
                        >
                          <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#893002]"></div>
                          <span className="leading-relaxed text-sm">
                            {agency}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Awards Section */}
              {project.awards && project.awards.length > 0 && (
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#893002]/30 bg-[#893002]/10 text-[#893002]">
                      <Award size={18} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl font-light text-gray-900">
                      Awards & Recognition
                    </h2>
                  </div>
                  <div className="space-y-2">
                    {project.awards.map((award, index) => (
                      <div
                        key={index}
                        className="group flex items-start gap-3 rounded-lg border border-[#893002]/20 bg-white p-4 shadow-sm transition-all hover:border-[#893002]/40 hover:shadow-md"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#893002]/10 text-[#893002]">
                          <Award size={12} strokeWidth={2} />
                        </div>
                        <p className="flex-1 font-light leading-relaxed text-gray-700 text-sm">
                          {award}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scope Section */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center border border-[#893002]/20 text-[#893002]">
                    <Building2 size={18} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-light text-gray-900">
                    Project Scope
                  </h2>
                </div>
                <ul className="space-y-2">
                  {project.scope.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 font-light text-gray-700"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#893002]"></div>
                      <span className="leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {allImages.length > 0 && (
        <section className="border-t border-gray-100 bg-white py-16">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="mb-8 text-2xl font-light text-gray-900">
              Project Gallery
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {allImages.map((imageUrl, index) => {
                return (
                  <div
                    key={index}
                    className="group relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={imageUrl}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Project Location Map */}
      {project.lat && project.lng && (
        <section className="border-t border-gray-100 bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="mb-8 text-2xl font-light text-gray-900">
              Project Location
            </h2>
            <div className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm">
              <ProjectMap
                lat={project.lat}
                lng={project.lng}
                title={project.title}
                className="h-[500px]"
              />
            </div>
            <p className="mt-4 text-sm font-light text-gray-600">
              {project.location}
            </p>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Browse Another Project - Left */}
            {prevProject.path && (
              <Link
                href={prevProject.path}
                className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-[#893002]/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-gray-600 transition-colors group-hover:border-[#893002] group-hover:bg-[#893002] group-hover:text-white">
                  <ChevronLeft size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Browse Projects
                  </div>
                  <div className="truncate text-lg font-light text-gray-900 group-hover:text-[#893002]">
                    {prevProject.title}
                  </div>
                </div>
              </Link>
            )}

            {/* Browse Another Project - Right */}
            {nextProject.path && (
              <Link
                href={nextProject.path}
                className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-[#893002]/30 hover:shadow-md md:ml-auto"
              >
                <div className="flex-1 min-w-0 text-right">
                  <div className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Browse Projects
                  </div>
                  <div className="truncate text-lg font-light text-gray-900 group-hover:text-[#893002]">
                    {nextProject.title}
                  </div>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-gray-600 transition-colors group-hover:border-[#893002] group-hover:bg-[#893002] group-hover:text-white">
                  <ChevronRight size={20} />
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-100 bg-[#893002] py-24">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="mb-6 text-3xl font-light text-white md:text-4xl">
            Interested in Similar Work?
          </h2>
          <p className="mb-10 text-lg font-light leading-relaxed text-white/80">
            Let's discuss how Bleck Engineering can help with your next project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white bg-white px-8 py-3 text-sm font-bold tracking-wide text-[#893002] transition-all duration-300 hover:bg-transparent hover:text-white uppercase"
            >
              Contact Us
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 border border-white/70 bg-transparent px-8 py-3 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-white/10 hover:border-white uppercase"
            >
              View All Projects
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && allImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition-all hover:bg-white hover:scale-110"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition-all hover:bg-white hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next Button */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition-all hover:bg-white hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative h-full w-full max-h-[90vh] max-w-[90vw] flex items-center justify-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full">
              <Image
                src={allImages[lightboxIndex]}
                alt={`${project.title} - Image ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Image Counter */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-white/90 text-sm font-light text-gray-700 shadow-lg">
              {lightboxIndex + 1} / {allImages.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
