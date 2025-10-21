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
import { IconButton, TextButton } from "../components/common/Buttons";

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

  useEffect(() => {
    fetchGame().finally(() => {
      setLoading(false);
    });
  }, []);

  const fetchGame = async () => {
    try {
      const data = await GameService.getGameDetails(gameId);
      setGame(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      ) : (
        <ScrollView>
          <Cover />
          <View style={{ margin: 15 }}>
            <TitleDescription />
            <Details />
            <Relation />
          </View>
        </ScrollView>
      )}
    </>
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
    return (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Title style={{ flex: 0.8 }}>{game.title}</Title>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              padding: 5,
              columnGap: 5,
            }}
          >
            <Subheading>
              {game.rating
                ? `${(10.0 * (game.rating / 100.0)).toFixed(2)}`
                : "--.--"}
            </Subheading>
            <IconButton
              iconName="star-o"
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
      paddingBottom: 0,
    },
  });
};
