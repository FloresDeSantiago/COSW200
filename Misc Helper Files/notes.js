oneB = prompt("You put on your clothes, grabbed your sword and secured it. Do you want to look out the Window [W], open the door [D] or look around the room [R]");


if(oneB == "W") {
    oneC = prompt("You look outside the window and see a sign. You're at the Sin Alcove Tavern but you don't remember why or how you got here. You notice the window can be opened. Do you want to climb out the window [W] or look around the room [R]?");

    if(oneC == "W") {
        alert("D");
    } else if(oneC == "R") {
        smarts =+ 1;
        alert(smarts);
    }

} else if(oneB == "D") {
    alert("D");
} else if(oneB == "R") {
    smarts =+ 1;
    alert(smarts);
}








intro();


function intro() {
    name = prompt("Welcome! What is your name?");
    //look into cancel is not returning false and activating that alert
    if(name == false) {
      //another timer
      alert("Tell me your name WTF");
      intro();
    }
    ready = confirm("Ok " + name + " are you ready to start the game?");

    if(ready == true) {
        theGame();
    } else {
    // this is where i can put a countdown timer and then itiate thegame again
        alert("else daeg");
        intro();
      }
}


function theGame() {
    alert("...");
    alert("...");
    alert("You hear faint murmurs outside of the room");
    alert("As you come into consciousness, you realize you don't remember how you got here. You're in a small room, your gear is laid out on the chair next to the bed. There's a window opposite to you and a door to the left.");

    choiceOne();


}

var gear = false;
var room = false;

function choiceOne() {

  g = "Do you want to grab your gear [G]. ";
  w = "Look out the Window [W]. ";
  d = "Open the door [D] ";
  r = "Look around the room [R]";



  if(gear == true) {
      oneA = prompt(w + d + " or " + r);
  } else if(room == true) {
      oneA = prompt(g + w + d);
  } else if(gear == true && room == true) {
      oneA = prompt(w + d);
  } else {
      oneA = prompt(g + w + d + " or " + r);
  }

  if(oneA == "G") {
      alert("You grabbed your gear");
      gear = true;
      choiceOne();
  } else if(oneA == "W") {
      alert("You looked out the window");
  } else if(oneA == "D") {
      alert("You opened the door");
  } else if(oneA == "R") {
      room = true;
      alert("You looked around the room");
      choiceOne();
  }

}

function tavern() {

}

function outside() {


}
