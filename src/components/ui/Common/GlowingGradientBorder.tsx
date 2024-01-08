import { useTheme } from 'next-themes';
import React from 'react';

type Props = {
  startColor: string;
  endColor: string;
};

function GlowingGradientBorder(props: Props) {
  const { endColor, startColor } = props;

  const { theme } = useTheme();

  return (
    <div
      className={`animate-tilt absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${
        theme === 'dark' ? startColor : 'from-default'
      } ${
        theme === 'dark' ? endColor : 'to-default'
      } opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 `}
    ></div>
  );
}

export default GlowingGradientBorder;
