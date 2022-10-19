import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST;

class AxiosUtil {
  setDefaultHeader(AUTH_TOKEN: string) {
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
  }

  get(url: string) {
    return axios.get(url);
  }

  post(url: string, data: any) {
    return axios.post(url, data);
  }

  delete(url: string) {
    return axios.delete(url);
  }

  put(url: string, data: any) {
    return axios.put(url, data);
  }

  patch(url: string, data: any) {
    return axios.patch(url, data);
  }
}

export default new AxiosUtil();
