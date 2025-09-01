import { StyleSheet, View } from 'react-native'
import { useTheme } from '../contexts/ThemeContext'

import Components from './Components'
import Login from './Login'
import CreateAccount from './CreateAccount'
import GameDirectory from './GameDirectory'

export default function Main() {
  const { theme, mode, setMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <GameDirectory />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 0,
    paddingBottom: 30,
  }
})