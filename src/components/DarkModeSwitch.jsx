'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const resetAndSetTheme = (theme) => {
    localStorage.removeItem('theme');
    setTheme(theme);
  };

  useEffect(() => {
    setMounted(true);

    if (setMounted) resetAndSetTheme('system');
  }, []);

  return (
    <div>
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode
            onClick={() => resetAndSetTheme('light')}
            className='text-xl cursor-pointer hover:text-amber-500'
          />
        ) : (
          <MdDarkMode
            onClick={() => resetAndSetTheme('dark')}
            className='text-xl cursor-pointer hover:text-amber-500'
          />
        ))}
    </div>
  );
}
