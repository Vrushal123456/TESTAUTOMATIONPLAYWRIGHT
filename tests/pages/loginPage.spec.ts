import { Page } from '@playwright/test';
import loginLocators from './tests/Locators/loginPageLocators.json';


export default class Login {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.locator(loginLocators.username).fill(username);
    await this.page.locator(loginLocators.password).fill(password);
    await this.page.locator(loginLocators.loginButton).click();
  }
}
