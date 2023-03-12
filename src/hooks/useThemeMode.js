import { useEffect, useState } from 'react';

export const useThemeMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = newTheme => {
    setMode(newTheme);
    console.log(newTheme);
  };

  return [theme, toggleTheme];
};
