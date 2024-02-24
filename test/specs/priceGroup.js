const LoginPage = require('../pageobjects/login.page')
const usercred = require('../resources/inputData.json')
const PriceGroupPage = require('../pageobjects/price.group')
const priceGroup = require('../resources/priceGroupData.json')
const login = usercred.login.username;
const pass = usercred.login.password;
const name = priceGroup.priceGroup.name;
const desc = priceGroup.priceGroup.desc;
const kwh = priceGroup.priceGroup.kwh;
const fixedFee = priceGroup.priceGroup.fixedFee;
const fixedFeeCharging = priceGroup.priceGroup.fixedFeeCharging;
const toastMsg = 'PriceGroup is linked to a charger and hence cannot be delete. Please delink the price group and try again.';

describe('Price Group', () => {
    before(async function() { 
        await LoginPage.open()
        await LoginPage.login(login, pass);
    })
    it('Add a Price Group SP1_P1', async () => {
        await PriceGroupPage.add_Price_Group(name, desc, kwh, fixedFee, fixedFeeCharging);
    })
})
describe('Price Group', () => {
    before(async function() { 
        await LoginPage.open()
        await LoginPage.login(login, pass);
    })
    it('Delete a Price Group SP1_P1', async()=> {
        await PriceGroupPage.priceGroup.click();
        await PriceGroupPage.delete_Price_Group(name, toastMsg);
    })
})