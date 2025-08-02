import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Pressable, Image } from 'react-native';

const size = 25;

export default function IconButton({ onPress, iconName = 'search', iconColor = 'black' }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed
      ]}>
      <Icon name={iconName} size={size} color={iconColor}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    margin: 5 
  },
  pressed: {
    opacity: 0.5,
  }
})