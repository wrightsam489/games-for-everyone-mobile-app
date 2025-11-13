import React, { useEffect, useState } from "react";

import { useTheme } from "../contexts/ThemeContext";

import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  ActivityIndicator,
} from "react-native";
import { SearchBar, TextField } from "../components/common/TextFields";
import { Title, Heading, BodyText } from "../components/common/Texts";
import { PrimaryButton } from "../components/common/Buttons";
import Card from "../components/common/Card";
import Carousel from "../components/common/Carousel";
import ButtonGroup from "../components/common/ButtonGroup";
import ActionReloader from "../components/common/ActionReloader";
import { ThemeService } from "../api/services/themeService";
import { GenreService } from "../api/services/genreService";
import { CompanyService } from "../api/services/companyService";
import { FranchiseService } from "../api/services/franchiseService";

export default function CreateAccount() {
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);
  const data = [
    { id: 0, step: "Account" },
    { id: 1, step: "Theme" },
    { id: 2, step: "Genres" },
    { id: 3, step: "Companies" },
    { id: 4, step: "Franchises" },
    { id: 5, step: "Review" },
  ];

  const renderItem = (item) => {
    switch (item.step) {
      case "Account":
        return <AccountInfo />;
      case "Theme":
        return <ThemePreferences />;
      case "Genres":
        return <GenresPreferences />;
      case "Companies":
        return <CompaniesPreferences />;
      case "Franchises":
        return <FranchisesPreferences />;
      case "Review":
        return <Review />;
      default:
        return <></>;
    }
  };

  const AccountInfo = () => {
    return (
      <Card style={styles.card}>
        <Title>Account</Title>
        <View style={styles.section}>
          <Heading>Personal</Heading>
          <TextField placeholder={"First name"} />
          <TextField placeholder={"Last name"} />
        </View>
        <View style={styles.section}>
          <Heading>Login</Heading>
          <TextField placeholder={"Username"} />
          <TextField placeholder={"Password"} />
          <TextField placeholder={"Confirm password"} />
        </View>
        <View style={styles.section}>
          <Heading>Recovery</Heading>
          <TextField placeholder={"Email"} />
          <TextField placeholder={"Phone number"} />
        </View>
      </Card>
    );
  };

  const ThemePreferences = () => {
    const [loading, setLoading] = useState(false);
    const [themes, setTheme] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchThemes();
    }, []);

    const fetchThemes = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ThemeService.getAllThemes();
        setTheme(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <>
        <Card style={styles.card}>
          <View style={styles.section}>
            <Title>Theme Preferences</Title>
            <BodyText>
              Please select any number of themes that you know you like.
            </BodyText>
          </View>
          <SearchBar />
          <ActionReloader
            loading={loading}
            error={error}
            callback={fetchThemes}
          >
            <ButtonGroup
              items={themes.map((val, index) => {
                return val.name;
              })}
              numberOfColumns={2}
              isSingleSelection={false}
            />
          </ActionReloader>
        </Card>
      </>
    );
  };

  const GenresPreferences = () => {
    const [loading, setLoading] = useState(false);
    const [themes, setTheme] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchGenres();
    }, []);

    const fetchGenres = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await GenreService.getAllGenres();
        setTheme(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <Card style={styles.card}>
        <View style={styles.section}>
          <Title>Genre Preferences</Title>
          <BodyText>
            Please select any number of genres that you know you like.
          </BodyText>
        </View>
        <SearchBar />
        <ActionReloader loading={loading} error={error} callback={fetchGenres}>
          <ButtonGroup
            items={themes.map((val, index) => {
              return val.name;
            })}
            numberOfColumns={2}
            isSingleSelection={false}
          />
        </ActionReloader>
      </Card>
    );
  };

  const CompaniesPreferences = () => {
    const [loading, setLoading] = useState(false);
    const [themes, setTheme] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await CompanyService.getAllCompanies();
        setTheme(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <Card style={styles.card}>
        <View style={styles.section}>
          <Title>Developer Preferences</Title>
          <BodyText>
            Please select any number of genres that you know you like.
          </BodyText>
        </View>
        <SearchBar />
        <ActionReloader
          loading={loading}
          error={error}
          callback={fetchCompanies}
        >
          <ButtonGroup
            items={themes.map((val, index) => {
              return val.name;
            })}
            numberOfColumns={2}
            isSingleSelection={false}
          />
        </ActionReloader>
      </Card>
    );
  };

  const FranchisesPreferences = () => {
    const [loading, setLoading] = useState(false);
    const [themes, setTheme] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchFranchises();
    }, []);

    const fetchFranchises = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await FranchiseService.getAllFranchises();
        setTheme(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <Card style={styles.card}>
        <View style={styles.section}>
          <Title>Franchises Preferences</Title>
          <BodyText>
            Please select any number of genres that you know you like.
          </BodyText>
        </View>
        <SearchBar />
        <ActionReloader
          loading={loading}
          error={error}
          callback={fetchFranchises}
        >
          <ButtonGroup
            items={themes.map((val, index) => {
              return val.name;
            })}
            numberOfColumns={2}
            isSingleSelection={false}
          />
        </ActionReloader>
      </Card>
    );
  };

  const Review = () => {
    return (
      <Card style={styles.card}>
        <ScrollView>
          <View style={{ rowGap: 30 }}>
            <Title>Review</Title>
            <View style={styles.section}>
              <Heading>Account</Heading>
            </View>
            <View style={styles.section}>
              <Heading>Themes</Heading>
            </View>
            <View style={styles.section}>
              <Heading>Genres</Heading>
            </View>
            <View style={styles.section}>
              <Heading>Companies</Heading>
            </View>
            <View style={styles.section}>
              <Heading>Franchises</Heading>
            </View>
          </View>
        </ScrollView>
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        showItemIndicator={true}
        useButtonMovement={true}
        containerWidthPercentage={1}
      />
    </SafeAreaView>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 10,
    },
    card: {
      flex: 0,
      rowGap: 30,
      padding: 15,
      width: "87.5%",
      marginVertical: 30,
      paddingBottom: 30,
    },
    section: {
      rowGap: 5,
    },
  });
};
