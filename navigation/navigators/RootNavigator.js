import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeContext";

import MainDrawerNavigator from "./MainDrawerNavigator";
import AccountStack from "../stacks/AccountStack";
import { useAuth } from "../../contexts/AuthContext";

export default function RootNavigator() {
  const { auth } = useAuth();
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={theme}>
      {auth.isValid ? <MainDrawerNavigator /> : <AccountStack />}
    </NavigationContainer>
  );
}
