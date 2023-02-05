import axios from "axios";
// import { BASE_URL } from '../utils/constants';

const BASE_URL = "http://localhost:4000/api";
export const METHODS = {
  GET: "get",
  DELETE: "delete",
  HEAD: "head",
  OPTIONS: "options",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
};
const axiosConfig = {
  baseURL: BASE_URL,
};
function createAxiosInstance() {
  return axios.create(axiosConfig);
}
const request = createAxiosInstance();
const cache = {};

const client = ({
  method = METHODS.POST,
  url = BASE_URL,
  data,
  useCache = false,
  invalidateQuery = false,
  ...rest
}) =>
  useCache && !invalidateQuery && cache[url]
    ? Promise.resolve(cache[url])
    : request({
        method,
        url,
        data,
        //   paramsSerializer,
        ...rest,
      });

export const clientWithHeaders = ({
  method = METHODS.POST,
  url = BASE_URL,
  data,
  useCache = false,
  invalidateQuery = false,
  ...rest
}) =>
  request({
    method,
    url,
    data,
    // paramsSerializer,
    ...rest,
  }).then((res) => {
    return res;
  });

request.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const originalRequest = err.config;
    const status = err.response?.status;
    if (status === 503) {
      const error = {
        originalRequest,
        status,
        message:
          "This service is unavailable right now, please try again later",
      };
      throw error;
    }
    if (status === 500) {
      const error = {
        originalRequest,
        status,
        message: "An unexpected error occurred, please try again later",
      };
      throw error;
    }
    if (status === 404) {
      const error = {
        originalRequest,
        status,
        message: "The requested content does not exist, please try again later",
      };
      throw error;
    }

    const response = err.response?.data;
    const message = response ? response.message : err.message;

    const error = { originalRequest, message, status };
    throw error;
  }
);

export default client;
