import { API_BASE_URL_ANDROID, API_BASE_URL_IOS } from "@env";
import { Platform } from "react-native";
import { createApiClient } from "./ApiClientFactory";

const API_BASE_URL =
  Platform.OS === "android" ? API_BASE_URL_ANDROID : API_BASE_URL_IOS;

const gfeClientInstance = createApiClient(API_BASE_URL);

export const gfeClient = {
  getGameDetails: async (game_id) => {
    return gfeClientInstance.get("/game/details", { params: { game_id } });
  },

  // Get Bys

  getGamesByCompany: async (company_id) => {
    return gfeClientInstance.get("/games/company", {
      params: { id: company_id },
    });
  },

  getGamesByFranchise: async (franchise_id) => {
    return gfeClientInstance.get("/games/franchise", {
      params: { id: franchise_id },
    });
  },

  getGamesByGenre: async (genre_id) => {
    return gfeClientInstance.get("/games/genre", { params: { id: genre_id } });
  },

  getGamesByTheme: async (theme_id) => {
    return gfeClientInstance.get("/games/theme", { params: { id: theme_id } });
  },

  // Get Alls

  getAllCompanies: async () => {
    return gfeClientInstance.get("/companies/all");
  },

  getAllFranchises: async () => {
    return gfeClientInstance.get("/franchises/all");
  },

  getAllGenres: async () => {
    return gfeClientInstance.get("/genres/all");
  },

  getAllThemes: async () => {
    return gfeClientInstance.get("/themes/all");
  },

  // Searches
};
