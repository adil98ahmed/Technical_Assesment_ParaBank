import { expect, Page } from "@playwright/test";
import PageObject from "./PageObject";

class LandingPage extends PageObject{
    constructor(page: Page){
        super(page)
    }

    private registerLink: string = '//a[@href="register.htm"]'
    private messageForCustomeLogin: string = '//h2[contains(text(),"Customer Login")]'
    async clickOnRegisterButton(){
        await this.clickOn(this.registerLink)
    }

    async getMessageForCustomeLogin(){
        await this.checkVisiblityOfElement(this.messageForCustomeLogin)
    }

}
export default LandingPage