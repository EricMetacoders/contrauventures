import axios from "axios";
export const interviewServices = {
  getListFounder() {
    return axios({
      url : "http://192.168.50.159/wp-json/acf/v3/founders/",
      method: "GET",
    });
  },
  getFounderIDByName() {
    return axios({
      url : "http://192.168.50.159/wp-json/acf/v3/founders/interviews",
      method: "GET",
    });
  },
  getFounderDetail(founderId) {
    return axios({
      url : `http://192.168.50.159/wp-json/acf/v3/founders/interviews/${founderId}`,
      method: "GET",
    });
  },
  getAllGallery(founderId) {
    return axios({
      url : `http://192.168.50.159/wp-json/acf/v3/founders/galleries/`,
      method: "GET",
    });
  },
  getGalleryFounder(founderId) {
    return axios({
      url : `http://192.168.50.159/wp-json/acf/v3/founders/galleries/${founderId}`,
      method: "GET",
    });
  },

};
