import { useState, useRef } from "react";
import { Dimensions, StyleSheet, View, FlatList } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import Icon from "react-native-vector-icons/Entypo";
import { PrimaryButton } from "./Buttons";

const { width } = Dimensions.get("window");

export default function Carousel({
  style = { flex: 1 },
  data,
  renderItem,
  flatListRef,
  containerWidthPercentage = 1,
  showItemIndicator = false,
  useButtonMovement = false,
  children,
}) {
  const { theme, mode } = useTheme();
  const styles = makeStylesSheet(theme.colors);
  const [focusedItem, setFocusedItem] = useState(data[0]);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 90,
  };

  const CONTAINER_WIDTH = width * containerWidthPercentage;
  const CONTAINER_SPACING = (width - CONTAINER_WIDTH) * 0.5;

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const focused = viewableItems.reduce((prev, current) => {
        return prev.viewabilityFraction > current.viewabilityFraction
          ? prev
          : current;
      });
      setFocusedItem(focused.item);
    }
  }).current;

  const getItemLayout = (data, index) => ({
    length: CONTAINER_WIDTH,
    offset: CONTAINER_WIDTH * index + CONTAINER_SPACING,
    index,
  });

  const containerRenderItem = ({ item }) => {
    return (
      <View
        style={{
          width: CONTAINER_WIDTH,
          alignItems: "center",
        }}
      >
        {renderItem(item)}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        ref={flatListRef}
        style={style}
        data={data}
        renderItem={containerRenderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CONTAINER_WIDTH}
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={{ paddingHorizontal: CONTAINER_SPACING }}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        scrollEnabled={!useButtonMovement}
        getItemLayout={getItemLayout}
      />
      {children}
      {showItemIndicator && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {data.map((element) => {
            let color = mode === "dark" ? "black" : "grey";
            if (element.id === focusedItem.id) {
              color = mode === "dark" ? "white" : "black";
            }
            return (
              <Icon
                name="dot-single"
                color={color}
                size={45}
                key={element.id}
              />
            );
          })}
        </View>
      )}
    </View>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({});
};
