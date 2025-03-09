# Verso ESG Hub - Topic Tasks E2E Tests with Playwright

This repository contains end-to-end tests for the **Topic Tasks** flow in the **Verso ESG Hub** application, using **Playwright** and **TypeScript**.

## Prerequisites
- **Node.js** >= 14
- **npm** or **yarn**
- (Optional) If you use date-fns or other libraries, ensure they’re installed

## Installation

npm install
npx playwright install

## Running the Tests
npx playwright test

By default, tests will run in headless mode and use the browser projects defined in playwright.config.ts.
To run in headed mode or to target a specific browser, for example Chromium, you can do:
npx playwright test --headed --project=chromium

## Project Structure
- pages/ - Page Object classes (e.g., LoginPage, TopicsPage, etc.). These classes encapsulate locators and methods for interacting with each page or feature in the Verso ESG Hub.
- tests/ - Test files (e.g., topicTasks.spec.ts) that orchestrate the scenarios end-to-end.
- utils/ - Utility functions (e.g., random data generation, date formatters).
- BUGS.md - Optional file listing known issues or incomplete features.
- playwright.config.ts - Central Playwright configuration (browsers, timeouts, reporters, etc.).
- tsconfig.json - TypeScript configuration.
- README.md - This documentation.

## Topic Tasks Flow
The tests focus on these user flows:

1. Login – using the provided credentials (maintenance@verso.de / V3r50_r3cru171n6_M41n73n4nc3).
2. Navigate to Topics – verifying the "Test Topic" link is visible and opening it.
3. Open Side Drawer – pressing the arrow icon to reveal additional tabs and selecting "Tasks".
4. Create a New Task – filling out Title, Description, Assignees, and Deadline, then saving.
5. Verify on Dashboard – ensuring the newly created task is displayed under "My VERSO Tasks" or "Tasks created by me", then clicking on it to go back to the detail view.
6. (Optional) Edit/Delete – demonstrating the ability to modify or remove a task from the same side drawer.

## Notes & Best Practices
- Selectors: We primarily use locator() with CSS or text‐based patterns. Where elements are not unique, we combine text, class, or hierarchical selectors (e.g., 'button:has-text("Sign in")').
- Page Object Model (POM): Each page class (e.g., TasksPage.ts) contains the relevant selectors and actions for that page, keeping the test logic in topicTasks.spec.ts clean and easy to read.
- Random Data: We generate random titles and descriptions to avoid collisions and to ensure test coverage for multiple runs.
- Validation Example: We discovered a mismatch between the min length label and the actual min length required for the Title field (documented in BUGS.md).

## Author:
Vitaliia Palamarchuk
