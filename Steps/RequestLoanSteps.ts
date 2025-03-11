import { Page } from "@playwright/test";
import RequestLoanPage from "../Pages/RequestLoanPage";
import CommonHelpers from "../Helpers/Helpers";

class RequestLoanSteps{
    readonly page:Page;
    private requestLoanPage : RequestLoanPage;
    constructor(page:Page){
        this.requestLoanPage = new RequestLoanPage(page);
    }

    async fillLoanDetails (){
        await CommonHelpers.readUserInfo().then(async(data) =>{
            await this.requestLoanPage.fillLoanAmount("100");
            await this.requestLoanPage.fillDownPay("10");
            await this.requestLoanPage.selectFromAccount(data['loginInfo']['accounts'][1])
        }); 
    }
    async clickOnRequestLoanButton(){
        await this.requestLoanPage.clickOnApplyNow()
        await this.requestLoanPage.getSuccessMMessage()
    }

}
export default RequestLoanSteps;