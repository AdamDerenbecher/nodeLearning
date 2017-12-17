const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  })
});

it('should square a number', () => {
  var res = utils.square(2);
  expect(res).toBe(4).toBeA('number');
});

it('should async square two numbers', (done) => {
  utils.asyncSquare(3, (sum) => {
    expect(sum).toBe(9).toBeA('number');
    done();
  })
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Adam',
//     age: 30,
//     location: 'Saint Louis'
//   }).toExclude({
//     age: 30
//   })
// });

it('should verify firt and last names are set', () => {
  var user = {location: 'Saint Louis',
              age: 30};
  var fullName = 'Adam Derenbecher';
  var res = utils.setName({}, fullName);
  expect(res).toInclude({
    firstName: 'Adam',
    lastName: 'Derenbecher'
  }).toBeA('object');
});
