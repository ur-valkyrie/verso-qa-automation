import { Locator, Page } from "@playwright/test";

export class TopicsPage {
  readonly page: Page;
  readonly topicsButton: Locator;
  readonly testTopicLink: Locator;
  readonly sideDrawerButton: Locator;
  readonly tasksTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topicsButton = page.locator('//span[contains(text(),"Topics")]');
    this.testTopicLink = page.locator('//a[contains(text(),"Test Topic")]');
    this.sideDrawerButton = page.locator(
      '//mat-icon[contains(text(),"keyboard_arrow_left")]'
    );
    this.tasksTab = page.locator('//div[contains(text(),"Tasks")]');
  }

  public async goToTopics() {
    await this.topicsButton.click();
    await this.page.waitForTimeout(1000);
  }

  public async selectTestTopic() {
    await this.testTopicLink.click();
  }

  public async openSideDrawerAndSelectTasksTab() {
    await this.sideDrawerButton.click();
    await this.tasksTab.waitFor();
    await this.tasksTab.click();
  }
}
