import { StyleSheet, View } from "react-native";

export default function Line({
  direction = "horizontal",
  color = "black",
  width = StyleSheet.hairlineWidth,
}) {
  return (
    <View
      style={[
        direction == "vertical"
          ? {
              borderRightColor: color,
              borderRightWidth: width,
            }
          : {
              borderBottomColor: color,
              borderBottomWidth: width,
            },
      ]}
    />
  );
}
