"use client";
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { LightIcon, DarkIcon } from './Icons';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <LightIcon /> : <DarkIcon />} 
    </button>
  );
};

export default ThemeSwitcher;
