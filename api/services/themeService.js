import { gfeClient } from "../clients/gfeClient";

export const ThemeService = {
  getAllThemes: async () => {
    try {
      const response = await gfeClient.getAllThemes();
      return response.data;
    } catch (error) {
      console.error("Error fetching themes:", error);
      throw error;
    }
  },
};
