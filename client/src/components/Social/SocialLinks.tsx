import { IconType } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

interface SocialLinkType {
  href : string;
  title : string;
  icon : IconType,
  className : string;
}
const socialLinks:SocialLinkType[] = [
  {
    href: "https://www.linkedin.com/in/sayyed-aaman",
    title: 'Linkedin',
    icon: BsLinkedin ,
    className: "hover:text-blue-600 dark:hover:text-blue-400"
  },
  {
    href: "https://github.com/sayyedaaman2",
    title: 'GitHub',
    icon: FaGithubSquare ,
    className: "hover:text-green-600 dark:hover:text-green-600"
  },

];

export default function SocialLinks() {
  return (
    <ul className="social-links text-2xl flex gap-2  w-fit mx-auto lg:mx-0 ">
      {socialLinks.map(({ href, icon:Icon,title, className }, index) => (
        <li key={index}>
          <a href={href} target="_blank" rel="noopener noreferrer" className={`border rounded-md p-2 flex justify-center items-center gap-2 ${className} transition-colors`}>
            <Icon/> <span className="text-sm">
              {title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
