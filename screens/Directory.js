import { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import { GenreService } from "../api/services/genreService";
import { ThemeService } from "../api/services/themeService";

import { useTheme } from "../contexts/ThemeContext";
import { SearchBar } from "../components/common/TextFields";

import Section from "../components/directory/Section";

export default function Directory() {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);

  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    setLoading(true);
    const data = [
      // fetchCompanies(),
      // fetchFranchise(),
      // fetchGenre(),
      fetchThemes(),
    ];
    await Promise.all(data).finally(() => {
      setLoading(false);
    });
  };

  const fetchCompanies = async () => {};

  const fetchFranchise = async () => {};

  const fetchGenre = async () => {
    try {
      const data = await GenreService.getAllGenres();
      setSections([...sections, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchThemes = async () => {
    try {
      const data = await ThemeService.getAllThemes();
      setSections([...sections, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, margin: 0 }}>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      ) : (
        <>
          <SearchBar
            style={{ margin: 15, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)" }}
            dis
          />
          <FlatList
            data={sections}
            keyExtractor={(item) => item.id + item.name}
            renderItem={({ item }) => {
              return <Section section={item} />;
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({});
};
