"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowRight, MapPin, Sprout, TreePine } from "lucide-react";
import TerrainMap from "@/components/maps/TerrainMap";

const locations = [
  {
    id: "coeur-dalene",
    title: "Coeur d'Alene Nursery",
    location: "Coeur d'Alene, Idaho",
    region: "Region 1",
    path: "/projects/usda-nursery/coeur-dalene",
    lat: 47.68,
    lng: -116.78,
  },
  {
    id: "bessey",
    title: "C. E. Bessey Nursery",
    location: "Halsey, Nebraska",
    region: "Region 2",
    path: "/projects/usda-nursery/bessey",
    lat: 41.9,
    lng: -100.27,
  },
  {
    id: "lucky-peak",
    title: "Lucky Peak Nursery",
    location: "Boise, Idaho",
    region: "Region 4",
    path: "/projects/usda-nursery/lucky-peak",
    lat: 43.62,
    lng: -116.21,
  },
  {
    id: "placerville",
    title: "Placerville Nursery",
    location: "Camino, California",
    region: "Region 5",
    path: "/projects/usda-nursery/placerville",
    lat: 38.74,
    lng: -120.67,
  },
  {
    id: "j-herbert-stone",
    title: "J. Herbert Stone Nursery",
    location: "Central Point, Oregon",
    region: "Region 6",
    path: "/projects/usda-nursery/j-herbert-stone",
    lat: 42.38,
    lng: -122.92,
  },
  {
    id: "bend-seed",
    title: "Bend Seed Extractory",
    location: "Bend, Oregon",
    region: "Region 6",
    path: "/projects/usda-nursery/bend-seed",
    lat: 44.06,
    lng: -121.32,
  },
  {
    id: "ashe-seed",
    title: "Ashe Seed Extractory",
    location: "Brooklyn, Mississippi",
    region: "Region 8",
    path: "/projects/usda-nursery/ashe-seed",
    lat: 31.05,
    lng: -89.18,
  },
  {
    id: "toumey",
    title: "J.W. Toumey Nursery",
    location: "Watersmeet, Michigan",
    region: "Region 9",
    path: "/projects/usda-nursery/toumey",
    lat: 46.27,
    lng: -89.18,
  },
];

export default function UsdaNurseryProject() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-white pt-32">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/USDA/R0019951%20Large.jpeg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 text-center text-white">
          <div className="mb-8 inline-block">
            <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] uppercase">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
              Federal Project
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
            </div>
          </div>
          <h1 className="mb-8 text-4xl font-light  md:text-6xl">
            USDA National Nursery System
            <span className="block text-white font-bold mt-2">
              Optimization Planning
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed ">
            Providing master planning services to prepare the U.S. Forest
            Service for the future and meeting the REPLANT Act targets across 8
            strategic locations.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-light text-gray-900">
                The REPLANT Act Initiative
              </h2>
              <p className="mb-6 font-light leading-relaxed text-gray-600">
                The REPLANT Act (Reforestation Planning, Administration, and
                Technology Act) is a historic initiative to address the
                reforestation backlog on National Forest System lands. Bleck
                Engineering provided consulting and engineering services to
                optimize facilities, making these critical nurseries more
                efficient for the future.
              </p>
              <p className="font-light leading-relaxed text-gray-600">
                Our role involved comprehensive master planning to ensure each
                facility can meet the increased demand for seedlings, supporting
                the goal of planting more than 1.2 billion trees over the next
                decade.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.fs.usda.gov/managing-land/forest-management/vegetation-management/nurseries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#893002] hover:underline"
                >
                  Visit USDA Forest Service <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <TreePine className="mb-4 text-[#893002]" size={32} />
                <h3 className="mb-2 text-xl font-light text-gray-900">
                  1.2 Billion
                </h3>
                <p className="text-sm font-light text-gray-500">
                  Trees to be planted
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <MapPin className="mb-4 text-[#893002]" size={32} />
                <h3 className="mb-2 text-xl font-light text-gray-900">
                  8 Locations
                </h3>
                <p className="text-sm font-light text-gray-500">
                  Nationwide optimization
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <Sprout className="mb-4 text-[#893002]" size={32} />
                <h3 className="mb-2 text-xl font-light text-gray-900">
                  Future Ready
                </h3>
                <p className="text-sm font-light text-gray-500">
                  Modernized facilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Map & Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-light text-gray-900">
              Project Locations
            </h2>
            <p className="mx-auto max-w-2xl font-light text-gray-600">
              Our master planning services cover eight key nursery and seed
              extractory locations across the United States.
            </p>
          </div>

          {/* Interactive Map with Terrain View */}
          <div className="relative mx-auto mb-24 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-3xl bg-gray-100">
            <TerrainMap locations={locations} />
          </div>

          {/* Locations Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={location.path}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-[#893002]/20 hover:shadow-md"
              >
                <div>
                  <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#893002]">
                    {location.region}
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900 group-hover:text-[#893002] transition-colors">
                    {location.title}
                  </h3>
                  <p className="mb-4 text-sm font-light text-gray-500 flex items-center gap-2">
                    <MapPin size={14} /> {location.location}
                  </p>
                </div>
                <div className="flex items-center text-xs font-medium uppercase tracking-wider text-gray-400 group-hover:text-[#893002]">
                  View Details <ArrowRight size={14} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-100 bg-[#893002] py-32">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="mb-6 text-3xl font-light text-white md:text-4xl">
            Partner with Bleck Engineering
          </h2>
          <p className="mb-12 text-lg font-light leading-relaxed text-white/80">
            See how our master planning and engineering expertise can optimize
            your facilities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-white bg-white px-10 py-4 text-sm font-light tracking-wide text-[#893002] transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            Contact Us
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
