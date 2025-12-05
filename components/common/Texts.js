import { forwardRef } from "react";
import { StyleSheet, Text } from "react-native";

import { useTheme } from "../../contexts/ThemeContext";

export const Title = ({ style, children, ...props }) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Text style={[styles.title, style]} {...props}>
      {children}
    </Text>
  );
};

export const Heading = ({ style, children, ...props }) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Text style={[styles.heading, style]} {...props}>
      {children}
    </Text>
  );
};

export const Subheading = ({ style, children, ...props }) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Text style={[styles.subheading, style]} {...props}>
      {children}
    </Text>
  );
};

export const BodyText = ({ style, children, ...props }) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Text style={[styles.body, style]} {...props}>
      {children}
    </Text>
  );
};

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    title: {
      color: theme.colors.text,
      fontSize: 30,
      fontWeight: 500,
      marginTop: 0,
    },
    heading: {
      color: theme.colors.text,
      fontSize: 25,
      fontWeight: 400,
      marginTop: 0,
    },
    subheading: {
      color: theme.colors.text,
      fontSize: 20,
      fontWeight: 350,
      marginTop: 0,
    },
    body: {
      color: theme.colors.text,
      fontSize: 15,
      fontWeight: 250,
      marginTop: 0,
    },
  });
};
