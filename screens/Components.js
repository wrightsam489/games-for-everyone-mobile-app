import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

import { useTheme } from "../contexts/ThemeContext";

import {
  PrimaryButton,
  SecondaryButton,
  DestructiveButton,
  TextButton,
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
import Carousel from "../components/common/Carousel";

const relationOptions = [
  "Playing",
  "Plan To Play",
  "Completed",
  "On Hold",
  "Dropped",
];

export default function Components() {
  const { theme } = useTheme();
  const styles = makeStyleSheet(theme.colors);

  const flatListRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [showItemIndicator, setShowItemIndicator] = useState(true);
  const [useButtonMovement, setUseButtonMovement] = useState(true);

  const data = [
    { id: 0, entry: "Text" },
    { id: 1, entry: "Input" },
    { id: 2, entry: "Button" },
    { id: 3, entry: "Toggle" },
  ];

  const renderItem = (item) => {
    switch (item.entry) {
      case "Text":
        return <TextCard />;
      case "Input":
        return <InputCard />;
      case "Button":
        return <ButtonCard />;
      case "Toggle":
        return <ToggleCard />;
      default:
        return <></>;
    }
  };

  const TextCard = () => {
    return (
      <View style={styles.entry}>
        <Card style={styles.card}>
          <Title>Title</Title>
          <Heading>Heading</Heading>
          <Subheading>Subheading</Subheading>
          <BodyText>BodyText</BodyText>
        </Card>
        {useButtonMovement && (
          <View
            style={{
              paddingHorizontal: 30,
              flexDirection: "row",
              columnGap: 30,
            }}
          >
            <PrimaryButton
              style={{ flex: 1 }}
              title={"Previous"}
              disabled={true}
              onPress={PrevItem}
            />
            <PrimaryButton
              style={{ flex: 1 }}
              title={"Next"}
              disabled={false}
              onPress={NextItem}
            />
          </View>
        )}
      </View>
    );
  };

  const InputCard = () => {
    return (
      <View style={styles.entry}>
        <Card style={styles.card}>
          <TextField placeholder={"Username"} />
          <SecureTextField placeholder={"Password"} />
          <SearchBar placeholder={"Search"} />
        </Card>
        {useButtonMovement && (
          <View
            style={{
              paddingHorizontal: 30,
              flexDirection: "row",
              columnGap: 30,
            }}
          >
            <PrimaryButton
              style={{ flex: 1 }}
              title={"Previous"}
              disabled={false}
              onPress={PrevItem}
            />
            <PrimaryButton
              style={{ flex: 1 }}
              title={"Next"}
              disabled={false}
              onPress={NextItem}
            />
          </View>
        )}
      </View>
    );
  };

  const ButtonCard = () => {
    return (
      <View style={styles.entry}>
        <Card style={styles.card}>
          <PrimaryButton title={"Primary"} />
          <SecondaryButton title={"Secondary"} />
          <DestructiveButton title={"Error"} />
          <TextButton title={"Text"} />

          <PrimaryButton title={"Primary"} disabled={true} />
          <SecondaryButton title={"Secondary"} disabled={true} />
          <DestructiveButton title={"Error"} disabled={true} />
          <TextButton title={"Text"} disabled={true} />
        </Card>
        {useButtonMovement && (
          <View
            style={{
              paddingHorizontal: 30,
              flexDirection: "row",
              columnGap: 30,
            }}
          >
            <PrimaryButton
              style={{ flex: 1 }}
              title={"Previous"}
              disabled={false}
              onPress={PrevItem}
            />
            <PrimaryButton
              style={{ flex: 1 }}
              title={"Next"}
              disabled={false}
              onPress={NextItem}
            />
          </View>
        )}
      </View>
    );
  };

  const ToggleCard = () => {
    return (
      <View style={styles.entry}>
        <Card style={styles.card}>
          <ToggleButton isActive={true} />
          <ToggleButton />
          <ToggleButton isActive={true} disabled={true} />
          <ToggleButton disabled={true} />

          <ButtonGroup items={relationOptions} />
          <ButtonGroup items={relationOptions} isSingleSelection={false} />
        </Card>
        {useButtonMovement && (
          <View
            style={{
              paddingHorizontal: 30,
              flexDirection: "row",
              columnGap: 30,
            }}
          >
            <PrimaryButton
              style={{ flex: 1 }}
              title={"Previous"}
              disabled={false}
              onPress={PrevItem}
            />
            <PrimaryButton
              style={{ flex: 1 }}
              title={"Next"}
              disabled={true}
              onPress={NextItem}
            />
          </View>
        )}
      </View>
    );
  };

  const PrevItem = () => {
    scrollToItem(focusedIndex - 1);
  };

  const NextItem = () => {
    scrollToItem(focusedIndex + 1);
  };

  const scrollToItem = (index) => {
    if (flatListRef.current && index >= 0 && index < data.length) {
      flatListRef.current.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5,
      });
      setFocusedIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topButtons}>
        <ToggleButton
          style={{ flex: 1 }}
          title={"showItemIndicator"}
          onPress={() => {
            setShowItemIndicator((prev) => !prev);
          }}
          isActive={showItemIndicator}
        />
        <ToggleButton
          style={{ flex: 1 }}
          title={"useButtonMovement"}
          onPress={() => {
            setUseButtonMovement((prev) => !prev);
          }}
          isActive={useButtonMovement}
        />
      </View>
      <Carousel
        data={data}
        renderItem={renderItem}
        flatListRef={flatListRef}
        showItemIndicator={showItemIndicator}
        useButtonMovement={useButtonMovement}
      />
    </View>
  );
}

function makeStyleSheet(theme) {
  return StyleSheet.create({
    container: { flex: 1, marginBottom: 25 },
    topButtons: {
      flexDirection: "row",
      marginTop: 25,
      marginHorizontal: 30,
      columnGap: 30,
    },
    entry: {
      flex: 1,
      width: "100%",
    },
    card: {
      flex: 1,
      padding: 15,
      margin: 30,
      rowGap: 30,
    },
  });
}
