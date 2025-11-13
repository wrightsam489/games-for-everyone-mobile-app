import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View } from "react-native";

import { DestructiveButton } from "../../components/common/Buttons";

import GameStack from "../stacks/GameStack";
import SettingsStack from "../stacks/SettingsStack";
import ComponentStack from "../stacks/ComponentStack";
import { useAuth } from "../../contexts/AuthContext";

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  const { auth } = useAuth();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        drawerPosition: "right",
      }}
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={{ flex: 1 }} />
            <DestructiveButton
              style={{ marginHorizontal: 15, marginBottom: 30 }}
              title={"Logout"}
              onPress={() => {
                auth.logout();
              }}
            />
          </View>
        );
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={GameStack}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="ComponentsDrawer"
        component={ComponentStack}
        options={{ title: "Components" }}
      />
      <Drawer.Screen
        name="SettingsDrawer"
        component={SettingsStack}
        options={{ title: "Settings" }}
      />
    </Drawer.Navigator>
  );
}
