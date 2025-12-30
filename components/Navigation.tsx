"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Mail, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const companySections = [
  {
    title: "About",
    href: "/about",
    description: "Who we are, what we value, and the communities we serve.",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/IMG_7558-2%20(1).jpg",
  },
  {
    title: "History",
    href: "/history#history",
    description: "Eighty years of civil engineering expertise and innovation.",
    image: "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/grandpa2.jpg",
  },
  {
    title: "People",
    href: "/people",
    description: "Meet the leadership and experts driving every project.",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/company/1964%20Mike%20with%20Pat%20Bill%20Skip.JPG",
  },
];

const services = [
  {
    title: "Civil Engineering",
    href: "/services/civil-engineering",
    description:
      "Municipal engineering, drainage, and bluffs & ravines expertise.",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/hospital.jpg",
  },
  {
    title: "Land Surveying",
    href: "/services/land-surveying",
    description:
      "Full-service in-house surveying with reliable field accuracy.",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/surveying1.jpg",
  },
  {
    title: "Construction Management",
    href: "/services/construction-management",
    description: "End-to-end project management with one dedicated team.",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/IMG_3356-2.jpg",
  },
  {
    title: "Design Build",
    href: "/services/design-build",
    description: "Unified workflow from design through construction.",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/services/L1230468%20(1).jpg",
  },
];

const projects = [
  {
    title: "Northwestern Lake Forest Hospital",
    href: "/projects/nwmh",
    description:
      "Campus revitalization featuring a 483,500 square foot state-of-the-art hospital.",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/NWMH/hospital.jpg",
  },
  {
    title: "USDA National Nursery System",
    href: "/projects/usda-nursery",
    description:
      "Master planning to optimize 8 nursery locations to support 1.2 billion trees.",
    image:
      "https://pub-69400ea9236340e29bb7494ac2f4a975.r2.dev/USDA/Lucky%20Peak/5734200698_e48e24924d.webp",
  },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Only the homepage has a dark hero section
  const isHomePage = pathname === "/";

  // For non-home pages, always use the "scrolled" styling (white bg, dark text)
  // For home page, use transparent bg with white text until scrolled
  const shouldUseLightTheme = !isHomePage || isScrolled;

  React.useEffect(() => {
    const handleScroll = () => {
      // Change navbar style after scrolling 100px (or adjust as needed)
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/history", label: "History" },
    { href: "/people", label: "People" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        shouldUseLightTheme
          ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="mx-auto px-4 md:px-14">
        <div className="relative flex items-center justify-between py-4">
          {/* Logo - Left */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-70 mr-auto"
          >
            <Image
              src={shouldUseLightTheme ? "/logo-red.svg" : "/logo-white.svg"}
              alt="Bleck Engineering"
              width={200}
              height={60}
              priority
              className={cn("h-auto w-24 md:w-32 transition-all duration-300")}
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] transition-colors",
                      shouldUseLightTheme
                        ? "text-gray-600 hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900"
                        : "text-white/90 hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white"
                    )}
                  >
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="border-0 bg-transparent p-0 shadow-none">
                    <div className="grid gap-4 p-4 md:w-[500px] lg:w-[600px] md:grid-cols-3">
                      {companySections.map((section) => (
                        <NavCard
                          key={section.title}
                          item={section}
                          layout="vertical"
                        />
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] transition-colors",
                      shouldUseLightTheme
                        ? "text-gray-600 hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900"
                        : "text-white/90 hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white"
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="border-0 bg-transparent p-0 shadow-none">
                    <div className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] md:grid-cols-2">
                      {services.map((service) => (
                        <NavCard
                          key={service.title}
                          item={service}
                          layout="horizontal"
                        />
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] transition-colors",
                      shouldUseLightTheme
                        ? "text-gray-600 hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900"
                        : "text-white/90 hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white"
                    )}
                  >
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="border-0 bg-transparent p-0 shadow-none">
                    <div className="grid gap-4 p-4 md:w-[600px] lg:w-[700px] md:grid-cols-2">
                      {projects.map((project) => (
                        <NavCard
                          key={project.title}
                          item={project}
                          layout="vertical"
                        />
                      ))}
                      <div className="col-span-2 border-t border-gray-100 pt-4 mt-2">
                        <Link
                          href="/projects"
                          className="group flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              View All Projects
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              Browse our complete portfolio across all sectors
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#893002] opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Button - Right */}
          <Link
            href="/contact"
            className={cn(
              "hidden md:flex items-center gap-2  border bg-transparent px-5 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300",
              shouldUseLightTheme
                ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                : "border-white/70 text-white hover:border-white hover:bg-white hover:text-black"
            )}
          >
            <Mail size={14} className="flex-shrink-0" />
            <span className="leading-none mt-[1px]">Contact</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              shouldUseLightTheme
                ? "text-gray-800 hover:text-gray-600"
                : "text-white hover:text-white/80"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 border-t border-gray-100 first:border-t-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="p-4 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-full rounded bg-[#893002] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#7a2a02]"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

type NavItem = {
  title: string;
  href: string;
  description: string;
  image: string;
};

const NavCard = ({
  item,
  layout = "vertical",
}: {
  item: NavItem;
  layout?: "vertical" | "horizontal";
}) => {
  if (layout === "horizontal") {
    return (
      <Link
        href={item.href}
        className="group relative flex overflow-hidden rounded-lg border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all duration-200"
      >
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md m-2">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-center py-2 pr-4 pl-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 group-hover:text-[#893002] transition-colors">
            {item.title}
          </h3>
          <p className="mt-1 text-[11px] leading-normal text-gray-500 line-clamp-2">
            {item.description}
          </p>
        </div>
      </Link>
    );
  }

  // Vertical Layout
  return (
    <Link
      href={item.href}
      className="group relative flex flex-col overflow-hidden rounded-lg transition-all duration-300 hover:bg-gray-50"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md">
        <img
          src={item.image}
          alt={item.title}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
            item.title === "People"
              ? "object-[center_20%] scale-110"
              : "object-center"
          )}
        />
        {/* Subtle inner border for image definition */}
        <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-black/5" />
      </div>

      <div className="flex flex-col gap-1 pt-3 pb-2 px-1">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors group-hover:text-[#893002]">
          {item.title}
        </h3>
        <p className="text-[11px] leading-relaxed text-gray-500 line-clamp-2">
          {item.description}
        </p>
      </div>
    </Link>
  );
};
