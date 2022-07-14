import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";

export const homeServices = {
  getFAQList() {
    return axios({
      url: `${BASE_URL}faqs`,
      method: "GET",
    });
  },
  getPartnersList() {
    return axios({
      url: `${BASE_URL}partners`,
      method: "GET",
    });
  },
  getFounderList() {
    return axios({
      url: `${BASE_URL}founders`,
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
      url: `https://contrau.metacoders.dev/wp-json/contact-form-7/v1/contact-forms/325/feedback`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
