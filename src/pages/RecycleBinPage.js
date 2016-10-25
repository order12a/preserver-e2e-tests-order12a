"use strict";

let BasePage = require('./BasePage');
let DeletedNote = require('./fragments/DeletedNote');

class RecycleBinPage extends BasePage{
    constructor(){
        super();
        this.deletedNote = new DeletedNote();
        this.deletePromptButton = element(by.buttonText('DELETE'));
    }

    get(){
        browser.get(browser.baseUrl + '/recycle-bin');
        browser.waitForAngular();
    }

    confirmDeleteAction(){
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.deletePromptButton), this.waitTimeout);
        this.deletePromptButton.click();
        browser.wait(protractor.ExpectedConditions.invisibilityOf(this.deletePromptButton), this.waitTimeout);
        browser.waitForAngular();
        // browser.wait(protractor.ExpectedConditions.and(protractor.ExpectedConditions.visibilityOf(this.deletePromptButton)), 5000);
    }
}

module.exports = RecycleBinPage;