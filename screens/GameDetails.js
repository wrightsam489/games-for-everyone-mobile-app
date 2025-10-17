import React, { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  Image,
  Pressable,
  ScrollView,
  Platform,
  Button,
  ActivityIndicator,
} from "react-native";

import { BodyText, Heading, Subheading, Title } from "../components/Texts";
import "../utils/string.extensions";
import { GameService } from "../api/services/gameService";

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = width;
const IMAGE_HEIGHT = (IMAGE_WIDTH * 2) / 3;
const ROW_LABEL_WIDTH = width * 0.25;
const ROW_VALUE_WIDTH = width - ROW_LABEL_WIDTH;

export default function GameDetails({ route }) {
  const { gameId } = route.params;
  const [game, setGame] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchGame().then((game) => {
      setGame(game);
    });
  }, []);

  const fetchGame = async () => {
    try {
      return await GameService.getGameDetails(gameId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {game ? (
        <ScrollView>
          <Cover />
          <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
            <TitleDescription />
            <Details />
          </View>
        </ScrollView>
      ) : isLoading ? (
        <ActivityIndicator
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
          size="large"
        />
      ) : (
        <></>
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
        <Title>{game.title}</Title>
        {game.description && (
          <>
            <Heading style={{ paddingTop: 10, paddingBottom: 5 }}>
              Description
            </Heading>
            <BodyText>{game.description}</BodyText>
          </>
        )}
      </>
    );
  }

  function Details() {
    return (
      <>
        <Heading style={{ paddingTop: 10, paddingBottom: 5 }}>Info</Heading>
        {Object.entries(game)
          .filter(([_k, value], _i) => Array.isArray(value))
          .map(([key, value], _) => {
            return (
              <>
                {value.length > 0 && (
                  <View style={{ flexDirection: "row" }}>
                    <BodyText style={{ width: ROW_LABEL_WIDTH }}>
                      {key.capitalizeWords()}:
                    </BodyText>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                      <BodyText style={{ width: ROW_VALUE_WIDTH }}>
                        {value.map((item, index) =>
                          index < value.length - 1
                            ? item.name + ", "
                            : item.name
                        )}
                      </BodyText>
                    </View>
                  </View>
                )}
              </>
            );
          })}
      </>
    );
  }
}
