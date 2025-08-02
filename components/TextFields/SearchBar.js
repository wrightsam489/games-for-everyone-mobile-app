import { StyleSheet, TextInput, View } from 'react-native';
import IconButton from '../Buttons/IconButton';

export default function SearchBar({placeholder, secureTextEntry = false}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      <IconButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2D3A3F',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  },
});