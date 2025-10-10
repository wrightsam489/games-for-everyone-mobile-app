import LoginScreen from "../../screens/LoginScreen";
import CreateAccount from "../../screens/CreateAccount";

function AccountNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
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
