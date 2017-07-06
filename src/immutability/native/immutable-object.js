const fruity1 = Object.freeze({
  a: 'apple',
  b: 'banana',
  c: 'cherry'
});

// ES2015
const fruity2 = Object.assign({}, fruity1, { b: 'blueberry' });
// fruity2: { a: 'apple', b: 'blueberry', c: 'cherry' }

// ES2018
const fruity3 = { ...fruity1, c: 'cantaloupe' };
// fruity3: { a: 'apple', b: 'banana', c: 'cantaloupe' }
