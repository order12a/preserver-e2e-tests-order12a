"use strict";

let BaseNote = require('./BaseNote');

class DeletedNote extends BaseNote{

    constructor(){
        super();
        this.deleteIcon = $('.fa-trash');
    }

    clickDeleteCompletely(){
        browser.waitForAngular();
        browser.actions().mouseMove(this.noteForm).click(this.deleteIcon).perform();
        browser.waitForAngular();
    }
}

module.exports = DeletedNote;
