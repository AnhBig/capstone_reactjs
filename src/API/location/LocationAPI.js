import { apiInstance } from "../../config/axios.config";

export const LOCATIONAPI = {
  getLocationApi: async () => {
    try {
      const { data } = await apiInstance().get(
        "https://airbnbnew.cybersoft.edu.vn/api/vi-tri"
      );
      return data;
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  },
};
