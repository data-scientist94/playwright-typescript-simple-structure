//import { test, expect } from '@playwright/test';
import { test, expect } from "../fixtures/fixtures.ts";

test.describe("Login Page Tests", () => {
  test("should login successfully", async ({ page, loginPage }) => {
    await loginPage.navigateTo();
    
    await loginPage.login(process.env.TEST_USERNAME!, 
      process.env.TEST_PASSWORD!);
    
    await loginPage.clickOnLogoutButton();

    // Add assertions to verify successful login
    await expect(page).toHaveTitle(/Practice Test Automation/);
    // or 
    await loginPage.expectTitle();
  });
});


