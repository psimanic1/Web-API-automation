class homePage {
    btnSignIn() {
        return element(by.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a'));
    }

    inputFieldEmail() {
        return element(by.xpath('//*[@id="email_create"]'));
    }

    btnCreateAccount() {
        return element(by.xpath('//*[@id="SubmitCreate"]'));
    }

    btnSignOut() {
        return element(by.xpath('//*[@id="header"]/div[2]/div/div/nav/div[2]/a'));
    }

    btnHome() {
        return element(by.xpath('//*[@id="center_column"]/ul/li/a/span'));
    }

    inputFieldSearch() {
        return element(by.xpath('//*[@id="search_query_top"]'));
    }

    btnSearch() {
        return element(by.xpath('//*[@id="searchbox"]/button'));
    }

    btnBestSeller() {
        return element(by.xpath('//*[@id="home-page-tabs"]/li[2]/a'));
    }

    listOfProductItems() {
        return element.all(by.xpath('//*[@id="homefeatured"]/li'));
    }

    listOfProductNames() {
        return element.all(by.xpath('//*[@id="center_column"]/ul/li/div/div/h5/a'));
    }
};

module.exports = homePage;