// decorator and forwarding

function sayHi() {
  console.log(`hi ${this.name}`);
}

let user = { name: "kyra" };
let admin = { name: "admin" };

sayHi.call(user);
sayHi.call(admin);

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

let person = { name: "david" };
greet.call(person, "hello", "!");

// apply
function sum(a, b) {
  return a + b;
}

let numbers = [5, 10];
console.log(sum.apply(null, numbers));

// decorator: pembungkus function

function slowOperation(x) {
  console.log(`Performing slow operation for ${x}`);
  // Anggap ini adalah operasi yang memakan waktu
  return x * 2;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      console.log(`Fetching from cache for ${x}`);
      return cache.get(x);
    }

    let result = func.call(this, x); // Menggunakan call untuk meneruskan konteks 'this'
    cache.set(x, result);
    console.log(`Calculating and caching for ${x}`);
    return result;
  };
}

// Menerapkan decorator
slowOperation = cachingDecorator(slowOperation);

console.log(slowOperation(1)); // Menghitung, lalu caching
console.log(slowOperation(1)); // Dari cache
console.log(slowOperation(2)); // Menghitung, lalu caching
console.log(slowOperation(2)); // Dari cache
