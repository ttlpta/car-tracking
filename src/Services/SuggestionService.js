import axios from "../axios";

export const searchCar = async () => {
  try {
    const cars = await axios.get('/posts');
    
    return cars;
  } catch (error) {
    
  }
  
}