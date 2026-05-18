import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import type { IconType } from "react-icons";

interface SocialLinkType {
  href: string;
  title: string;
  icon: IconType;
}

const socialLinks: SocialLinkType[] = [
  {
    href: "https://www.linkedin.com/in/sayyed-aaman",
    title: "LinkedIn",
    icon: BsLinkedin,
  },
  {
    href: "https://github.com/sayyedaaman2",
    title: "GitHub",
    icon: FaGithubSquare,
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-4">
      {socialLinks.map(({ href, icon: Icon, title }) => (
        <li key={title}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            className="
              group
              flex items-center gap-3
              px-5 py-3
              rounded-2xl
              border border-white/10
              bg-white/5
              hover:bg-white/10
              hover:border-white/20
              transition-all duration-300
            "
          >
            <Icon className="text-lg text-[#9CA3AF] group-hover:text-white transition-colors" />

            <span className="text-sm font-medium text-[#9CA3AF] group-hover:text-white transition-colors">
              {title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}