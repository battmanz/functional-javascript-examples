const a = [4, 5, 6];

// Instead of: a.push(7, 8, 9);
const b = [...a, 7, 8, 9]; // or a.concat(7, 8, 9);

// Instead of: a.pop();
const c = a.slice(0, -1);

// Instead of: a.unshift(1, 2, 3);
const d = [1, 2, 3, ...a]; // or [1, 2, 3].concat(a);

// Instead of: a.shift();
const e = a.slice(1);

// R = Ramda (an alternate is lodash/fp)

// Instead of: a.sort(myCompareFunction);
const f = R.sort(myCompareFunction, a);

// Instead of: a.reverse();
const g = R.reverse(a);

// Exercise for the reader:
// copyWithin
// fill
// splice
