"use client";

import { useState } from "react";
import { X, Send, Mail, Phone } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ContactFormPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: React.ReactNode;
}

export default function ContactFormPopover({
  isOpen,
  onClose,
  trigger,
}: ContactFormPopoverProps) {
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
        onClose();
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

  if (!isOpen) return trigger || null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Popover */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 transform animate-fade-in">
        <div className="mx-4 bg-white shadow-2xl border border-gray-100 rounded-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 bg-zinc-50">
            <div>
              <h3 className="text-xl font-light text-gray-900">Get in Touch</h3>
              <p className="text-sm font-light text-gray-500 mt-1">
                We'll respond within 24 hours
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-sm text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {submitted ? (
              <div className="py-12 text-center">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="popover-name"
                      className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="popover-name"
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
                      htmlFor="popover-email"
                      className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="popover-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 placeholder-gray-300 focus:border-[#893002] focus:outline-none transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="popover-phone"
                      className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="popover-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 placeholder-gray-300 focus:border-[#893002] focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="popover-company"
                      className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="popover-company"
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
                    htmlFor="popover-projectType"
                    className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                  >
                    Project Type
                  </label>
                  <select
                    id="popover-projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 focus:border-[#893002] focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="text-gray-400">
                      Select a project type...
                    </option>
                    <option value="site-development">Site Development</option>
                    <option value="land-surveying">Land Surveying</option>
                    <option value="municipal-engineering">
                      Municipal Engineering
                    </option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="popover-message"
                    className="text-xs font-medium tracking-wider text-gray-500 uppercase"
                  >
                    Message *
                  </label>
                  <textarea
                    id="popover-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border-b border-gray-200 bg-transparent px-0 py-2 font-light text-gray-900 placeholder-gray-300 focus:border-[#893002] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm">
                    {error}
                  </div>
                )}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center gap-3 bg-[#893002] px-6 py-3 text-sm font-light tracking-wide text-white transition-all duration-300 hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && (
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    )}
                  </button>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <a
                      href="tel:8472955200"
                      className="flex items-center gap-2 hover:text-[#893002] transition-colors"
                    >
                      <Phone size={14} />
                      <span className="font-light">(847) 295-5200</span>
                    </a>
                    <a
                      href="mailto:info@bleckeng.com"
                      className="flex items-center gap-2 hover:text-[#893002] transition-colors"
                    >
                      <Mail size={14} />
                      <span className="font-light">info@bleckeng.com</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}






