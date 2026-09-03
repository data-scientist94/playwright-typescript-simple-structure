# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\user.spec.ts >> User Microservice API Suite >> should create a new user successfully
- Location: tests\api\user.spec.ts:6:7

# Error details

```
ReferenceError: expect is not defined
```

# Test source

```ts
  1  | import { BaseApiClient } from './BaseApiClient';
  2  | 
  3  | export class UserApi extends BaseApiClient {
  4  |   async createUser(userData: { name: string; job: string }) {
  5  |     const response = await this.post('/users', userData);
> 6  |     expect(response.status()).toBe(201);
     |     ^ ReferenceError: expect is not defined
  7  |     return await response.json();
  8  |   }
  9  | 
  10 |   async getUser(userId: string) {
  11 |     const response = await this.get(`/users/${userId}`);
  12 |     expect(response.status()).toBe(200);
  13 |     return await response.json();
  14 |   }
  15 | }
```