import axios from "../axios";

export const addCar = async body => {
  try {
    const { data, status } = await axios.post("/cars", body);
    if (status !== 201) throw "Error";

    return !!data.id;
  } catch (error) {
    throw error;
  }
};
