import { useState, useRef, useEffect } from "react";
import { Dimensions, StyleSheet, View, FlatList } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import Icon from "react-native-vector-icons/Entypo";
import { PrimaryButton, ToggleButton } from "./Buttons";

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
              console.log(`${focusedIndex} -> ${index}`);
              scrollToItem(index);
            }}
          />
          <PrimaryButton
            style={{ flex: 1 }}
            title={"Next"}
            disabled={focusedItem.id == listData[listData.length - 1].id}
            onPress={() => {
              const index = focusedIndex + 1;
              console.log(`${focusedIndex} -> ${index}`);
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

import Card from "./Card";
export const CarouselExample = () => {
  const [showItemIndicator, setShowItemIndicator] = useState(true);
  const [useButtonMovement, setUseButtonMovement] = useState(true);

  return (
    <View style={{ flex: 1, marginBottom: 25 }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 25,
          marginHorizontal: 30,
          columnGap: 30,
        }}
      >
        <ToggleButton
          style={{ flex: 1 }}
          title={"showItemIndicator"}
          onPress={() => {
            setShowItemIndicator((prev) => !prev);
          }}
          isActive={showItemIndicator}
        />
        <ToggleButton
          style={{ flex: 1 }}
          title={"useButtonMovement"}
          onPress={() => {
            setUseButtonMovement((prev) => !prev);
          }}
          isActive={useButtonMovement}
        />
      </View>
      <Carousel
        data={Array.from({ length: 5 }, (_, i) => ({ id: i.toString() }))}
        renderItem={({ item }) => {
          return (
            <Card
              style={{
                flex: 1,
                width: "87.5%",
                margin: 30,
              }}
            ></Card>
          );
        }}
        showItemIndicator={showItemIndicator}
        useButtonMovement={useButtonMovement}
      />
    </View>
  );
};

const makeStylesSheet = (theme) => {
  return StyleSheet.create({});
};
