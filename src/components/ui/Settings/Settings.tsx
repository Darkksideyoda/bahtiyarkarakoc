import clsx from 'clsx';
import { useTheme } from 'next-themes';
import React from 'react';

import LanguageDropdown from './LanguageDropdown';
import ThemeSwitcher from './ThemeSwitcher';

function Settings() {
  const { theme } = useTheme();

  return (
    <div className="group relative">
      <div
        className={clsx({
          'animate-tilt absolute -inset-0.5 rounded-full bg-gradient-to-r opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200':
            true,
          'from-teal-600 to-violet-600': theme === 'dark',
          'from-default to-default': theme === 'light'
        })}
      ></div>
      <div
        className={clsx({
          'relative flex items-center gap-4 rounded-full px-8 py-1.5 leading-none': true,
          'bg-black': theme === 'dark',
          'bg-default': theme === 'light'
        })}
      >
        <ThemeSwitcher />
        <LanguageDropdown />
      </div>
    </div>
  );
}

export default Settings;
