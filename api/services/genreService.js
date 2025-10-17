import { gfeClient } from "../clients/gfeClient";

export const GenreService = {
  getAllGenres: async () => {
    try {
      const response = await gfeClient.getAllGenres();
      return response.data;
    } catch (error) {
      console.error("Error fetching genres:", error);
      throw error;
    }
  },
};
