import { Link as NextUILink } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Typography from '../Typography/Typography';
import { NavbarItemProps } from './helpers';

function NavItem(props: NavbarItemProps) {
  const { href, title, titleColor = ' from-emerald-400 to-cyan-500 ' } = props;

  const pathname = usePathname();
  const isActive = pathname === href;
  const ariaCurrent = isActive === true ? 'page' : 'false';

  return (
    <NextUILink
      className={`${
        isActive === true ? 'bg-gradient-to-tr bg-clip-text text-transparent' + titleColor : 'text-foreground-800'
      }`}
      aria-current={ariaCurrent}
      as={Link}
      href={href}
    >
      <Typography variant="h6" fontWeight="semibold">
        {title}
      </Typography>
    </NextUILink>
  );
}

export default NavItem;
