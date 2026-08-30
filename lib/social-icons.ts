import { Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import type { SocialLink } from "@/content/site";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const SOCIAL_ICONS: Record<SocialLink["icon"], IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  medium: Mail,
};
