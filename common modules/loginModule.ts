import { Page } from "@playwright/test";
import LoginSteps from "../Steps/LoginSteps";
import HomeSteps from "../Steps/HomeSteps";

async function login(page:Page, loginData) {
    let loginSteps : LoginSteps = new LoginSteps(page);
        let homeSteps : HomeSteps = new HomeSteps(page)
        await loginSteps.fillCredentials(
            loginData['username'],loginData['password']
        )
        await loginSteps.clickOnLoginButton()
        await homeSteps.verifyLoginSuccessful(loginData['firstName'],loginData['lastName']);
}


module.exports = {
    login
}