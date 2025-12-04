import { createContext, useEffect, useContext, useState, useMemo } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import FontStyles from "../styles/FontStyles.js";

const lightTheme = {
  dark: false,
  colors: {
    primary: "#00A74F",
    secondary: "#0081ebff",
    destructive: "#D32F2F",
    background: "#E0E0E0",
    navigation: "#FFFFFF",
    card: "#FFFFFF",
    text: "#000000",
    textMuted: "#444444",
    border: "#000000",
    borderMuted: "#CCCCCC",
    disabled: "#BBB",
    textField: "#EFEFEF",
    overlay: "rgba(0, 0, 0, 0.1)",
    url: "#0072CE",
    highlight: "#FFF9C4",
  },
  fonts: {
    heavy: FontStyles.heavy,
    medium: FontStyles.medium,
    bold: FontStyles.bold,
    regular: FontStyles.regular,
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: "#39B54A",
    secondary: "#0070D1",
    destructive: "#E74C3C",
    background: "#101010",
    navigation: "#222222",
    card: "#404040",
    text: "#F5F5F5",
    textMuted: "#7A7A7A",
    border: "#F5F5F5",
    borderMuted: "#333333",
    disabled: "#7A7A7A",
    textField: "#292929",
    overlay: "rgba(255, 255, 255, 0.1)",
    url: "#0088ffff",
    highlight: "#FFF9C4",
  },
  fonts: {
    heavy: FontStyles.heavy,
    medium: FontStyles.medium,
    bold: FontStyles.bold,
    regular: FontStyles.regular,
  },
};

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
          setMode(systemScheme);
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
    setMode(systemScheme);
    return systemScheme === "dark" ? darkTheme : lightTheme;
  }, [mode, systemScheme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
