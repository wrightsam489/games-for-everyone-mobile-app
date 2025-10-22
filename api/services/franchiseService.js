import { gfeClient } from "../clients/gfeClient";

export const FranchiseService = {
  getAllFranchises: async () => {
    try {
      const response = await gfeClient.getAllFranchises();
      return response.data;
    } catch (error) {
      console.error("Error fetching franchise:", error);
      throw error;
    }
  },
};
