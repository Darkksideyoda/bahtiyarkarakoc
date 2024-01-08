'use client';

import { motion } from 'framer-motion';
import React from 'react';
type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function AnimatedPageLayout(props: Props) {
  const { children, className } = props;

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      className={'grid items-center justify-center justify-items-center'}
    >
      <main
        className={`${className} mb-14 mt-8 grid w-[1300px] items-center justify-center justify-items-center leading-relaxed max-[1300px]:w-[1000px] max-[1050px]:w-5/6`}
      >
        {children}
      </main>
    </motion.div>
  );
}

// className="font-inter grid w-full items-center justify-items-center"

// className="font-inter grid w-full items-center justify-items-center"

// className={`${className} mb-8 mt-8 grid items-center justify-items-center rounded-2xl p-8 leading-relaxed max-xl:mx-2 max-lg:mb-2 max-lg:mt-2 max-sm:mb-20 xl:w-10/12 xl:px-2 2xl:w-[1300px]`}

// className={`${className} grid w-[1300px] max-[1370px]:w-full`}

{
  /* <AnimatedPageLayout className="fixed items-center justify-center justify-items-center gap-8"> */
}

// className={`${className} grid w-[1300px] items-center justify-center justify-items-center max-[1370px]:w-5/6`}
// >
//   <main className={'mb-8 mt-8 grid items-center justify-items-center leading-relaxed'}>{children}</main>
// </motion.div>
