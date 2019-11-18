class registrationFormPage {
    radioBtnMr() {
        return element(by.xpath('//*[@id="id_gender1"]'));
    }

    inputFieldFirstName() {
        return element(by.xpath('//*[@id="customer_firstname"]'));
    }

    inputFieldLastName() {
        return element(by.xpath('//*[@id="customer_lastname"]'));
    }

    inputFieldPassword() {
        return element(by.xpath('//*[@id="passwd"]'));
    }

    dropDownDay() {
        return element(by.xpath('//*[@id="days"]'));
    }

    dropDownMonth() {
        return element(by.xpath('//*[@id="months"]'));
    }
    
    dropDownYear() {
        return element(by.xpath('//*[@id="years"]'))
    }

    errorMessageReqFields() {
        return element(by.xpath('//*[@id="center_column"]/div/p'));
    }
    //Address
    inputFieldAddressFirstName() {
        return element(by.xpath('//*[@id="firstname"]'));
    }

    inputFieldAddressLastName() {
        return element(by.xpath('//*[@id="lastname"]'));
    }

    inputFieldAddressCompany() {
        return element(by.xpath('//*[@id="company"]'));
    }

    inputFieldAddress() {
        return element(by.xpath('//*[@id="address1"]'));
    }
    
    inputFieldAddressCity() {
        return element(by.xpath('//*[@id="city"]'));
    }

    dropDownSelectState() {
        return element(by.xpath('//*[@id="id_state"]'));
    }

    inputFieldAddressPostalCode() {
        return element(by.xpath('//*[@id="postcode"]'));
    }

    inputFieldAddressPhoneNumber() {
        return element(by.xpath('//*[@id="phone_mobile"]'));
    }

    btnRegister() {
        return element(by.xpath('//*[@id="submitAccount"]/span'));
    }
};

module.exports = registrationFormPage;