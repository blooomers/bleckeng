"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Building2,
  Ruler,
  HardHat,
  Layers,
  Loader2,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Image component with error handling
function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#893002]/5 to-gray-100">
        <Building2 className="text-gray-300" size={64} strokeWidth={1} />
      </div>
    );
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          console.error("Image failed to load:", src);
          setHasError(true);
          setIsLoading(false);
        }}
        loading="lazy"
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader2 className="animate-spin text-gray-400" size={32} />
        </div>
      )}
    </>
  );
}

export default function Home() {
  const services = [
    "CIVIL ENGINEERING",
    "LAND SURVEYING",
    "CONSTRUCTION MANAGEMENT",
    "DESIGN BUILD",
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isBuffering, setIsBuffering] = useState(true);
  const [showLoadingUI, setShowLoadingUI] = useState(false); // Delayed loading UI
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  // Track video loading progress with smart delay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if video is already ready (cached)
    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
      setIsBuffering(false);
      return;
    }

    // Delay showing the loading UI to avoid flicker on fast loads/refreshes
    const loadingTimer = setTimeout(() => {
      if (!isVideoLoaded) {
        setShowLoadingUI(true);
      }
    }, 500);

    const handleProgress = () => {
      if (video.buffered.length > 0 && video.duration > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const progress = (bufferedEnd / video.duration) * 100;
        setVideoProgress(Math.min(progress, 100));
      }
    };

    const handleWaiting = () => {
      setIsBuffering(true);
    };

    const handleCanPlay = () => {
      setIsBuffering(false);
      setIsVideoLoaded(true);
      setShowLoadingUI(false);
    };

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      setIsBuffering(false);
      setShowLoadingUI(false);
    };

    video.addEventListener("progress", handleProgress);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      clearTimeout(loadingTimer);
      video.removeEventListener("progress", handleProgress);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []); // Empty dependency array is fine here as we want this to run once on mount

  const handleVideoError = () => {
    // If video fails to load, still show content with dark background
    setIsVideoLoaded(true);
    setIsBuffering(false);
    setShowLoadingUI(false);
  };

  const recentProjects = [
    {
      id: 1,
      title: "Northwestern Medicine Lake Forest Hospital",
      subtitle: "Parking Garage",
      location: "Lake Forest, Illinois",
      year: "2024",
      description:
        "Providing site civil services to enhance the patient and visitor experience.",
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/parkinggarage.jpg",
      href: "/projects/nwmh/northwestern-parking-garage",
    },
    {
      id: 2,
      title: "USDA National Nursery System",
      subtitle: "Optimization Planning",
      location: "U.S. Forest Service, Various States",
      year: "2024",
      description:
        "Providing master planning services to prepare us for the future and meeting the REPLANT Act targets.",
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/USDA/Lucky%20Peak/5734200698_e48e24924d.webp",
      href: "/projects/usda-nursery",
    },
    {
      id: 3,
      title: "Northwestern Medicine Lake Forest Hospital",
      subtitle: "Pavilion Expansion",
      location: "Lake Forest, Illinois",
      year: "2024",
      description: "Enhancing the health and wellness of communities.",
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/Pavilion-Rendering.png",
      href: "/projects/nwmh/pavilion",
    },
    {
      id: 4,
      title: "Waukegan Community Bank",
      subtitle: "Commercial Development",
      location: "Waukegan, Illinois",
      year: "2024",
      description:
        "Helping to improve your community one development at a time.",
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/WAUKEGAN-COMMUNITY-BANK/waukegan-bank.png",
      href: "/projects/waukegan-bank",
    },
  ];

  const gridBackgroundStyle: CSSProperties = {
    backgroundImage:
      "linear-gradient(rgba(137, 48, 2, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(137, 48, 2, 0.06) 1px, transparent 1px)",
    backgroundSize: "80px 80px",
    backgroundPosition: "center",
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={gridBackgroundStyle}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-end justify-center overflow-hidden pb-6 sm:pb-10 md:pb-20">
        {/* Poster Image Background - always visible until video loads */}
        <div
          className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage:
              "url(https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/landing-poster.jpg)",
          }}
        >
          {/* Fallback dark gradient in case poster image doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#893002] via-[#6b2501] to-[#893002]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#893002]/40 via-[#6b2501]/30 to-[#893002]/40" />
        </div>

        {/* Video Background */}
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            preload="auto"
            poster="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/landing-poster.jpg"
            onError={handleVideoError}
          >
            <source
              src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/landing.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Loading Progress Indicator */}
        {showLoadingUI && !isVideoLoaded && (
          <div className="absolute inset-0 z-[5] flex flex-col items-center justify-center bg-black/10 transition-opacity duration-500">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {/* Spinner */}
              <Loader2
                className="animate-spin text-white drop-shadow-lg"
                size={40}
                strokeWidth={1.5}
              />

              {/* Progress Bar */}
              <div className="w-56 max-w-[80vw] sm:w-64">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-light tracking-wider text-white/90 uppercase">
                    {isBuffering ? "Buffering" : "Loading"}
                  </span>
                  <span className="text-xs font-light text-white/70">
                    {Math.round(videoProgress)}%
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full bg-[#893002] transition-all duration-300 ease-out"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-16 text-left">
          <div className="mb-8 sm:mb-10 md:mb-12 max-w-4xl">
            <h1 className="mb-4 sm:mb-5 md:mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-tight sm:leading-tight">
              <span
                key={currentServiceIndex}
                className="inline-block animate-fade-in break-words"
              >
                {services[currentServiceIndex]}
              </span>
            </h1>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-[#893002] mb-4 sm:mb-6 md:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/90 max-w-2xl">
              Delivering precision engineering and thoughtful design solutions
              that shape our communities.
            </p>
          </div>

          <div className="flex flex-col items-stretch sm:items-start gap-3 sm:gap-4 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className="group flex items-center justify-center gap-3 bg-[#893002] px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-wider text-white transition-all duration-300 hover:bg-[#a03a03] w-full sm:w-auto"
            >
              VIEW OUR WORK
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={16}
                strokeWidth={2}
              />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 border-2 border-white bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#893002] w-full sm:w-auto"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-t border-gray-100 bg-white py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <div className="mb-6 inline-block">
              <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
                Services
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
              </div>
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
              Our Expertise
            </h2>
            <p className="mx-auto max-w-2xl font-light leading-relaxed text-gray-600 text-sm sm:text-base">
              Comprehensive civil engineering and land surveying services
              <br className="hidden md:block" />
              tailored to your needs
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {/* Civil Engineering */}
            <Link
              href="/services/civil-engineering"
              className="group relative overflow-hidden bg-white border border-gray-200 transition-all duration-500 hover:shadow-xl hover:border-[#893002]/20 hover:-translate-y-1"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                <img
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/hospital.jpg"
                  alt="Civil Engineering"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-1.5 group-hover:text-[#893002] transition-colors duration-300">
                    Civil Engineering
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-gray-500 uppercase tracking-wide">
                    Site planning, development & infrastructure
                  </p>
                </div>
                <p className="mb-5 sm:mb-6 font-light leading-relaxed text-gray-600 text-sm sm:text-base">
                  Comprehensive services for government, public facilities and
                  private developers since 1945.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-light text-[#893002] transition-all group-hover:gap-3">
                  See more <ArrowRight size={14} strokeWidth={1.5} />
                </span>
              </div>
            </Link>

            {/* Land Surveying */}
            <Link
              href="/services/land-surveying"
              className="group relative overflow-hidden bg-white border border-gray-200 transition-all duration-500 hover:shadow-xl hover:border-[#893002]/20 hover:-translate-y-1"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                <img
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/surveying1.jpg"
                  alt="Land Surveying"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-1.5 group-hover:text-[#893002] transition-colors duration-300">
                    Land Surveying
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-gray-500 uppercase tracking-wide">
                    Professional surveying & mapping services
                  </p>
                </div>
                <p className="mb-5 sm:mb-6 font-light leading-relaxed text-gray-600 text-sm sm:text-base">
                  In-house survey staff providing reliable, accurate field
                  information and topographic mapping.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-light text-[#893002] transition-all group-hover:gap-3">
                  See more <ArrowRight size={14} strokeWidth={1.5} />
                </span>
              </div>
            </Link>

            {/* Construction Administration */}
            <Link
              href="/services/construction-management"
              className="group relative overflow-hidden bg-white border border-gray-200 transition-all duration-500 hover:shadow-xl hover:border-[#893002]/20 hover:-translate-y-1"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                <img
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/IMG_3356-2.jpg"
                  alt="Construction Management"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-1.5 group-hover:text-[#893002] transition-colors duration-300">
                    Construction Management
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-gray-500 uppercase tracking-wide">
                    End-to-end project management
                  </p>
                </div>
                <p className="mb-5 sm:mb-6 font-light leading-relaxed text-gray-600 text-sm sm:text-base">
                  Continuity of service with one project manager from start to
                  finish, ensuring high-level coordination for complex projects.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-light text-[#893002] transition-all group-hover:gap-3">
                  See more <ArrowRight size={14} strokeWidth={1.5} />
                </span>
              </div>
            </Link>

            {/* Design Build */}
            <Link
              href="/services/design-build"
              className="group relative overflow-hidden bg-white border border-gray-200 transition-all duration-500 hover:shadow-xl hover:border-[#893002]/20 hover:-translate-y-1"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                <img
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/L1230468%20(1).jpg"
                  alt="Design Build"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-1.5 group-hover:text-[#893002] transition-colors duration-300">
                    Design Build
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-gray-500 uppercase tracking-wide">
                    One entity, one contract, unified workflow
                  </p>
                </div>
                <p className="mb-5 sm:mb-6 font-light leading-relaxed text-gray-600 text-sm sm:text-base">
                  Streamlined project delivery from initial design through
                  completion of construction, reducing project delivery
                  schedule.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-light text-[#893002] transition-all group-hover:gap-3">
                  See more <ArrowRight size={14} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          </div>

          {/* View All Services CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 border border-[#893002] bg-[#893002] px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-light tracking-wide text-white transition-all duration-300 hover:bg-[#a03a03] hover:shadow-lg"
            >
              View All Services
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-20 text-center">
            <div className="mb-6 inline-block">
              <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
                Portfolio
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
              </div>
            </div>
            <h2 className="mb-6 text-4xl font-light text-gray-900 md:text-5xl">
              Recent Projects
            </h2>
            <p className="mx-auto max-w-2xl font-light leading-relaxed text-gray-600">
              Creating spaces for the public to enjoy and improving
              <br className="hidden md:block" />
              community health and safety
            </p>
          </div>

          <div className="grid gap-px bg-gray-100 md:grid-cols-2 lg:grid-cols-4">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white transition-all duration-300 hover:bg-gray-50"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  {project.image ? (
                    <>
                      <ProjectImage src={project.image} alt={project.title} />
                      <div className="absolute inset-0 bg-[#893002]/0 transition-all duration-500 group-hover:bg-[#893002]/10" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#893002]/5 to-gray-100">
                        <Building2
                          className="text-gray-300"
                          size={64}
                          strokeWidth={1}
                        />
                      </div>
                      <div className="absolute inset-0 bg-[#893002]/0 transition-all duration-500 group-hover:bg-[#893002]/5" />
                    </>
                  )}
                </div>
                <div className="p-8">
                  <div className="mb-2 flex items-center gap-2 text-xs font-light tracking-wider text-gray-400 uppercase">
                    <div className="h-px w-4 bg-[#893002]"></div>
                    {project.year}
                  </div>
                  <h3 className="mb-1 text-xl font-light text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mb-2 text-sm font-light text-gray-500">
                    {project.subtitle}
                  </p>
                  <p className="mb-1 text-xs font-light text-gray-400">
                    {project.location}
                  </p>
                  <p className="mb-6 font-light leading-relaxed text-gray-600 text-sm">
                    {project.description}
                  </p>
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm font-light text-[#893002] transition-all hover:gap-3"
                  >
                    View Project <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 border border-[#893002] bg-[#893002] px-10 py-4 text-sm font-light tracking-wide text-white transition-all duration-300  hover:bg-[#wwa03a03]"
            >
              View All Projects
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-100 bg-[#893002] py-32">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <div className="mb-8 inline-block">
            <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-white/40 uppercase">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/40"></div>
              Let's Talk
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/40"></div>
            </div>
          </div>
          <h2 className="mb-6 text-4xl font-light text-white md:text-5xl">
            Ready to Start Your Project?
          </h2>
          <p className="mb-12 text-lg font-light leading-relaxed text-white/80">
            We provide thoughtful planning and innovative approaches to
            projects.
            <br className="hidden md:block" />
            Let's work together to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-white bg-white px-10 py-4 text-sm font-light tracking-wide text-[#893002] transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            Get in Touch
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
