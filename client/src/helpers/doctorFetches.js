import { BE_URL } from "./apiFetches";
export const hospitalDoctors = async (hospitalName) => {
  try {
    const resp = await fetch(
      `${BE_URL}/doctor/search/dm?hospital=${hospitalName}`
    );
    if (resp) {
      const data = await resp.json();
      return data;
    } else {
      return "no results found";
    }
  } catch (error) {
    throw error;
  }
};
