// Pure
function multiply(a, b) {
  return a * b;
}

// Impure: no referential transparency since `heightRequirement` can be reassigned.
let heightRequirement = 46;
function canRide(height) {
  return height >= heightRequirement;
}

// Impure: causes side effects by logging to the console.
function multiplyWithLogging(a, b) {
  console.log('Arguments: ', a, b);
  return a * b;
}
