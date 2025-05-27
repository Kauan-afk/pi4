import axios from "axios";

export const useBackendApi = () => ({
  getAuctionBradesco: async () => {
    const response = await axios.get("http://localhost:3333/bradesco");
    console.log(response.data)
    return {
      auction: response.data,
    };
  },
});