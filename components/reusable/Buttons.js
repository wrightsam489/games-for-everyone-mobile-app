import { useTheme } from '../../contexts/ThemeContext';
import { StyleSheet, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({title, style, onPress, disabled = false}) => {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={disabled ? () => {} : onPress}
      disabled={disabled}
      style={({ pressed }) => [
        pressed && styles.pressed
      ]}>
      <Text style={[
        styles.text,
        { color: theme.text },
        disabled ? styles.disabled : style
      ]}>{title}</Text>
    </Pressable>
  )
}

export const PrimaryButton = ({title, style, onPress, disabled = false}) => {
  const { theme } = useTheme();
  return <Button 
    title={title} 
    style={[style, { backgroundColor: theme.primary}]} 
    onPress={onPress} 
    disabled={disabled} 
  />
}

export const SecondaryButton = ({title, style, onPress, disabled = false}) => {
  const { theme } = useTheme();
  return <Button 
    title={title} 
    style={[style, { color: theme.secondary, borderWidth: 2, borderColor: theme.secondary }]} 
    onPress={onPress} 
    disabled={disabled} 
  />
}

export const DestructiveButton = ({title, style, onPress, disabled = false}) => {
  const { theme } = useTheme();
  return <Button 
    title={title} 
    style={[style, { color: theme.destructive, borderWidth: 2, borderColor: theme.destructive }]} 
    onPress={onPress} 
    disabled={disabled} 
  />
}

export const TextButton = ({title, style, onPress, disabled = false}) => {
  return <Button 
    title={" " + title + " "} 
    style={[ style, { textDecorationLine: 'underline', paddingHorizontal: 15, alignSelf: "flex-start" }]} 
    onPress={onPress} 
    disabled={disabled} 
  />
}

export const IconButton = ({ onPress, iconName = 'search' }) => {
  const { mode } = useTheme();

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
        styles.icon,
        pressed && styles.pressed
      ]}>
      <Icon name={iconName} size={25} color={mode === "dark" ? 'white' : 'black'}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    borderRadius: 5,
    paddingVertical: 10,
  },
  icon: {
    width: 25,
    height: 25,
    margin: 5 
  },
  disabled: {
    backgroundColor: '#999999',
  },
  pressed: {
    opacity: 0.5,
  }
});