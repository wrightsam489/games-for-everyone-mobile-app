import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { useTheme } from "../contexts/ThemeContext";
import { PrimaryButton, TextButton } from "../components/common/Buttons";
import { TextField, SecureTextField } from "../components/common/TextFields";
import { Title } from "../components/common/Texts";
import Card from "../components/common/Card";
import { useAuth } from "../contexts/AuthContext";

export default function Login({ navigation }) {
  const { auth } = useAuth();
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Title style={styles.title}>Gaming for Everyone</Title>
        <TextField style={styles.textField} placeholder={"Username"} />
        <SecureTextField style={styles.textField} placeholder={"Password"} />
        <PrimaryButton title={"Login"} onPress={() => {}} />

        <View style={styles.hSection}>
          <TextButton
            title={"Create account"}
            onPress={() => navigation.navigate("Create account")}
          />
          <TextButton
            title={"Enter as guest"}
            onPress={() => {
              auth.guestLogin();
            }}
          />
        </View>
      </Card>
    </View>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 30,
    },
    card: {
      padding: 15,
      rowGap: 15,
    },
    hSection: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    textField: {},
    title: {
      textAlign: "center",
      marginBottom: 15,
    },
  });
};
