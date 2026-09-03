import { test as base } from '@playwright/test';
import { UserApi } from '@api/UserApi'; 

type MyFixtures = {
  userApi: UserApi;
};

export const test = base.extend<MyFixtures>({
  userApi: async ({ request }, use) => {
    const userApiInstance = new UserApi(request);
    await use(userApiInstance);
  },
});

export { expect } from '@playwright/test';