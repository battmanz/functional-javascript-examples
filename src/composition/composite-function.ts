import * as R from 'ramda';

function h(x) {
  return x + 1;
}

function g(x) {
  return x * x;
}

function f(x) {
  return x.toString();
}

// R = Ramda
const composite = R.compose(f, g, h);
const y = composite(1);
console.log(y); // '4'
