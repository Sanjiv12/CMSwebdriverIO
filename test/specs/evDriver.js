const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const DriverPage = require('../pageobjects/driver')
const evDriver = require('../resources/driverData.json')
const usercred = require('../resources/inputData.json')
const login = usercred.login.username;
const pass = usercred.login.password;
const fName = evDriver.driver.firstname;
const lName = evDriver.driver.lastname;
const phone = evDriver.driver.phone;
const latitude = evDriver.driver.latitude;
const longitude = evDriver.driver.longitude;
// const address = evDriver.driver.address;
describe('EV Driver', () => {
    before(async function() { 
        await LoginPage.open()
        await LoginPage.login(login, pass);
    })
    it('Add a Valid EV Driver', async () => {
        await DriverPage.evDriverMenu(fName, lName, phone, latitude, longitude);
    })
    // it('Add a Price Group', async () => {
    //     await PriceGroupPage.priceGroup(name, desc, kwh, fixedFee);
    // })
})