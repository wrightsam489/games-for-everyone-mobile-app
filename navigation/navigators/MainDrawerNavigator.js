import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import GameStack from "../stacks/GameStack";
import SettingsStack from "../stacks/SettingsStack";
import { DestructiveButton } from "../../components/Buttons";

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
