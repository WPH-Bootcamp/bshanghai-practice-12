let user = {
  firstName: "john",
  sayHi() {
    console.log(`Hi ${this.firstName}`);
  },
};

let sayHiBound = user.sayHi.bind(user);

setTimeout(sayHiBound, 1000);

// partial func application
function multiply(a, b) {
  return a * b;
}

// Buat fungsi baru yang mengalikan dengan 2
let multiplyByTwo = multiply.bind(null, 2); // null karena this tidak relevan di sini

console.log(multiplyByTwo(5)); // Output: 10 (2 * 5)
console.log(multiplyByTwo(10)); // Output: 20 (2 * 10)

function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

// Buat fungsi "sayHelloTo" dengan greeting "Hello" sudah terikat
let sayHelloTo = greet.bind(null, "Hello");

sayHelloTo("Alice"); // Output: Hello, Alice!
sayHelloTo("Bob"); // Output: Hello, Bob!

// tidak perlu ditulis dulu, disimak saja

// mengikat metode object
class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    console.log(this.value);
  }
}

let button = new Button("Hello");

// Jika tidak menggunakan bind, this akan salah
document.getElementById("myButton").onclick = button.click; // Jika ada elemen dengan id 'myButton' di HTML, ini akan mencetak undefined

// Dengan bind, this akan benar
document.getElementById("myButton").onclick = button.click.bind(button); // Ini akan mencetak "Hello"
