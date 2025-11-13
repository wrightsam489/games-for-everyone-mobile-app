import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { useTheme } from "../../contexts/ThemeContext";

import { Heading } from "./Texts";
import { IconButton } from "./Buttons";

export default function ActionReloader({
  style,
  loading,
  error,
  callback,
  children,
}) {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);

  return (
    <>
      {loading ? (
        <ActivityIndicator
          style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}
          size={"large"}
        />
      ) : error ? (
        <View style={[style, styles.container]}>
          <Heading>{error}</Heading>
          <IconButton
            iconName="rotate-right"
            size={30}
            onPress={() => callback()}
          />
        </View>
      ) : (
        children
      )}
    </>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.overlay,
      marginHorizontal: 15,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      rowGap: 10,
    },
  });
};
