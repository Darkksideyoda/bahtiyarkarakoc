import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import React from 'react';
import { CircleMenu, CircleMenuItem } from 'react-circular-menu-customization';
import { Settings } from 'styled-icons/fluentui-system-filled';
import { Moon, Sun } from 'styled-icons/heroicons-solid';
import { Translate } from 'styled-icons/material';

function MobileSettings() {
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
    <div className="fixed bottom-24 right-5 z-[9999] sm:hidden">
      <CircleMenu
        itemSize={1.5}
        startAngle={-190}
        rotationAngle={150}
        rotationAngleInclusive={false}
        circleMenuToggleItem={<Settings />}
        backgroundHexColor={theme === 'dark' ? '18181B' : 'FAFAFA'}
        borderHexColor={theme === 'light' ? '18181B' : 'FAFAFA'}
        borderWidth={0.05}
        textHexColor={theme === 'light' ? '18181B' : 'FAFAFA'}
      >
        <CircleMenuItem>
          <Translate />
        </CircleMenuItem>
        <CircleMenuItem onClick={handleThemeSwitcherOnClick}>{theme === 'light' ? <Moon /> : <Sun />}</CircleMenuItem>
      </CircleMenu>
    </div>
  );
}

export default MobileSettings;
