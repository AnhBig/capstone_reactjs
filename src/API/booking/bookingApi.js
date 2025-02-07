import { apiInstance } from "../../config/axios.config"

export const BOOKINGAPI = {
    getBookingApi: async () => {
        try {
            const {data} = await apiInstance().get(
                "https://airbnbnew.cybersoft.edu.vn/api/dat-phong"
            );
            return data;
        } catch (error) {
            console.log("Error fetching location:", error)
        }
    }
}