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
}

module.exports = GeneralNote;
