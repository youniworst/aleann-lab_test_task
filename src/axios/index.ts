import axios from "axios";
import { BASEURL } from "../utils/constants";

const $api = axios.create({
  baseURL: BASEURL,
});

export default $api;
