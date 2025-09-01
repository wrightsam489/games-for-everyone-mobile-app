import { createContext, useEffect, useContext, useState, useMemo } from "react";
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const lightTheme = {
  primary: '#00A74F',
  secondary: '#0072CE',
  destructive: '#D32F2F',
  background: '#F8F5E6',
  text: '#212121',
  disabled: '#7A7A7A',
  highlight: '#E91E63',
  textField: '#ffffff',
  card: '#ffffff'
}

const darkTheme = {
  primary: '#39B54A',
  secondary: '#0070D1',
  destructive: '#E74C3C',
  background: '#121212',
  text: '#F5F5F5',
  disabled: '#7A7A7A',
  highlight: '#E91E63',
  textField: '#3d3d3dff',
  card: '#3d3d3dff'
}

export const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState(null);

    useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("mode");
        if (stored) {
          setMode(stored);
        } else {
          setMode(systemScheme); // first time -> use system
        }
      } catch (e) {
        console.log("Error loading mode:", e);
        setMode(systemScheme);
      }
    })();
  }, [systemScheme]);

  useEffect(() => {
    if (mode) {
      (async () => {
        try {
          await AsyncStorage.setItem("mode", mode);
        } catch (e) {
          console.log("Error saving mode:", e);
        }
      })();
    }
  }, [mode]);

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
