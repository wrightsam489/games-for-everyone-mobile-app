import { StyleSheet, FlatList, View, Text } from "react-native";

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export default function GameSectionList() {
  const renderItem = (item) => {
    return (
      <View style={styles.sectionItem}>
        <Text>{item}</Text>
      </View>
    )
  }

  const renderSection = (section) => {
    return (
      <View>
        <Text style={styles.sectionTitle}>{ section.title }</Text>
        <FlatList
          style={styles.sectionRow}
          data={section.data}
          renderItem={ ({item}) => renderItem(item) }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          horizontal={true}
        />
      </View>
    )
  }

  return (
    <FlatList
      style={styles.sectionList}
      data={DATA}
      keyExtractor={ section => section.title }
      renderItem={ ({item}) => renderSection(item) }
    />
  )
}

const styles = StyleSheet.create({
  sectionList: {
    flex: 1
  },
  sectionTitle: {
    paddingTop: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  sectionItem: {
    width: 150,
    height: 150,
    backgroundColor: '#999',
    marginVertical: 5
  },
  separator: {
    width: 10,
  },
})