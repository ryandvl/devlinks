import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  type LucideProps,
} from "lucide-react";
import { getGithub } from "../utils/get-github";

type LucideIcon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export function SocialLinks() {
  const { url } = getGithub();

  const links: { url: string; icon: LucideIcon }[] = [
    {
      url,
      icon: GithubIcon,
    },
    {
      url: "https://www.instagram.com/",
      icon: InstagramIcon,
    },
    {
      url: "https://youtube.com/",
      icon: YoutubeIcon,
    },
    {
      url: "https://linkedin.com/in/",
      icon: LinkedinIcon,
    },
  ];

  return (
    <div className="flex justify-center py-6 text-2xl">
      {links.map((link) => (
        <a
          href={link.url}
          target="_blank"
          className="text-zinc-950 dark:text-zinc-50 flex items-center justify-center p-4 transition-[background] duration-[0.2s] rounded-full hover:bg-black/20 dark:hover:bg-white/20"
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
}
