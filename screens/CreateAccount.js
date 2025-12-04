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

  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const makeStylesSheet = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 10,
    },
  });
};
