import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-4 sm:px-6 md:px-8 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/logo-red.svg"
              alt="Bleck Engineering"
              width={180}
              height={54}
              className="mb-6 h-auto w-40 opacity-90"
            />
            <p className="font-light leading-relaxed text-gray-600 text-sm mb-6">
              Providing civil engineering and land surveying services since
              1945.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#893002] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#893002] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#893002] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-light tracking-wider text-gray-400 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/history"
                  className="font-light text-gray-600 transition-colors hover:text-[#893002]"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-light text-gray-600 transition-colors hover:text-[#893002]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="font-light text-gray-600 transition-colors hover:text-[#893002]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/people"
                  className="font-light text-gray-600 transition-colors hover:text-[#893002]"
                >
                  People
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-light tracking-wider text-gray-400 uppercase">
              Contact
            </h3>
            <ul className="space-y-3 font-light text-gray-600 text-sm">
              <li>
                1375 N Western Avenue
                <br />
                Lake Forest, IL 60045
              </li>
              <li>
                <a
                  href="tel:8472955200"
                  className="transition-colors hover:text-[#893002]"
                >
                  (847) 295-5200
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bleckeng.com"
                  className="transition-colors hover:text-[#893002]"
                >
                  info@bleckeng.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 border-t border-gray-100 pt-6 sm:pt-8 text-center">
          <p className="text-xs font-light tracking-wider text-gray-400">
            &copy; {new Date().getFullYear()} BLECK ENGINEERING. ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

