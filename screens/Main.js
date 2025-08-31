import { StyleSheet, View } from 'react-native'
import Components from './Components'
import { useTheme } from '../contexts/ThemeContext'

export default function Main() {
  const { theme, mode, setMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Components />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
  }
})