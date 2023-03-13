import { Ball, Checkbox, Label, Switcher } from './ThemeToggler.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/theme/themeSlice';
import { getMode } from 'redux/theme/themeSelector';

export const ThemeToggler = () => {
  const selectedMode = useSelector(getMode);
  const dispatch = useDispatch();
  const [mode, setMode] = useState(selectedMode.mode ?? 'light');

  const changeTheme = () => {
    const newTheme = mode === 'light' ? 'dark' : 'light';
    setMode(newTheme);
  };

  useEffect(() => {
    dispatch(setTheme({ mode }));
    window.localStorage.setItem('theme', mode);
  }, [dispatch, mode]);

  return (
    <Switcher>
      <Checkbox
        type="checkbox"
        checked={mode === 'dark'}
        id="theme-switcher"
        onChange={changeTheme}
      />
      <Label mode={mode} htmlFor="theme-switcher">
        <Ball />
      </Label>
    </Switcher>
  );
};
