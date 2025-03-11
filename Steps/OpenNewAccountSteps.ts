import { Page } from "@playwright/test"
import OpenAccountPage from "../Pages/OpenAccountPage";
import CommonHelpers from "../Helpers/Helpers";

class OpenNewAccountSteps{
    readonly page:Page;
    private openAccountPage : OpenAccountPage;
    constructor(page:Page){
        this.page = page;
        this.openAccountPage = new OpenAccountPage(page);
    }

    async clickOnOpenAccountButton(){
        await this.openAccountPage.clickOnOpenNewAccountButton();
        await this.openAccountPage.getSuccessMessage()
        await this.openAccountPage.getNewAccountNumber().then(async (data) => {
            await CommonHelpers.updateAccounts(data)
        })
    }
}
export default OpenNewAccountSteps