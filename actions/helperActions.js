class helperActions {
    
    async clickOnNonAngularEl(element) {
        let flow = protractor.promise.controlFlow();    
        await flow.execute(function(){
            browser.ignoreSynchronization = true;
            browser.sleep(2000);
            return element.click();
        });
        browser.ignoreSynchronization = false;
    }

    async sendKeysToNonAngularEl(element, keys) {
        let flow = protractor.promise.controlFlow();    
        await flow.execute(function(){
            browser.ignoreSynchronization = true;
            browser.sleep(2000);
            element.click();
            return element.sendKeys(`${keys}`);
        });
        browser.ignoreSynchronization = false;
    }

    async inputUserInformation(field = "NONE") {
        await browser.sleep(3000);
        await this.clickOnNonAngularEl(pages.registrationFormPage.radioBtnMr());
        if (field !== 'first name') {
            await this.sendKeysToNonAngularEl(pages.registrationFormPage.inputFieldFirstName(), 'Predrag');
        }
        if (field !== 'last name') {
            await this.sendKeysToNonAngularEl(pages.registrationFormPage.inputFieldLastName(), 'Simanic');
        }
        if (field !== 'password') {
            await this.sendKeysToNonAngularEl(pages.registrationFormPage.inputFieldPassword(), 'Pa$$w0rd');
        }
        await this.sendKeysToNonAngularEl(pages.registrationFormPage.dropDownDay(), '30');
        await this.sendKeysToNonAngularEl(pages.registrationFormPage.dropDownMonth(), 'October');
        await this.sendKeysToNonAngularEl(pages.registrationFormPage.dropDownYear(), '1992');
        return;
        
    }
    
    async inputAddressInformation(field = "NONE") {
        await this.sendKeysToNonAngularEl(pages.registrationFormPage.inputFieldAddressCompany(), 'Company');
        if (field !== 'address') {
            await this.sendKeysToNonAngularEl(pages.registrationFormPage.inputFieldAddress(), 'Adresa 1');
        }
        if (field !== 'city') {
            await this.sendKeysToNonAngularEl(pages.registrationFormPage.inputFieldAddressCity(), 'Sarajevo');
        }
        if (field !== 'state') {
            await this.sendKeysToNonAngularEl(pages.registrationFormPage.dropDownSelectState(), 'Kentucky');
        }
        if (field !== 'zip code') {
            await this.sendKeysToNonAngularEl(pages.registrationFormPage.inputFieldAddressPostalCode(), '71000');
        }
        if (field !== 'mobile phone') {
            await this.sendKeysToNonAngularEl(pages.registrationFormPage.inputFieldAddressPhoneNumber(), '033123456');
        }
    }

    async createUserAccount() {
        await this.inputUserInformation();
        await this.inputAddressInformation();
        await this.clickOnNonAngularEl(pages.registrationFormPage.btnRegister());
    }

    async inputUserAccountWithoutField(field = "NONE", fieldPart = "NONE") {
        if (fieldPart === "user info") {
            await this.inputUserInformation(field);
        } else {
            await this.inputUserInformation("NONE");
        }
        if (fieldPart === "address") {
            await this.inputAddressInformation(field);
        } else {
            await this.inputAddressInformation("NONE");
        }
    }
}

module.exports = helperActions;