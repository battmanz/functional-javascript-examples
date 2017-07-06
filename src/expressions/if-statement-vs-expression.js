const number = 11;

// :( We must declare `message1` using `let` since we're using an if statement.
let message1;

if (number > 10) {
  message1 = "I can't count that high";
} else {
  message1 = `You chose ${number}`;
}
console.log(message1);


// :) We can use `const` because we're using an "if expression" (ternary operator).
const message2 = (number > 10) ? "I can't count that high" : `You chose ${number}`;
console.log(message2);
