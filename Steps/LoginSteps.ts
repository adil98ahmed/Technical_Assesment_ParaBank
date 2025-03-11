import { Page } from "@playwright/test"
import LoginPage from "../Pages/LoginPage";
import LandingPage from "../Pages/LandingPage";

class LoginSteps{
    readonly page: Page
    private loginPage : LoginPage;
    private landingPage : LandingPage;
    constructor(page:Page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.landingPage = new LandingPage(page)
    }

    async fillCredentials(username: string, password: string){
        await this.loginPage.fillUserName(username);
        await this.loginPage.fillPassword(password)
    }

    async clickOnLoginButton(){
        await this.loginPage.clickOnLoginButton()
    }

    



}
export default LoginSteps