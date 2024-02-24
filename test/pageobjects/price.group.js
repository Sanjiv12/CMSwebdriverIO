const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PriceGroupPage {
    get priceGroup() {
        return $('//div[contains(@class, "MuiListItemText-root")][text()="Price Group"]');
    }
    get addPriceGroup() {
        return $('//a[contains(@class,"MuiButton-sizeMedium")]');
    }
    get priceName() {
        return $('//input[@name="name"]');
    }
    get priceDescription() {
        return $('//textarea[@name="description"]');
    }
    get priceperKWh() {
        return $('//input[@name="priceDetails[0].priceperKW"]');
    }
    get addressTab() {
        return $('//button[contains(@id,"address")]');
    }
    get fixedFeeStarting() {
        return $('//input[@name="priceDetails[0].fixedFeeStarting"]');
    }
    get fixedFeeCharging() {
        return $('//input[@name="priceDetails[0].fixedFeeCharging"]');
    }
    get locationLatitude() {
        return $('//input[@name="locationLatitude"]');
    }
    get locationLongitude() {
        return $('//input[@name="locationLongitude"]');
    }
    
    get search () {
        return $('input[type="search"]');
    }

    get btnSave() {
        return $('button[type="submit"]');
    }
    get ellipses(){
        return $('//div[contains(@class, "datatable__actions")]');
    }
    get delete() {
        return $('(//div//p[contains(@class, "MuiListItemText-primary")])[2]');
    }
    get toastMsg() {
        return $('//div[contains(@class, "MuiAlert-message")]');
    }

    async add_Price_Group(name, desc, kwh, fixedFee,fixedFeeCharging) {
        await this.priceGroup.click();
        await this.addPriceGroup.click();
        await this.priceName.setValue(name);
        await this.priceDescription.setValue(desc);
        await this.priceperKWh.setValue(kwh);
        await this.fixedFeeStarting.setValue(fixedFee);
        await this.fixedFeeCharging.setValue(fixedFeeCharging);
        await this.btnSave.click();
        await this.search.setValue(name);
    }
    async delete_Price_Group(name, expToastMsg){
        await this.search.setValue('TestPrice');
        await this.ellipses.click();
        await this.delete.click();
        return await this.toastMsg.getText().then((uiToastMsg)=> {
            expect(expToastMsg).toEqual(uiToastMsg);
        })
    }
}

module.exports = new PriceGroupPage();
