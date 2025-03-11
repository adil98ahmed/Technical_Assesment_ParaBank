import { Page } from "@playwright/test";
import PageObject from "./PageObject";

class RegistrationPage extends PageObject{
    constructor(page: Page){
        super(page)
    }
    private firstNameField: string = '#customer\\.firstName';
    private lastNameField: string = '#customer\\.lastName';
    private addressField: string = '#customer\\.address\\.street';
    private cityField: string = '#customer\\.address\\.city';
    private stateField: string = '#customer\\.address\\.state';
    private zipCodeField: string = '#customer\\.address\\.zipCode';
    private phoneField: string = '#customer\\.phoneNumber';
    private ssnField: string = '#customer\\.ssn';
    private usernameField: string = '#customer\\.username';
    private passwordField: string = '#customer\\.password';
    private confirmPasswordField: string = '#repeatedPassword';
    private registerButton: string = '//input[@value="Register"]';

    async fillFirstName(firstName: string){
        await this.sendText(this.firstNameField,firstName)
    }
    
    async fillLastName(lastname:string){
        await this.sendText(this.lastNameField,lastname)
    }
    
    async fillAddress(address:string){
        await this.sendText(this.addressField,address)
    }
    
    async fillCityt(city:string){
        await this.sendText(this.cityField,city)
    }
    
    async fillState(state: string){
        await this.sendText(this.stateField,state)
    }
    
    async fillZIPCode(zipCode: string){
        await this.sendText(this.zipCodeField,zipCode)
    }
    
    async fillPhone(phoneNumber:string){
        await this.sendText(this.phoneField,phoneNumber)
    }
    
    async fillSSN(SSN:string){
        await this.sendText(this.ssnField,SSN)
    }
    async fillUserName(username:string){
        await this.sendText(this.usernameField,username)
    }
    async fillPassword(password:string){
        await this.sendText(this.passwordField,password)
    }
    async fillConfirmPassword(confirmPasswordField){
        await this.sendText(this.confirmPasswordField,confirmPasswordField)
    }
    async clickOnRegisterButton(){
        await this.clickOn(this.registerButton);
    }
}

export default RegistrationPage