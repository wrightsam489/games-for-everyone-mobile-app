import { useState, useRef } from "react";
import { Dimensions, StyleSheet, View, FlatList } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import Icon from "react-native-vector-icons/Entypo";
import { PrimaryButton } from "./Buttons";

const { width } = Dimensions.get("window");

export default function Carousel({
  style = { flex: 1 },
  data: listData,
  renderItem,
  containerWidthPercentage = 1,
  showItemIndicator = false,
  useButtonMovement = false,
}) {
  const { theme, mode } = useTheme();
  const styles = makeStylesSheet(theme.colors);
  const [focusedItem, setFocusedItem] = useState(listData[0]);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 90,
  };
  const flatListRef = useRef(null);

  const CONTAINER_WIDTH = width * containerWidthPercentage;
  const CONTAINER_SPACING =
    (width - CONTAINER_WIDTH) * containerWidthPercentage;

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const focused = viewableItems.reduce((prev, current) => {
        return prev.viewabilityFraction > current.viewabilityFraction
          ? prev
          : current;
      });

      // Use the item object for display/ID comparison
      setFocusedItem(focused.item);

      // FIX: Use the highly reliable 'index' property provided by the viewability object
      if (focused.index !== null && focused.index !== undefined) {
        setFocusedIndex(focused.index);
      }
    }
  }).current;

  const getItemLayout = (data, index) => ({
    length: CONTAINER_WIDTH,
    offset: CONTAINER_WIDTH * index + CONTAINER_SPACING,
    index,
  });

  const scrollToItem = (index) => {
    if (flatListRef.current && index >= 0 && index < listData.length) {
      flatListRef.current.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  };

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
    <>
      <FlatList
        ref={flatListRef}
        style={style}
        data={listData}
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
      {useButtonMovement && (
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 30,
            columnGap: 30,
          }}
        >
          <PrimaryButton
            style={{ flex: 1 }}
            title={"Previous"}
            disabled={focusedItem.id == listData[0].id}
            onPress={() => {
              const index = focusedIndex - 1;
              scrollToItem(index);
            }}
          />
          <PrimaryButton
            style={{ flex: 1 }}
            title={"Next"}
            disabled={focusedItem.id == listData[listData.length - 1].id}
            onPress={() => {
              const index = focusedIndex + 1;
              scrollToItem(index);
            }}
          />
        </View>
      )}
      {showItemIndicator && (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {listData.map((element) => {
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
    </>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({});
};
