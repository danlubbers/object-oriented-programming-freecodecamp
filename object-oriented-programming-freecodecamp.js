// 1. Create a Basic JavaScript Object

let dog = {
    name: 'takanni',
    numLegs: 4
}

// 2. Use Dot Notation to Access the Properties of an Object

let dog1 = {
    name: "Spot",
    numLegs: 4
  };
  // Add your code below this line
  
  console.log(dog1.name)
  console.log(dog1.numLegs)

// 3. Create a Method on an Object

let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
        return 'This dog has 4 legs.'
    }
     
  };
  
  console.log(dog2.sayLegs());

// 4. Make Code More Reusable with the this keyword

let dog3 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  console.log(dog3.sayLegs());

// 5. Defining a Constructor Function

function Dog() {
    this.name = 'Takanni',
    this.color = 'wolf',
    this.numLegs = 4
};
// 6. Use a Constructor to Create Objects

function Dog1() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Add your code below this line
  
let hound = new Dog1;
console.log(hound);

// 7. Extend Constructors to Receive Arguements

function Dog2(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4
};

let terrier = new Dog2;
terrier.name = 'maxy';
terrier.color = 'salt and pepper';
console.log(terrier)

// 8. Verify an Objects Constructor with instanceOf

/* jshint expr: true */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Add your code below this line
    let myHouse = new House(6);
    console.log(myHouse instanceof House);

// 9. Understand Own Properties

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Add your code below this line
  
  for (let property in canary) {
      if(canary.hasOwnProperty(property)) {
          ownProps.push(property)
      }
  }

  console.log(ownProps);
  
// 10. Use Prototype Properties to Reduce Duplicate Code

function Dog3(name) {
    this.name = name;
  }
  
  Dog3.prototype.numLegs = 4
  
  // Add your code above this line
  let beagle = new Dog3("Snoopy");
  console.log(beagle.numLegs);

// 11. Iterate Over All Properties

function Dog4(name) {
    this.name = name;
  }
  
  Dog4.prototype.numLegs = 4;
  
  let beagle1 = new Dog4("Snoopy");
  
  let ownProps1 = [];
  let prototypeProps1 = [];
  
  // Add your code below this line 
  for (let property in beagle1) {
    //   console.log(beagle1.hasOwnProperty(property))
      if(beagle1.hasOwnProperty(property)) {
          ownProps1.push(property);
      } else {
        prototypeProps1.push(property);
    }
  }

  console.log(ownProps1);
  console.log(prototypeProps1);

// 12. Understand the Consctructor Property

function Dog5(name) {
    this.name = name;
  }
  
  // Add your code below this line
  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog5) {
        return true;
    } else {
        return false;
    }
  };

//   13. Change the Prototype to a New Object

function Dog6(name) {
    this.name = name; 
  }
  
  Dog6.prototype = {
    // Add your code below this line
    numLegs: 4,
    eat: function() {
        return 'EAT'
    },
    describe: function() {
        return 'Describe'
    }

  };

// 14. Remember to Set the Constructor Property when Changing the Protoype

function Dog7(name) {
    this.name = name; 
  }
  
  // Modify the code below this line
  Dog7.prototype = {
    constructor: Dog7, // This line is what was added to set the constructor to the Dog type
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom"); 
    }, 
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };

// 15. Understand Where an Objects Prototype Comes from

function Dog8(name) {
    this.name = name;
  }
  
  let beagle2 = new Dog8("Snoopy");
  
  // Add your code below this line
  console.log(Dog8.prototype.isPrototypeOf(beagle2));

// 16. Understand the Prototype Chain

function Dog9(name) {
    this.name = name;
  }
  
  let beagle3 = new Dog9("Snoopy");
  
  Dog9.prototype.isPrototypeOf(beagle3);  // => true
  
  // Fix the code below so that it evaluates to true
  console.log(Object.prototype.isPrototypeOf(Dog9.prototype));
  
// 17. Use Inheritance So You Don't Repeat Yourself

function Cat(name) {
    this.name = name; 
  }
  
  Cat.prototype = {
    constructor: Cat, 
  };
  
  function Bear(name) {
    this.name = name; 
  }
  
  Bear.prototype = {
    constructor: Bear, 
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };

// 18. Inherit Behaviors from a Supertype

function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck3 = Object.create(Animal.prototype); // Change this line
let beagle4 = Object.create(Animal.prototype); // Change this line

console.log(duck3.eat()); // Should print "nom nom nom"
beagle4.eat(); // Should print "nom nom nom" 

// 19. Set the Child's Prototype to an Instance of the Parent

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog10() { }

// Add your code below this line
Dog10.prototype = Object.create(Animal.prototype);

let beagle5 = new Dog10();
console.log(beagle5.eat());  // Should print "nom nom nom"

// 20. Reset an Inherited Constructor Property

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle6 = new Dog();
console.log(duck);
console.log(beagle6);

// 21. Add Methods After Inheritance

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof!");
}


// Add your code above this line

let beagle7 = new Dog();

console.log(beagle7.eat()); // Should print "nom nom nom"
console.log(beagle7.bark()); // Should print "Woof!"
