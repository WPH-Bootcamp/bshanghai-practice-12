function sayHi() {
  console.log("hi");
}

console.log(sayHi.name);

let user = {
  sayHi() {
    console.log("hi");
  },
  sayBye() {
    console.log("bye");
  },
};

console.log(user.sayHi.name);
console.log(user.sayBye.name);

// length

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length);
console.log(f2.length);
console.log(many.length);

// property custom

function sayHi2() {
  console.log("Hi");

  // melacak berapa kali fungsi ini dipanggil
  sayHi2.counter++;
}

sayHi2.counter = 0; // nilai awal

sayHi2(); // Hi
sayHi2(); // Hi

console.log(`Called ${sayHi2.counter} times`); // Called 2 times

function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  return counter;
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// named function expression

let sayHi3 = function func(who) {
  //   console.log(`hi ${who}`);
  if (who) {
    console.log(`hi ${who}`);
  } else {
    func("guess");
  }
};

sayHi3();
sayHi3("kyra");
