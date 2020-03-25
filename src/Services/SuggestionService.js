import axios from "../axios";

export const searchCar = async () => {
  try {
    const { data, status } = await axios.get("/posts");
    if (status !== 200) throw "Error";

    return data;
  } catch (error) {
    throw error;
  }
};
