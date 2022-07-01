import axios from "axios";
import {BASE_URL} from '../constants/apiConstants'
export const interviewServices = {
  getListFounder() {
    return axios({
      url : `${BASE_URL}founders/`,
      method: "GET",
    });
  },
  getFounderIDByName() {
    return axios({
      url : `${BASE_URL}founders/interviews`,
      method: "GET",
    });
  },
  getFounderDetail(founderId) {
    return axios({
      url : `${BASE_URL}founders/interviews/${founderId}`,
      method: "GET",
    });
  },
  getAllGallery(founderId) {
    return axios({
      url : `${BASE_URL}founders/galleries/`,
      method: "GET",
    });
  },
  getGalleryFounder(founderId) {
    return axios({
      url : `${BASE_URL}founders/galleries/${founderId}`,
      method: "GET",
    });
  },
  getNew() {
    return axios({
      url : `${BASE_URL}news`,
      method: "GET",
    });
  },

};
