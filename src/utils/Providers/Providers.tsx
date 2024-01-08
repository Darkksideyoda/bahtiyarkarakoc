'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';

import NavLayout from '../../components/ui/NavLayout/NavLayout';

type Props = {
  children: React.ReactNode;
};

const Providers = (props: Props) => {
  const { children } = props;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="light">
        <NavLayout />
        {/* <AnimatedCursor
          innerSize={10}
          outerSize={50}
          innerScale={1}
          outerScale={0.5}
          outerAlpha={0}
          outerStyle={{
            mixBlendMode: 'exclusion',
            backgroundColor: '#6d28d9'
          }}
          innerStyle={{
            backgroundColor: '#047857'
          }}
        /> */}
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
