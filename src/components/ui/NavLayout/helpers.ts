export type NavbarItemProps = {
  href: string;
  title: string;
  icon?: string;
  titleColor?: string;
};

export const navbarItems: NavbarItemProps[] = [
  { href: '/', title: 'Home' },
  { href: '/blog', titleColor: ' from-yellow-400 to-red-500 ', title: 'Blog' },
  { href: '/projects', titleColor: ' from-yellow-400 to-red-500 ', title: 'Projects' },
  { href: '/apps', titleColor: ' from-yellow-400 to-red-500 ', title: 'Apps' },
  { href: '/contact', titleColor: ' from-yellow-400 to-red-500 ', title: 'Contact' }
];
