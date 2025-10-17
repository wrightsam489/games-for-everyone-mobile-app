import { gfeClient } from "../clients/gfeClient";

export const GameService = {
  getGameByGenre: async (id) => {
    try {
      const response = await gfeClient.getGameByGenre(id);
      return response.data;
    } catch (error) {
      console.error("Error fetching games by genre:", error);
      throw error;
    }
  },

  getGameDetails: async (game_id) => {
    try {
      const response = await gfeClient.getGameDetails(game_id);
      return response.data;
    } catch (error) {
      console.error("Error fetching game details:", error);
      throw error;
    }
  },
};
