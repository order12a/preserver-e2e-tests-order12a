"use strict";
let BaseNote = require('./fragments/BaseNote');

class BasePage{

    constructor(){
        this.waitTimeout = 5000;
        global.BROWSER_TIMEOUT = 5000;
        this.baseNote = new BaseNote();
    }
}

module.exports = BasePage;
