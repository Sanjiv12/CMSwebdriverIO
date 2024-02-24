
class HelperPage {
    textfield = '//input[@name="username" or @id="username"]';

    get randomNum() {
        var randonNum = Math.random() * (max - min) + min
        var power = Math.pow(10, decimalPlaces)
        return Math.floor(random * power) / power
    }

    set valueinTextField (value) {
        const temp = textfield.replace('username', value);
        return $$(temp);
    }
}
module.exports = new HelperPage();