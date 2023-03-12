import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: window.localStorage.getItem('theme'),
  },
  reducers: {
    setTheme: (_, { payload }) => ({
      theme: payload,
    }),
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
