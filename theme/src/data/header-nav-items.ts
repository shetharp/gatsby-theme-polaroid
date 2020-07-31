import { HeaderNavItem } from "../components/header-nav";

export const headerNavItems: HeaderNavItem[] = [
  {
    label: "Blog",
    slug: "/blog",
    isVisibleMobile: true,
    isVisibleTablet: true,
  },
  {
    label: "About",
    slug: "/about",
  },
  {
    label: "Theme Preview",
    slug: "/theme-preview",
    isVisibleTablet: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/shetharp/gatsby-theme-polaroid",
  },
];
