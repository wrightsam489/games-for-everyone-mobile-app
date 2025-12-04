import { StyleSheet, View, TextInput } from "react-native";
import { IconButton } from "./Buttons";
import { useTheme } from "../../contexts/ThemeContext";

export const TextField = ({
  style,
  placeholder,
  secureTextEntry = false,
  onChange,
  value,
}) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={theme.colors.text}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChange={onChange}
      value={value}
    />
  );
};

export const SecureTextField = ({ style, placeholder, onChange, value }) => {
  return (
    <TextField
      style={style}
      placeholder={placeholder}
      secureTextEntry={true}
      onChange={onChange}
      value={value}
    />
  );
};

export function SearchBar({
  style,
  placeholder = "Search",
  secureTextEntry = false,
  onChange,
  value,
}) {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <View style={[styles.searchBar, style]}>
      <TextField
        style={[{ flex: 1, borderWidth: 0 }]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChange={onChange}
        value={value}
      />
      <IconButton style={{ margin: 5 }} />
    </View>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    input: {
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: theme.colors.textField,
      color: theme.colors.text,
      borderColor: theme.colors.text,
      borderWidth: StyleSheet.hairlineWidth,
    },
    searchBar: {
      flexDirection: "row",
      borderRadius: 5,
      backgroundColor: theme.colors.textField,
      borderColor: theme.colors.text,
      borderWidth: StyleSheet.hairlineWidth,
    },
  });
};
