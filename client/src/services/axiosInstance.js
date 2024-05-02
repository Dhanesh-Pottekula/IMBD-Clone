import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true
});

axiosInstance.interceptors.request.use(
    function (config) {
        
      const cookies = document.cookie.split('; ').reduce((prev, current) => {
        const [name, value] = current.split('=');
        prev[name] = value;
        return prev;
    }, {});
    // Assuming your cookie is named 'auth_token'
    const token = cookies['token'] || '';
    // Setting the token in the Authorization header
    config.headers.Authorization = token ? token : null;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      alert("You are not authorized");
    }
    return response;
  },
  (error) => {
    if (error?.response && error.response?.status === 401) {
      
      window.location.href='/login';
      return Promise.reject(error.response && error.response.data);
    }

    if (error?.code === "ECONNABORTED") {
      return Promise.reject("Request timeout exceeded");
    }
    if (error?.response && error.response?.data) {
      return Promise.reject(error.response && error.response.data);
    }
    return Promise.reject(error.response.data);
  }
);
export default axiosInstance;
