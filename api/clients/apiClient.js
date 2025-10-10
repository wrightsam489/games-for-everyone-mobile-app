import axios from "axios";

export const createApiClient = (baseURL, customHeaders = {}) => {
  // 1. Create the base Axios instance
  const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
      ...customHeaders,
    },
  });

  const request = {
    get: (url, config) => apiClient.get(url, config),
    query: (url, data, config) => apiClient.post(url, data, config),
    post: (url, data, config) => apiClient.post(url, data, config),
    put: (url, data, config) => apiClient.put(url, data, config),
    del: (url, config) => apiClient.delete(url, config),
  };

  return request;
};
