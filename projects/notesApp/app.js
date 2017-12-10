const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  // if (_.isObject(note) === true) {
  if (note) {
    console.log('Note added!');
    notes.logNote(note);
  } else {
    console.log('Error!');
    console.log(`Note ${argv.title} already exists!`)
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Found Note!');
    notes.logNote(note);
  } else {
    console.log('Note not found!');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  //ternary opperator
  var message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message);
} else {
  console.log('Command not recognized');
}
