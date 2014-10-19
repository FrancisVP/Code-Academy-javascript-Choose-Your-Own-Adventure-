// Check if the user is ready to play!
confirm("Ready?")

// Prompt user and check their age.
var age = prompt("How old are ya?");

if ( age < 13 )
{
    console.log("You must be at least 13 to play, but I like you so go ahead.");
}
else
{
    console.log("YEah, you're old enough... Go ahead!");
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

//Prompt user for their desire to race Justin and contine the story
var userAnswer = prompt("Do you want to race Bieber on stage?");

if (userAnswer === "yes")
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
    
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

// Ask the player for feedback

var feedback = prompt("How much fun was that? Please rate out of 10.");

if ( feedback >= 8 )
{
    console.log("Thank you! We should race at the next concert!");
}
else
{
    console.log("I'll keep practicing coding and racing.");
}