import { test, expect } from '@playwright/test';
import CommonHelpers from '../Helpers/Helpers';
import HomeSteps from '../Steps/HomeSteps';
import AccountOverViewSteps from '../Steps/AccountOverViewSteps';
import OpenNewAccountSteps from '../Steps/OpenNewAccountSteps';
import TransferFundSteps from '../Steps/TransferFundSteps';
import RequestLoanSteps from '../Steps/RequestLoanSteps';
const { register} = require('../common modules/registrationModule');

let homeSteps : HomeSteps, accountOverViewSteps: AccountOverViewSteps, openAccountSteps:OpenNewAccountSteps;
let transferFundSteps : TransferFundSteps, requestLoanSteps: RequestLoanSteps;

test.describe.only('Full Scenario suite' , async()=>{
    let regData;
    test.beforeEach(async({page})=> {
        homeSteps = new HomeSteps(page);
        accountOverViewSteps = new AccountOverViewSteps(page);
        openAccountSteps = new OpenNewAccountSteps(page);
        transferFundSteps = new TransferFundSteps(page);
        requestLoanSteps = new RequestLoanSteps(page);
        await CommonHelpers.updateRegistrationData()
        await CommonHelpers.readRegistrationTestData("test data/registerationData.json").then(data => {
            regData = data['registrationData']
        })
        await page.goto('/')
    })
    test('Register and complete process with valid data',async({page})=> {
        //Registration
        await register(page,regData)
        //Account overview
        await homeSteps.clickOnAccountsOverView()
        await accountOverViewSteps.getAccountsNumber();
        //open new account
        await homeSteps.clickOnOpenAccountTab()
        await openAccountSteps.clickOnOpenAccountButton()
        //transfer funds
        await homeSteps.clickOnTransferFunds()
        await transferFundSteps.fillTransferFundFields()
        await transferFundSteps.clickOnTransferButton()
        //request Loan
        await homeSteps.clickOnRequestLoanButton() 
        await requestLoanSteps.fillLoanDetails();
        await requestLoanSteps.clickOnRequestLoanButton();
        //Logout
        await homeSteps.clickOnLogoutButton()
    })
})