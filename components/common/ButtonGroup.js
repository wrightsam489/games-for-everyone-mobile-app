import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ToggleButton } from "./Buttons";

export default function ButtonGroup({ items = [], isSingleSelection = true }) {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const alterSelection = (index) => {
    if (isSingleSelection) {
      setActiveIndexes([index]);
    } else {
      if (activeIndexes.includes(index)) {
        const newArray = activeIndexes.filter((i) => i !== index);
        setActiveIndexes(newArray);
      } else {
        setActiveIndexes([...activeIndexes, index]);
      }
    }
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return (
          <ToggleButton
            title={`${item}`}
            style={styles.button}
            isActive={activeIndexes.includes(index)}
            onPress={() => {
              alterSelection(index);
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  button: {
    width: "30%",
    margin: 5,
  },
});
