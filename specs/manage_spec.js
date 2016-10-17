"use strict";

let Application = require('../src/pages/Applicaton');

describe('Note Manage Features Test', function () {
    let app = new Application();
    function createNote(){
        app.myNotesPage.createForm.createNote('Note title', 'Note text');
    }

    describe('Other Features Tests', function () {
        beforeEach(function () {
            createNote();
        });

        it('change note color test', function () {
            let color = 'darkgray';
            app.myNotesPage.generalNote.clickChangeColor();
            app.myNotesPage.generalNote.selectColor(color);
            expect(app.myNotesPage.generalNote.isDisplayed()).toBeTruthy("New Note is not displayed");
            expect(app.myNotesPage.generalNote.getColorOfNote()).toContain(color);
        });
    });

    describe('Delete Feature Tests', function () {
        beforeEach(function () {
            createNote();
        });

        it('delete note into recycle bin', function () {
            app.myNotesPage.generalNote.delete();
            app.recycleBinPage.get();
            expect(app.recycleBinPage.deletedNote.isDisplayed()).toBeTruthy();
        });

        it('delete note completely', function () {
            app.myNotesPage.generalNote.delete();
            app.recycleBinPage.get();
            app.recycleBinPage.deletedNote.clickDeleteCompletely();
            app.recycleBinPage.confirmDeleteAction();
            expect(app.recycleBinPage.deletedNote.isDisplayed()).toBeFalsy();
        });
    });

    describe('Archive Feature Test', function () {
        beforeEach(function () {
            createNote();
        });

        it('archivation of note', function () {
            app.myNotesPage.generalNote.archiveNote();
            app.archiveNotesPage.get();
            expect(app.archiveNotesPage.archivedNote.isDisplayed()).toBeTruthy();
        });

        it('archivation of note and unpack from archive', function () {
            app.myNotesPage.generalNote.archiveNote();
            app.archiveNotesPage.get();
            app.archiveNotesPage.archivedNote.unarchiveNote();
            app.myNotesPage.get();
            expect(app.myNotesPage.generalNote.isDisplayed()).toBeTruthy();
        });
    });
});
