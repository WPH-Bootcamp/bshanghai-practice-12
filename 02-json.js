//  JSON

let student = {
  name: "kyra",
  age: 25,
  isMale: true,
  courses: ["html", "css", "js"],
};
console.log(typeof student);
console.log(student);
let jsonString = JSON.stringify(student);
console.log(typeof jsonString);
console.log(jsonString);

// property yang diabaikan JSON.stringify
let user = {
  sayHi() {
    //diabaikan
    console.log("hi");
  },
  name: "kyra",
  age: 25,
  isMale: true,
  courses: ["html", "css", "js"],
  somethingKey: undefined, //diabaikan
  [Symbol("id")]: "secret", //diabaikan
};

console.log(user);
let stringUser = JSON.stringify(user);
console.log(stringUser);

let room = {
  number: 32,
};

let meetup = {
  title: "conference",
  participants: ["kyra", "john"],
  place: room, // reference
};

room.ocupiedBy = meetup;

console.log(room);
console.log(meetup);
// console.log(JSON.stringify(meetup));

// mengabaikan dan mengubah properti: replacer

let json = JSON.stringify(meetup, [
  "title",
  "participants",
  "place",
  "name",
  "number",
]);
console.log(json);

// formatting JSONS: space
let user2 = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user2, null));
console.log(JSON.stringify(user2, null, 2));

// ksutomisasi toJSON
let room2 = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup2 = {
  title: "Conference",
  room: room2,
};

console.log(JSON.stringify(room2));
console.log(JSON.stringify(meetup2));

// json parse
let string =
  '{"name":"John","age":25,"roles":{"isAdmin":false,"isEditor":true}}';
let user3 = JSON.parse(string);

console.log(user3);
