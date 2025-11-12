import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Switch,
  View,
  Text,
  useColorScheme,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "../contexts/ThemeContext";

import {
  PrimaryButton,
  SecondaryButton,
  DestructiveButton,
  TextButton,
  IconButton,
  ToggleButton,
} from "../components/common/Buttons";
import {
  TextField,
  SearchBar,
  SecureTextField,
} from "../components/common/TextFields";
import {
  Title,
  Heading,
  Subheading,
  BodyText,
} from "../components/common/Texts";
import ButtonGroup from "../components/common/ButtonGroup";
import Card from "../components/common/Card";
import Carousel, { CarouselExample } from "../components/common/Carousel";

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width * 0.5;

const relationOptions = [
  "Playing",
  "Plan To Play",
  "Completed",
  "On Hold",
  "Dropped",
];

export default function Components() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ margin: 15, rowGap: 10, flex: 1 }}>
        <PrimaryButton
          title={"See Carousel"}
          onPress={() => {
            navigation.navigate("Carousel");
          }}
        />
        <Card style={{ height: 200 }}></Card>

        <View>
          <Title>Title</Title>
          <Heading>Heading</Heading>
          <Subheading>Subheading</Subheading>
          <BodyText>BodyText</BodyText>
        </View>

        <TextField placeholder={"Username"} />
        <SecureTextField placeholder={"Password"} />
        <SearchBar placeholder={"Search"} />

        <PrimaryButton title={"Primary"} />
        <SecondaryButton title={"Secondary"} />
        <DestructiveButton title={"Error"} />
        <TextButton title={"Text"} />

        <PrimaryButton title={"Primary"} disabled={true} />
        <SecondaryButton title={"Secondary"} disabled={true} />
        <DestructiveButton title={"Error"} disabled={true} />
        <TextButton title={"Text"} disabled={true} />

        <ToggleButton isActive={true} />
        <ToggleButton />
        <ToggleButton isActive={true} disabled={true} />
        <ToggleButton disabled={true} />

        <ButtonGroup items={relationOptions} />
        <ButtonGroup items={relationOptions} isSingleSelection={false} />
      </View>
    </ScrollView>
  );
}
