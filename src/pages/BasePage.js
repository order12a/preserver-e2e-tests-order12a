"use strict";
let BaseNote = require('./fragments/BaseNote');

class BasePage{

    constructor(){
        this.baseNote = new BaseNote();
    }
}

module.exports = BasePage;
