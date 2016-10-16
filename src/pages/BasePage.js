"use strict";
let BaseNote = require('./fragments/BaseNote');
let GeneralNote = require('./fragments/GeneralNote');
let CreateForm = require('./fragments/CreateForm');

class BasePage{

    constructor(){
        this.baseNote = new BaseNote();
        this.createForm = new CreateForm();
        this.generalNote = new GeneralNote();
    }

}

module.exports = BasePage;
