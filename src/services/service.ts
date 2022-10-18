import { AxiosUtil, TokenUtil } from "../utils";
import { TokenType } from "../utils/token.util";

class Service {
  setAxiosDefaultHeader(type: TokenType) {
    const token = TokenUtil.get(type);
    if (!token) {
      return;
    }

    AxiosUtil.setDefaultHeader(token);
  }
}
export default Service;
