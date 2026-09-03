import { APIRequestContext, APIResponse } from '@playwright/test';

export class UserApi {
  private apiBaseUrl: string;

  constructor(private request: APIRequestContext) {
    // Explicitly target the API_URL defined in .env
    this.apiBaseUrl = process.env.API_URL || '';
  }

  async createUser(data: { name: string; job?: string }): Promise<APIResponse> {
    return await this.request.post(`${this.apiBaseUrl}/api/users`, {
      data,
    });
  }

  async getUserById(userId: number): Promise<APIResponse> {
    return await this.request.get(`${this.apiBaseUrl}/api/users/${userId}`);
  }
}