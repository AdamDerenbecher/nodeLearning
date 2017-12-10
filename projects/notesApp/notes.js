console.log('Staring notes.js');

module.exports.addNote = () => {
  console.log('addNote');
  return 'New note.';
};

module.exports.add = function(num1, num2) {
  console.log('add');
  return num1 + num2;
};

module.exports.addArrow = (num1, num2) => {
  console.log('addArrow');
  return num1 + num2;
};
