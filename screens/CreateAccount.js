import React, { useRef, useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

import { Heading, Subheading } from "../components/common/Texts";
import { PrimaryButton } from "../components/common/Buttons";
import Card from "../components/common/Card";
import Carousel from "../components/common/Carousel";

import { ThemeService } from "../api/services/themeService";
import { GenreService } from "../api/services/genreService";
import { CompanyService } from "../api/services/companyService";
import { FranchiseService } from "../api/services/franchiseService";
import AccountInfo from "../components/createAccount/AccountInfo";
import PreferenceCard from "../components/createAccount/PreferenceCard";

export default function CreateAccount() {
  const { auth } = useAuth();
  const { theme } = useTheme();
  const styles = makeStylesSheet(theme.colors);

  const flatListRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const [isAccountInfoValid, setIsAccountInfoValid] = useState(false);

  const steps = [
    { id: 1, title: "Account" },
    // { id: 2, title: "Themes" },
    // { id: 3, title: "Genres" },
    // { id: 4, title: "Companies" },
    // { id: 5, title: "Franchises" },
    { id: 6, title: "Review" },
  ];

  const themeCallback = React.useMemo(
    () => () => ThemeService.getAllThemes(),
    []
  );
  const genreCallback = React.useMemo(
    () => () => GenreService.getAllGenres(),
    []
  );
  const companyCallback = React.useMemo(
    () => () => CompanyService.getAllCompanies(),
    []
  );
  const franchiseCallback = React.useMemo(
    () => () => FranchiseService.getAllFranchises(),
    []
  );

  const renderItem = (item) => {
    switch (item.title) {
      case "Account":
        return (
          <AccountInfo
            styles={styles}
            onValidityChange={setIsAccountInfoValid}
          />
        );
      case "Themes":
        return (
          <PreferenceCard title={item.title} serviceCallback={themeCallback} />
        );
      case "Genres":
        return (
          <PreferenceCard title={item.title} serviceCallback={genreCallback} />
        );
      case "Companies":
        return (
          <PreferenceCard
            title={item.title}
            serviceCallback={companyCallback}
          />
        );
      case "Franchises":
        return (
          <PreferenceCard
            title={item.title}
            serviceCallback={franchiseCallback}
          />
        );
      case "Review":
        return <Review />;
      default:
        return <></>;
    }
  };

  const Review = () => {
    return (
      <View style={styles.item}>
        <Card style={styles.card}>
          <Heading>Review</Heading>
          <View style={styles.cardSection}>
            <Subheading>Account</Subheading>
          </View>
          <View style={styles.cardSection}>
            <Subheading>Themes</Subheading>
          </View>
          <View style={styles.cardSection}>
            <Subheading>Genres</Subheading>
          </View>
          <View style={styles.cardSection}>
            <Subheading>Companies</Subheading>
          </View>
          <View style={styles.cardSection}>
            <Subheading>Franchises</Subheading>
          </View>
        </Card>
      </View>
    );
  };

  const PrevItem = () => {
    scrollToItem(focusedIndex - 1);
  };

  const NextItem = () => {
    if (focusedIndex < steps.length - 1) {
      scrollToItem(focusedIndex + 1);
    } else {
      auth.guestLogin();
    }
  };

  const scrollToItem = (index) => {
    if (flatListRef.current && index >= 0 && index < steps.length) {
      flatListRef.current.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5,
      });
      setFocusedIndex(index);
    }
  };

  const ValidateStep = () => {
    switch (steps[focusedIndex].title) {
      case "Account":
        return isAccountInfoValid;
      default:
        return true;
    }
  };

  const NavBtns = () => {
    return (
      <View style={styles.bottomRow}>
        <PrimaryButton
          style={{ flex: 1 }}
          title={"Previous"}
          disabled={focusedIndex == 0}
          onPress={PrevItem}
        />
        <PrimaryButton
          style={{ flex: 1 }}
          title={focusedIndex < steps.length - 1 ? "Next" : "Done"}
          disabled={!ValidateStep()}
          onPress={NextItem}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={steps}
        renderItem={renderItem}
        flatListRef={flatListRef}
        showItemIndicator={true}
        useButtonMovement={true}
      >
        <NavBtns />
      </Carousel>
    </SafeAreaView>
  );
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 25,
    },
    item: {
      flex: 1,
      width: "100%",
      padding: 15,
    },
    scrollView: {
      flex: 1,
    },
    card: {
      flex: 1,
      padding: 15,
      rowGap: 25,
    },
    bottomRow: {
      flexDirection: "row",
      justifyContent: "center",
      marginHorizontal: 15,
      columnGap: 30,
    },
  });
};
