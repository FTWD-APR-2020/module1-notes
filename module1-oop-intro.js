// // OOP
// // object syntax - {}, commas, colon
// // let obj = {
// //   property1: ["hi", "hi2", "hi3"],
// //   p2: {p4:"hola"},
// //   p3: function(){
// //     console.log("Wazzzzzaaaaa")
// //   }
// // }
// // console.log(obj)
// // // dot notation
// // console.log(obj.p2)
// // // add a new property
// // // obj.p3 = "bonjour"
// // console.log(obj)
// // // edit a property
// // obj.p2 = "Konnichiwa"
// // console.log(obj.property1[1])
// // obj.p3()









// // keywords: let, var, const, etc...
// // NEWWWWW keyword "this"
// // this will always refer to its parent object
// // let obj = {
// //   property1: ["hi", "hi2", "hi3"],
// //   p2: {p4: "hola from p4", p6: function(){console.log(this.p4)}},
// //   p5: "hi",
// //   p3: function(){
// //     console.log(this.p5)
// //   }
// // }

// // obj.p2.p6()

// // let obj2 = {
// //   property1: ["hi", "hi2", "hi3"],
// //   p2: {p4:"hola"},
// //   p5: "hi from obj2",
// //   p3: function(){
// //     console.log(this.p5)
// //   }
// // }
// // obj2.p3()









// // Monopoly Game - Object Literal approach
// // Example of a VERY simple Monopoly game simulation
 
// // Each square represents the cash earned when a player is on it. For example:
// // - If a user is at position 0, the cash will increase by 100€
// // - If a user is at position 4, the cash will decrease by 40€
// const squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// // --- Initialization ---

// let player1 = {
//   name: 'Joaquim',
//   color: 'red',
//   position: 0,
//   cash: 1000
// }

// let player2 = {
//   name: 'Maxence',
//   color: 'blue',
//   position: 0,
//   cash: 1000
// }

// let player3 = {
//   name: 'Mostafa',
//   color: 'black',
//   position: 0,
//   cash: 1000
// }

// // --- Display info  ---
// console.log("Before the first turn")
// console.log(player1);
// console.log(player2);
// console.log(player3);

// // --- Turn of Player 1 ---
// // The dice is a random integer between 1 and 6
// var dice = 1+Math.floor(6*Math.random());
// // The position is always between 0 and 15 (the numbers of squares - 1)
// player1.position = (player1.position + dice) % squares.length;
// // The cash is updated based on the values of squares and player1.position
// player1.cash += squares[player1.position];
// // If the player doesn't have anymore cash, player is out of game
// if (player1.cash < 0) {
//   console.log(`Game over for ${player1.name}.`);
// }

// // --- Turn of Player 2 --- 
// var dice = 1+Math.floor(6*Math.random());
// player2.position = (player2.position + dice) % squares.length;
// player2.cash += squares[player2.position];
// if (player2.cash < 0) {
//   console.log(`Game over for ${player2.name}.`);
// }

// // --- Turn of Player 3 --- 
// var dice = 1+Math.floor(6*Math.random());
// player3.position = (player3.position + dice) % squares.length;
// player3.cash += squares[player3.position];
// if (player3.cash < 0) {
//   console.log(`Game over for ${player3.name}.`);
// }

// // second turn

// // --- Display info  ---
// console.log("After the first turn")
// console.log(player1);
// console.log(player2);
// console.log(player3);


// let squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// // --- Initialization with methods ---

// // methods vs functions 
// // methods are "actions" of an object
// let player1 = {
//   name: 'Joaquim',
//   color: 'red',
//   position: 0,
//   cash: 1000,
//   move: () => {
//     let dice = 1+Math.floor(6*Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   },
//   displayInfo: () => {
//     console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
//   }
// }

// let player2 = {
//   name: 'Maxence',
//   color: 'blue',
//   position: 0,
//   cash: 1000,
//   move: () => {
//     let dice = 1+Math.floor(6*Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   },
//   displayInfo: () => {
//     console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
//   }
// }

// let player3 = {
//   name: 'Mostafa',
//   color: 'black',
//   position: 0,
//   cash: 1000,
//   move: () => {
//     let dice = 1+Math.floor(6*Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   },
//   displayInfo: () => {
//     console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
//   }
// }

// // --- Turn 1  ---
// player1.move();
// player2.move();
// player3.move();

// // --- Turn 2  ---
// player1.move();
// player2.move();
// player3.move();

// // --- Display info  ---
// player1.displayInfo();
// player2.displayInfo();
// player3.displayInfo();

// // Summary
// // - review of objects
// // - why use methods? makes code easier to read more and more reusable

// // New syntax
// // - keyword this



// class intro
// let squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// Creation of the class
// NEWWWWW keyword class
// the first letter of the class is always capitalized
// class Player {

//   // The constructor is the method triggered with the `new` keyword 
//   // There can only be one constructor method in a class
//   constructor(name, color) {
//     this.name = name;   // this value is specified when the object is created
//     this.color = color; // this value is specified when the object is created
//     this.position = 0;  // this is a default value 
//     this.cash = 1000;   // this is a default value 
//   }
  
//   // Method move
//   move() {
//     let dice = 1+Math.floor(6*Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   }

//   // Method displayInfo
//   displayInfo() {
//     console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
//   }
  
// }

// --- Initialisation of players ---
// When trying to create a new object from a class use the following syntax
// player 1, 2 and 3 are now an instance of the Player class, this means they share the same constructor. In other words, 
// they are copies from the same Player blueprint (i.e. class), all instances of a class share the same attributes and methods
// but the properties can have different values
// let player1 = new Player('Joaquim', 'red');
// let player2 = new Player('Maxence', 'blue');
// let player3 = new Player('Mostafa', 'black');
// let newPlayer = new Player("David", "pink");

// // --- Turn 1  ---
// player1.move();
// player2.move();
// player3.move();

// // --- Turn 2  ---
// player1.move();
// player2.move();
// player3.move();

// player1.displayInfo();
// player2.displayInfo();
// player3.displayInfo();

// the four pillars of OOP: APIE - Abstraction, Polymorphism, Inheritance, Encapsulation

// SHORT EXPLANATION: Abstraction: A way of arranging complexity where the more complex details are suppressed below 
// the current level (hidden).

// SHORT EXPLANATION: Encapsulation: To put all the data attributes of an object and its inner working (methods) inside of it.

class Human { 
  // Constructor 
  constructor(name, food) { 
    this.name = name;
    this.food = food
    this.hairStyle = "Bald" 
  } 
}

// Inheritance is a feature of object-oriented programming that allows code reusability when a class includes property 
// (attribute or method) of another class.
// Player class
// class Player extends Human { 
//   // Constructor 
//   constructor(name, food, newInput) { 
//     super(name, food);
//     this.newInput = newInput;
//     this.health = 100; 
//     this.position = 0; 
//     this.cash = 10; 
//   } 
//   // Method move 
//   move() {
//     console.log("Walk forward")
//   }
//   // Method attack 
//   attack () {
//     console.log("Punch")
//   }
// }
  
// // Cowboy class
// class Cowboy extends Player { 
//   // Constructor 
//   constructor(name, food, newInput) { 
//     super(name, food, newInput)
//     this.weapon = 'revolver';
//   }
// }

// // Samurai class
// class Samurai extends Human { 
//   // Constructor 
//   constructor(name, food) { 
//     super(name, food)
//     this.weapon = 'katana';
//   } 
// }

// let player1 = new Player("Herzen-chan")
// let samurai2 = new Samurai("Ryan-san")

// console.log(samurai2)
// console.log(player1)

// Polymorphism
// Player class
class Player { 
  // Constructor 
  constructor(name) { 
    this.name = name; 
    this.health = 100; 
    this.position = 0; 
    this.cash = 10; 
  } 
  // Method move 
  move() {
    console.log("Walk")
  }
  // Method attack 
  attack () {
    console.log("Punch")
  }
}

// Cowboy class
class Cowboy extends Player { 
// Constructor 
  constructor(name) { 
    super(name)
    this.weapon = 'revolver';
  }
  // Method move 
  move() {
    // console.log("Get on horse and go")
  }
  // Method attack 
  attack () {
    console.log("Shoot")
  }

  newFunc(){
    console.log('Wazzaaaa')
  }

}

// Samurai class
class Samurai extends Player { 
  // Constructor 
  constructor(name) { 
    super(name)
    this.weapon = 'katana';
  } 
  // Method move 
  move() {
    console.log("Run")
  }
  // Method attack 
  attack () {
    console.log("Swing sword")
  }
}

let cowboy1 = new Cowboy("Hugo, hiya!")
let player1 = new Player("Nikoooo")

player1.move()
cowboy1.move()
cowboy1.attack()
cowboy1.newFunc()

// Summary
// - why use classes?
// - OOP - four pillars APIE

// New Syntax
// - new keyword: this, class, new, extends, super(this is required when you are extending from a parent class) constructor
/* 
class ClassName{
  constructor(you can have many or no params){
    // here go your attributes
  }
  methods...
}
*/
/* 
class ClassName extends ParentClass{
  constructor(you can have many or no params){
    super()
    // here go your attributes
  }
  methods...
}
*/
// let newObjectFromAClass = new ClassName(params)