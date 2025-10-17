import { useState } from "react";
import { ScrollView, Switch, View, Text, useColorScheme } from "react-native";

import { useTheme } from "../contexts/ThemeContext";

import {
  PrimaryButton,
  SecondaryButton,
  DestructiveButton,
  TextButton,
  IconButton,
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

export default function Components() {
  const { mode, setMode } = useTheme();
  const toggleSwitch = () => {
    setMode(!(mode === "dark") ? "dark" : "light");
  };

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 15, rowGap: 15 }}>
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

        <View>
          <TextField placeholder={"Username"} />
          <SecureTextField placeholder={"Password"} />
          <SearchBar placeholder={"Search"} />
        </View>

        <PrimaryButton title={"Primary"} />
        <SecondaryButton title={"Secondary"} />
        <DestructiveButton title={"Error"} />
        <TextButton title={"Text"} />
        <PrimaryButton title={"Primary"} disabled={true} />
        <SecondaryButton title={"Secondary"} disabled={true} />
        <DestructiveButton title={"Error"} disabled={true} />
        <TextButton title={"Text"} disabled={true} />
      </View>
    </ScrollView>
  );
}
