import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { useTheme } from "../contexts/ThemeContext";
import { DestructiveButton, IconButton } from "../components/Buttons";

import LoginScreen from "../screens/LoginScreen";
import CreateAccount from "../screens/CreateAccount";
import GameDirectory from "../screens/GameDirectory";
import GameDetails from "../screens/GameDetails";
import Components from "../screens/Components";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function RootNavigator() {
  const { theme } = useTheme();
  const user = 1;

  return (
    <NavigationContainer theme={theme}>
      {user ? <DrawerNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
}

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

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        drawerPosition: "right",
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DestructiveButton title={"Logout"} onPress={() => {}} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={GameStack}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="SettingsDrawer"
        component={SettingsStack}
        options={{ title: "Settings" }}
      />
    </Drawer.Navigator>
  );
}

function GameStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerRight: () => {
          return (
            <IconButton
              onPress={() => {
                navigation.toggleDrawer();
              }}
              iconName="navicon"
              size={25}
            />
          );
        },
      }}
    >
      <Stack.Screen name="Home" component={GameDirectory} />
      <Stack.Screen name="Game Details" component={GameDetails} />
    </Stack.Navigator>
  );
}

function SettingsStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerRight: () => {
          return (
            <IconButton
              onPress={() => {
                navigation.toggleDrawer();
              }}
              iconName="navicon"
              size={25}
            />
          );
        },
      }}
    >
      <Stack.Screen name="Settings" component={Components} />
    </Stack.Navigator>
  );
}
