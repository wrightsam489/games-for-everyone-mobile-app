import { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  Image,
  Pressable,
  SectionList,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "../contexts/ThemeContext";
import { Heading, Subheading } from "../components/Texts";
import { SearchBar } from "../components/TextFields";

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width * 0.5;
const CONTAINER_SPACING = (width - CONTAINER_WIDTH) / 2;
const IMAGE_WIDTH = CONTAINER_WIDTH * 0.9;
const IMAGE_HEIGHT = IMAGE_WIDTH;

export default function GameDirectory() {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);
  const navigation = useNavigation();
  const [games, setGames] = useState([]);

  function GameCard({ item }) {
    return (
      <View style={styles.item}>
        <Pressable
          onPress={() =>
            navigation.navigate("Game Details", { gameId: item.id })
          }
          style={({ pressed }) => [styles.card, pressed && { opacity: 0.5 }]}
        >
          <Image style={styles.image} source={{ uri: item.cover }} />
          <Subheading
            style={{ padding: 5, numberOfLines: 0, ellipsizeMode: "clip" }}
          >
            {item.title}
          </Subheading>
        </Pressable>
      </View>
    );
  }

  function GenreList({ data }) {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <GameCard item={item} />;
        }}
        keyExtractor={(item) => item.id + item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CONTAINER_WIDTH}
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={{ paddingHorizontal: CONTAINER_SPACING }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar style={{ margin: 15 }} />
      <SectionList
        contentContainerStyle={{ paddingBottom: 10, rowGap: 5 }}
        sections={games}
        keyExtractor={(item, index) => index + item.title}
        renderItem={() => {}}
        renderSectionHeader={({ section: { genre, data } }) => (
          <>
            <Heading style={{ marginHorizontal: 20, paddingBottom: 5 }}>
              {genre}
            </Heading>
            <GenreList data={data} />
          </>
        )}
      />
    </SafeAreaView>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 0,
      flex: 1,
    },
    item: {
      width: CONTAINER_WIDTH,
      alignItems: "center",
    },
    card: {
      backgroundColor: theme.card,
      borderRadius: 5,
    },
    image: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
  });
};
