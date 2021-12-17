import { create, defaults } from "axios";

const API = create({ baseURL: "http://localhost:3001" });

const refreshAccessToken = async () => {
  const { data } = await API.post("/doctor/login", {
    actualRefreshToken: localStorage.getItem("DocrefreshToken"),
  });
  localStorage.setItem("DocaccessToken", data.accessToken);
  localStorage.setItem("DocrefreshToken", data.refreshToken);
  return data;
};

const registerTokens = async () => {
  const { data } = await API.post("/doctor/login", {
    actualAcessToken: localStorage.getItem("DocaccessToken"),
    actualRefreshToken: localStorage.getItem("DocrefreshToken"),
  });
  localStorage.setItem("DocaccessToken", data.accessToken);
  localStorage.setItem("DocrefreshToken", data.refreshToken);
  return data;
};

API.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("DocaccessToken");
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
    const resp = await fetch("http://localhost:3001/hospital/all");
    if (resp) {
      const data = await resp.json();
      return data;
    }
  } catch (error) {}
};
export const doctorRegister = async (data) => {
  console.log("daaaa", data.firstName);
  try {
    const resp = await fetch("http://localhost:3001/doctor/register", {
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

export const getDoctorInfo = async () => {
  try {
    const { data } = await API.get("/doctor/profile/d");
    console.log("doctor", data);
    if (data) {
      return data;
    } else {
      console.log("enter password or email corretly");
    }
  } catch (error) {
    console.log(error);
  }
};

export default API;
