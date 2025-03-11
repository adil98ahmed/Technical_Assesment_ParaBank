import { Page } from "@playwright/test";
import LandingSteps from "../Steps/LandingSteps";
import RegistrationSteps from "../Steps/RegistrationSteps";
import HomeSteps from "../Steps/HomeSteps";

async function register(page:Page, regData) {
    let landingSteps: LandingSteps = new LandingSteps(page);
    let registrationSteps : RegistrationSteps = new RegistrationSteps(page);
    let homeSteps : HomeSteps = new HomeSteps(page)
    await landingSteps.clickOnRegister()
    await registrationSteps.fillingRegistrationData(
        regData['firstName'], regData['lastName'], regData['address'], regData['city'],regData['state'], regData['zipCode'],
        regData['phone'], regData['ssn'], regData['username'],regData['password']
    )
    await registrationSteps.clickOnRegisterButton()
    await homeSteps.verifySuccessRegistration();
    await registrationSteps.updateLoginCredentialsFile()
}
module.exports = {
    register
}