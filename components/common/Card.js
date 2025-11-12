import { StyleSheet, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export default function Card({ style, children }) {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);
  return <View style={[style, styles.card]}>{children}</View>;
}

const makeStylesSheet = (theme) => {
  const { mode } = useTheme();
  return StyleSheet.create({
    card: {
      backgroundColor: theme.card,
      borderRadius: 5,
      boxShadow:
        mode === "dark"
          ? '"0px 0px 0px rgba(0, 0, 0, 0)"'
          : "0px 0px 8px rgba(0, 0, 0, 0.25)",
    },
  });
};
