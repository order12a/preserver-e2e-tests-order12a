"use strict";
let BasePage = require('./BasePage');
let GeneralNote = require('./fragments/GeneralNote');
let CreateForm = require('./fragments/CreateForm');

class MyNotesPage extends BasePage{

    constructor(){
        super();
        this.createForm = new CreateForm();
        this.generalNote = new GeneralNote();
    }

    get(){
        browser.get(browser.baseUrl + '/notes');
        browser.waitForAngular();
    }
}

module.exports = MyNotesPage;