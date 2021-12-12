const url = "http://localhost:3001";

export const queryHospital = async (query) => {
  console.log("query", query);
  try {
    const resp = await fetch(`${url}/hospital?search=${query}`);
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
