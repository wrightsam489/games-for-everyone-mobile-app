import { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import { CompanyService } from "../api/services/companyService";
import { FranchiseService } from "../api/services/franchiseService";
import { GenreService } from "../api/services/genreService";
import { ThemeService } from "../api/services/themeService";

import { useTheme } from "../contexts/ThemeContext";
import { SearchBar } from "../components/common/TextFields";

import {
  CompanySection,
  FranchiseSection,
  GenreSection,
  ThemesSection,
} from "../components/directory/Section";
import { PrimaryButton } from "../components/common/Buttons";

export default function Directory() {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);

  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    setSections([]);
    setLoading(true);
    const data = [
      // fetchCompanies(),
      // fetchFranchise(),
      fetchGenre(),
      // fetchThemes(),
    ];
    await Promise.all(data).finally(() => {
      setLoading(false);
    });
  };

  const fetchCompanies = async () => {
    try {
      const data = await CompanyService.getAllCompanies();
      setSections([...sections, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFranchise = async () => {
    try {
      const data = await FranchiseService.getAllFranchises();
      setSections([...sections, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

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
    <SafeAreaView style={{ flex: 1, marginBottom: 15 }}>
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
              // return <CompanySection section={item} />;
              // return <FranchiseSection section={item} />;
              return <GenreSection section={item} />;
              // return <ThemesSection section={item} />;
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
