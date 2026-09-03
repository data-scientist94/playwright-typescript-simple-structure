import { APIRequestContext } from '@playwright/test';

export class BaseApiClient {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  protected async post(url: string, data: any, headers?: Record<string, string>) {
    // Playwright's native APIRequestContext.post() will now be available
    return await this.request.post(url, { data, headers: {
      'Content-Type': 'application/json'
    }, });
  }
}