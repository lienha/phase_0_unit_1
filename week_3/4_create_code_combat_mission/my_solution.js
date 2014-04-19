// I worked [by myself, with: Zach Pflederer] on this challenge


// Objective: Find Minnie in DisneyWorld

// Pseudocode

// Mickey starts out at Cinderella's Castle. He can't find Minnie, and he's sad and lonely. Help Mickey search DisneyWorld
// for Minnie.

// Characters: Mickey & Minnie

var mickey = {
    name: "Mickey",
    status: "sad and lonely",
    location: (50, 50),
    significantOther: "Minnie"
}

var minnie = {
    name: "Minnie",
    status: "anxious and wondering why she's alone",
    location: (25, 75),
    significantOther: "Mickey"
}

// Functions

    // Movement
    var movement = function(x, y) {
        this.location = (x, y);
    };

    // Search
    var search = function(x, y) {
        if (this.location(x, y) === minnie.location) {
            console.log("You found her! You win! Yaaaaaaaaaay!");
            mickey.status = "happy!";
            minnie.status = "happy!";
        } else {
            console.log("Minnie's not here. Keep looking.");
        };
    };

// Move Mickey down to Main Street.
mickey.movement(50, 30);
// Look around for Minnie.
mickey.search(50, 30);
// Move Mickey up to Cinderella's Castle.
mickey.movement(50, 50);
// Move right to Tomorrowland.
mickey.movement(60, 50);
// Look around for Minnie.
mickey.search(60, 50);
// Move left twice to Adventureland.
mickey.movement(40, 50);
mickey.movement(35, 50);
// Look around for Minnie.
mickey.search(35, 50);
// Move up to Fantasyland.
mickey.movement(25, 75);
// Look around for Minnie.
mickey.search(25, 75);
// Minnie found.
    

// Reflection
// Figuring out the storyline took some time. Once we had it nailed, the rest wasn't difficult.
// 
