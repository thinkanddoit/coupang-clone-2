import { AxiosUtil, TokenUtil } from "../utils";
import Service from "./service";

type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

class AuthService extends Service {
  /** accessToken 1일, refreshToken 7일로 설정하는 공통 로직, 함수화 */
  private setAllToken(data: any) {
    TokenUtil.set("access", data.access, 1);
    TokenUtil.set("refresh", data.refresh, 7);
  }

  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    super.setAxiosDefaultHeader("refresh");
    const { data } = await AxiosUtil.post("/auth/refresh", null);

    this.setAllToken(data);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const { data } = await AxiosUtil.post("/auth/signup", {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    });

    this.setAllToken(data);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const { data } = await AxiosUtil.post("/auth/login", { email, password });

    this.setAllToken(data);
  }
}

export default new AuthService();
