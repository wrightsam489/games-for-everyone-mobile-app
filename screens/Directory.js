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

const SectionType = Object.freeze({
  Company: "Company",
  Franchise: "Franchise",
  Genre: "Genre",
  Theme: "Theme",
});

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
      fetchCompanies(),
      fetchFranchise(),
      fetchGenre(),
      fetchThemes(),
    ];
    await Promise.all(data).finally(() => {
      setLoading(false);
    });
  };

  const fetchCompanies = async () => {
    try {
      let data = await CompanyService.getAllCompanies();
      data = data.map((item) => {
        return { ...item, type: SectionType.Company };
      });
      setSections((prev) => [...prev, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFranchise = async () => {
    try {
      let data = await FranchiseService.getAllFranchises();
      data = data.map((item) => {
        return { ...item, type: SectionType.Franchise };
      });
      setSections((prev) => [...prev, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGenre = async () => {
    try {
      let data = await GenreService.getAllGenres();
      data = data.map((item) => {
        return { ...item, type: SectionType.Genre };
      });
      setSections((prev) => [...prev, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchThemes = async () => {
    try {
      let data = await ThemeService.getAllThemes();
      data = data.map((item) => {
        return { ...item, type: SectionType.Theme };
      });
      setSections((prev) => [...prev, ...data]);
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
            keyExtractor={(item) => item.type + item.id + item.name}
            renderItem={({ item }) => {
              switch (item.type) {
                case SectionType.Company:
                  return <CompanySection section={item} />;
                case SectionType.Franchise:
                  return <FranchiseSection section={item} />;
                case SectionType.Genre:
                  return <GenreSection section={item} />;
                case SectionType.Theme:
                  return <ThemesSection section={item} />;
                default:
                  <></>;
              }
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
