import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;
  readonly welcomeBanner: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator("#mat-input-0");
    this.passwordField = page.locator("#mat-input-1");
    this.signInButton = page.locator('button:has-text("Sign in")');
    this.welcomeBanner = page.locator("text=Welcome back to VERSO");
  }

  public async goto() {
    await this.page.goto("/");
  }

  public async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.signInButton.click();
    await expect(this.welcomeBanner).toBeVisible();
  }
}
