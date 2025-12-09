import { StyleSheet, View, TextInput, Text } from "react-native";
import { IconButton } from "./Buttons";
import { useTheme } from "../../contexts/ThemeContext";
import { forwardRef, useState } from "react";
import { BodyText } from "./Texts";

export const TextField = forwardRef(
  ({ style, error, onChange, onFocus, onBlur, formatter, ...props }, ref) => {
    const { theme } = useTheme();
    const styles = makeStylesSheet(theme);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };

    const handleTextChange = (text) => {
      const formattedText = formatter ? formatter(text) : text;
      onChange(formattedText);
    };

    return (
      <View>
        <TextInput
          ref={ref}
          style={[
            styles.input,
            style,
            isFocused && styles.focusedInput,
            error && styles.erroredInput,
          ]}
          placeholderTextColor={theme.colors.text}
          onChangeText={handleTextChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {error && <BodyText style={styles.errorText}>{error}</BodyText>}
      </View>
    );
  }
);

export const SecureTextField = forwardRef(({ style, ...props }, ref) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <TextField
      ref={ref}
      style={[styles.input, style]}
      placeholderTextColor={theme.colors.text}
      secureTextEntry={true}
      {...props}
    />
  );
});

export const SearchBar = forwardRef(({ style, ...props }, ref) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <View style={[styles.searchBar, style]}>
      <TextField ref={ref} style={[{ flex: 1, borderWidth: 0 }]} {...props} />
      <IconButton style={styles.searchBarIcon} />
    </View>
  );
});

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    input: {
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: theme.colors.textField,
      color: theme.colors.text,
      borderColor: theme.colors.text,
      borderWidth: 1,
    },
    focusedInput: {
      borderColor: theme.colors.primary,
    },
    erroredInput: {
      borderColor: theme.colors.destructive,
    },
    errorText: {
      color: theme.colors.destructive,
      marginHorizontal: 10,
      marginBottom: 5,
    },
    searchBar: {
      flexDirection: "row",
      borderRadius: 5,
      backgroundColor: theme.colors.textField,
      borderColor: theme.colors.text,
      borderWidth: 1,
    },
    searchBarIcon: { margin: 5 },
  });
};
