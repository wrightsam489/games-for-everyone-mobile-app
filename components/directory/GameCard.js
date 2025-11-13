import { StyleSheet, View, Pressable, Image } from "react-native";

import { useTheme } from "../../contexts/ThemeContext";
import { Subheading } from "../common/Texts";
import { useNavigation } from "@react-navigation/native";
import Line from "../common/Line";
import Card from "../common/Card";

export default function GameCard({ width, height, game }) {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);
  const navigation = useNavigation();

  const CONTAINER_WIDTH = width;
  const CONTAINER_HEIGHT = height;
  const IMAGE_WIDTH = CONTAINER_WIDTH * 0.85;
  const IMAGE_HEIGHT = IMAGE_WIDTH * 1.5;

  return (
    <View
      style={[
        { width: CONTAINER_WIDTH, height: CONTAINER_HEIGHT },
        styles.container,
      ]}
    >
      <Pressable
        onPress={() => navigation.navigate("Game Details", { gameId: game.id })}
        style={({ pressed }) => [
          { width: IMAGE_WIDTH },
          pressed && { opacity: 0.5 },
        ]}
      >
        <Card>
          <Image
            style={[{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }, styles.image]}
            source={{ uri: game.cover }}
          />
          <Line />
          <Subheading style={{ padding: 5 }} numberOfLines={1}>
            {game.title}
          </Subheading>
        </Card>
      </Pressable>
    </View>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      marginBottom: 15,
    },
    image: {
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
  });
};
