import { Set } from 'immutable';

// Use in place of `new Set()`
const set1 = Set([1, 2, 3, 3, 3, 3, 3, 4]);
const set2 = set1.add(5);

console.log([...set1]); // [1, 2, 3, 4]
console.log([...set2]); // [1, 2, 3, 4, 5]
