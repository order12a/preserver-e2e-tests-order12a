"use strict";

class BaseNote{
    constructor(){
        this.noteForm = $('.note .panel');
        this.noteHeader = $('.my-note p strong');
        this.noteText = $('.my-note p:nth-child(2)');

    }

    isDisplayed(){
        return this.noteForm.isDisplayed()
            .then(undefined, err => false);
    }

    getTitleText(){
        return this.noteHeader.getText()
            .then(undefined, err => false);
    }

    getText(){
        return this.noteText.getText()
            .then(undefined, err => false);
    }

}

module.exports = BaseNote;