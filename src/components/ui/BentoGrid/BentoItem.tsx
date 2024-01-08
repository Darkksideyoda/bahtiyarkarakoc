import { Tooltip } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import GlowingGradientBorder from '../Common/GlowingGradientBorder';

type Props = {
  tooltipContent: string;
  animateDirectionX?: number[];
  animateDirectionY?: number[];
  gradientStartColor: string;
  gradientEndColor: string;
  children: ReactNode;
  theme: string | undefined;
  tooltipColor?: string;
  className?: string;
};

function BentoItem(props: Props) {
  const {
    animateDirectionX,
    animateDirectionY,
    children,
    className,
    gradientEndColor,
    gradientStartColor,
    theme,
    tooltipColor,
    tooltipContent
  } = props;
  return (
    <Tooltip
      className="select-none"
      classNames={{
        content: [`${theme === 'dark' ? tooltipColor : 'default'}`]
      }}
      color={theme === 'dark' ? 'warning' : 'default'}
      content={tooltipContent}
    >
      <motion.section
        animate={{
          x: animateDirectionX,
          y: animateDirectionY
        }}
        className={`${className} group w-full rounded-2xl`}
      >
        <GlowingGradientBorder startColor={gradientStartColor} endColor={gradientEndColor} />
        {children}
      </motion.section>
    </Tooltip>
  );
}

export default BentoItem;
