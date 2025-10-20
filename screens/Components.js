import { useState } from "react";
import { ScrollView, Switch, View, Text, useColorScheme } from "react-native";

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

const relationOptions = [
  "Playing",
  "Plan To Play",
  "Completed",
  "On Hold",
  "Drop",
];

export default function Components() {
  const { mode, setMode } = useTheme();
  const toggleSwitch = () => {
    setMode(!(mode === "dark") ? "dark" : "light");
  };

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 15, rowGap: 10, marginBottom: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <BodyText>Dark mode</BodyText>
          <Switch value={mode === "dark"} onValueChange={toggleSwitch} />
        </View>
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
