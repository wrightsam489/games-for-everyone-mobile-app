import { StyleSheet, TextInput } from 'react-native';

const GenericTextField = ({placeholder, secureTextEntry = false}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      />
  );
}

export default GenericTextField;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2D3A3F',
    borderRadius: 5,
    paddingHorizontal: 10
  }
});