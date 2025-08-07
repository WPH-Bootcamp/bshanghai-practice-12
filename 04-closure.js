// lexical environment

let phrase = "hello";

function sayHi(name) {
  console.log(`${phrase}, ${name}`);
}

sayHi("kyra");

// example with closure
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
