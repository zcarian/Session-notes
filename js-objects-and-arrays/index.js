//ARRAYS

// let colors = ["pink", "blue", "orange", "green"];
// colors[0] = "red";
// console.log(colors.length);
// const lastItem = colors[colors.length - 1];
// console.log(lastItem);

// colors.push("purple");
// console.log("colors after push ", colors);

// colors.pop();
// console.log("\ncolors after pop ", colors);

// colors.unshift("black");
// console.log("\ncolors after unshift ", colors);

// colors.shift();
// console.log("\ncolors after shift ", colors);

// let removedColors = colors.splice(1, 2);
// console.log("removedColors", removedColors);
// console.log(colors);

// let myNewColors = colors.slice();
// console.log(myNewColors);

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
//   console.log(i, "\n");
// }

//OBJECTS

// let name = "Klaus";
// let age = 34;
// let city = "Berlin";
// let favouritesFilms = ['Chunking Express', 'Spirited Away']

let person = {
  "first name": "Klaus",
  age: 33,
};

// console.log(person.city);
// console.log(person["first name"]);

person.age += 1;
// console.log(person);

// person.eyeColor = "blue";

// console.log(person);

person.address = {
  street: "Ritterstrasse",
  house: 12,
  city: "Berlin",
  country: "Germany",
};

// console.log(person);

// console.log("city" in person);
// console.log("address" in person);

console.log(person.address.street);
