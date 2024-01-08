import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { DarkMode, LightMode } from 'styled-icons/material-rounded';

function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeSwitcherOnClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <motion.button
      className="my-auto flex"
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.6 }}
      onClick={handleThemeSwitcherOnClick}
    >
      {theme === 'light' ? <DarkMode size={20} /> : <LightMode size={20} />}
    </motion.button>
  );
}

export default ThemeSwitcher;
