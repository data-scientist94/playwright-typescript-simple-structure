# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\user.spec.ts >> User Microservice API Suite >> should create a new user successfully
- Location: tests\api\user.spec.ts:6:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 404
```

# Test source

```ts
  1  | import { BaseApiClient } from './BaseApiClient';
  2  | import { expect } from '@playwright/test';
  3  | import { defineConfig } from '@playwright/test';
  4  | 
  5  | export default defineConfig({
  6  |   use: {
  7  |     baseURL: 'https://reqres.in/api',
  8  |     extraHTTPHeaders: {
  9  |       'Accept': 'application/json',
  10 |       'Content-Type': 'application/json',
  11 |     },
  12 |   },
  13 | });
  14 | export class UserApi extends BaseApiClient {
  15 |   async createUser(userData: { name: string; job: string }) {
  16 |     const response = await this.post('/users', userData);
> 17 |     expect(response.status()).toBe(201);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  18 |     return await response.json();
  19 |   }
  20 | 
  21 |   async getUser(userId: string) {
  22 |     const response = await this.get(`/users/${userId}`);
  23 |     expect(response.status()).toBe(200);
  24 |     return await response.json();
  25 |   }
  26 | }
```