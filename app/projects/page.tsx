"use client";

import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import {
  Building2,
  Search,
  LayoutGrid,
  List as ListIcon,
  ArrowRight,
  ArrowUpDown,
  Filter,
} from "lucide-react";
import { projects, ProjectCategory } from "./data";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TerrainMap from "@/components/maps/TerrainMap";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | "All"
  >("All");
  const [sortOption, setSortOption] = useState<"newest" | "oldest" | "az">(
    "newest"
  );
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories: (ProjectCategory | "All")[] = [
    "All",
    "Healthcare",
    "Municipal",
    "Education",
    "Commercial",
    "Residential",
    "Recreation",
    "Transportation",
    "Restoration",
    "Stormwater",
    "Surveying",
    "Master Planning",
  ];

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        const matchesSearch =
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
          selectedCategory === "All" ||
          project.categories.includes(selectedCategory);

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortOption === "newest") {
          const yearA = parseInt(a.year) || 2000;
          const yearB = parseInt(b.year) || 2000;
          return yearB - yearA;
        }
        if (sortOption === "oldest") {
          const yearA = parseInt(a.year) || 2000;
          const yearB = parseInt(b.year) || 2000;
          return yearA - yearB;
        }
        if (sortOption === "az") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Video Background */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#893002] pt-32">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/5fe4adff-7481-7d57-c98e-acd913c1779f_custom.mp4"
              type="video/mp4"
            />
          </video>
          {/* Gradient Overlay */}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
          <div className="mb-8 inline-block">
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-white/80 uppercase">
              <div className="h-px w-8 bg-white/60"></div>
              Portfolio
              <div className="h-px w-8 bg-white/60"></div>
            </div>
          </div>
          <h1 className="mb-8 text-5xl font-light text-white md:text-7xl tracking-tight">
            Our Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light drop-shadow-lg leading-relaxed text-white/90">
            A comprehensive look at our work shaping communities through civil
            engineering and surveying excellence.
          </p>
        </div>
      </section>

      {/* Controls Section */}
      <section className="sticky top-[65px] z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md ">
        <div className="mx-auto max-w-7xl px-8 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative w-full md:max-w-xs group">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#893002] transition-colors"
                size={16}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-[#893002] focus:bg-white focus:ring-1 focus:ring-[#893002]"
              />
            </div>

            {/* Filters & View Options */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter */}
              <div className="w-48">
                <Select
                  value={selectedCategory}
                  onValueChange={(value: string) =>
                    setSelectedCategory(value as ProjectCategory | "All")
                  }
                >
                  <SelectTrigger className="h-9 border-gray-200 bg-gray-50 text-sm font-medium hover:border-gray-300 hover:bg-white transition-all focus:ring-[#893002]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort */}
              <div className="w-40">
                <Select
                  value={sortOption}
                  onValueChange={(value: string) => setSortOption(value as any)}
                >
                  <SelectTrigger className="h-9 border-gray-200 bg-gray-50 text-sm font-medium hover:border-gray-300 hover:bg-white transition-all focus:ring-[#893002]">
                    <div className="flex items-center gap-2">
                      <ArrowUpDown size={14} className="text-gray-500" />
                      <SelectValue placeholder="Sort by" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="az">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="h-6 w-px bg-gray-200 hidden md:block mx-1"></div>

              {/* View Mode Toggle */}
              <div className="flex items-center rounded-md border border-gray-200 bg-gray-50 p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "rounded p-1.5 transition-all",
                    viewMode === "grid"
                      ? "bg-white text-[#893002] shadow-sm"
                      : "text-gray-400 hover:text-gray-600"
                  )}
                  aria-label="Grid View"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "rounded p-1.5 transition-all",
                    viewMode === "list"
                      ? "bg-white text-[#893002] shadow-sm"
                      : "text-gray-400 hover:text-gray-600"
                  )}
                  aria-label="List View"
                >
                  <ListIcon size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12 bg-gray-50 min-h-[50vh]">
        <div className="mx-auto max-w-7xl px-8">
          {filteredProjects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 rounded-full bg-white p-6 text-gray-300 shadow-sm border border-gray-100">
                <Search size={48} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                No projects found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-6 text-sm font-bold text-[#893002] hover:underline tracking-wide uppercase"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div
              className={cn(
                "grid gap-6",
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              )}
            >
              {filteredProjects.map((project) => {
                const ProjectCard = (
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md border border-gray-200 hover:border-[#893002]/20",
                      viewMode === "list" && "flex flex-col md:flex-row"
                    )}
                  >
                    {/* Image Section */}
                    <div
                      className={cn(
                        "relative overflow-hidden bg-gray-100",
                        viewMode === "grid"
                          ? "aspect-[3/2]"
                          : "aspect-video md:w-80 lg:w-96 md:aspect-auto shrink-0"
                      )}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-50">
                          <Building2
                            size={viewMode === "grid" ? 48 : 32}
                            strokeWidth={1}
                          />
                        </div>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col p-6 justify-between">
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          {project.categories.slice(0, 3).map((cat) => (
                            <span
                              key={cat}
                              className="px-2.5 py-1 rounded border border-gray-100 bg-gray-50 text-[10px] font-bold tracking-wider text-gray-500 uppercase"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>

                        <h3 className="mb-2 text-lg font-bold text-gray-900 leading-tight group-hover:text-[#893002] transition-colors">
                          {project.title}
                        </h3>

                        <div className="mb-4 flex items-center gap-3 text-xs text-gray-500 font-medium uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            {project.location}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                          <span>{project.year}</span>
                        </div>

                        <p className="mb-6 line-clamp-3 text-sm font-normal leading-relaxed text-gray-600">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#893002] group-hover:underline underline-offset-4">
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
          )}
        </div>
      </section>

      {/* Projects Map */}
      {filteredProjects.some((p) => p.lat && p.lng) && (
        <section className="border-t border-gray-200 bg-white py-16 hidden">
          <div className="mx-auto max-w-7xl px-8">
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-light text-gray-900">
                Project Locations
              </h2>
              <p className="max-w-2xl font-light text-gray-600">
                Explore our projects on the map below. Click on any marker to
                view project details.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm">
              <TerrainMap
                locations={filteredProjects
                  .filter((p) => p.lat && p.lng)
                  .map((p) => ({
                    id: p.id.toString(),
                    title: p.title,
                    lat: p.lat!,
                    lng: p.lng!,
                    path: p.path || "#",
                  }))}
                className="h-[600px]"
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-[#893002] py-24">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="mb-6 text-3xl font-light text-white md:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mb-10 text-lg font-light leading-relaxed text-white/80">
            Let's discuss how Bleck Engineering can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-white bg-white px-8 py-3 text-sm font-bold tracking-wide text-[#893002] transition-all duration-300 hover:bg-transparent hover:text-white uppercase"
          >
            Contact Us
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </section>
    </div>
  );
}
