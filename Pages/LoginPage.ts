import { Page } from "@playwright/test";
import PageObject from "./PageObject";

class LoginPage extends PageObject{
    constructor(page: Page){
        super(page)
    }
    private usernameField: string = '//input[@name = "username"]';
    private passwordField: string = '//input[@name="password"]';
    private loginButton: string = '//input[@value="Log In"]';

    async fillUserName(userName:string){
        await this.sendText(this.usernameField,userName)
    }
    async fillPassword(password:string){
        await this.sendText(this.passwordField,password)
    }
    async clickOnLoginButton(){
        await this.clickOn(this.loginButton);
    }
}
export default  LoginPage