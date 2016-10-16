"use strict";

let Application = require('../src/pages/Applicaton');

describe('Note Creation Feature Test', function () {
    let app = new Application();

    xit('create note with title only', function () {
        let titleText = 'Title';
        app.myNotesPage.createForm.createNote(titleText, '');
        expect(app.myNotesPage.generalNote.isDisplayed()).toBeTruthy("New Note is not displayed");
        expect(app.myNotesPage.generalNote.getTitleText()).toEqual(titleText, "Current tile is not equal to expected - " + titleText);
    });

    xit('create note with text only', function () {
        let noteText = "Test Text";
        app.myNotesPage.createForm.createNote('', noteText);
        expect(app.myNotesPage.generalNote.isDisplayed()).toBeTruthy("New Note is not displayed");
        expect(app.myNotesPage.generalNote.getText()).toContain(noteText, "Current tile is not equal to expected - " + noteText);
    });

    it('create empty note', function () {
        app.myNotesPage.createForm.createNote('', '');
        expect(app.myNotesPage.generalNote.isDisplayed()).toBeFalsy();
    });
});


