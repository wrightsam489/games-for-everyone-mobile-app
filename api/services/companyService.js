import { gfeClient } from "../clients/gfeClient";

export const CompanyService = {
  getAllCompanies: async () => {
    try {
      const response = await gfeClient.getAllCompanies();
      return response.data;
    } catch (error) {
      console.error("Error fetching franchise:", error);
      throw error;
    }
  },
};
