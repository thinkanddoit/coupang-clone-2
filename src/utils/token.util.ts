import cookies from "js-cookie";

type Type = "access" | "refresh";

class TokenUtil {
  get(type: Type) {
    return cookies.get(`${type}Token`);
  }

  set(type: Type, token: string, expires: number) {
    cookies.set(`${type}Token`, token, { expires: expires });
  }

  has(type: Type) {
    return !!cookies.get(`${type}Token`);
  }

  removeAll() {
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
  }
}

export default new TokenUtil();
