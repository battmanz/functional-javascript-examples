function h(x) {
  return x + 1;
}

function g(x) {
  return x * x;
}

function f(x) {
  return x.toString();
}

const y = f(g(h(1))); // y = (f ∘ g ∘ h)(1)
console.log(y); // '4'
