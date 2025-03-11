import { expect, Page } from "@playwright/test";
import PageObject from "./PageObject";

class RequestLoanPage extends PageObject{
    constructor(page:Page){
        super(page);
    }
    private amountField : string = '#amount'
    private downPaymentField : string = '#downPayment'
    private fromAccoundDropDown : string = '#fromAccountId'
    private applyNowButton : string = '//input[@value="Apply Now"]'
    private successMessage : string = '//p[contains(text(),"Congratulations, your loan has been approved.")]'


    async selectFromAccount(value:string){
        await this.chooseFromDropDown(this.fromAccoundDropDown,value)
    }
    
    async fillDownPay(amount:string){
        await this.sendText(this.amountField,amount);
    }

    async fillLoanAmount(downPay:string){
        await this.sendText(this.downPaymentField,downPay)
    }

    async clickOnApplyNow(){
        await this.clickOn(this.applyNowButton)
    }

    async getSuccessMMessage(){
        await this.checkVisiblityOfElement(this.successMessage)
    }
}
export default RequestLoanPage