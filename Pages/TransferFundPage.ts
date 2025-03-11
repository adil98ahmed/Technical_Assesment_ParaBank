import { expect, Page } from "@playwright/test";
import PageObject from "./PageObject";

class TransferFundPage extends PageObject{
    constructor(page:Page){
        super(page);
    }
    private amountField: string = '#amount';
    private selectFromDropDown: string = '#fromAccountId';
    private selectToDropDown: string = '#toAccountId';
    private transferFundButton: string = '//input[@value="Transfer"]';
    private successMessageForTransferFund: string = '//h1[contains(text(),"Transfer Complete!")]';

    async selectToAccount(value:string){
        await this.chooseFromDropDown(this.selectToDropDown,value);
    }
    async selectFromAccount(value:string){
        await this.chooseFromDropDown(this.selectFromDropDown,value);
    }
    async fillAmount(amount: string){
        await this.sendText(this.amountField,amount)
    }
    async clickOnTransferFundButton(){
        await this.clickOn(this.transferFundButton);
    }
    async getSuccessMessage(){
        await this.checkVisiblityOfElement(this.successMessageForTransferFund);
    }
}
export default TransferFundPage