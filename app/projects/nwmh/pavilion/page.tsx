"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../../data";

export default function NwmhPavilionPage() {
  const parent = projects.find((p) => p.id === 2);
  const project = projects.find((p) => p.id === 27);

  const projectImages = project?.additionalImages || [];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-black pt-32">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${project?.image || ""}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-white/10" />
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
              Pavilion
            </h1>
            <p className="max-w-3xl text-lg font-light leading-relaxed text-white/90">
              Two new patient care pavilions that will expand hospital capacity,
              enhance emergency services, and improve access to care while
              complementing the existing hospital design and surrounding
              landscape.
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
                The addition of two new patient care pavilions to the hospitals
                will allow us to significantly expand capacity and enhance
                patient care services. This expansion represents a major step
                forward in meeting the growing healthcare needs of the
                community.
              </p>
              <p>
                The project's architecture and design will complement the
                current design of the hospital and the surrounding landscape.
                Native plants and plentiful areas of green space will contribute
                to the healing environment of the campus, while walking trails
                away from construction areas will continue to be open to the
                public.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-light text-gray-900">
              Key Benefits
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#893002]" />
                <span className="font-light leading-relaxed">
                  Increase the total number of hospital beds to 210, including
                  168 inpatient beds, 24 Intensive Care Unit (ICU) beds, and 18
                  postpartum beds
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#893002]" />
                <span className="font-light leading-relaxed">
                  Relocate and expand the Emergency Department with more
                  diagnostic imaging equipment capabilities
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#893002]" />
                <span className="font-light leading-relaxed">
                  Improve access to care for patients and their families
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#893002]" />
                <span className="font-light leading-relaxed">
                  Continue to grow specialty care services
                </span>
              </li>
            </ul>
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
                      alt={`Pavilion - Image ${index + 1}`}
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
            Ask about this project <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
