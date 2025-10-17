import { API_BASE_URL_ANDROID, API_BASE_URL_IOS } from "@env";
import { Platform } from "react-native";
import { createApiClient } from "./ApiClientFactory";

const API_BASE_URL =
  Platform.OS === "android" ? API_BASE_URL_ANDROID : API_BASE_URL_IOS;

const gfeClientInstance = createApiClient(API_BASE_URL);

export const gfeClient = {
  getAllGenres: async () => {
    return gfeClientInstance.get("/genres/all");
  },

  // TODO: NOT IMPLEMENTED SERVER SIDE YET
  // getMultipleGenres: async (ids) => {
  //   return gfeClientInstance.get("/genres", { params: { ids }});
  // },

  getGenre: async (id) => {
    return gfeClientInstance.get("/genre", { params: { id } });
  },

  getGameByGenre: async (id) => {
    return gfeClientInstance.get("/games/genre", { params: { id } });
  },

  getGameDetails: async (game_id) => {
    return gfeClientInstance.get("/game/details", { params: { game_id } });
  },
};
