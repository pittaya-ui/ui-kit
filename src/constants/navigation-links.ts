type NavigationLink = {
  name: string;
  href: string;
  active: boolean;
};

export const NAVIGATION_LINKS: NavigationLink[] = [
  { name: "Components", href: "/docs/components", active: true },
  { name: "Templates", href: "/templates", active: false },
  { name: "Showcase", href: "/showcase", active: false },
];
