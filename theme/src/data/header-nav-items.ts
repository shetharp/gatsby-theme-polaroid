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
    label: "Readme",
    slug: "/readme",
  },
  {
    label: "Theme Preview",
    slug: "/theme-preview",
    isVisibleTablet: true,
  },
  {
    label: "Contact",
    href: "https://arpitsheth.com",
  },
];
