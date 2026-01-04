"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

interface NurseryLocationPageProps {
  title: string;
  location: string;
  region: string;
  description: string;
  images?: string[];
}

export default function NurseryLocationPage({
  title,
  location,
  region,
  description,
}: NurseryLocationPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-12 px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projects/usda-nursery"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#893002] transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to National Map
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#893002]">
                {region}
              </div>
              <h1 className="mb-4 text-4xl font-light text-gray-900 md:text-5xl">
                {title}
              </h1>
              <div className="mb-8 flex items-center gap-2 text-gray-500 font-light">
                <MapPin size={18} />
                {location}
              </div>

              <div className="prose prose-lg prose-gray font-light text-gray-600">
                <p className="lead">{description}</p>
                <p>
                  As part of the REPLANT Act initiative, Bleck Engineering is providing master planning services
                  to optimize this facility. The goal is to enhance seedling production capacity, improve
                  operational efficiency, and modernize infrastructure to support the Forest Service's
                  reforestation targets.
                </p>
                {/* Add more specific details here later */}
              </div>
            </div>

            <div className="space-y-4">
              {/* Placeholder Gallery */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
                <div className="flex h-full items-center justify-center text-gray-300">
                  <span className="text-sm">Main Facility Image Placeholder</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
                   <div className="flex h-full items-center justify-center text-gray-300">
                    <span className="text-xs">Detail 1</span>
                  </div>
                </div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
                   <div className="flex h-full items-center justify-center text-gray-300">
                    <span className="text-xs">Detail 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}










