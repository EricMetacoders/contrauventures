import axios from "axios";
import { BASE_URL, BASE_URL_CONTACT } from "../constants/apiConstants";

export const homeServices = {
  getFAQList() {
    return axios({
      url: `${BASE_URL}faqs?per_page=100&orderby=order&order=asc`,
      method: "GET",
    });
  },
  getPartnersList() {
    return axios({
      url: `${BASE_URL}partners?per_page=100&order=order&order=asc`,
      method: "GET",
    });
  },
  getFounderList() {
    return axios({
      url: `${BASE_URL}founders?per_page=10&order=id&id=asc`,
      method: "GET",
    });
  },
  getPortfolioList() {
    return axios({
      url: `${BASE_URL}portfoilos/?per_page=100`,
      method: "GET",
    });
  },
  getNewsList() {
    return axios({
      url: `${BASE_URL}news`,
      method: "GET",
    });
  },
  getEmpowerList() {
    return axios({
      url: `${BASE_URL}empowers`,
      method: "GET",
    });
  },
  postContactInfo(data) {
    return axios({
      url: BASE_URL_CONTACT,
      method: "POST",
      withCredentials: true,
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
