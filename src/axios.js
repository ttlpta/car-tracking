
import axios from "axios";

import { BASE_URL } from "./config";

let instance = {
  baseURL: BASE_URL,
};

const axiosInstance = axios.create(instance);

export default axiosInstance;
