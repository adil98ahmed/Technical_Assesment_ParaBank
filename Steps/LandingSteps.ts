import { Page } from "@playwright/test";
import LandingPage from "../Pages/LandingPage";

class LandingSteps {
    readonly page: Page;
    private landingPage : LandingPage;
        constructor(page:Page){
            this.page = page;
            this.landingPage = new LandingPage(this.page)
        }
    
    async clickOnRegister(){
        await this.landingPage.clickOnRegisterButton()
    }
}

export default LandingSteps