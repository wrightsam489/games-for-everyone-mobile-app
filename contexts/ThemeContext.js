import { createContext, useEffect, useContext, useState, useMemo } from "react";
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const lightTheme = {
  primary: '#00A74F',
  secondary: '#0072CE',
  warning: '#FFC107',
  error: '#D32F2F',
  background: '#dadadaff',
  text: '#212121',
  disabled: '#7A7A7A',
  highlight: '#BDBDBD'
}

const darkTheme = {
  primary: '#39B54A',
  secondary: '#0070D1',
  warning: '#dab111ff',
  error: '#E74C3C',
  background: '#121212',
  text: '#F5F5F5',
  disabled: '#7A7A7A',
  highlight: '#E91E63'
}

export const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState(null);

  const theme = useMemo(() => {
    if (mode === "light") return lightTheme;
    if (mode === "dark") return darkTheme;
    setMode(systemScheme)
    return systemScheme === "dark" ? darkTheme : lightTheme;
  }, [mode, systemScheme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
