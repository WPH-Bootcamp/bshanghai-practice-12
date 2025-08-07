let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

let rabbit = {
  jumps: true,
};

// Mengatur rabbit's [[Prototype]] menjadi animal
// Ini berarti rabbit akan mewarisi properti dan metode dari animal
Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.eats); // Output: true (diambil dari animal)
rabbit.walk(); // Output: Animal walks (diambil dari animal)
console.log(rabbit.jumps); // Output: true (properti sendiri)

// prototype chaining
let animal2 = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

let rabbit2 = {
  jumps: true,
  __proto__: animal2, // Cara lama, tapi ilustratif untuk demonstrasi rantai
};

let longEarRabbit = {
  earLength: 10,
  __proto__: rabbit2,
};

console.log(longEarRabbit.eats); // true (dari animal)
longEarRabbit.walk(); // Animal walks (dari animal)
console.log(longEarRabbit.jumps); // true (dari rabbit)
console.log(longEarRabbit.earLength); // 10 (dari longEarRabbit sendiri)

// property prototype pada fungsi konstruktor
function Animal(name) {
  this.name = name;
}

Animal.prototype.eats = true;
Animal.prototype.walk = function () {
  console.log(`${this.name} walks`);
};

let dog = new Animal("Buddy");

console.log(dog.name); // Output: Buddy (properti sendiri)
console.log(dog.eats); // Output: true (diambil dari Animal.prototype)
dog.walk(); // Output: Buddy walks (diambil dari Animal.prototype)

// object.create()
let animalProto = {
  eats: true,
  sleeps: function () {
    console.log("Zzzzz");
  },
};

let cat = Object.create(animalProto);
cat.name = "Whiskers";

console.log(cat.eats); // true
cat.sleeps(); // Zzzzz
console.log(cat.name); // Whiskers
console.log(Object.getPrototypeOf(cat) === animalProto); // true
