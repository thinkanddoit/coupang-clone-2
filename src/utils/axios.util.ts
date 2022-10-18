import axios from "axios";

class AxiosUtil {
  private instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
  });

  setDefaultHeader(AUTH_TOKEN: string) {
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
  }

  get(url: string) {
    return this.instance.get(url);
  }

  post(url: string, data: any) {
    return this.instance.post(url, data);
  }

  delete(url: string) {
    return this.instance.delete(url);
  }

  put(url: string, data: any) {
    return this.instance.put(url, data);
  }

  patch(url: string, data: any) {
    return this.instance.patch(url, data);
  }
}

export default new AxiosUtil();
