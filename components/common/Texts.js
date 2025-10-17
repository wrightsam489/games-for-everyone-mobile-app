import React from "react";
import { StyleSheet, Text } from "react-native";

import { useTheme } from "../../contexts/ThemeContext";

export const Title = ({ style, children }) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return <Text style={[style, styles.title]}>{children}</Text>;
};

export const Heading = ({ style, children }) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return <Text style={[style, styles.heading]}>{children}</Text>;
};

export const Subheading = ({ style, children }) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return <Text style={[style, styles.subheading]}>{children}</Text>;
};

export const BodyText = ({ style, children }, bold = false) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return <Text style={[style, styles.body]}>{children}</Text>;
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
