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
      className={`border-t border-[var(--border)] bg-background ${className}`}
      {...rest}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-start lg:items-center justify-between">
          {/* Left */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Aaman Sayyed
            </h3>

            <p className="text-muted max-w-md leading-relaxed">
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
                    className="text-sm text-muted hover:text-foreground transition-colors"
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
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/sayyed-aaman"
              target="_blank"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>

            <Link
              href="mailto:sayyedaaman9@gmail.com"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Email
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-subtle)] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-sm text-muted-dim">
            © {new Date().getFullYear()} Aaman Sayyed. All rights reserved.
          </p>

          <p className="text-sm text-muted-dim">
            Designed for backend engineering credibility.
          </p>
        </div>
      </div>
    </footer>
  );
}