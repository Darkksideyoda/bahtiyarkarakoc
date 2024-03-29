import './globals.css';

import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
import { ReactNode } from 'react';

import AnimatedPageLayout from '../components/ui/AnimatedPageLayout/AnimatedPageLayout';
import Providers from '../utils/Providers/Providers';

const inter = PT_Sans({ weight: '700', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AnimatedPageLayout>{children}</AnimatedPageLayout>
        </Providers>
      </body>
    </html>
  );
}
