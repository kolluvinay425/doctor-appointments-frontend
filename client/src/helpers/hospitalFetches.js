import { BE_URL } from "./apiFetches";
export const queryHospital = async (query) => {
  console.log("query", query);
  try {
    const resp = await fetch(`${BE_URL}/hospital?search=${query}`);
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
