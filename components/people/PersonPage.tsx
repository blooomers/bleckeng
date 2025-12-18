"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Mail,
  Linkedin,
  Award,
  GraduationCap,
  Users,
  Building,
  Twitter,
  Instagram,
} from "lucide-react";

interface PersonPageProps {
  name: string;
  title: string;
  credentials?: string;
  bio: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  education?: string;
  certificates?: string[];
  affiliations?: string[];
  boards?: string[];
  expertise?: string[];
  image?: string;
  personalInterests?: string;
  additionalPhotos?: string[];
}

export default function PersonPage({
  name,
  title,
  credentials,
  bio,
  email,
  linkedin,
  twitter,
  instagram,
  education,
  certificates,
  affiliations,
  boards,
  expertise,
  image,
  personalInterests,
  additionalPhotos,
}: PersonPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#89300208_1px,transparent_1px),linear-gradient(to_bottom,#89300208_1px,transparent_1px)] bg-[size:6rem_6rem]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-8 w-full">
          <Link
            href="/people"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#893002] transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to People
          </Link>

          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="aspect-square bg-gray-100 flex items-center justify-center mb-8 lg:mb-0 overflow-hidden">
                {image ? (
                  <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="text-center">
                    <div className="mx-auto flex h-48 w-48 items-center justify-center border border-[#893002]/20 text-6xl font-light text-gray-400">
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                )}
              </div>
              {(linkedin || twitter || instagram) && (
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {linkedin && linkedin !== "#" && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-light text-gray-600 transition-colors hover:text-[#893002]"
                    >
                      <Linkedin size={18} strokeWidth={1.5} />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  )}
                  {twitter && twitter !== "#" && (
                    <a
                      href={twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-light text-gray-600 transition-colors hover:text-[#893002]"
                    >
                      <Twitter size={18} strokeWidth={1.5} />
                      <span className="text-sm">Twitter</span>
                    </a>
                  )}
                  {instagram && instagram !== "#" && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-light text-gray-600 transition-colors hover:text-[#893002]"
                    >
                      <Instagram size={18} strokeWidth={1.5} />
                      <span className="text-sm">Instagram</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="lg:col-span-3">
              {credentials && (
                <div className="mb-2 text-xs font-light tracking-wider text-gray-400 uppercase">
                  {credentials}
                </div>
              )}
              <h1 className="mb-2 text-4xl font-light text-gray-900 md:text-5xl">
                {name}
              </h1>
              <p className="mb-6 text-xl font-light text-gray-600">{title}</p>

              <div className="mb-8 flex flex-wrap gap-6">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 font-light text-gray-600 transition-colors hover:text-[#893002]"
                  >
                    <Mail size={18} strokeWidth={1.5} />
                    <span className="text-sm">Email</span>
                  </a>
                )}
                {linkedin && linkedin !== "#" && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-light text-gray-600 transition-colors hover:text-[#893002]"
                  >
                    <Linkedin size={18} strokeWidth={1.5} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                )}
                {twitter && twitter !== "#" && (
                  <a
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-light text-gray-600 transition-colors hover:text-[#893002]"
                  >
                    <Twitter size={18} strokeWidth={1.5} />
                    <span className="text-sm">Twitter</span>
                  </a>
                )}
                {instagram && instagram !== "#" && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-light text-gray-600 transition-colors hover:text-[#893002]"
                  >
                    <Instagram size={18} strokeWidth={1.5} />
                    <span className="text-sm">Instagram</span>
                  </a>
                )}
              </div>

              {/* Education */}
              {education && (
                <div className="mb-6">
                  <div className="mb-3 flex items-center gap-2">
                    <GraduationCap
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#893002]"
                    />
                    <h2 className="text-sm font-light tracking-wider text-gray-400 uppercase">
                      Education
                    </h2>
                  </div>
                  <p className="font-light text-gray-700 text-sm">
                    {education}
                  </p>
                </div>
              )}

              {/* Expertise */}
              {expertise && expertise.length > 0 && (
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Building
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#893002]"
                    />
                    <h2 className="text-sm font-light tracking-wider text-gray-400 uppercase">
                      Areas of Expertise
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((area) => (
                      <span
                        key={area}
                        className="border border-[#893002]/20 px-3 py-1.5 text-xs font-light text-[#893002]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="border-t border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-4xl px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-light leading-relaxed text-gray-700 mb-8">
              {bio}
            </p>
          </div>
          {(linkedin || twitter || instagram) && (
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-100">
              {linkedin && linkedin !== "#" && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-light text-gray-600 transition-colors hover:text-[#893002]"
                >
                  <Linkedin size={18} strokeWidth={1.5} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              )}
              {twitter && twitter !== "#" && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-light text-gray-600 transition-colors hover:text-[#893002]"
                >
                  <Twitter size={18} strokeWidth={1.5} />
                  <span className="text-sm">Twitter</span>
                </a>
              )}
              {instagram && instagram !== "#" && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-light text-gray-600 transition-colors hover:text-[#893002]"
                >
                  <Instagram size={18} strokeWidth={1.5} />
                  <span className="text-sm">Instagram</span>
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Details Section */}
      <section className="border-t border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-4xl px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Certificates */}
            {certificates && certificates.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#893002]/20 text-[#893002]">
                    <Award size={20} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-light text-gray-900">
                    Certificates / Licenses
                  </h2>
                </div>
                <ul className="space-y-3">
                  {certificates.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-light text-gray-700"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#893002]"></div>
                      <span className="leading-relaxed">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Affiliations */}
            {affiliations && affiliations.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#893002]/20 text-[#893002]">
                    <Users size={20} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-light text-gray-900">
                    Affiliations
                  </h2>
                </div>
                <ul className="space-y-3">
                  {affiliations.map((affiliation, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-light text-gray-700"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#893002]"></div>
                      <span className="leading-relaxed">{affiliation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Boards */}
            {boards && boards.length > 0 && (
              <div className="md:col-span-2">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#893002]/20 text-[#893002]">
                    <Building size={20} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-light text-gray-900">
                    Boards and Commissions
                  </h2>
                </div>
                <ul className="space-y-3">
                  {boards.map((board, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-light text-gray-700"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#893002]"></div>
                      <span className="leading-relaxed">{board}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      {personalInterests && (
        <section className="border-t border-gray-100 bg-white py-16">
          <div className="mx-auto max-w-4xl px-8">
            <div className="mb-6">
              <div className="mb-1 inline-block">
                <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
                  More
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
                </div>
              </div>
            </div>
            <p className="text-lg font-light leading-relaxed text-gray-700">
              {personalInterests}
            </p>
          </div>
        </section>
      )}

      {/* Additional Photos Section */}
      {additionalPhotos && additionalPhotos.length > 0 && (
        <section className=" bg-white pb-16">
          <div className="mx-auto max-w-4xl px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {additionalPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 overflow-hidden rounded-[10px] shadow-md"
                >
                  <Image
                    src={photo}
                    alt={`${name} - Photo ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
