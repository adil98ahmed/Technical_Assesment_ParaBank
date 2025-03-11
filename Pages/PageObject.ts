import { expect, Page } from "@playwright/test";

class PageObject{
    readonly  page:Page;
    constructor(page:Page){
        this.page = page;
    }

    async clickOn(xpath: string){
        await this.page.locator(xpath).click({timeout: 60000})
    }
    async sendText(xpath: string, text:string){
        await this.page.locator(xpath).clear({timeout:60000})
        await this.page.locator(xpath).fill(text,{timeout:60000})
    }
    async chooseFromDropDown(xpath:string, value:string){
        await this.page.selectOption(xpath,value,{timeout:60000});
    }

    async checkVisiblityOfElement(locator:string){
        await expect(this.page.locator(locator)).toBeVisible({timeout:60000})
    }
}
export default PageObject