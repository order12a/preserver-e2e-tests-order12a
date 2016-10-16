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
        browser.actions().mouseUp(this.noteForm).click(this.archiveIcon).perform();
    }

    delete(){
        browser.actions().mouseUp(this.noteForm).click(this.deleteIcon).perform();
    }

    clickChangeColor(){
        browser.actions().mouseUp(this.noteForm).click(this.changeColorIcon).perform();
    }
}

module.exports = GeneralNote;
