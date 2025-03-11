import { Page } from "@playwright/test";
import TransferFundPage from "../Pages/TransferFundPage";
import CommonHelpers from "../Helpers/Helpers";

class TransferFundSteps{
    readonly page:Page;
    private transferFundPage:TransferFundPage;
    constructor(page:Page){
        this.page = page;
        this.transferFundPage = new TransferFundPage(page);
    }

    async fillTransferFundFields(){
        await CommonHelpers.readUserInfo().then(async(data) =>{
            await this.transferFundPage.fillAmount("1000");
            await this.transferFundPage.selectFromAccount(data['loginInfo']['accounts'][0]);
            await this.transferFundPage.selectToAccount(data['loginInfo']['accounts'][1])
        });
        
    }

    async clickOnTransferButton(){
        await this.transferFundPage.clickOnTransferFundButton()
        await this.transferFundPage.getSuccessMessage();
    }
}
export default TransferFundSteps