import axios from "axios";
import { BASE_URL } from "./URLs";

const config = (data, URL, header = null) => {
  return {
    method: "get",
    url: BASE_URL + URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: header
    },
    data: data
  };
};

export const login = async data => {
  return axios(
    config(
      data,
      "/login" +
        `?username=${data.username}&password=${data.password}`
    )
  );
};

export const getCategoryList = async header => {
  return axios(config(null, "/getCategory", header));
};

export const getCategoryByID = async (data, header) => {
  return axios(config(data, "/getCategory?id=" + data.id, header));
};

export const getUsersByID = async (data, header) => {
  return axios(config(data, "/UserList?id=" + data.id, header));
};

export const deleteCategory = async (data, header) => {
  return axios(
    config(null, "/deleteCategory?id=" + data.id, header)
  );
};

export const getUserList = async (header, key) => {
  return axios(config(null, "/UserList", header, key));
};

export const getProductList = async header => {
  return axios(config(null, "/getProduct", header));
};

export const getProductByID = async (data, header) => {
  return axios(config(data, "/getProduct?id=" + data.id, header));
};

export const getQualityList = async header => {
  return axios(config(null, "/getQuality", header));
};

export const getQualityByID = async (data, header) => {
  return axios(config(data, "/getQuality?id=" + data.id, header));
};
export const getSocialMediaLink = async header => {
  return axios(config(null, "/getSocialMedia", header));
};

export const getSocialMediaLinkByID = async (data, header) => {
  console.log(data.id);
  return axios(
    config(data, "/getSocialMedia?id=" + data.id, header)
  );
};

export const getHeroSectionLink = async header => {
  return axios(config(null, "/getHeroSection", header));
};

// export const getHeroSectionByID = async (data, header) => {
//   console.log(data.id);
//   return axios(
//     config(data, "/getHeroSection?id=" + data.id, header)
//   );
// };
