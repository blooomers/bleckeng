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

    // Ensure video is muted for autoplay (required for mobile)
    video.muted = true;

    // Function to attempt playing the video
    const attemptPlay = async () => {
      try {
        await video.play();
      } catch (error) {
        // Autoplay was prevented, which is fine - user interaction may be needed
        // The video will still show the poster image
        console.log("Video autoplay prevented:", error);
      }
    };

    // Check if video is already ready (cached)
    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
      setIsBuffering(false);
      attemptPlay();
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

    const handleCanPlay = async () => {
      setIsBuffering(false);
      setIsVideoLoaded(true);
      setShowLoadingUI(false);
      // Attempt to play when video can play (important for mobile)
      await attemptPlay();
    };

    const handleLoadedData = async () => {
      setIsVideoLoaded(true);
      setIsBuffering(false);
      setShowLoadingUI(false);
      // Attempt to play when data is loaded
      await attemptPlay();
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

  const featuredProjects = [
    {
      id: 22,
      title: "Northwestern Medicine Lake Forest Hospital",
      categories: "Healthcare, Master Planning",
      location: "Lake Forest, IL",
      year: "2012-2026",
      description:
        "A comprehensive program-level overview of long-term civil engineering and planning support for the Northwestern Medicine Lake Forest Hospital campus.",
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/exterior_rendering_1_-_6.1.2022.png",
      href: "/projects/nwmh",
    },
    {
      id: 1,
      title: "USDA National Nursery System Optimization Planning",
      categories: "Master Planning",
      location: "National (8 Locations)",
      year: "2024",
      description:
        "Providing master planning services to prepare the U.S. Forest Service for the future and meet REPLANT Act targets.",
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/USDA/Lucky%20Peak/5734200698_e48e24924d.webp",
      href: "/projects/usda-nursery",
    },
  ];

  const recentProjects = [
    {
      id: 24,
      title: "McKinley Condominium Residences",
      categories: "Residential",
      location: "Lake Forest, IL",
      year: "2018-2026",
      description:
        "Premier downtown Lake Forest homes offering luxury living just steps from local dining, shops, parks, and commuter transit.",
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/MCKINLEY/GA5A4944.jpg",
      href: "/projects/mckinley-condominium-development",
    },
    {
      id: 26,
      title: "Kelmscott Park",
      categories: "Residential, Master Planning",
      location: "Lake Forest, IL",
      year: "2025",
      description:
        "A thoughtfully planned mixed-use residential development transforming municipal land into a vibrant, walkable neighborhood.",
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/KELMSCOTT/GA5A4842.jpg",
      href: "/projects/kelmscott-park",
    },
    {
      id: 25,
      title: "Northwestern Medicine Lake Forest Hospital – Parking Garage",
      categories: "Healthcare",
      location: "Lake Forest, IL",
      year: "2024",
      description:
        "Part of the bed expansion project providing approximately 1,000 parking spaces to support hospital operations.",
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/PARKING-GARAGE/parkinggarage.jpg",
      href: "/projects/nwmh/parking-garage",
    },
    {
      id: 27,
      title: "North Western Medicine Lake Forest Hospital – Pavilion Expansion",
      categories: "Healthcare",
      location: "Lake Forest, IL",
      year: "2025",
      description:
        "Pavilion-area improvements and pedestrian connectivity within the overall campus revitalization.",
      image:
        "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/Pavilion-Rendering.png",
      href: "/projects/nwmh/pavilion",
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
              src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/landingpage-c.mp4"
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
                className="inline-block animate-fade-in break-words tracking"
                style={{
                  textShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3)",
                }}
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

      {/* Services Overview - Elevated Design */}
      <section className="relative border-t border-gray-100 bg-gradient-to-b from-white to-gray-50 py-20 sm:py-24 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#893002]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#893002]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mb-16 sm:mb-20 md:mb-24">
            <div className="mb-6 inline-block">
              <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
                Services
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
              </div>
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              What We Do Best
            </h2>
            <p className="max-w-2xl font-light leading-relaxed text-gray-600 text-base sm:text-lg">
              Four core services. Decades of excellence. One commitment to
              transforming visions into reality.
            </p>
          </div>

          {/* 2x2 Grid - All Cards with Diagonal Split Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Civil Engineering - Diagonal Left */}
            <Link
              href="/services/civil-engineering"
              className="group relative block overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative h-[500px] sm:h-[600px] lg:h-[550px] overflow-hidden bg-gray-900 rounded-xl">
                <Image
                  fill
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/hospital.jpg"
                  alt="Civil Engineering"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Gradient Overlay - Full box, appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#893002] via-[#6b2501] to-[#4a1901] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out"></div>
                {/* Solid Red Overlay - Appears after gradient fills */}
                <div className="absolute inset-0 bg-[#893002] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out delay-500"></div>

                {/* Large Number */}
                <div className="absolute top-6 left-6 sm:top-10 sm:left-10 lg:top-12 lg:left-12">
                  <span className="text-[120px] sm:text-[180px] lg:text-[200px] font-bold leading-none text-white/10 group-hover:text-white/20 transition-colors duration-700">
                    01
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
                  <div className="max-w-2xl">
                    <div className="mb-4 inline-flex items-center gap-3">
                      <div className="h-px w-12 bg-white"></div>
                      <span className="text-xs sm:text-sm font-light text-white/90 uppercase tracking-[0.2em]">
                        Site Planning & Infrastructure
                      </span>
                    </div>
                    <h3
                      style={{
                        textShadow:
                          "0 4px 8px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3)",
                      }}
                      className="text-3xl sm:text-4xl lg:text-5xl  font-medium text-white mb-4 sm:mb-6 tracking-tight"
                    >
                      Civil Engineering
                    </h3>
                    <p className="text-base sm:text-lg font-light text-white/90 mb-6 sm:mb-8 max-w-xl leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 delay-200">
                      Comprehensive civil engineering services for government,
                      public facilities, and private developers. Building the
                      foundations of tomorrow since 1945.
                    </p>
                    <div className="flex items-center gap-3 text-white text-sm sm:text-base font-light group-hover:gap-4 transition-all duration-300">
                      <span>Explore Service</span>
                      <ArrowRight
                        className="transition-transform duration-300 group-hover:translate-x-2"
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Land Surveying - Diagonal Right */}
            <Link
              href="/services/land-surveying"
              className="group relative block overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative h-[500px] sm:h-[600px] lg:h-[550px] overflow-hidden bg-gray-900 rounded-xl">
                <img
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/surveying1.jpg"
                  alt="Land Surveying"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:rotate-[-1deg]"
                />

                {/* Gradient Overlay - Full box, appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-bl from-[#893002] via-[#6b2501] to-[#4a1901] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out"></div>
                {/* Solid Red Overlay - Appears after gradient fills */}
                <div className="absolute inset-0 bg-[#893002] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out delay-500"></div>

                {/* Large Number */}
                <div className="absolute top-6 right-6 sm:top-10 sm:right-10 lg:top-12 lg:right-12">
                  <span className="text-[120px] sm:text-[180px] lg:text-[200px] font-bold leading-none text-white/10 group-hover:text-white/20 transition-colors duration-700">
                    02
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
                  <div className="max-w-2xl ml-auto text-right">
                    <div className="mb-4 inline-flex items-center gap-3">
                      <span className="text-xs sm:text-sm font-light text-white/90 uppercase tracking-[0.2em]">
                        Professional Surveying & Mapping
                      </span>
                      <div className="h-px w-12 bg-white"></div>
                    </div>
                    <h3
                      style={{
                        textShadow:
                          "0 4px 8px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3)",
                      }}
                      className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 sm:mb-6 tracking-tight"
                    >
                      Land Surveying
                    </h3>
                    <p className="text-base sm:text-lg font-light text-white/90 mb-6 sm:mb-8 max-w-xl ml-auto leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 delay-200">
                      In-house survey staff providing reliable, accurate field
                      information and topographic mapping for your projects.
                    </p>
                    <div className="flex items-center justify-end gap-3 text-white text-sm sm:text-base font-light group-hover:gap-4 transition-all duration-300">
                      <span>Explore Service</span>
                      <ArrowRight
                        className="transition-transform duration-300 group-hover:translate-x-2"
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Construction Management - Diagonal Left */}
            <Link
              href="/services/construction-management"
              className="group relative block overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative h-[500px] sm:h-[600px] lg:h-[550px] overflow-hidden bg-gray-900 rounded-xl">
                <img
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/IMG_3356-2.jpg"
                  alt="Construction Management"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Gradient Overlay - Full box, appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#893002] via-[#6b2501] to-[#4a1901] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out"></div>
                {/* Solid Red Overlay - Appears after gradient fills */}
                <div className="absolute inset-0 bg-[#893002] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out delay-500"></div>

                {/* Large Number */}
                <div className="absolute top-6 left-6 sm:top-10 sm:left-10 lg:top-12 lg:left-12">
                  <span className="text-[120px] sm:text-[180px] lg:text-[200px] font-bold leading-none text-white/10 group-hover:text-white/20 transition-colors duration-700">
                    03
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
                  <div className="max-w-2xl">
                    <div className="mb-4 inline-flex items-center gap-3">
                      <div className="h-px w-12 bg-white"></div>
                      <span className="text-xs sm:text-sm font-light text-white/90 uppercase tracking-[0.2em]">
                        End-to-End Project Management
                      </span>
                    </div>
                    <h3
                      style={{
                        textShadow:
                          "0 4px 8px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3)",
                      }}
                      className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 sm:mb-6 tracking-tight"
                    >
                      Construction Management
                    </h3>
                    <p className="text-base sm:text-lg font-light text-white/90 mb-6 sm:mb-8 max-w-xl leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 delay-200">
                      Continuity of service with one project manager from start
                      to finish, ensuring high-level coordination for complex
                      projects.
                    </p>
                    <div className="flex items-center gap-3 text-white text-sm sm:text-base font-light group-hover:gap-4 transition-all duration-300">
                      <span>Explore Service</span>
                      <ArrowRight
                        className="transition-transform duration-300 group-hover:translate-x-2"
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Design Build - Diagonal Right */}
            <Link
              href="/services/design-build"
              className="group relative block overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative h-[500px] sm:h-[600px] lg:h-[550px] overflow-hidden bg-gray-900 rounded-xl">
                <img
                  src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/L1230468%20(1).jpg"
                  alt="Design Build"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:rotate-[-1deg]"
                />

                {/* Gradient Overlay - Full box, appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-bl from-[#893002] via-[#6b2501] to-[#4a1901] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out"></div>
                {/* Solid Red Overlay - Appears after gradient fills */}
                <div className="absolute inset-0 bg-[#893002] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out delay-500"></div>

                {/* Large Number */}
                <div className="absolute top-6 right-6 sm:top-10 sm:right-10 lg:top-12 lg:right-12">
                  <span className="text-[120px] sm:text-[180px] lg:text-[200px] font-bold leading-none text-white/10 group-hover:text-white/20 transition-colors duration-700">
                    04
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
                  <div className="max-w-2xl ml-auto text-right">
                    <div className="mb-4 inline-flex items-center gap-3">
                      <span className="text-xs sm:text-sm font-light text-white/90 uppercase tracking-[0.2em]">
                        Unified Workflow & Delivery
                      </span>
                      <div className="h-px w-12 bg-white"></div>
                    </div>
                    <h3
                      style={{
                        textShadow:
                          "0 4px 8px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3)",
                      }}
                      className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 sm:mb-6 tracking-tight"
                    >
                      Design Build
                    </h3>
                    <p className="text-base sm:text-lg font-light text-white/90 mb-6 sm:mb-8 max-w-xl ml-auto leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 delay-200">
                      Streamlined project delivery from initial design through
                      completion of construction, reducing project delivery
                      schedule.
                    </p>
                    <div className="flex items-center justify-end gap-3 text-white text-sm sm:text-base font-light group-hover:gap-4 transition-all duration-300">
                      <span>Explore Service</span>
                      <ArrowRight
                        className="transition-transform duration-300 group-hover:translate-x-2"
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* View All Services CTA */}
          <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-4 border-2 border-[#893002] bg-transparent px-10 sm:px-12 py-4 sm:py-5 text-sm sm:text-base font-light tracking-wide text-[#893002] transition-all duration-500 hover:bg-[#893002] hover:text-white hover:shadow-2xl hover:shadow-[#893002]/20 hover:-translate-y-1"
            >
              <span>Explore All Services</span>
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-2"
                size={20}
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects - Compact Professional Layout */}
      <section className="relative border-t border-gray-100 bg-white py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-10">
            <div className="mb-3 inline-block">
              <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
                Portfolio
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
              </div>
            </div>
            <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">
              Featured Work
            </h2>
            <p className="max-w-2xl font-light text-gray-600 text-sm sm:text-base">
              Transforming communities through thoughtful design and engineering
              excellence
            </p>
          </div>

          {/* Featured Projects Grid - 2 Column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={project.href}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded text-xs font-light text-white uppercase tracking-wider">
                      {project.categories}
                    </span>
                    <span className="px-2.5 py-1 bg-[#893002]/90 rounded text-xs font-light text-white uppercase tracking-wider">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-2 group-hover:text-[#ffb899] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-light text-white/90 mb-3">
                    {project.location}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-light text-white group-hover:gap-3 transition-all duration-300">
                    <span>View Project</span>
                    <ArrowRight
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      size={16}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Projects Grid - 4 Column */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 mb-4 sm:mb-6">
              Recent Work
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {recentProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={project.href}
                  className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 hover:border-[#893002]/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-light text-gray-400 uppercase tracking-wider">
                        {project.categories.split(",")[0]}
                      </span>
                      <span className="text-xs font-light text-gray-400">
                        {project.year}
                      </span>
                    </div>
                    <h4 className="text-base font-light text-gray-900 mb-1.5 group-hover:text-[#893002] transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h4>
                    <p className="text-xs font-light text-gray-600 mb-3 line-clamp-1">
                      {project.location}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-light text-[#893002] transition-all group-hover:gap-2">
                      <span>View</span>
                      <ArrowRight size={12} strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* View All Projects CTA */}
          <div className="text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 border border-[#893002] bg-transparent px-8 py-3 text-sm font-light tracking-wide text-[#893002] transition-all duration-300 hover:bg-[#893002] hover:text-white"
            >
              <span>Explore All Projects</span>
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={16}
                strokeWidth={1.5}
              />
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
