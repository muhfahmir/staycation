import axios from "axios";

import errorResponseHandler from "./errorResponseHandler";

// instance pertama untuk url
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1`,
});

// error handler
instance.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export default instance;
