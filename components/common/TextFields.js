import { StyleSheet, View, TextInput } from "react-native";
import { IconButton } from "./Buttons";
import { useTheme } from "../../contexts/ThemeContext";

export const TextField = ({ style, placeholder, secureTextEntry = false }) => {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <TextInput
      style={[style, styles.input]}
      placeholderTextColor={theme.colors.text}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export const SecureTextField = ({ style, placeholder }) => {
  return (
    <TextField style={style} placeholder={placeholder} secureTextEntry={true} />
  );
};

export function SearchBar({
  style,
  placeholder = "Search",
  secureTextEntry = false,
}) {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme);

  return (
    <View style={[style, styles.searchBar]}>
      <TextField
        style={[{ flex: 1 }]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
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
    },
    searchBar: {
      flexDirection: "row",
      borderRadius: 5,
      backgroundColor: theme.colors.textField,
    },
  });
};
