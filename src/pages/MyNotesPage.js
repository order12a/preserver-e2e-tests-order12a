"use strict";
let BasePage = require('./BasePage');

class MyNotesPage extends BasePage{

    constructor(){
        super();
    }

    get(){
        browser.get('/notes');
    }
}

module.exports = MyNotesPage;