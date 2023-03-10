import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Ball, Checkbox, Label, Switcher } from './ThemeToggler.styled';
// import { setTheme } from 'redux/theme/themeSlice';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    const newTheme = mode === 'light' ? 'dark' : 'light';
    setMode(newTheme);
  };

  useEffect(() => {
    // dispatch(setTheme({ mode }));
  }, [dispatch, mode]);

  return (
    <Switcher>
      <Checkbox
        type="checkbox"
        checked={mode === 'dark'}
        id="theme-switcher"
        onChange={toggleTheme}
      />
      <Label htmlFor="theme-switcher">
        <Ball />
      </Label>
    </Switcher>
  );
};
