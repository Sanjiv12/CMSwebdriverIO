const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const usercred = require('../resources/inputData.json')
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const login = usercred.login.username;
        const pass = usercred.login.password;
        await LoginPage.open()

        await LoginPage.login(login, pass)
       // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'Dashboard | Chargemiles-CMS')
    })
})

