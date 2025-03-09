import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { TopicsPage } from "../pages/TopicsPage";
import { TasksPage } from "../pages/TasksPage";
import { randomTitle, randomDescription } from "../utils/randomData";
import { getTomorrowInGermanFormat } from "../utils/randomData";

test.describe("Topic Tasks flow", () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;
  let topicsPage: TopicsPage;
  let tasksPage: TasksPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    topicsPage = new TopicsPage(page);
    tasksPage = new TasksPage(page);

    await loginPage.goto();
    await loginPage.login(
      "maintenance@verso.de",
      "V3r50_r3cru171n6_M41n73n4nc3"
    );
  });

  test("should create a new task, verify it on dashboard, then open it again", async ({
    page,
  }) => {
    await topicsPage.goToTopics();
    await topicsPage.selectTestTopic();

    await topicsPage.openSideDrawerAndSelectTasksTab();

    const taskName = randomTitle();
    const taskDesc = randomDescription();
    const deadline = getTomorrowInGermanFormat();

    await tasksPage.createNewTask(taskName, taskDesc, deadline);

    await dashboardPage.navigateToDashboard();

    await dashboardPage.verifyTaskVisible(taskName);

    await dashboardPage.openTask(taskName);
    await topicsPage.openSideDrawerAndSelectTasksTab();
  });
});
