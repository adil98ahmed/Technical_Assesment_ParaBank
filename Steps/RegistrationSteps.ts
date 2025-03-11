import { Page } from "@playwright/test";
import RegistrationPage from "../Pages/RegistrationPage";
import CommonHelpers from "../Helpers/Helpers";

class RegistrationSteps {
    readonly page: Page;
    private registerPage: RegistrationPage
    constructor(page:Page){
        this.page = page;
        this.registerPage = new RegistrationPage(page);
    }

    async fillingRegistrationData(fName:string, lName:string, address:string, city:string, state:string, zipCode:string, phone:string,
        ssn:string, username:string, password:string
    ){
        await this.registerPage.fillFirstName(fName);
        await this.registerPage.fillLastName(lName);
        await this.registerPage.fillAddress(address);
        await this.registerPage.fillCityt(city);
        await this.registerPage.fillState(state);
        await this.registerPage.fillZIPCode(zipCode);
        await this.registerPage.fillPhone(phone);
        await this.registerPage.fillSSN(ssn);
        await this.registerPage.fillUserName(username);
        await this.registerPage.fillPassword(password);
        await this.registerPage.fillConfirmPassword(password);
    }

    async clickOnRegisterButton(){
        await this.registerPage.clickOnRegisterButton()
    }

    async updateLoginCredentialsFile(){
       await CommonHelpers.updateLoginCredentialsData()
    }
}
export default RegistrationSteps