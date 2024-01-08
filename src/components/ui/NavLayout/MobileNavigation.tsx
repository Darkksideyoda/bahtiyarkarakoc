import { navbarItems } from './helpers';
import NavItem from './NavItem';

function MobileNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-[9999] flex h-bottombar-height items-center justify-around bg-default-50/95 text-center text-foreground-500 backdrop-blur-sm sm:hidden">
      {navbarItems.map((item) => (
        <NavItem titleColor={item.titleColor} key={item.href} href={item.href} title={item.title} />
      ))}
    </nav>
  );
}

export default MobileNavigation;
