import axios from "axios";
import store from "../store";

import { setBaseUrlToken } from "../utils";

const requestFactory = (store) => (url, configuration) => {
  const token = store && store.getState().auth.token;
  axios.defaults.baseURL = setBaseUrlToken(token);

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  };

  return {
    get: () => axios.get(url, { ...headers, ...configuration }),
  };
};

export default {
  request: requestFactory(store),
};
