import { apiInstance } from "../../config/axios.config"

export const ROOMAPI = {
    getRoomApi: async () => {
        try {
            const {data} = await apiInstance().get(
                'https://airbnbnew.cybersoft.edu.vn/api/phong-thue'
            );
            console.log('getrooom', data)
            return data;
        } catch (error) {
            console.error("Error fetching location:", error);
        }

    }

}