import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeContext";

import MainDrawerNavigator from "./MainDrawerNavigator";

export default function RootNavigator() {
  const { theme } = useTheme();
  const user = 1;

  return (
    <NavigationContainer theme={theme}>
      {user ? <MainDrawerNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
}
