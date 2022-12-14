import { UserInfo } from "../types/userInfo";
import { AxiosUtil } from "../utils";
import Service from "./service";

class UserService extends Service {
  async me(): Promise<UserInfo> {
    super.setAxiosDefaultHeader("access");
    const { data } = await AxiosUtil.get("/users/me");

    return data;
  }

  async read(id: number) {
    const { data } = await AxiosUtil.get("/users/" + id);

    return data;
  }
}

export default new UserService();
