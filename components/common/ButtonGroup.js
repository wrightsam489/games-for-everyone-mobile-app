import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ToggleButton } from "./Buttons";

export default function ButtonGroup({
  items = [],
  numberOfColumns = 3,
  isSingleSelection = true,
  onToggle = () => {},
}) {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const itemWidth = 100 / numberOfColumns - 5;

  const alterSelection = (index) => {
    if (isSingleSelection) {
      if (activeIndexes.includes(index)) {
        setActiveIndexes([]);
      } else {
        setActiveIndexes([index]);
      }
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
            key={index}
            title={`${item}`}
            style={[{ width: `${itemWidth}%` }, styles.button]}
            isActive={activeIndexes.includes(index)}
            onPress={() => {
              alterSelection(index);
              onToggle();
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
    rowGap: 10,
  },
  button: {
    margin: 0,
    borderRadius: 20,
  },
});
