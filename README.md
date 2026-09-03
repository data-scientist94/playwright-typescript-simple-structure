
# Playwright TypeScript

This project is a boilerplate setup for using Playwright with TypeScript. It includes a simple example of a login test to demonstrate how to structure tests, manage environment variables, and handle page interactions and simple API calls using reflection.
## Roadmap

Project Structure


playwright-framework/

├── pages/
│   ├── LoginPage.ts          # Page Object Model for the login page
├── fixtures/
│   ├── fixtures.ts           # Custom fixtures for the tests
├── tests/
│   ├── login.spec.ts         # Test suite for the login functionality
├── global.d.ts               # Type definitions for global variables
├── playwright.config.ts      # Configuration for Playwright
├── .gitignore                # Git ignore file
├── .env                      # Environment variables file
└── package.json              # Project dependencies and

✨ Key Features & Implementation Highlights
1. Robust Configuration (playwright.config.ts)
Configured with custom global baseURL bindings.

 automatic retries (CI vs Local), and captures traces, screenshots, and videos strictly on failure.

2. Page Object Model (POM) Pattern
Clean separation of concerns between test specs and page/service behaviors.

Contains UI page wrappers (e.g., LoginPage.ts) and API service clients (e.g., UsersClient.ts).

3. Custom Playwright Fixtures
Eliminates boilerplate instantiation code (new LoginPage(), new UserApi()).

Automatically injects page objects and API clients directly into test functions via custom fixtures (appFixtures.ts).

4. Dynamic Multi-Environment Setup (.env + dotenv)
Centralized environment helper (utils/env.ts) reads from .env.

Easily switch targets between QA, UAT, or Production by modifying environment variables or passing separate .env files.

5. Allure Reporting Integration
Fully wired with allure-playwright to generate comprehensive, visual test execution logs and reports locally.

6. TypeScript Reflection Utility
Implements a custom reflection helper (ReflectionUtils) using native JavaScript/TypeScript Reflect metadata.

Dynamically maps raw API JSON payloads directly into strongly-typed DTO class instances (UserDto) for runtime validation.

7. Comprehensive API & UI Test Scripts
Data-driven and batch execution tests (e.g., creating and validating 10 distinct users dynamically in a single test flow).

## Installation

This includes installing Node.js, Playwright, TypeScript, and any necessary dependencies.

1. Node.js and npm
Ensure you have Node.js and npm (Node Package Manager) installed. You can download and install them from the official Node.js website.

Verification Commands:

Run
node -v
npm -v
2. Create a New Project Directory
Navigate to your preferred directory and create a new project folder.

Run
mkdir playwright-project
cd playwright-project
3. Initialize a New Node.js Project
Initialize a new Node.js project by running:

Run
npm init -y
This will create a package.json file with default settings.

4. Install Playwright
Playwright is a powerful end-to-end testing framework for modern web apps. Install it using npm:

5. Install TypeScript
TypeScript is a superset of JavaScript that adds static types and other features. Install it using npm:

Run
npm install typescript --save-dev
6. Install TypeScript Definitions for Playwright
Install the TypeScript definitions for Playwright to provide type support in your TypeScript files:

Run
npm install @types/node --save-dev
npm install @types/playwright --save-dev
7. Install Additional Dependencies (Optional)
Depending on your project requirements, you might need additional dependencies. For example, if you're using environment variables, you can install dotenv:

Run
npm install dotenv --save-dev
Run
npm install playwright

```bash
    npm install playwright
    npm install typescript --save-dev
    npm install @types/node --save-dev
    npm install @types/playwright --save-dev
    npm install dotenv --save-dev
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd PlaywrightTypeScriptBasicProject
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npx playwright test
```


## Authors

- Krishna Chauhan

