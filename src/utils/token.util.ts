import cookies from "js-cookie";

export type TokenType = "access" | "refresh";

class TokenUtil {
  get(type: TokenType) {
    return cookies.get(`${type}Token`);
  }

  set(type: TokenType, token: string, expires: number) {
    cookies.set(`${type}Token`, token, { expires: expires });
  }

  has(type: TokenType) {
    return !!cookies.get(`${type}Token`);
  }

  removeAll() {
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
  }
}

export default new TokenUtil();
