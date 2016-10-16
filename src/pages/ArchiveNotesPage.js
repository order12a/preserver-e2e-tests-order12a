"use strict";

class ArchiveNotesPage extends BasePage{
    constructor(){
        super();
    }

    get(){
        browser.get('/archive-notes');
    }
}

module.exports = ArchiveNotesPage;
