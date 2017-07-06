const number = 11;

// Each branch must have a `return` statement.
const message = (() => {
  if (number > 10) {
    return "I can't count that high";
  } else {
    return `You chose ${number}`;
  }
})();

console.log(message);
