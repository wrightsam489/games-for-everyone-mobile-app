import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "../../components/common/Buttons";
import Components from "../../screens/Components";

const Stack = createStackNavigator();

export default function SettingsStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerRight: () => {
          return (
            <IconButton
              style={{ margin: 15 }}
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
