import * as config from "./config";
import axios from "@/utils/request.js";

export const register = (param) => axios.post(config.register, param)
export const getCode = () => axios.get(config.getCode)
export const login = (param) => axios.post(config.login, param)

export const getUserInfo = (param) => axios.get(config.getUserInfo, param)