import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type FooterProps = ComponentPropsWithoutRef<"footer">;

const navigation = [
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Architecture",
    href: "#architecture",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Footer({
  className = "",
  ...rest
}: FooterProps) {
  return (
    <footer
      className={`border-t border-white/10 bg-[#0B0F19] ${className}`}
      {...rest}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-start lg:items-center justify-between">
          {/* Left */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Aaman Sayyed
            </h3>

            <p className="text-[#9CA3AF] max-w-md leading-relaxed">
              Backend-focused full stack developer building scalable APIs,
              authentication systems, and production-ready Node.js services.
            </p>
          </div>

          {/* Center */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right */}
          <div className="flex gap-4">
            <Link
              href="https://github.com/sayyedaaman2"
              target="_blank"
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
            >
              GitHub
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
            >
              LinkedIn
            </Link>

            <Link
              href="mailto:your@email.com"
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
            >
              Email
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-sm text-[#6B7280]">
            © {new Date().getFullYear()} Aaman Sayyed. All rights reserved.
          </p>

          <p className="text-sm text-[#6B7280]">
            Designed for backend engineering credibility.
          </p>
        </div>
      </div>
    </footer>
  );
}