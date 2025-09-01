import { StyleSheet, View, TextInput } from 'react-native'
import { IconButton } from './Buttons'
import { useTheme } from '../contexts/ThemeContext';

export const TextField = ({style, placeholder, secureTextEntry = false}) => {
  const { theme } = useTheme()

  return (
    <TextInput
      style={[style, styles.input, { backgroundColor: theme.textField, color: theme.text }]}
      placeholderTextColor={ theme.text }
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      />
  );
}

export const SecureTextField = ({style, placeholder}) => {
  return (
    <TextField style={style} placeholder={placeholder} secureTextEntry={true}/>
  );
}

export function SearchBar({style, placeholder = 'Search', secureTextEntry = false}) {
  const { theme } = useTheme()

  return (
    <View style={[style, styles.searchBar, { backgroundColor: theme.textField }]}>
      <TextField
        style={[style, { flex: 1 }]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      <IconButton />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchBar: {
    flexDirection: 'row',
    borderRadius: 5,
  }
});