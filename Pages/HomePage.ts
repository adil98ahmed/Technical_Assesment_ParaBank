import { expect, Page } from "@playwright/test";
import PageObject from "./PageObject";

class HomePage extends PageObject{
    constructor(page: Page){
        super(page)
    }

    private successRegistrationMessage: string = '//p[contains(text(),"Your account was created successfully. You are now logged in.")]'
    private loginSuccessMessage: string = '//div[@id = "leftPanel"]//p'
    private  openNewAccountLink: string = '//a[@href="openaccount.htm"]';
    private  accountsOverViewLink: string = '//a[@href="overview.htm"]';
    private  transferFundsLink: string = '//a[@href="transfer.htm"]';
    private  billPayLink: string = '//a[@href="billpay.htm"]';
    private  updateContactInfoLink: string = '//a[@href="updateprofile.htm"]';
    private  requestLoanLink: string = '//a[@href="requestloan.htm"]';
    private  logOutLink: string = '//a[@href="logout.htm"]';
    async getSuccessMessage(){
        await this.checkVisiblityOfElement(this.successRegistrationMessage)
    }

    async getSuccessMessageForLogin(fName:string, lName:string){
        await expect(this.page.locator(this.loginSuccessMessage)).toHaveText("Welcome "+fName+" "+lName)
    }
    async clickOnOpenNewAccount(){
        await this.clickOn(this.openNewAccountLink);
    }
    async clickOntransferFundsLink(){
        await this.clickOn(this.transferFundsLink);
    }
    async clickOnbillPayLink(){
        await this.clickOn(this.billPayLink);
    }
    async clickOnupdateContactInfoLink(){
        await this.clickOn(this.updateContactInfoLink);
    }
    async clickOnrequestLoanLink(){
        await this.clickOn(this.requestLoanLink);
    }
    async clickOnlogOutLink(){
        await this.clickOn(this.logOutLink);
    }
    async clickOnaccountsOverViewLink(){
        await this.clickOn(this.accountsOverViewLink);
    }
    

}
export default HomePage