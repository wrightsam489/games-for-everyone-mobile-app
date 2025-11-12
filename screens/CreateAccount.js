import React, { useState } from "react";

import { useTheme } from "../contexts/ThemeContext";

import { StyleSheet, SafeAreaView, View } from "react-native";
import { TextField } from "../components/common/TextFields";
import { Title, Heading } from "../components/common/Texts";
import { PrimaryButton } from "../components/common/Buttons";

export default function CreateAccount() {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);

  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: 15, marginHorizontal: 15, marginBlock: 30 }}
    >
      <View style={styles.container}>
        <Title>Create Account</Title>

        <View style={styles.section}>
          <Heading>Personal</Heading>
          <TextField placeholder={"First name"} />
          <TextField placeholder={"Last name"} />
        </View>

        <View style={styles.section}>
          <Heading>Login</Heading>
          <TextField placeholder={"Username"} />
          <TextField placeholder={"Password"} />
          <TextField placeholder={"Confirm password"} />
        </View>

        <View style={styles.section}>
          <Heading>Recovery</Heading>
          <TextField placeholder={"Email"} />
          <TextField placeholder={"Phone number"} />
        </View>
      </View>
      <PrimaryButton title={"Create account"} style={styles.button} />
    </SafeAreaView>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    container: {
      rowGap: 30,
      flex: 1,
    },
    section: {
      rowGap: 15,
    },
  });
};
