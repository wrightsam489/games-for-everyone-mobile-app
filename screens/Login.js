import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { useTheme } from "../contexts/ThemeContext";
import { PrimaryButton, TextButton } from "../components/common/Buttons";
import { TextField, SecureTextField } from "../components/common/TextFields";
import { Title } from "../components/common/Texts";

export default function Login({ navigation }) {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Title style={styles.title}>Gaming for Everyone</Title>
        <TextField style={styles.textField} placeholder={"Username"} />
        <SecureTextField style={styles.textField} placeholder={"Password"} />
        <PrimaryButton title={"Login"} onPress={() => {}} />

        <View style={styles.hSection}>
          <TextButton
            title={"Create account"}
            onPress={() => navigation.navigate("Create account")}
          />
          <TextButton title={"Enter as guest"} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      rowGap: 30,
      justifyContent: "center",
    },
    card: {
      backgroundColor: theme.card,
      padding: 15,
      borderRadius: 5,
      rowGap: 15,
      marginHorizontal: 30,
      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
    },
    hSection: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    textField: {
      borderColor: "black",
      borderWidth: 0.25,
    },
    title: {
      textAlign: "center",
      marginBottom: 15,
    },
  });
};
