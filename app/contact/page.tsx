"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Impactful */}
      <section className="relative flex min-h-[60vh] sm:min-h-[70vh] items-center justify-center overflow-hidden bg-white pt-24 sm:pt-28 md:pt-32 pb-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/mess.JPEG"
            alt="Contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 text-center">
          <div className="mb-4 sm:mb-6 md:mb-8 inline-block">
            <div className="flex items-center gap-2 sm:gap-3 text-xs font-light tracking-[0.3em] text-white/80 uppercase">
              <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-white/80"></div>
              Get In Touch
              <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-white/80"></div>
            </div>
          </div>
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight px-4">
            Start Your Project
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl font-light text-white/90 px-4">
            Whether you're ready to break ground or just have a few questions,
            we're here to help.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact Info & Visuals */}
          <div className="lg:col-span-5 space-y-12">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <div className="flex items-start gap-6 p-6 bg-white border border-gray-100 rounded-sm shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#893002]/20 rounded-sm">
                  <MapPin
                    className="text-[#893002]"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-1">
                    Visit Us
                  </h3>
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    1375 North Western Avenue
                    <br />
                    Lake Forest, IL 60045
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white border border-gray-100 rounded-sm shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#893002]/20 rounded-sm">
                  <Phone
                    className="text-[#893002]"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-1">
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

              <div className="flex items-start gap-6 p-6 bg-white border border-gray-100 rounded-sm shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#893002]/20 rounded-sm">
                  <Mail
                    className="text-[#893002]"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-1">
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

              <div className="flex items-start gap-6 p-6 bg-white border border-gray-100 rounded-sm shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#893002]/20 rounded-sm">
                  <Clock
                    className="text-[#893002]"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-1">
                    Hours
                  </h3>
                  <p className="text-sm font-light text-gray-600">
                    Mon - Fri: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-lg rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#893002]/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>

              <h2 className="mb-8 text-3xl font-light text-gray-900">
                Send a Message
              </h2>

              {submitted ? (
                <div className="bg-zinc-50 p-12 text-center rounded-sm border border-gray-100">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#893002]/10 text-[#893002]">
                      <Send size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="mb-3 text-2xl font-light text-gray-900">
                    Message Sent
                  </h3>
                  <p className="font-light text-gray-600">
                    Thank you for reaching out. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-8 md:grid-cols-2">
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

                  <div className="grid gap-8 md:grid-cols-2">
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
                        placeholder="(555) 123-4567"
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
                      className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 focus:border-[#893002] focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="text-gray-400">
                        Select a project type...
                      </option>
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
                      rows={5}
                      className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 placeholder-gray-300 focus:border-[#893002] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us a bit about your project goals..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm">
                      {error}
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center gap-3 bg-[#893002] px-8 py-4 text-sm font-light tracking-wide text-white transition-all duration-300 hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && (
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
