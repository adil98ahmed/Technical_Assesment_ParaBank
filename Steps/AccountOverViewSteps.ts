import { Page } from "@playwright/test"
import AccountOverViewPage from "../Pages/AccountOverViewPage";
import CommonHelpers from "../Helpers/Helpers";

class AccountOverViewSteps{
    private page: Page;
    private accountOverViewPage : AccountOverViewPage;
    constructor(page:Page){
        this.page=page;
        this.accountOverViewPage = new AccountOverViewPage(page);
    }

    async getAccountsNumber(){
        await this.accountOverViewPage.getAllAccounts().then(async (data) => {
            await CommonHelpers.updateAccounts(data)
        })
    }
}
export default AccountOverViewSteps