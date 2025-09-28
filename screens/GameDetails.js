import React, { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  Image,
  Pressable,
  ScrollView,
  Platform,
  Button,
} from "react-native";

import { BodyText, Heading, Subheading, Title } from "../components/Texts";
import {
  IconButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/Buttons";
import "../utils/string.extensions";

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = width;
const IMAGE_HEIGHT = (IMAGE_WIDTH * 2) / 3;
const ROW_LABEL_WIDTH = width * 0.25;
const ROW_VALUE_WIDTH = width - ROW_LABEL_WIDTH;

export default function GameDetails({ route }) {
  const API_BASE_URL =
    Platform.OS === "android"
      ? "http://10.0.2.2:5000"
      : "http://localhost:5000";
  const { gameId } = route.params;

  const [game, setGame] = useState(null);
  const [rating, setRating] = useState(null);

  const rateGame = (value) => {
    if (value === rating) {
      setRating(null);
    } else {
      setRating(value);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(`${API_BASE_URL}/game/details?game_id=${gameId}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setGame(json);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
      })
      .finally();
  };

  return (
    <>
      <Button onPress={() => fetchData()} title="Reload" />
      {game ? (
        <ScrollView>
          <Image
            style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}
            source={{ uri: GameDetails.cover }}
          />
          <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Title>{game.title}</Title>
              <View style={{ flexDirection: "row" }}>
                <IconButton
                  onPress={() => rateGame("good")}
                  iconName={rating == "good" ? "thumbs-up" : "thumbs-o-up"}
                  size={35}
                  color={"green"}
                />
                <IconButton
                  onPress={() => rateGame("bad")}
                  iconName={rating == "bad" ? "thumbs-down" : "thumbs-o-down"}
                  size={35}
                  color={"red"}
                />
              </View>
            </View>

            <Heading style={{ paddingTop: 10, paddingBottom: 5 }}>
              Description
            </Heading>
            <BodyText>{game.description}</BodyText>

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
                        <View
                          style={{ flexDirection: "row", flexWrap: "wrap" }}
                        >
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

            <Heading style={{ paddingTop: 10, paddingBottom: 5 }}>
              Status
            </Heading>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <SecondaryButton
                style={{ paddingHorizontal: 10, borderRadius: 0 }}
                title={"Playing"}
              />
              <SecondaryButton
                style={{ paddingHorizontal: 10, borderRadius: 0 }}
                title={"Plan to play"}
              />
              <SecondaryButton
                style={{ paddingHorizontal: 10, borderRadius: 0 }}
                title={"On hold"}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 15,
                paddingBottom: 25,
              }}
            >
              <SecondaryButton
                style={{ paddingHorizontal: 10, borderRadius: 0 }}
                title={"Dropped"}
              />
              <PrimaryButton
                style={{ paddingHorizontal: 10, borderRadius: 0 }}
                title={"Completed"}
              />
            </View>
          </View>
        </ScrollView>
      ) : (
        <></>
      )}
    </>
  );
}
