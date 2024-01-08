import { Link } from '@nextui-org/react';
import Lottie from 'lottie-react';
import localFont from 'next/font/local';
import { useTheme } from 'next-themes';
import React from 'react';
import Marquee from 'react-fast-marquee';

import Typography from '../Typography/Typography';
import BentoItem from './BentoItem';

const myFont = localFont({ src: '../../../../public/Fonts/Peace Sans Webfont.ttf' });

function BentoMobile() {
  const { theme } = useTheme();

  return (
    <>
      <section className="grid items-center justify-items-center gap-2">
        <Typography
          className={`${myFont.className} select-none`}
          color={`${theme === 'dark' ? 'text-yellow-200' : 'text-foreground'}`}
          variant="caption"
        >
          LATEST PROJECT
        </Typography>

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
              <Lottie animationData={undefined} className="mx-4 h-7" loop={true} />
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
      </section>

      <section className="grid items-center justify-items-center gap-2">
        <Typography
          className={`${myFont.className} select-none`}
          color={`${theme === 'dark' ? 'text-pink-200' : 'text-foreground'}`}
          variant="caption"
        >
          LATEST BLOG POST
        </Typography>

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
    </>
  );
}

export default BentoMobile;
