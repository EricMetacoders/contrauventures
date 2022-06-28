import axios from "axios";
const url = "http://192.168.50.159/wp-json/acf/v3/";
export const homeServices = {
  getFAQList() {
    return axios({
      url: `${url}faqs`,
      method: "GET",
    });
  },
  getPartnersList() {
    return axios({
      url: `${url}partners`,
      method: "GET",
    });
  },
};
