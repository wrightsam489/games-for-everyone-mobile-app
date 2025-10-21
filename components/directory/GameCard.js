import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View, Pressable, Image } from "react-native";

import { useTheme } from "../../contexts/ThemeContext";
import { Subheading } from "../common/Texts";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width * 0.5;
const CARD_WIDTH = CONTAINER_WIDTH * 0.9;
const IMAGE_HEIGHT = CARD_WIDTH;

export default function GameCard({ game }) {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("Game Details", { gameId: game.id })}
        style={({ pressed }) => [styles.card, pressed && { opacity: 0.5 }]}
      >
        <Image style={styles.image} source={{ uri: game.cover }} />
        <Subheading style={{ padding: 5, width: CARD_WIDTH }} numberOfLines={1}>
          {game.title}
        </Subheading>
      </Pressable>
    </View>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    container: {
      width: CONTAINER_WIDTH,
      alignItems: "center",
    },
    card: {
      backgroundColor: theme.card,
      borderRadius: 5,
      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
      marginVertical: 15,
    },
    image: {
      width: CARD_WIDTH,
      height: IMAGE_HEIGHT,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
  });
};
