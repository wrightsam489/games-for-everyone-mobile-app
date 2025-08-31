import { StyleSheet, View, TextInput } from 'react-native'
import { IconButton } from './Buttons'

export const TextField = ({placeholder, secureTextEntry = false}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      />
  );
}

export const SecureTextField = ({placeholder}) => {
  return (
    <TextField placeholder={placeholder} secureTextEntry={true}/>
  );
}

export function SearchBar({placeholder = 'Search', secureTextEntry = false}) {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchBarText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      <IconButton />
    </View>
  );


}const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10
  },
  searchBar: {
    flexShrink: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  searchBarText: {
    flex: 1,
    paddingHorizontal: 10
  },
});