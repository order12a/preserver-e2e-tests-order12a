"use strict";

let BasePage = require('./BasePage');
let ArchivedNote = require('./fragments/ArchivedNote');

class ArchiveNotesPage extends BasePage{
    constructor(){
        super();
        this.archivedNote = new ArchivedNote();
    }

    get(){
        browser.get(browser.baseUrl + '/archive-notes');
    }
}

module.exports = ArchiveNotesPage;
