const url = "http://localhost:3001";

export const postAppointment = async (appId) => {
  try {
    const req = await fetch(`${process.env.URL}/appointment/${appId}`, {
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
