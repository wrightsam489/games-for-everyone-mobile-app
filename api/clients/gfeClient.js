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

  getGamesByGenre: async (genre_id) => {
    return gfeClientInstance.get("/games/genre", { params: { id: genre_id } });
  },

  getGamesByTheme: async (theme_id) => {
    return gfeClientInstance.get("/games/theme", { params: { id: theme_id } });
  },

  getAllGenres: async () => {
    return gfeClientInstance.get("/genres/all");
  },

  getGenre: async (genre_id) => {
    return gfeClientInstance.get("/genre", { params: { genre_id } });
  },

  getAllThemes: async () => {
    return gfeClientInstance.get("/themes/all");
  },

  getTheme: async (theme_id) => {
    return gfeClientInstance.get("/theme", { params: { theme_id } });
  },
};
