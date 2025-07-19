import { StyleSheet, Text, Pressable } from 'react-native';

const PrimaryButton = ({title, onPress, disabled = false}) => {
  return (
    <Pressable
      onPress={disabled ? () => {} : onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed
      ]}>
      <Text style={[styles.text, disabled ? styles.disabled : styles.enabled]}>{title}</Text>
    </Pressable>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {},
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
    borderRadius: 5,
    paddingVertical: 10
  },
  enabled: {
    backgroundColor: '#E74C3C',
  },
  disabled: {
    backgroundColor: '#999999',
  },
  pressed: {
    opacity: 0.5,
  }
});