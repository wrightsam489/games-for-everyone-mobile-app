import { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import {
  BodyText,
  Heading,
  Subheading,
  Title,
} from "../components/common/Texts";
import "../utils/string.extensions";
import { GameService } from "../api/services/gameService";
import { useTheme } from "../contexts/ThemeContext";
import ButtonGroup from "../components/common/ButtonGroup";
import { IconButton } from "../components/common/Buttons";
import ActionReloader from "../components/common/ActionReloader";

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = width;
const IMAGE_HEIGHT = (IMAGE_WIDTH * 2) / 3;
const ROW_LABEL_FLEX_WIDTH = 0.25;
const ROW_VALUE_FLEX_WIDTH = 1 - ROW_LABEL_FLEX_WIDTH;

const relationOptions = [
  "Playing",
  "Plan To Play",
  "Completed",
  "On Hold",
  "Dropped",
];

export default function Details({ route }) {
  const { gameId } = route.params;
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await GameService.getGameDetails(gameId);
      setGame(data);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ActionReloader
      style={{ flex: 1 }}
      loading={loading}
      error={error}
      callback={() => fetchGame()}
    >
      <ScrollView>
        <Cover />
        <View style={{ margin: 15 }}>
          <TitleDescription />
          <Details />
          <Relation />
        </View>
      </ScrollView>
    </ActionReloader>
  );

  function Cover() {
    return (
      <>
        {game.cover && (
          <Image
            style={{
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
            }}
            source={{ uri: game.cover }}
          />
        )}
      </>
    );
  }

  function TitleDescription() {
    const [reviewed, setReviewed] = useState(false);

    return (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Title style={{ flex: 1 }}>{game.title}</Title>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              padding: 5,
              columnGap: 15,
            }}
          >
            <Subheading>
              {game.rating
                ? `${(10.0 * (game.rating / 100.0)).toFixed(2)}`
                : "--.--"}
            </Subheading>
            <IconButton
              onPress={() => setReviewed(!reviewed)}
              iconName={reviewed ? "star" : "star-o"}
              color={theme.colors.primary}
              size={30}
            />
          </View>
        </View>

        {game.description && (
          <>
            <Heading style={styles.heading}>Description</Heading>
            <BodyText>{game.description}</BodyText>
          </>
        )}
      </>
    );
  }

  function Details() {
    return (
      <>
        <Heading style={styles.heading}>Info</Heading>
        {Object.entries(game)
          .filter(([_k, value], _i) => Array.isArray(value))
          .map(([key, value], _) => {
            return (
              <>
                {value.length > 0 && (
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <BodyText
                      style={{
                        flex: ROW_LABEL_FLEX_WIDTH,
                      }}
                    >
                      {key.capitalizeWords()}:
                    </BodyText>
                    <BodyText
                      style={{
                        flex: ROW_VALUE_FLEX_WIDTH,
                      }}
                    >
                      {value.map((item, index) =>
                        index < value.length - 1 ? item.name + ", " : item.name
                      )}
                    </BodyText>
                  </View>
                )}
              </>
            );
          })}
      </>
    );
  }

  function Relation() {
    return (
      <>
        <Heading style={styles.heading}>Status</Heading>
        <ButtonGroup items={relationOptions} />
      </>
    );
  }
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    heading: {
      paddingTop: 15,
      paddingBottom: 5,
    },
  });
};
