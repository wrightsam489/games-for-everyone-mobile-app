import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from './contexts/ThemeContext'

import LoginScreen from './screens/LoginScreen'
import CreateAccount from './screens/CreateAccount'
import GameDirectory from './screens/GameDirectory'
import GameDetails from './screens/GameDetails'

import { IconButton } from './components/Buttons';

const Stack = createStackNavigator();

export default function RootStack() {
  const { theme } = useTheme();

  const MenuButton = () => {
    return <IconButton size={30} iconName='navicon'/>
  }

  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Create Account" component={CreateAccount} options={{ headerShown: true }}/>
          <Stack.Screen name="Home" component={GameDirectory} options={{ headerShown: true, headerLeft: () => {}, headerRight: MenuButton }}/>
          <Stack.Screen name="Game Details" component={GameDetails} options={{ headerShown: true, headerRight: MenuButton }}/>
        </Stack.Navigator>
      </NavigationContainer>
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