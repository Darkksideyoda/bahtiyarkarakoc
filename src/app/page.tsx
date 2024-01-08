/* eslint-disable react/no-unescaped-entities */
'use client';

import localFont from 'next/font/local';
import { useMediaQuery } from 'react-responsive';

import AnimatedPageLayout from '../components/ui/AnimatedPageLayout/AnimatedPageLayout';
import BentoGrid from '../components/ui/BentoGrid/BentoGrid';
import BentoMobile from '../components/ui/BentoGrid/BentoMobile';
import Typography from '../components/ui/Typography/Typography';

const myFont = localFont({ src: '../../public/Fonts/Peace Sans Webfont.ttf' });

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1370 });

  return (
    <AnimatedPageLayout className="gap-8">
      <main className="grid gap-8">
        <section className="grid justify-items-center gap-4">
          <Typography variant="h3" className={myFont.className}>
            Hello there! I'm Bahtiyar
          </Typography>
          <div className="bg-gradient-to-tr from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            <Typography variant="h1" className={myFont.className}>
              COMPUTER ENGINEER
            </Typography>
          </div>
          <Typography variant="h3" className={`${myFont.className} hidden sm:block`}>
            on a mission to turn ideas into digital realities. Welcome to my world of innovation and code.
          </Typography>
        </section>
      </main>
      {!isTabletOrMobile ? <BentoGrid /> : <BentoMobile />}
    </AnimatedPageLayout>
  );
}
