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
  console.log(beagle.numLegs)