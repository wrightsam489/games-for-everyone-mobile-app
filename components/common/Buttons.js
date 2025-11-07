import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { StyleSheet, Text, Pressable } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const Button = ({
  title,
  style,
  textStyle,
  onPress,
  disabled = false,
  children = null,
}) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Pressable
      onPress={disabled ? () => {} : onPress}
      style={({ pressed }) => [pressed && styles.active, styles.button, style]}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {children}
    </Pressable>
  );
};

export const PrimaryButton = ({ title, style, onPress, disabled = false }) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Button
      title={title}
      style={[style, disabled ? styles.disabled : styles.primary]}
      onPress={onPress}
      disabled={disabled}
    />
  );
};

export const SecondaryButton = ({
  title,
  style,
  onPress,
  disabled = false,
}) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Button
      title={title}
      style={[style, disabled ? styles.disabledOutline : styles.secondary]}
      onPress={onPress}
      disabled={disabled}
    />
  );
};

export const DestructiveButton = ({
  title,
  style,
  onPress,
  disabled = false,
}) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Button
      title={title}
      style={[style, disabled ? styles.disabled : styles.destructive]}
      onPress={onPress}
      disabled={disabled}
    />
  );
};

export const TextButton = ({ title, style, onPress, disabled = false }) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Button
      title={" " + title + " "}
      textStyle={[style, disabled ? styles.disabledText : styles.underline]}
      onPress={onPress}
      disabled={disabled}
    />
  );
};

export const IconButton = ({
  style,
  onPress,
  iconName = "search",
  size = 25,
  color = null,
}) => {
  const { theme, mode } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        style,
        { width: size, height: size },
        pressed && styles.active,
      ]}
    >
      <Icon
        name={iconName}
        size={size}
        color={color === null ? (mode === "dark" ? "white" : "black") : color}
      />
    </Pressable>
  );
};

export const ToggleButton = ({
  title = null,
  style,
  onPress,
  isActive = false,
  disabled = false,
  children,
}) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Button
      title={title}
      style={[
        disabled
          ? isActive
            ? styles.disabled
            : styles.disabledOutline
          : isActive
          ? styles.primary
          : styles.secondary,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    button: {
      borderRadius: 5,
      padding: 7.5,
      borderWidth: 2,
      borderColor: "#0000",
    },
    text: {
      color: theme.colors.text,
      fontSize: 15,
      textAlign: "center",
    },
    primary: {
      backgroundColor: theme.colors.primary,
    },
    secondary: {
      borderColor: theme.colors.primary,
    },
    destructive: {
      backgroundColor: theme.colors.destructive,
    },
    underline: {
      color: theme.colors.url,
      textDecorationLine: "underline",
      alignSelf: "flex-start",
    },
    disabled: {
      backgroundColor: theme.colors.disabled,
    },
    disabledOutline: {
      borderColor: theme.colors.disabled,
      borderWidth: 2,
    },
    disabledText: {
      color: theme.colors.textMuted,
      textDecorationLine: "underline",
      alignSelf: "flex-start",
    },
    active: {
      opacity: 0.5,
    },
  });
};
