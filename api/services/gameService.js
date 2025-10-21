import { gfeClient } from "../clients/gfeClient";

export const GameService = {
  getGameDetails: async (game_id) => {
    try {
      const response = await gfeClient.getGameDetails(game_id);
      return response.data;
    } catch (error) {
      console.error("Error fetching game details:", error);
      throw error;
    }
  },
  getGamesByGenre: async (genre_id) => {
    try {
      const response = await gfeClient.getGamesByGenre(genre_id);
      return response.data;
    } catch (error) {
      console.error("Error fetching games by genre:", error);
      throw error;
    }
  },
  getGamesByTheme: async (theme_id) => {
    try {
      const response = await gfeClient.getGamesByTheme(theme_id);
      return response.data;
    } catch (error) {
      console.error("Error fetching games by theme:", error);
      throw error;
    }
  },
};
