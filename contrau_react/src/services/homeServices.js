import axios from "axios";
const url = "https://62b9202341bf319d22766f73.mockapi.io/student";
export const homeServices = {
  getList() {
    return axios({
      url,
      method: "GET",
    });
  },
};
