"use strict";

let BasePage = require('./BasePage');
let DeletedNote = require('./fragments/DeletedNote');

class RecycleBinPage extends BasePage{
    constructor(){
        super();
        this.deletedNote = new DeletedNote();
    }

    get(){
        browser.get('/recycle-bin')
    }
}

module.exports = RecycleBinPage;