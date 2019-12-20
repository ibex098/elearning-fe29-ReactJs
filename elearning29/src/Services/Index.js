import axios from "axios";
import { settings } from "../Config/Setting";

//gọi lại hằng số hệ thống để sử dụng ở services
export const resConnector = axios.create({
  baseURL: settings.domain
});
