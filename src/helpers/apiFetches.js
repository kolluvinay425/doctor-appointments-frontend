import { create } from "axios";

export const BE_URL = process.env.REACT_APP_BACKEND_URL;
const API = create({ baseURL: BE_URL });

const refreshAccessToken = async () => {
  const { data } = await API.post("/doctor/login", {
    actualRefreshToken: localStorage.getItem("refreshToken"),
  });
  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
  return data;
};
const registerTokens = async () => {
  const { data } = await API.post("/doctor/login", {
    actualAcessToken: localStorage.getItem("accessToken"),
    actualRefreshToken: localStorage.getItem("refreshToken"),
  });
  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
  return data;
};

API.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    config.headers = {
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => response,
  async function (error) {
    const failedRequest = error.config;
    if (
      error.response.status === 401 &&
      failedRequest.url !== "/doctor/login"
    ) {
      await refreshAccessToken();
      await registerTokens();
      const retryRequest = API(failedRequest);
      return retryRequest;
    } else {
      return Promise.reject(error);
    }
  }
);

export const getHospitals = async () => {
  try {
    const resp = await fetch(`${BE_URL}/hospital/doctors`);
    if (resp) {
      const data = await resp.json();
      return data;
    }
  } catch (error) {}
};
export const doctorRegister = async (data) => {
  console.log("daaaa", data.firstName);
  try {
    const resp = await fetch(`${BE_URL}/doctor/register`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringiffy(data),
    });
    if (resp) {
      const data = await resp.json();
      return data;
    }
  } catch (error) {}
};
export const userRegister = async (data) => {
  console.log("daaaa", data.firstName);
  try {
    const resp = await fetch(`${BE_URL}/user/register`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringiffy(data),
    });
    if (resp) {
      const data = await resp.json();
      return data;
    }
  } catch (error) {}
};
export default API;
