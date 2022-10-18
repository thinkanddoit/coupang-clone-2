import cookies from "js-cookie";
import { AxiosUtil } from "../utils";

class UserService {
  async me() {
    const accessToken = cookies.get("accessToken");
    if (!accessToken) {
      return;
    }
    AxiosUtil.setDefaultHeader(accessToken);

    const { data } = await AxiosUtil.get(
      process.env.NEXT_PUBLIC_API_HOST + "/users/me"
    );

    return data;
  }

  async read(id: number) {
    const { data } = await AxiosUtil.get(
      process.env.NEXT_PUBLIC_API_HOST + "/users/" + id
    );

    return data;
  }
}

export default new UserService();
