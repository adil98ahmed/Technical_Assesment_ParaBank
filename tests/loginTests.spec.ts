import { test, expect } from '@playwright/test';
import CommonHelpers from '../Helpers/Helpers';
const { login} = require('../common modules/loginModule');

test.describe('Login suite' , async()=>{
    let loginData;
    test.beforeEach(async({page})=> {
        await CommonHelpers.updateRegistrationData()
        await CommonHelpers.readRegistrationTestData("test data/userInfo.json").then(data => {
            loginData = data['loginInfo']
        })
        await page.goto('/')
    })
    test('Login  with valid data',async({page})=> {
        await login(page,loginData)
    })
})