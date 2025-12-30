"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  MapPin,
  Network,
  Users,
} from "lucide-react";
import { projects } from "../data";

const campusComponents = [
  {
    title: "Parking Garage",
    href: "/projects/nwmh/parking-garage",
    description:
      "Parking and site circulation improvements supporting campus access and operations.",
    year: null,
  },
  {
    title: "Pavilion",
    href: "/projects/nwmh/pavilion",
    description:
      "A focused look at pavilion-area improvements and pedestrian connectivity on campus.",
    year: null,
  },
  {
    title: "Heliport",
    href: "/projects/nwmh/heliport",
    description:
      "Coordination and site access considerations for critical emergency operations.",
    year: null,
  },
];

export default function NorthwesternMedicineLakeForestCampusProgramPage() {
  const program = projects.find((p) => p.id === 22);
  const revitalization = projects.find((p) => p.id === 2);
  const supportServices = projects.find((p) => p.id === 13);
  const route43 = projects.find((p) => p.id === 19);

  if (!program) return null;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black pt-32">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${program.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-white/10" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {program.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-xs font-bold tracking-wider text-white uppercase"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="mb-6 text-4xl font-light text-white md:text-6xl leading-tight">
              Northwestern Medicine
              <span className="block font-bold mt-2">
                Lake Forest Hospital Campus
              </span>
            </h1>

            <p className="mb-8 max-w-3xl text-lg font-light leading-relaxed text-white/90">
              A program-level overview of our long-term civil engineering and
              planning support for an active healthcare campus — spanning master
              planning, access improvements, supporting facilities, and major
              capital work.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Lake Forest, IL</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{program.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief */}
      <section className="border-t border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-2xl font-light text-gray-900">
                Program Overview
              </h2>
              <div className="text-lg font-light leading-relaxed text-gray-700 space-y-4">
                {program.description.split("\n\n").map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Quick Facts */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#893002]/20 bg-[#893002]/5 text-[#893002]">
                    <Network size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-light text-gray-900">
                    Quick Facts
                  </h3>
                </div>
                <ul className="space-y-2 text-sm font-light text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#893002]" />
                    <span>25+ years of campus support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#893002]" />
                    <span>
                      Active operations maintained during construction
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#893002]" />
                    <span>Master planning, civil design, and CA support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#893002]" />
                    <span>Stormwater management and BMP coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#893002]" />
                    <span>
                      Multiple projects coordinated under one campus umbrella
                    </span>
                  </li>
                </ul>
              </div>

              {/* Client */}
              {program.clients && program.clients.length > 0 && (
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#893002]/20 bg-[#893002]/5 text-[#893002]">
                      <Users size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-light text-gray-900">Client</h3>
                  </div>
                  <ul className="space-y-2">
                    {program.clients.map((client, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 font-light text-gray-700"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#893002]" />
                        <span className="leading-relaxed text-sm">
                          {client}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Program Services */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#893002]/20 bg-[#893002]/5 text-[#893002]">
                <Building2 size={18} strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-light text-gray-900">
                Program Services Provided
              </h2>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {program.scope.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 font-light text-gray-700"
                >
                  <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#893002]" />
                  <span className="leading-relaxed text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Campus Projects */}
      <section className="border-t border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-10">
            <h2 className="mb-2 text-3xl font-light text-gray-900">
              Campus Projects
            </h2>
            <p className="max-w-2xl font-light text-gray-600">
              These pages break the campus program into major, navigable
              components.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {revitalization && (
              <Link
                href={revitalization.path || "/projects/nwmh/campus"}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-[#893002]/20 hover:shadow-md"
              >
                {revitalization.year && (
                  <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#893002]">
                    {revitalization.year}
                  </div>
                )}
                <h3 className="mb-2 text-lg font-medium text-gray-900 transition-colors group-hover:text-[#893002]">
                  Campus Revitalization Project
                </h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-gray-600">
                  Master planning and civil engineering for a 160-acre campus
                  transformation supporting a new replacement hospital.
                </p>
                <div className="flex items-center text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#893002]">
                  View details <ArrowRight size={14} className="ml-2" />
                </div>
              </Link>
            )}

            {supportServices && (
              <Link
                href={
                  supportServices.path ||
                  "/projects/nwmh/support-services-building"
                }
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-[#893002]/20 hover:shadow-md"
              >
                {supportServices.year && (
                  <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#893002]">
                    {supportServices.year}
                  </div>
                )}
                <h3 className="mb-2 text-lg font-medium text-gray-900 transition-colors group-hover:text-[#893002]">
                  Support Services Building
                </h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-gray-600">
                  Site civil engineering and construction administration for a
                  key campus support facility.
                </p>
                <div className="flex items-center text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#893002]">
                  View details <ArrowRight size={14} className="ml-2" />
                </div>
              </Link>
            )}

            {route43 && (
              <Link
                href={route43.path || "/projects/nwmh/route-43"}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-[#893002]/20 hover:shadow-md"
              >
                {route43.year && (
                  <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#893002]">
                    {route43.year}
                  </div>
                )}
                <h3 className="mb-2 text-lg font-medium text-gray-900 transition-colors group-hover:text-[#893002]">
                  IL Route 43 Right-In/Right-Out
                </h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-gray-600">
                  Design, permitting, and construction administration for a new
                  campus access point.
                </p>
                <div className="flex items-center text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#893002]">
                  View details <ArrowRight size={14} className="ml-2" />
                </div>
              </Link>
            )}

            {campusComponents.map((sp) => (
              <Link
                key={sp.href}
                href={sp.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-[#893002]/20 hover:shadow-md"
              >
                {sp.year && (
                  <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#893002]">
                    {sp.year}
                  </div>
                )}
                <h3 className="mb-2 text-lg font-medium text-gray-900 transition-colors group-hover:text-[#893002]">
                  {sp.title}
                </h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-gray-600">
                  {sp.description}
                </p>
                <div className="flex items-center text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#893002]">
                  View details <ArrowRight size={14} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-[#893002] py-24">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="mb-6 text-3xl font-light text-white md:text-4xl">
            Planning a complex, active-campus project?
          </h2>
          <p className="mb-10 text-lg font-light leading-relaxed text-white/80">
            Bleck Engineering supports master planning, permitting, and phased
            construction logistics for facilities that can’t pause operations.
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
    </div>
  );
}
