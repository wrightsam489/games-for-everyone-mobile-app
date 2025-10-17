import { useTheme } from "../contexts/ThemeContext";
import { StyleSheet, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Button = ({ title, style, onPress, disabled = false }) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <Pressable
      onPress={disabled ? () => {} : onPress}
      style={({ pressed }) => [pressed && styles.active]}
      disabled={disabled}
    >
      <Text style={[styles.text, style]}>{title}</Text>
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
      style={[style, disabled ? styles.disabledText : styles.underline]}
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
        { width: size, height: size, margin: 7.5 },
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

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    text: {
      color: theme.colors.text,
      fontSize: 15,
      textAlign: "center",
      padding: 7.5,
      borderRadius: 5,
    },
    primary: {
      backgroundColor: theme.colors.primary,
    },
    secondary: {
      borderColor: theme.colors.secondary,
      borderWidth: 2,
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
