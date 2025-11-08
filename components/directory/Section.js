import { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";

import { GameService } from "../../api/services/gameService";
import { useTheme } from "../../contexts/ThemeContext";
import { Heading } from "../common/Texts";

import GameCard from "../directory/GameCard";
import APIActionReloader from "../common/APIActionReloader";

const { width } = Dimensions.get("window");

const CONTAINER_WIDTH = width * 0.5;
const CONTAINER_SPACING = (width - CONTAINER_WIDTH) * 0.5;

const ACTIVITY_HEIGHT = CONTAINER_WIDTH * 1.5;

const CARD_WIDTH = CONTAINER_WIDTH;
const CARD_HEIGHT = CARD_WIDTH * 1.5;

export function CompanySection({ section }) {
  return (
    <Section
      section={section}
      getGames={() => GameService.getGamesByCompany(section.id)}
    />
  );
}
export function FranchiseSection({ section }) {
  return (
    <Section
      section={section}
      getGames={() => GameService.getGamesByFranchise(section.id)}
    />
  );
}
export function GenreSection({ section }) {
  return (
    <Section
      section={section}
      getGames={() => GameService.getGamesByGenre(section.id)}
    />
  );
}
export function ThemesSection({ section }) {
  return (
    <Section
      section={section}
      getGames={() => GameService.getGamesByTheme(section.id)}
    />
  );
}

function Section({ section, getGames }) {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);

  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getGames();
      setGames(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Heading style={{ marginHorizontal: 15 }}>{section.name}</Heading>
      {loading ? (
        <View style={styles.reloader}>
          <ActivityIndicator
            size={"large"}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          />
        </View>
      ) : (
        <APIActionReloader
          style={styles.reloader}
          error={error}
          callback={() => fetchGames()}
        >
          <FlatList
            data={games}
            renderItem={({ item }) => {
              return (
                <GameCard width={CARD_WIDTH} height={CARD_HEIGHT} game={item} />
              );
            }}
            keyExtractor={(item) => item.id + item.title}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CONTAINER_WIDTH}
            decelerationRate="fast"
            snapToAlignment="start"
            contentContainerStyle={{ paddingHorizontal: CONTAINER_SPACING }}
          />
        </APIActionReloader>
      )}
    </>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    reloader: {
      height: ACTIVITY_HEIGHT,
      flex: 1,
      flexDirection: "row",
      marginBottom: 15,
    },
  });
};
