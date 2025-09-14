import {test,expect} from "@playwright/test";
import Login from "../pages/loginPage.spec";
const loginPageLocators = require('../../locators/loginPageLocators.json');

const data = require('../tests/testdata/data.json');


test("test scenario of login",({page})=>{


Login.login(data.username,data.password);

})