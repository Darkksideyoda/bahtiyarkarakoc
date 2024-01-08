import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image';
import React from 'react';

import Settings from '../Settings/Settings';
import { navbarItems } from './helpers';
import NavItem from './NavItem';

function DesktopNavigation() {
  return (
    <Navbar className="hidden sm:flex" isBlurred>
      <NavbarContent className="hidden gap-4 sm:flex" justify="start">
        <NavbarBrand>
          <Image width={34} height={34} as={NextImage} loading="eager" alt="Logo" src="/Images/ppgithyb.png" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navbarItems.map((item) => (
          <NavItem titleColor={item.titleColor} key={item.href} href={item.href} title={item.title} />
        ))}
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        <Settings />
      </NavbarContent>
    </Navbar>
  );
}

export default DesktopNavigation;
