import { Page } from "@playwright/test"
import HomePage from "../Pages/HomePage";
import CommonHelpers from "../Helpers/Helpers";
import LandingPage from "../Pages/LandingPage";

class HomeSteps {

    readonly page: Page;
    private homePage: HomePage;
    private landingPage: LandingPage
    constructor(page:Page){
        this.page = page;
        this.homePage = new HomePage(page);
        this.landingPage = new LandingPage(page);
    }

    async verifySuccessRegistration(){
        await this.homePage.getSuccessMessage()
    }
    async verifyLoginSuccessful(fName: string, lName: string){
        await this.homePage.getSuccessMessageForLogin(fName,lName)
    }
    async clickOnAccountsOverView(){
        await this.homePage.clickOnaccountsOverViewLink()
    }
    async clickOnOpenAccountTab(){
        await this.homePage.clickOnOpenNewAccount()
        await this.page.waitForLoadState('networkidle');
    }
    async clickOnTransferFunds(){
        await this.homePage.clickOntransferFundsLink()
        await this.page.waitForLoadState('networkidle');
    }
    async clickOnRequestLoanButton(){
        await this.homePage.clickOnrequestLoanLink();
        await this.page.waitForLoadState('networkidle');
    }
    async clickOnLogoutButton(){
        await this.homePage.clickOnlogOutLink()
        await this.page.waitForLoadState('networkidle');
        await this.landingPage.getMessageForCustomeLogin()
    }
}
export default HomeSteps