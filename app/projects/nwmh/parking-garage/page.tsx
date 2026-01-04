"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../../data";

export default function NwmhParkingGaragePage() {
  const parent = projects.find((p) => p.id === 2);
  const project = projects.find((p) => p.id === 25);

  const projectImages = project?.additionalImages || [];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-black pt-32">
        <div className="absolute inset-0 z-0">
          {project?.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${parent?.image || ""}')` }}
            />
          )}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <Link
            href="/projects/nwmh"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={16} /> Back to NWMH Overview
          </Link>

          <div className="max-w-4xl text-white">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-white/80">
              Campus Sub-Project
            </div>
            <h1 className="mb-6 text-4xl font-light md:text-6xl leading-tight">
              Parking Garage
            </h1>
            <p className="max-w-3xl text-lg font-light leading-relaxed text-white/90">
              Part of the bed expansion project at Northwestern Lake Forest
              Hospital, the parking garage provides approximately 1,000 spaces
              to make up for the surface lots that were replaced as parcels for
              G & H Pavilions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-6xl px-8">
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-light text-gray-900">
              Project Overview
            </h2>
            <div className="space-y-4 text-lg font-light leading-relaxed text-gray-700">
              <p>
                Part of the bed expansion project at Northwestern Lake Forest
                Hospital, the parking garage provides approximately 1,000 spaces
                to make up for the surface lots that were replaced as parcels
                for G & H Pavilions.
              </p>
              <p>
                Located adjacent to the Central Plant, the garage project
                includes relocation of the Helipad and relocation of utilities
                under the footprint of the garage.
              </p>
            </div>
          </div>

          {project?.scope && project.scope.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-light text-gray-900">
                Project Scope
              </h2>
              <ul className="grid gap-3 md:grid-cols-2">
                {project.scope.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#893002]" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {projectImages.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-light text-gray-900">
                Project Gallery
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {projectImages.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
                  >
                    <Image
                      src={imageUrl}
                      alt={`Parking Garage - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-gray-900 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            Ask about this scope <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
