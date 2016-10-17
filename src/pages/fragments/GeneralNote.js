"use strict";

let BaseNote = require('./BaseNote');

class GeneralNote extends BaseNote{
    constructor(){
        super();
        this.archiveIcon = $('a[title="Archive"] i');
        this.deleteIcon = $('.fa-trash');
        this.changeColorIcon = $('a[title="Color"] i');
    }

    archiveNote(){
        browser.waitForAngular();
        browser.actions().mouseMove(this.noteForm).click(this.archiveIcon).perform();
        browser.waitForAngular();
    }

    delete(){
        browser.waitForAngular();
        browser.actions().mouseMove(this.noteForm).click(this.deleteIcon).perform();
        browser.waitForAngular();
    }

    clickChangeColor(){
        browser.waitForAngular();
        browser.actions().mouseMove(this.noteForm).click(this.changeColorIcon).perform();
    }

    selectColor(color){
        browser.wait(protractor.ExpectedConditions.visibilityOf($('.btn-fab-mini')), 5000);
        browser.waitForAngular();
        $('.btn-' + color).click();
        browser.waitForAngular();
    }

    getColorOfNote(){
        return this.noteForm.getAttribute("class");
    }
}

module.exports = GeneralNote;
