import axios from "../axios";

export const addCar = async data => {
  try {
    const { data, status } = await axios.post("/cars", data);
    if (status !== 200) throw "Error";

    console.log("===>", data);
    return data;
  } catch (error) {
    throw error;
  }
};
