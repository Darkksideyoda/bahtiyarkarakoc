import { Link } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import localFont from 'next/font/local';
import { useTheme } from 'next-themes';
import React from 'react';
import Marquee from 'react-fast-marquee';

import RubicCubeAnimation from '../../../../public/Lotties/RubicCube.json';
import GlowingGradientBorder from '../Common/GlowingGradientBorder';
import Typography from '../Typography/Typography';
import BentoItem from './BentoItem';
import { animateNegativeToPositive, animatePositiveToNegative, stackList } from './helpers';
import StackChip from './StackChip';

const myFont = localFont({ src: '../../../../public/Fonts/Peace Sans Webfont.ttf' });

function BentoGrid() {
  const { theme } = useTheme();

  const selectBackgroundColor = theme === 'dark' ? 'bg-black' : 'bg-default';

  return (
    <main className=" w-full gap-8 sm:grid">
      <section className="grid w-full gap-8 sm:flex">
        <BentoItem
          animateDirectionX={[]}
          tooltipContent={'Latest Project'}
          gradientStartColor={'from-orange-500'}
          gradientEndColor={'to-orange-500'}
          theme={theme}
        >
          <Link
            href={'/'}
            className={`relative flex items-center rounded-2xl p-3.5 ${
              theme === 'dark' ? 'bg-orange-500' : 'bg-default'
            }`}
          >
            <Marquee pauseOnHover>
              <Lottie animationData={RubicCubeAnimation} className="mx-4 h-7" loop={true} />
              <Typography
                className={`${myFont.className} select-none`}
                color={`${theme === 'dark' ? 'text-yellow-200' : 'text-foreground'}`}
                variant="body1"
              >
                MONOREPO SETUP WITH NEST & NEXT
              </Typography>
            </Marquee>
          </Link>
        </BentoItem>

        <BentoItem
          animateDirectionX={[]}
          tooltipContent={'Latest Blog Post'}
          gradientStartColor={'from-violet-500'}
          gradientEndColor={'to-violet-500'}
          theme={theme}
          tooltipColor="bg-violet-500"
        >
          <Link
            href={'/'}
            className={`relative flex items-center rounded-2xl p-3.5 ${
              theme === 'dark' ? 'bg-violet-500' : 'bg-default'
            }`}
          >
            <Marquee pauseOnHover>
              <Lottie animationData={undefined} className="mx-4 h-7" loop={true} />
              <Typography
                className={`${myFont.className} select-none`}
                color={`${theme === 'dark' ? 'text-pink-200' : 'text-foreground'}`}
                variant="body1"
              >
                MONOREPO SETUP WITH NEST & NEXT
              </Typography>
            </Marquee>
          </Link>
        </BentoItem>
      </section>
      <section className="grid w-full gap-8 sm:flex">
        <motion.section
          animate={{
            x: animateNegativeToPositive
          }}
          className="group relative flex h-72 w-full rounded-2xl sm:w-1/3"
        >
          <GlowingGradientBorder startColor="from-cyan-500" endColor="to-cyan-500" />
          <div
            className={`relative flex h-72 w-full rounded-2xl ${theme === 'dark' ? 'bg-cyan-700' : 'bg-default'}`}
          ></div>
        </motion.section>
        <motion.section
          animate={{
            y: animatePositiveToNegative
          }}
          className="grid w-full flex-col gap-8 sm:flex sm:w-2/3"
        >
          <section className="group relative h-full w-full rounded-2xl">
            <GlowingGradientBorder startColor="from-pink-500" endColor="to-pink-500" />
            <div
              className={`relative grid h-full w-full rounded-2xl sm:flex ${
                theme === 'dark' ? 'bg-pink-700' : 'bg-default'
              }`}
            >
              dat
            </div>
          </section>
          <section className="grid h-1/4 w-full gap-8 rounded-2xl sm:flex">
            <section className="group relative h-full w-full rounded-2xl">
              <GlowingGradientBorder startColor="from-blue-500" endColor="to-blue-500" />
              <div
                className={`relative grid h-full w-full rounded-2xl sm:flex ${
                  theme === 'dark' ? 'bg-blue-700' : 'bg-default'
                }`}
              ></div>
            </section>
            <section className="group relative h-full w-full rounded-2xl">
              <GlowingGradientBorder startColor="from-yellow-500" endColor="to-yellow-500" />
              <div
                className={`relative flex h-full w-full rounded-2xl ${
                  theme === 'dark' ? 'bg-yellow-500' : 'bg-default'
                }`}
              ></div>
            </section>
          </section>
        </motion.section>
        <motion.section
          animate={{
            x: animatePositiveToNegative
          }}
          className="group relative w-1/3 rounded-2xl"
        >
          <GlowingGradientBorder startColor="from-emerald-500" endColor="to-emerald-500" />
          <div
            className={`relative flex h-full w-full rounded-2xl ${theme === 'dark' ? 'bg-emerald-700' : 'bg-default'}`}
          ></div>
        </motion.section>
      </section>

      <motion.section
        animate={{
          y: animatePositiveToNegative
        }}
        className="group relative w-full rounded-2xl"
      >
        <GlowingGradientBorder startColor="from-sky-500" endColor="to-emerald-500" />
        <div className={`relative flex w-full items-center rounded-2xl py-3 ${selectBackgroundColor}`}>
          <Marquee pauseOnHover speed={100} direction="right">
            <div className="flex max-w-[500px] sm:max-w-[100px] md:max-w-[300px]">
              {stackList.map((item) => (
                <StackChip key={item.id} icon={item.icon} color={item.color} title={item.title} />
              ))}
            </div>
          </Marquee>
        </div>
      </motion.section>
    </main>
  );
}

export default BentoGrid;
