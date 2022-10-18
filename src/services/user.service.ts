import { AxiosUtil, TokenUtil } from "../utils";

class UserService {
  async me() {
    const accessToken = TokenUtil.get("access");
    if (!accessToken) {
      return;
    }
    AxiosUtil.setDefaultHeader(accessToken);

    const { data } = await AxiosUtil.get("/users/me");

    return data;
  }

  async read(id: number) {
    const { data } = await AxiosUtil.get("/users/" + id);

    return data;
  }
}

export default new UserService();
