// F.prototype

function Rabbit(name) {
  this.name = name;
}

// Properti dan metode yang ingin kita bagikan di antara semua objek Rabbit
Rabbit.prototype.eats = true;
Rabbit.prototype.jumps = function () {
  console.log(`${this.name} jumps!`);
};

let fluffy = new Rabbit("Fluffy");
let bunny = new Rabbit("Bunny");

console.log(fluffy.name); // Fluffy (properti sendiri)
console.log(fluffy.eats); // true (diambil dari Rabbit.prototype)
fluffy.jumps(); // Fluffy jumps! (diambil dari Rabbit.prototype)

console.log(bunny.name); // Bunny (properti sendiri)
console.log(bunny.eats); // true (diambil dari Rabbit.prototype)
bunny.jumps(); // Bunny jumps! (diambil dari Rabbit.prototype)

// property constructor pada F.prototyoe
function User() {}

console.log(User.prototype.constructor === User); // Output: true

let john = new User();
console.log(john.constructor === User); // Output: true (diambil dari john.[[Prototype]] yaitu User.prototype)

// ....
function RabbitBad(name) {
  this.name = name;
  this.jumps = function () {
    // Masalah: membuat fungsi baru setiap kali
    console.log(`${this.name} jumps!`);
  };
}

let fluffyBad = new RabbitBad("Fluffy");
let bunnyBad = new RabbitBad("Bunny");

console.log(fluffyBad.jumps === bunnyBad.jumps); // Output: false

// mengganti F.prototype
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Jika tidak menyertakan constructor, Dog.prototype.constructor akan menjadi Object
  // constructor: Dog, // Penting untuk ditambahkan jika ingin mempertahankan
  bark() {
    console.log(`${this.name} barks!`);
  },
};

let buddy = new Dog("Buddy");
buddy.bark(); // Buddy barks!
console.log(buddy.constructor === Dog); // Output: false (jika constructor tidak ditambahkan)
