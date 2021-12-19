export const postAppointment = async (appId) => {
  try {
    const req = await fetch(
      `${process.env.REACT_BACK_END_URL}/appointment/${appId}`,
      {
        method: "POST",
      }
    );
    if (req.ok) {
      const res = await req.json();
      console.log("post appointment---->", res);
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};
