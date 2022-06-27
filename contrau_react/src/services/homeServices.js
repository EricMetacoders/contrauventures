import axios from "axios";
const url = "http://192.168.50.159/wp-json/wp/v2/faqs";
export const homeServices = {
  getList() {
    return axios({
      url,
      method: "GET",
    });
  },
};
