import * as config from "./config";
import axios from "@/utils/request.js";

export const getBannerList = () => axios.get(config.getBannerList);
export const getNewList = () => axios.get(config.newList);
