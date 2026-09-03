import { Page, Locator, expect } from "@playwright/test";

export default class LoginPage {
  readonly page: Page;
  
  // 1. Declare locators as class properties
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // 2. Initialize them in the constructor
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Submit' });
    this.logoutButton = page.getByRole('link', { name: 'Log out' });
  }

  // 3. Keep actions clean and focused on behavior
  async navigateTo() {
    await this.page.goto('/practice-test-login/');
  }

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async clickOnLogoutButton() {
    await this.logoutButton.click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async expectTitle() {
    await expect(this.page).toHaveTitle(/Practice Test Automation/);
  }
}