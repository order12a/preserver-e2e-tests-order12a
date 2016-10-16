"use strict";

let Application = require('../src/pages/Applicaton');

describe('Note Manage Feature Test', function () {
    let app = new Application();

    beforeEach(function () {
        app.myNotesPage.createForm.createNote('Note title', 'Note text');
    });

    xit('change note color test', function () {
        //TODO
    });

    xit('delete note into recycle bin', function () {
        app.myNotesPage.generalNote.delete();
        app.recycleBinPage.get();
        expect(app.recycleBinPage.isDisplayed()).toBeTruthy();
    });

    xit('delete note completely', function () {
        app.myNotesPage.generalNote.delete();
        app.recycleBinPage.get();
        app.recycleBinPage.deletedNote.deleteCompletely();
    });

    xit('archivation of note', function () {

    });

    xit('archivation of note and unpack from archive', function () {

    });
});
