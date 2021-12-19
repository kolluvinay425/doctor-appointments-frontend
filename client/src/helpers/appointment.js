import { BE_URL } from "./apiFetches";
const url = BE_URL;

export const postAppointment = async (appId) => {
  try {
    const req = await fetch(`${url}/appointment/${appId}`, {
      method: "POST",
    });
    if (req.ok) {
      const res = await req.json();
      console.log("post appointment---->", res);
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};
