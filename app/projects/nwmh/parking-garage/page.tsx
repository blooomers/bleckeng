"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../../data";

export default function NwmhParkingGaragePage() {
  const parent = projects.find((p) => p.id === 2);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-black pt-32">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${parent?.image || ""}')` }}
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
              Parking Garage
            </h1>
            <p className="max-w-3xl text-lg font-light leading-relaxed text-white/90">
              A starter page for parking-related improvements that support
              patient/visitor access, staff operations, and construction phasing.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-6xl px-8">
          <h2 className="mb-4 text-2xl font-light text-gray-900">
            Details coming next
          </h2>
          <p className="mb-8 text-lg font-light leading-relaxed text-gray-700">
            We’ll expand this page with scope, images, and key circulation and
            grading/utility considerations for garage-area work within the
            campus.
          </p>

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


