"use strict";

let BaseNote = require('./BaseNote');

class ArchivedNote extends BaseNote {
    constructor() {
        super();
        this.unurchiveIcon = $('.fa-upload');
    }

    unarchiveNote(){
        browser.waitForAngular();
        browser.actions().mouseUp(this.noteForm).click(this.unurchiveIcon).perform();
        browser.waitForAngular();
    }
}

module.exports = ArchivedNote;