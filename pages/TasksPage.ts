import { Page, Locator, expect } from "@playwright/test";

export class TasksPage {
  readonly page: Page;
  readonly addButton: Locator;
  readonly newTaskPanelTitle: Locator;
  readonly titleInput: Locator;
  readonly descriptionInput: Locator;
  readonly assigneesInput: Locator;
  readonly dateCalendarButton: Locator;
  readonly saveButton: Locator;
  readonly autoCompleteList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addButton = page.locator('//mat-icon[contains(text(),"add")]');
    this.newTaskPanelTitle = page.locator(
      '//mat-panel-title[contains(text(),"New task")]'
    );
    this.titleInput = page.locator('//input[@formcontrolname="title"]');
    this.descriptionInput = page.locator(
      '//textarea[@formcontrolname="description"]'
    );
    this.assigneesInput = page.locator('//input[@placeholder="Assignees *"]');
    this.dateCalendarButton = page.locator('[aria-label="Open calendar"]');
    this.saveButton = page.locator('//mat-icon[contains(text(),"save")]');
    this.autoCompleteList = page.locator('//span[@class="mat-option-text"]');
  }

  async createNewTask(
    taskName: string,
    description: string,
    dateToPick: string
  ): Promise<void> {
    await this.addButton.click();

    await expect(this.newTaskPanelTitle).toBeVisible();
    await this.newTaskPanelTitle.click();

    await this.titleInput.fill(taskName);
    await this.descriptionInput.fill(description);

    await this.assigneesInput.click();
    await this.assigneesInput.press(" ");
    await this.autoCompleteList.waitFor({ state: "visible" });
    const options = await this.autoCompleteList.all();
    const randomAssignee = options[Math.floor(Math.random() * options.length)];
    await randomAssignee.click();

    await this.dateCalendarButton.click();
    await this.page.click(`//button[contains(@aria-label,"${dateToPick}")]`);

    await this.saveButton.click();
  }
}
