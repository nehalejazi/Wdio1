import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import allureReporter from '@wdio/allure-reporter';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        allureReporter.addFeature('Yususf Feature Category');
        allureReporter.addSeverity('Critical');
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a not secure area!');
    });
    it('Lauch and screenshot', async () => {
        allureReporter.addFeature('Yususf Feature Category');
        allureReporter.addSeverity('normal');
        await LoginPage.open();

        //await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        //await expect(SecurePage.flashAlert).toBeExisting();
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
          //  'You logged into a secure area!');
    });
});


