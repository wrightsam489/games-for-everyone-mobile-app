import { StyleSheet, Text, Pressable } from 'react-native';

const TextOnlyButton = ({title, onPress, disabled = false}) => {
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

export default TextOnlyButton;

const styles = StyleSheet.create({
  button: {},
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    borderRadius: 5,
  },
  enabled: {
    color: '#E74C3C',
  },
  disabled: {
    color: '#999999',
  },
  pressed: {
    opacity: 0.5,
  }
});