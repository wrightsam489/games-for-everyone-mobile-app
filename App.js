import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import IconButton from './components/Buttons/IconButton';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Login' 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{ 
            headerShown: true, 
            headerTitleAlign: 'center',
            headerRight: () => (
              <IconButton iconName='bars'/>
            )
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
