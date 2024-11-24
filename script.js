// 4 8
// 1;
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }
// const perosna = new Person("Tazo", "22");
// console.log(perosna.introduce());
// 2;
// class CheckAge {
//   static Check(age) {
//     return age >= 18;
//   }
// }
// // console.log(CheckAge.Check(28));
// 3;
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     return `${this.name} says: Woof!`;
//   }
// }
// class Dog extends Animal {
//   speak() {
//     return `${this.name} says: Woof!`;
//   }
// }
// let cugo = new Dog("dvarniashka");
// console.log(cugo.speak());
// 4;
// class Button {
//     constructor(label, color) {
//         this.label = label
//         this.color = color
//     }
//     render(containerId){

//     }
// }
// 5;
// class Vehicle {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   describe() {
//     return `asd`;
//   }
// }
// class Car extends Vehicle {
//   constructor(brand, speed, model) {
//     super(brand, speed);
//     this.model = model;
//   }

//   describe() {
//     return `მე მაინც ${this.brand}-ის ${this.model}-ები მომწონს, თან სისწრაფესაც კარგად ანვითარებს ${this.speed}-მდე`;
//   }
// }
// let bmw = new Car("BMW", "200", "X5");
// console.log(bmw.describe());
// let merc = new Car("Mercedes", "200", "ML");
// console.log(merc.describe());
// let rolly = new Car("Rolls Royce", "200", "Phantom");
// console.log(rolly.describe());
// 6;
// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//   }
//   static filterByCategory(products, category) {
//     return products.filter((product) => product.category === category);
//   }
// }

// const product1 = new Product("Laptop", 1200, "Electronics");
// const product2 = new Product("Headphones", 200, "Electronics");
// const product3 = new Product("Shirt", 30, "Clothing");
// const product4 = new Product("Smartphone", 800, "Electronics");
// const product5 = new Product("Jeans", 50, "Clothing");

// const products = [product1, product2, product3, product4, product5];

// let eleqtronika = Product.filterByCategory(products, "Electronics");

// eleqtronika.forEach((product) => {
//   console.log(`სახელი: ${product.name}, ფასი: $${product.price}`);
// });

// 7;
// class Event {
//   constructor(name, date) {
//     this.name = name;
//     this.date = new Date(date);
//   }
//   isUpcoming() {
//     let mimdinare = new Date();
//     return this.date > mimdinare;
//   }
// }
// let event1 = new Event("Monohall", "2024-12-31");
// let event2 = new Event("King David", "2024-11-14");
// let event3 = new Event("Lisi Event Hall", "2024-07-28");

// let events = [event1, event2, event3];

// events.forEach((event) => {
//   console.log(`${event.name} ღონისძიება არის მომავალში ${event.isUpcoming()} `);
// });
8;
9;
// class Task {
//   constructor(title, completed, priority) {
//     this.title = title
//     this.title = completed
//     this.title = priority
//   }
//   toggleCompleted() {
//   }
// // }
// 10;
// class Appointment {
//   constructor(title, date) {
//     this.title = title;
//     this.date = new Date(date);
//   }
//   isUpcoming() {
//     let today = new Date();
//     return (
//       this.date.getDate() === today.getDate() &&
//       this.date.getMonth() === today.getMonth() &&
//       this.date.getFullYear() === today.getFullYear()
//     );
//   }
// }
// let appointment1 = new Appointment("Gulaoba", "2024-12-31");
// let appointment2 = new Appointment("Swavla", "2024-11-25");

// let appointments = [appointment1, appointment2];

// appointments.forEach((appointment) => {
//   console.log(`${appointment.title} aris dges ${appointment.isUpcoming()}`);
// });
