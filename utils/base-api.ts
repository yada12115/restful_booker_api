import { APIRequestContext } from "@playwright/test";
import { TokenManager } from "../utils/token-manager";

export class BaseApi {

  constructor(
    protected request: APIRequestContext,
    protected tokenManager: TokenManager
  ) {}

  protected async authHeaders() {
    const token = await this.tokenManager.getToken();
    return {
      Cookie: `token=${token}`
    };
  }
}