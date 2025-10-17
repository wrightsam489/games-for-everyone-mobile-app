import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View } from "react-native";

import { DestructiveButton } from "../../components/common/Buttons";

import GameStack from "../stacks/GameStack";
import SettingsStack from "../stacks/SettingsStack";

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
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
              onPress={() => {}}
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
        name="SettingsDrawer"
        component={SettingsStack}
        options={{ title: "Settings" }}
      />
    </Drawer.Navigator>
  );
}
