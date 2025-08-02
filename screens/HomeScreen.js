import { StyleSheet, View } from 'react-native';

import SearchBar from '../components/TextFields/SearchBar';
import TextOnlyButton from '../components/Buttons/TextOnlyButton';
import GameSectionList from '../views/GameSectionList';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar />
        <TextOnlyButton title={'Clear'}/>
      </View>
      <GameSectionList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4E3C3',
    padding: 10,
    flex: 1
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15
  }
})