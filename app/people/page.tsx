"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export default function People() {
  const leadership = [
    {
      name: "Patrick J. Bleck",
      title: "President",
      credentials: "P.E., C.F.M.",
      email: "pbleck@bleckeng.com",
      linkedin: "#",
      path: "/people/patrick-j-bleck",
    },
    {
      name: "Michael G. Bleck",
      title: "Vice President",
      credentials: "P.E.",
      email: "mbleck@bleckeng.com",
      linkedin: "#",
      path: "/people/michael-g-bleck",
    },
  ];

  const engineeringTeam = [
    {
      name: "Joy M. Corona",
      title: "Project Manager, Water Resources",
      credentials: "P.E., C.F.M.",
      path: "/people/joy-m-corona",
    },
    {
      name: "Kenneth M. Magnus",
      title: "Project Manager",
      credentials: "P.E., C.F.M.",
      path: "/people/kenneth-m-magnus",
    },
    {
      name: "Matthew G. Bleck",
      title: "Project Engineer",
      credentials: "P.E.",
      path: "/people/matthew-g-bleck",
    },
    {
      name: "Daniel J. Daube",
      title: "Project Engineer",
      credentials: "",
      path: "/people/daniel-j-daube",
    },
  ];

  const surveyingTeam = [
    {
      name: "Jack R. Bleck",
      title: "Surveyor",
      credentials: "P.L.S.",
      path: "/people/jack-r-bleck",
    },
  ];

  const constructionTeam = [
    {
      name: "Patrick R. Maddox",
      title: "Chief Inspector",
      credentials: "",
      path: "/people/patrick-r-maddox",
    },
  ];

  const supportStaff = [
    {
      name: "Corrinne K. Bleck",
      title: "Accounts Receivable Manager",
      credentials: "",
      path: "/people/corrinne-k-bleck",
    },
    {
      name: "Sheryl R. Bransky",
      title: "Office Coordinator",
      credentials: "",
      path: "/people/sheryl-r-bransky",
    },
  ];

  type Person = {
    name: string;
    title: string;
    credentials: string;
    email?: string;
    linkedin?: string;
    path: string;
  };

  const renderPersonRow = (person: Person) => (
    <div
      key={person.name}
      className="group border-b border-gray-100 py-3 transition-colors hover:bg-gray-50"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href={person.path}
              className="text-lg font-light text-gray-900 hover:text-[#893002] transition-colors"
            >
              {person.name}
            </Link>
            {person.credentials && (
              <span className="text-xs font-light text-gray-400 uppercase">
                {person.credentials}
              </span>
            )}
          </div>
          <p className="text-sm font-light text-gray-600 mt-1">
            {person.title}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-[#893002] transition-colors"
              aria-label={`Email ${person.name}`}
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
          )}
          {person.linkedin && person.linkedin !== "#" && (
            <a
              href={person.linkedin}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#893002] transition-colors"
              aria-label={`LinkedIn ${person.name}`}
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          )}
          <Link
            href={person.path}
            className="inline-flex items-center gap-1 text-sm font-light text-[#893002] opacity-0 group-hover:opacity-100 transition-opacity"
          >
            View Profile <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );

  const renderSection = (title: string, subtitle: string, people: Person[]) => (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-4xl px-8">
        <div className="mb-6">
          <div className="mb-1 inline-block">
            <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
              {subtitle}
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
            </div>
          </div>
        </div>
        <div className="space-y-0">{people.map(renderPersonRow)}</div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative border-b border-gray-100 bg-white pt-24 pb-8">
        <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
          <div className="mb-3 inline-block">
            <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
              Team
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
            </div>
          </div>
          <h1 className="mb-3 text-3xl font-light text-gray-900 md:text-4xl">
            Our People
          </h1>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-gray-600">
            Our team of experienced professionals is dedicated to delivering
            exceptional civil engineering and land surveying services.
          </p>
        </div>
      </section>

      {renderSection("Leadership", "Leadership", leadership)}
      {renderSection("Engineering Team", "Engineering", engineeringTeam)}
      {renderSection("Surveying Team", "Surveying", surveyingTeam)}
      {renderSection(
        "Construction & Inspection",
        "Construction",
        constructionTeam
      )}
      {renderSection("Support Staff", "Support", supportStaff)}

      {/* CTA Section */}
      <section
        id="careers"
        className="border-t border-gray-100 bg-[#893002] py-24"
      >
        <div className="mx-auto max-w-4xl px-8 text-center">
          <div className="mb-6 inline-block">
            <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-white/40 uppercase">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/40"></div>
              Careers
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/40"></div>
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
            Join Our Team
          </h2>
          <p className="mb-8 text-base font-light leading-relaxed text-white/80">
            We're always looking for talented engineers, surveyors, and support
            staff who share our commitment to excellence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-white bg-white px-10 py-4 text-sm font-light tracking-wide text-[#893002] transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            View Open Positions
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
