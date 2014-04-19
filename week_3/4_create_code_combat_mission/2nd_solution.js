// I worked [by myself, with: Lienha Carleton, Joey Rosztoczy] on this challenge

// Your mission description:
// Mario Combat! 
// Objective: Navigate the obstacles to rescue the plumber's wife/princess. 
// Description: Watch out for the man-eating pipe-flower! Grab a mushroom
// too protect yourself from an enemy hit! Jump the gap and make it to the
// princess's castle. 

// Pseudocode
// 1. Create Mario!
// 2. Create the Castle (give it a location)
// 3. Create man-eating pipe-flower aka piranha plant
// 4. Create the hole in the ground??!!
// 5. Create a mushroom, we need to find one eventually!
// 6. Create a function so that our hero can move!
// 7. Watch out for the man-eating pipe-flower!
// 8. Grab the mushroom for extra health!
// 9. Jump over the hole in the ground so you don't die!
// 10. Arrive at the princesses castle to rescue her!

// Initial Code
var mario = {
    name: "Mario",
    location: (-100,-100),
    weight: 170,
    height: 5,
    health: 7
    }
    
var castle = {
    name: "Castle",
    location: (100,100),
    width: 1000,
    height: 500,
}

var piranhaPlant = {
    name: "Piranha Plant",
    location: (-100,-50),
    height: 10,
    width: 100,
    eatEnemies =  function() {
        if this.location === piranhaPlant.location {
            console.log("Woops, you got totally eaten :(");
        } else {
            console.log("Damnit get back here!");
        }; 
    }
}

var hole = {
  name: "hole",
  location: (-100,-25),
  height: -10,
  width: 200
  }

var mushroom = {
  name: "mushroom",
  location: (-100, -5),
  height: 0.2,
  weight: 1,
  health = function() {
      if this.location === mushroom.location {
          this.health += 4;
          } else {
            console.log("Sorry, you missed the extra benefit.")
            };
  };
 
 var movement = function(x,y) {
  this.location = (x, y)
  };

var gameOver = function() {
  if(this.location === castle.location) {
    console.log("You won!")
    };
    else if(this.health === 0) {
      console.log("You're dead!")
      };
    else {
      console.log("You lost! Try next time.")
      };
    };
  
  mario.location = (-100,-51);
  mario.location = (-99, -54);
  mario.location = (100,100);
  
  

// Refactored Code
//We are freaking awesome?





// Reflection
// It was fun working with Joey on this exercise.
// 
// 
// 
// 
// 
// 
// 