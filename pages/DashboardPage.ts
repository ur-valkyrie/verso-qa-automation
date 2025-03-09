import { Locator, Page, expect } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly dashboardIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardIcon = page.locator(
      '//mat-icon[contains(text(),"dashboard")]'
    );
  }

  public async navigateToDashboard() {
    await this.dashboardIcon.first().click();
  }

  public async verifyTaskVisible(taskName: string) {
    const taskLink = this.page.locator(`a:has-text("${taskName}")`);
    await this.page.waitForTimeout(5000);
    await expect(taskLink).toBeVisible();
  }

  public async openTask(taskName: string) {
    await this.page.click(`a:has-text("${taskName}")`);
  }
}
