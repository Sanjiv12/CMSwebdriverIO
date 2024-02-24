const { $ } = require('@wdio/globals')
const Page = require('./page');
const helper = require('../utility/helper');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DriverPage {
    get evDriver() {
        return $('//div[contains(@class, "MuiListItemText-root")][text()="EV Drivers"]');
    }
    get addEVDriver() {
        return $('//a[contains(@class,"MuiButton-sizeMedium")]');
    }
    get driverFirstName() {
        return $('//input[@name="firstName"]');
    }
    get driverLastName() {
        return $('//input[@name="lastName"]');
    }
    get driverphone() {
        return $('//input[@name="phone"]');
    }
    get addressTab() {
        return $('//button[contains(@id,"address")]');
    }
    // get searchPlace() {
    //     return $('//input[@id="places"]');
    // }
    get locationLatitude() {
        return $('//input[@name="locationLatitude"]');
    }
    get locationLongitude() {
        return $('//input[@name="locationLongitude"]');
    }
    
    get driverSearch () {
        return $('input[type="search"]');
    }

    get btnSave() {
        return $('button[type="submits"]');
    }
    getPhone(){
        return helper.randomNum();
        
    }
    // get phone() {
    //     return helper.randomNum();
    //  }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async evDriverMenu(fName, lName, phone, latitude, longitude) {
        await this.evDriver.click();
        await this.addEVDriver.click();
        await this.driverFirstName.setValue(fName);
        await this.driverLastName.setValue(lName);
        await this.driverphone.setValue(phone);
        await this.addressTab.click();
        // await this.searchPlace.setValue(address);
        await this.locationLatitude.setValue(latitude);
        await this.locationLongitude.setValue(longitude);
        await this.btnSave.click();
        await this.driverSearch.setValue(fName);
    }

    
    /**
     * overwrite specific options to adapt it to page object
     */
    // open () {
    //     return super.open('login');
    // }
}

module.exports = new DriverPage();
