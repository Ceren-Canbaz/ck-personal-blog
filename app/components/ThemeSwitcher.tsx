"use client"
import { useTheme } from 'next-themes';
import { LightIcon,DarkIcon } from './Icons';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
       {theme === 'dark' ? <LightIcon/>: <DarkIcon/>} 
    </button>
  );
};

export default ThemeSwitcher;