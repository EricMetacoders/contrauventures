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
  getFounderList() {
    return axios({
      url: `${url}founders`,
      method: "GET",
    });
  },
  getPortfolioList() {
    return axios({
      url: `${url}portfoilos`,
      method: "GET",
    });
  },
  getNewsList() {
    return axios({
      url: `${url}news`,
      method: "GET",
    });
  },
  getEmpowerList() {
    return axios({
      url: `${url}empowers`,
      method: "GET",
    });
  },
};
