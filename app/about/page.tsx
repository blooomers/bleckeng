"use client";

import Navigation from "@/components/Navigation";
import {
  Calendar,
  Award,
  Users,
  Building,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Navigation2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Project locations with approximate coordinates for map visualization
  const projectLocations = [
    {
      name: "Northwestern Lake Forest Hospital",
      city: "Lake Forest, IL",
      lat: 42.25,
      lng: -87.84,
    },
    {
      name: "Fort Sheridan Restoration",
      city: "Lake Forest & Highland Park, IL",
      lat: 42.22,
      lng: -87.82,
    },
    {
      name: "Forest Park Restoration",
      city: "Lake Forest, IL",
      lat: 42.25,
      lng: -87.84,
    },
    {
      name: "Ravinia Festival",
      city: "Highland Park, IL",
      lat: 42.18,
      lng: -87.8,
    },
    {
      name: "Lake Forest Academy",
      city: "Lake Forest, IL",
      lat: 42.25,
      lng: -87.84,
    },
    {
      name: "Waukegan Community Bank",
      city: "Waukegan, IL",
      lat: 42.36,
      lng: -87.84,
    },
    {
      name: "USDA Coeur d'Alene Nursery",
      city: "Coeur d'Alene, ID",
      lat: 47.68,
      lng: -116.78,
    },
    {
      name: "USDA C.E. Bessey Nursery",
      city: "Halsey, NE",
      lat: 41.9,
      lng: -100.27,
    },
    {
      name: "USDA Lucky Peak Nursery",
      city: "Boise, ID",
      lat: 43.62,
      lng: -116.21,
    },
    {
      name: "USDA Placerville Nursery",
      city: "Camino, CA",
      lat: 38.74,
      lng: -120.67,
    },
    {
      name: "USDA J. Herbert Stone Nursery",
      city: "Central Point, OR",
      lat: 42.38,
      lng: -122.92,
    },
    {
      name: "USDA Bend Seed Extractory",
      city: "Bend, OR",
      lat: 44.06,
      lng: -121.32,
    },
    {
      name: "USDA Ashe Seed Extractory",
      city: "Brooklyn, MS",
      lat: 31.05,
      lng: -89.18,
    },
    {
      name: "USDA J.W. Toumey Nursery",
      city: "Watersmeet, MI",
      lat: 46.27,
      lng: -89.18,
    },
  ];

  // Office location
  const officeLocation = {
    name: "Bleck Engineering",
    address: "1375 N Western Avenue",
    city: "Lake Forest, IL 60045",
    lat: 42.2519,
    lng: -87.8403,
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-zinc-50 pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/IMG_7557.jpeg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 text-center">
          <div className="mb-8 inline-block">
            <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-white/90 uppercase">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/60"></div>
              About Us
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
          </div>
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-7xl font-light text-white leading-tight drop-shadow-lg">
            Engineering Excellence
            <span className="block text-white text-2xl sm:text-3xl md:text-4xl mt-2">
              Since 1945
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl font-light text-white/90 px-4 drop-shadow-md">
            Integrity. Precision. Personalized Service.
          </p>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="border-t border-gray-100 bg-white py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-6 inline-block">
              <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
                Our Company
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
              </div>
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
              About Bleck Engineering
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 text-lg font-light leading-relaxed text-gray-700">
            <p>
              Founded in 1945, Bleck Engineering has been a trusted partner in
              civil engineering and land surveying for over 80 years. Based in
              Lake Forest, Illinois, we serve clients throughout Northern
              Illinois, Southeastern Wisconsin, and across the nation.
            </p>
            <p>
              Our team combines decades of experience with modern technology and
              innovative solutions. We work closely with municipalities, private
              developers, healthcare institutions, and public agencies to
              deliver projects that enhance infrastructure, improve quality of
              life, and respect the natural environment.
            </p>
            <p>
              With engineering licenses in five states, we bring our expertise
              to projects of all sizes—from local infrastructure improvements to
              large-scale national initiatives. Our commitment to excellence,
              integrity, and personalized service has made us a preferred choice
              for complex engineering challenges.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm text-center">
              <span className="block text-4xl text-[#893002] mb-2 font-light">
                80+
              </span>
              <span className="text-sm uppercase tracking-wider text-gray-600 font-light">
                Years Experience
              </span>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm text-center">
              <span className="block text-4xl text-[#893002] mb-2 font-light">
                8
              </span>
              <span className="text-sm uppercase tracking-wider text-gray-600 font-light">
                States Licensed
              </span>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm text-center">
              <span className="block text-4xl text-[#893002] mb-2 font-light">
                1945
              </span>
              <span className="text-sm uppercase tracking-wider text-gray-600 font-light">
                Founded
              </span>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-sm text-center">
              <span className="block text-4xl text-[#893002] mb-2 font-light">
                5000+
              </span>
              <span className="text-sm uppercase tracking-wider text-gray-600 font-light">
                Projects Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="border-t border-gray-100 bg-gray-50 py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-6 inline-block">
              <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
                Values
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
              </div>
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
              Our Core Values
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: "Excellence",
                text: "Committed to delivering the highest quality work on every project.",
              },
              {
                icon: Users,
                title: "Collaboration",
                text: "Working closely with clients and communities to achieve shared goals.",
              },
              {
                icon: Building,
                title: "Innovation",
                text: "Embracing new technologies and approaches to solve complex challenges.",
              },
              {
                icon: Calendar,
                title: "Integrity",
                text: "Operating with honesty, transparency, and ethical practices.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="text-center group p-6 hover:bg-white transition-colors rounded-sm"
              >
                <div className="mb-6 flex justify-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center border border-[#893002]/20 text-[#893002] group-hover:bg-[#893002] group-hover:text-white transition-all duration-300 rounded-full">
                    <value.icon size={28} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-light text-gray-900">
                  {value.title}
                </h3>
                <p className="font-light leading-relaxed text-gray-600 text-sm">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section with Office and Projects */}
      <section className="border-t border-gray-100 bg-white py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-6 inline-block">
              <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
                Our Reach
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
              </div>
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
              Local Roots, National Reach
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg font-light leading-relaxed text-gray-600">
              For over 80 years, our deep roots in the Lake County region have
              made us a trusted partner for municipalities and developers
              throughout Northern Illinois and Southeastern Wisconsin.
            </p>
          </div>

          {/* Office Location Card */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 rounded-sm p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#893002]/20 rounded-sm bg-white">
                  <Building
                    className="text-[#893002]"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-light text-gray-900 mb-2">
                    Our Office
                  </h3>
                  <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">
                    {officeLocation.address}
                    <br />
                    {officeLocation.city}
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=1375+N+Western+Avenue,+Lake+Forest,+IL+60045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-light text-[#893002] hover:text-[#a03a03] transition-colors"
                  >
                    Get Directions
                    <Navigation2 size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-100 overflow-hidden rounded-sm mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.5!2d-87.8403!3d42.2519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f9b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s1375%20N%20Western%20Ave%2C%20Lake%20Forest%2C%20IL%2060045!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&maptype=roadmap&zoom=12"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(20%) contrast(1.1) brightness(0.98)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Bleck Engineering Office Location"
            ></iframe>
          </div>

          {/* Additional Content */}
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 font-light text-base sm:text-lg leading-relaxed">
            <p>
              With engineering licenses in eight states (Illinois, Indiana, Iowa
              Michigan, Minnesota, Wisconsin, Connecticut, and Florida), we
              bring our expertise to projects across the country—from local
              infrastructure improvements to large-scale national initiatives
              like the USDA National Nursery System.
            </p>
            <p>
              Our project portfolio spans healthcare facilities, municipal
              infrastructure, environmental restoration, commercial development,
              and federal projects, demonstrating our versatility and commitment
              to excellence.
            </p>
            <div className="pt-6 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-light text-[#893002] hover:text-[#a03a03] transition-colors"
              >
                View Our Projects
                <Navigation2 size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="border-t border-gray-100 bg-white py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-6 inline-block">
              <div className="flex items-center gap-3 text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#893002]"></div>
                Get In Touch
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#893002]"></div>
              </div>
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
              Contact Us
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg font-light leading-relaxed text-gray-600">
              Have a question or ready to start your project? We'd love to hear
              from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-100 rounded-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#893002]/20 rounded-sm">
                  <MapPin
                    className="text-[#893002]"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-base font-light text-gray-900 mb-1">
                    Visit Us
                  </h3>
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {officeLocation.address}
                    <br />
                    {officeLocation.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-100 rounded-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#893002]/20 rounded-sm">
                  <Phone
                    className="text-[#893002]"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-base font-light text-gray-900 mb-1">
                    Call Us
                  </h3>
                  <a
                    href="tel:8472955200"
                    className="text-sm font-light text-gray-600 hover:text-[#893002] transition-colors"
                  >
                    (847) 295-5200
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-100 rounded-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#893002]/20 rounded-sm">
                  <Mail
                    className="text-[#893002]"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-base font-light text-gray-900 mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@bleckeng.com"
                    className="text-sm font-light text-gray-600 hover:text-[#893002] transition-colors"
                  >
                    info@bleckeng.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-100 rounded-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#893002]/20 rounded-sm">
                  <Clock
                    className="text-[#893002]"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-base font-light text-gray-900 mb-1">
                    Hours
                  </h3>
                  <p className="text-sm font-light text-gray-600">
                    Mon - Fri: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 md:p-12 border border-gray-100 shadow-sm rounded-sm">
                <h3 className="mb-8 text-2xl sm:text-3xl font-light text-gray-900">
                  Send a Message
                </h3>

                {submitted ? (
                  <div className="bg-gray-50 p-12 text-center rounded-sm border border-gray-100">
                    <div className="mb-6 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#893002]/10 text-[#893002]">
                        <Send size={32} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h4 className="mb-3 text-2xl font-light text-gray-900">
                      Message Sent
                    </h4>
                    <p className="font-light text-gray-600">
                      Thank you for reaching out. We'll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 sm:space-y-8"
                  >
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 placeholder-gray-300 focus:border-[#893002] focus:outline-none transition-colors"
                          placeholder="Jane Smith"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 placeholder-gray-300 focus:border-[#893002] focus:outline-none transition-colors"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 placeholder-gray-300 focus:border-[#893002] focus:outline-none transition-colors"
                          placeholder="(847) 555-1234"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 placeholder-gray-300 focus:border-[#893002] focus:outline-none transition-colors"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="projectType"
                        className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 focus:border-[#893002] focus:outline-none transition-colors"
                      >
                        <option value="">Select a project type</option>
                        <option value="civil-engineering">
                          Civil Engineering
                        </option>
                        <option value="land-surveying">Land Surveying</option>
                        <option value="construction-management">
                          Construction Management
                        </option>
                        <option value="design-build">Design Build</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 placeholder-gray-300 focus:border-[#893002] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#893002] px-8 py-4 text-sm font-light tracking-wide text-white transition-all duration-300 hover:bg-[#a03a03] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send size={18} strokeWidth={1.5} />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
