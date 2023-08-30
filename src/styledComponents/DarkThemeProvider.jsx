/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

function DarkThemeProvider({ children }) {
  const darkTheme = useSelector((states) => states.darkTheme);
  const themeKey = localStorage.getItem('theme');
  const storedTheme = themeKey ? JSON.parse(themeKey) : darkTheme;

  return (
    <ThemeProvider theme={{ theme: storedTheme ? 'dark' : 'light' }}>
      {children}
    </ThemeProvider>
  );
}

export default DarkThemeProvider;
