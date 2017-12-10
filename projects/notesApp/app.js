console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  // if (_.isObject(note) === true) {
  if (note) {
    console.log('Note added!');
    console.log('-----------')
    console.log('Title : ', argv.title);
    console.log('Body : ', argv.body);
  } else {
    console.log('Error!');
    console.log(`Note ${argv.title} already exists!`)
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
