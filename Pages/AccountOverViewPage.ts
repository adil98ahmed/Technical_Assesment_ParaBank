import { Page } from "@playwright/test";
import PageObject from "./PageObject";

class AccountOverViewPage extends PageObject{
    constructor(page:Page){
        super(page);
    }

    private accountNumbers:string = '//table[@id="accountTable"]//tbody//tr//td[1]//a';

    async getAllAccounts(){
        return await this.page.locator(this.accountNumbers).textContent()
    }
}
export default AccountOverViewPage