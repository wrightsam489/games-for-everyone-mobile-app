import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "../../components/Buttons";
import GameDirectory from "../../screens/GameDirectory";
import GameDetails from "../../screens/GameDetails";

const Stack = createStackNavigator();

export default function GameStack({ navigation }) {
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
