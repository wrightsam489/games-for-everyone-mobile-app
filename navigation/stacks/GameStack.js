import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "../../components/common/Buttons";
import Directory from "../../screens/Directory";
import Details from "../../screens/Details";

const Stack = createStackNavigator();

export default function GameStack({ navigation }) {
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
              size={30}
            />
          );
        },
      }}
    >
      <Stack.Screen name="Home" component={Directory} />
      <Stack.Screen name="Game Details" component={Details} />
    </Stack.Navigator>
  );
}
