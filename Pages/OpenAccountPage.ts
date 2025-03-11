import { expect, Page } from "@playwright/test";
import PageObject from "./PageObject";

class OpenAccountPage extends PageObject{
    constructor(page:Page){
        super(page);
    } 
    private openNewAccountButton: string = '//input[@value="Open New Account"]'
    private successMessage : string = '//p[contains(text(),"Congratulations, your account is now open.")]'
    private newAccountNumber : string = '#newAccountId'
    
    async clickOnOpenNewAccountButton(){
        await this.clickOn(this.openNewAccountButton);
    }
    async getSuccessMessage(){
        await this.checkVisiblityOfElement(this.successMessage)
    }
    async getNewAccountNumber(){
        return await this.page.locator(this.newAccountNumber).textContent()
    }
}
export default OpenAccountPage