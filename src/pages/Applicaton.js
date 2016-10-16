"use strict";

let BasePage = require('./BasePage');
let MyNotesPage = require('./MyNotesPage');
let ArchiveNotesPage = require('./ArchiveNotesPage');
let RecycleBinPage = require('./RecycleBinPage');

class Applicaton{
    constructor(){
        this.basePage = new BasePage();
        this.myNotesPage = new MyNotesPage();
        this.archiveNotesPage = new ArchiveNotesPage();
        this.recycleBinPage = new RecycleBinPage();
    }
}

module.exports = Applicaton;
