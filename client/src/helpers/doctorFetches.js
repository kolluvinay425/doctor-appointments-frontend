const url = "http://localhost:3001";

export const hospitalDoctors = async (hospitalName) => {
  try {
    const resp = await fetch(
      `${url}/doctor/search/dm?hospital=${hospitalName}`
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
