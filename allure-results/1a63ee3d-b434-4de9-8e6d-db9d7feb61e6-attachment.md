# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\user.spec.ts >> User Microservice API Suite >> should create a new user successfully
- Location: tests\api\user.spec.ts:5:7

# Error details

```
TypeError: this.request.post is not a function
```

# Test source

```ts
  1  | import { APIRequestContext } from '@playwright/test';
  2  | 
  3  | export class BaseApiClient {
  4  |   readonly request: APIRequestContext;
  5  | 
  6  |   constructor(request: APIRequestContext) {
  7  |     this.request = request;
  8  |   }
  9  | 
  10 |   protected async post(url: string, data: any, headers?: Record<string, string>) {
  11 |     // Playwright's native APIRequestContext.post() will now be available
> 12 |     return await this.request.post(url, { data, headers });
     |                               ^ TypeError: this.request.post is not a function
  13 |   }
  14 | }
```