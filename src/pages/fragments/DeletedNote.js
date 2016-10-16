"use strict";

let BaseNote = require('./BaseNote');

class DeletedNote extends BaseNote{

    constructor(){
        super();
        this.deleteIcon = $('.fa-trash');
    }

    deleteCompletely(){
        browser.actions().mouseUp(this.noteForm).click(this.deleteIcon).perform();
    }
}

module.exports = DeletedNote;
