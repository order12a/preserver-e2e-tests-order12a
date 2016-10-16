"use strict";

class CreateForm{

    constructor(){
        this.initialForm = $('textarea');
        this.titleField = $('input[placeholder="Title"]');
        this.noteTextField = $('textarea[placeholder="Write a note"]');
        this.saveButton = $('.form-group button');
        this.EC = protractor.ExpectedConditions;
        this.timeout = 5000;
    }

    createNote(noteTitle, noteText){
        this.initialForm.click();
        if(!(noteTitle === undefined) || noteTitle.length > 0){
            // browser.wait(this.EC.visibilityOf(this.titleField), this.timeout);
            // browser.sleep(5000);
            this.titleField.sendKeys(noteTitle);
        }
        if(!(noteText === undefined) || noteText > 0){
            // browser.sleep(5000);
            this.noteTextField.sendKeys(noteText);
        }
        // browser.sleep(5000);
        // browser.wait(this.EC.elementToBeClickable(this.saveButton), this.timeout);
        this.saveButton.click();
    }
}

module.exports = CreateForm;