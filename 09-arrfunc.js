let user = {
  firstName: "John",
  sayHiTraditional: function () {
    console.log(this.firstName);
  },
  sayHiArrow: () => {
    console.log(this.firstName); // 'this' akan merujuk ke global object (window di browser)
  },
};

user.sayHiTraditional(); // Output: John (this adalah user)
user.sayHiArrow(); // Output: undefined (this adalah window, tidak ada firstName)

// Contoh lain dengan setTimeout
let person = {
  name: "Alice",
  greetDelayed: function () {
    setTimeout(function () {
      console.log(`Hello, ${this.name}`); // 'this' akan menjadi window/undefined
    }, 1000);
  },
  greetDelayedArrow: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`); // 'this' di sini adalah 'person' karena diambil dari lingkungan leksikal 'greetDelayedArrow'
    }, 1000);
  },
};

person.greetDelayed(); // Output: Hello, (kosong) atau Hello, undefined
person.greetDelayedArrow(); // Output: Hello, Alice

// arguments
function traditionalFunc() {
  console.log(arguments); // Objek arguments lengkap
}

const arrowFunc = () => {
  // console.log(arguments); // Error: arguments is not defined
};

traditionalFunc(1, 2, 3); // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }
// arrowFunc(1, 2, 3); // Akan menyebabkan error jika baris console.log(arguments) tidak dikomentari

// Cara benar untuk arrow function:
const arrowFuncWithRest = (...args) => {
  console.log(args); // Array argumen
};

arrowFuncWithRest(1, 2, 3); // Output: [ 1, 2, 3 ]

// new
const MyObjectArrow = () => {
  this.value = 10;
};

// new MyObjectArrow(); // Error: MyObjectArrow is not a constructor
