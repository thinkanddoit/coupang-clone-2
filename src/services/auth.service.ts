import { AxiosUtil, TokenUtil } from "../utils";

type SignupAgreements = {
  /** 만 14세 이상입니다 */
  terms_fourteen: boolean;
  /** 쿠팡 이용약관 동의 */
  terms_service: boolean;
  /** 전자금융거래 이용약관 동의 */
  terms_commerce: boolean;
  /** 개인정보 수집 및 이용 동의 */
  terms_privacy_collect_use: boolean;
  /** 개인정보 제3차 제공 동의 */
  agree_to_collect_third_part_information: boolean;
  /** 광고성 목적의 개인정보 수집 및 이용 동의 */
  agree_to_collect_for_ads: boolean;
  /** 이메일 수신 동의 */
  agree_to_receive_email: boolean;
  /** SMS,MMS 수신 동의 */
  agree_to_receive_sms: boolean;
  /** 앱 푸시 수신 동의 */
  agree_to_receive_push: boolean;
};

class AuthService {
  /** accessToken 1일, refreshToken 7일로 설정하는 공통 로직, 함수화 */
  private setAllToken(data: any) {
    TokenUtil.set("access", data.access, 1);
    TokenUtil.set("refresh", data.refresh, 7);
  }

  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = TokenUtil.get("refresh");
    if (!refreshToken) {
      return;
    }
    AxiosUtil.setDefaultHeader(refreshToken);
    const { data } = await AxiosUtil.post(
      process.env.NEXT_PUBLIC_API_HOST + "/auth/refresh",
      null
    );

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
    const { data } = await AxiosUtil.post(
      process.env.NEXT_PUBLIC_API_HOST + "/auth/signup",
      { email, password, name, phoneNumber, agreements }
    );

    this.setAllToken(data);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const { data } = await AxiosUtil.post(
      process.env.NEXT_PUBLIC_API_HOST + "/auth/login",
      { email, password }
    );

    this.setAllToken(data);
  }
}

export default new AuthService();
