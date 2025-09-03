import { Dimensions, StyleSheet, FlatList, SafeAreaView, View, Image, Pressable, SectionList } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '../contexts/ThemeContext'
import { Heading, Subheading } from '../components/Texts'
import { SearchBar } from '../components/TextFields';

const { width } = Dimensions.get('window');
const CONTAINER_WIDTH = width * .8;
const CONTAINER_SPACING = (width - CONTAINER_WIDTH) / 2
const IMAGE_WIDTH = CONTAINER_WIDTH * .95;
const IMAGE_HEIGHT = IMAGE_WIDTH * 2 / 3;

const DATA = [
  {
    genre: 'Genre 1',
    data: [
      { id: 1, title: 'Title 1', cover: require('../assets/duck.png') },
      { id: 2, title: 'Title 2', cover: require('../assets/duck.png') },
      { id: 3, title: 'Title 3', cover: require('../assets/duck.png') },
    ]
  },
  {
    genre: 'Genre 2',
    data: [
      { id: 1, title: 'Title 1', cover: require('../assets/duck.png') },
      { id: 2, title: 'Title 2', cover: require('../assets/duck.png') },
      { id: 3, title: 'Title 3', cover: require('../assets/duck.png') },
    ]
  },
  {
    genre: 'Genre 3',
    data: [
      { id: 1, title: 'Title 1', cover: require('../assets/duck.png') },
      { id: 2, title: 'Title 2', cover: require('../assets/duck.png') },
      { id: 3, title: 'Title 3', cover: require('../assets/duck.png') },
    ]
  },
  {
    genre: 'Genre 4',
    data: [
      { id: 1, title: 'Title 1', cover: require('../assets/duck.png') },
      { id: 2, title: 'Title 2', cover: require('../assets/duck.png') },
      { id: 3, title: 'Title 3', cover: require('../assets/duck.png') },
    ]
  },
  {
    genre: 'Genre 5',
    data: [
      { id: 1, title: 'Title 1', cover: require('../assets/duck.png') },
      { id: 2, title: 'Title 2', cover: require('../assets/duck.png') },
      { id: 3, title: 'Title 3', cover: require('../assets/duck.png') },
    ]
  },
]

export default function GameDirectory() {
  const { theme } = useTheme()
  const styles = makeStylesSheet(theme.colors)
  const navigation = useNavigation();

  function GameCard({ item }) {
    return (
      <View style={styles.item}>
        <Pressable 
          onPress={() => navigation.navigate('Game Details')} 
          style={({ pressed }) => [
            styles.card,
            pressed && { opacity: 0.5 }
          ]}
        >
          <Image 
            style={styles.image}
            source={item.cover}
          />
          <Subheading style={{padding: 5}}>Hollow Knight</Subheading>
        </Pressable>
      </View>
    )
  }

  function GenreList({data}) {
    return (
      <FlatList
        data={data}
        renderItem={({item}) => { return <GameCard item={item} />}}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CONTAINER_WIDTH}
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={{ paddingHorizontal: CONTAINER_SPACING }}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar style={{ margin: 15 }} />
      <SectionList 
        contentContainerStyle={{ paddingBottom: 10, rowGap: 5 }}
        sections={DATA}
        keyExtractor={(item, index) => item.id + index}
        renderItem={() => {}}
        renderSectionHeader={({section: {genre, data}}) => (
          <>
            <Heading style={{ marginHorizontal: 20, paddingBottom: 5 }}>{genre}</Heading>
            <GenreList data={data} />
          </>
        )}
      />
    </SafeAreaView>
  )
}


const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 0,
      flex: 1
    },
    item: {
      width: CONTAINER_WIDTH,
      alignItems: 'center',
    },
    card: {
      backgroundColor: theme.card,
      borderRadius: 5
    },
    image: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5
    }
  })
}