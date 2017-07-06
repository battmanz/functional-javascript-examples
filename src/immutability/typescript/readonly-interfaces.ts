// Object
// -----------------------------------------------------------
// `person1` is inferred to be readonly.
// There is a runtime cost for using `Object.freeze`.
const person1 = Object.freeze({ name: 'Mary', age: 31 });
// person1.age = 51; // Error

// vs

// More verbose to explicitly declare `person2` as readonly.
// No runtime cost since we did not call `Object.freeze`.
const person2: Readonly<{ name: string, age: number }> = { name: 'Mary', age: 31 };
// person2.age = 51; // Error




// Array
// -----------------------------------------------------------
// Runtime cost for using `Object.freeze`.
const instruments1 = Object.freeze(['guitar', 'keyboard', 'drums']);
// instruments1.push('kazoo'); // Error

// or

// More verbose, but no runtime cost
const instruments2: ReadonlyArray<string> = ['guitar', 'keyboard', 'drums'];
// instruments2.push('kazoo'); // Error




// Map
// -----------------------------------------------------------
// Does not work!!!!
const numberMap1 = Object.freeze(new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3]
]));
numberMap1.set('four', 4); // I can still mutate the map!

// vs

// You must do it like this:
const numberMap2: ReadonlyMap<string, number> = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3]
]);
// numberMap2.set('four', 4); // Error




// Set
// -----------------------------------------------------------
// Does not work!!!! (same reason as Map)
const turtleSet1 = Object.freeze(new Set([
  'Leonardo',
  'Donatello',
  'Michelangelo',
  'Raphael'
]));
turtleSet1.add('Shredder'); // I can still mutate the set!

// vs

// You must do it like this:
const turtleSet2: ReadonlySet<string> = new Set([
  'Leonardo',
  'Donatello',
  'Michelangelo',
  'Raphael'
]);
// turtleSet2.add('Shredder'); // Error
