import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Login";
import CreateAccount from "../../screens/CreateAccount";

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Create account"
        component={CreateAccount}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
