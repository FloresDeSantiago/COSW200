



intro();


function intro() {
    name = prompt("Welcome! What is your name?");
    //look into cancel is not returning false and activating that alert
    if(name == false) {
      //another timer
      alert("Tell me your name!!!!!!");
      intro();
    }
    ready = confirm("Ok " + name + " are you ready to start the game?");

    if(ready == true) {
        theGame();
    } else {
    // this is where i can put a countdown timer and then itiate thegame again
        alert("What about now? this is a loop you can't get out of it!");
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

function choiceOne(gear) {

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
      choiceOne(gear);
  } else if(oneA == "W") {
      win = confirm("You look outside the window and see a sign. You're at the Sin Alcove Tavern but you don't remember why or how you got here. You notice the window can be opened. Do you want to climb out the window?");
      if(win == true) {
        outside();
      } else {
        choiceOne();
      }
  } else if(oneA == "D") {
      alert("You opened the door and went down stairs.");
      tavern();
  } else if(oneA == "R") {
      room = true;
      alert("You looked around the room");
      choiceOne();
  }

}



function tavern() {
  alert("You're in a thriving tavern! As you make it to the bottom of the stairs, the bartender calls out to you and ushers you over to him.");
  alert("The bartender says, 'Must've not learned anything, I told you not to drink so much, the mark is to your right, you have to finish the job!' He hands you a gun with a full clip of 10 bullets and a brew.");

  choiceThree = prompt("Do you drink the beer [B] or shoot [S] first?");
    if(choiceThree == "B") {
      alert("You drink the whole thing");
      alert("Your drunk now, but you have to do the job! You grab the gun, point it at the mark and realize you're inebriated! You think its a good idea to shoot more bullets to compensate! How many shots do you take out of a clip of 10?");
      shots = prompt("How many shots do you fire?");
      drunk(shots);
    } else if(choiceThree == "S") {
      alert("You line up the shot and shoot! It hits, he's dead. There's a huge commotion of people trying to escape! The bartender gives you a large sum of money and you walk out the door. You remembered you're a hitman and this was your lastest job. You drank a lot yesterday and blacked out because you were celebrating your birthday. You walk out the front door. you steal a horse and make you're way into the next city to get your next job.");
      end();

    }
}

function drunk(shots) {
 for(i = 0; i < shots; i++) {
   alert("you shoot" + (i + 1) + " times");
 }
 alert("You missed! You're drunk! What were you thinking?!?");
 alert("The mark shoots back and lands! You're hurt... You're dying... Who drinks on the job??!?!? ");
 end();


}

function outside() {

  var distance = Math.floor((Math.random() * 10) + 1);
  var money = Math.floor((Math.random() * 10000000) + 1);

  choiceTwo = prompt("you crawl onto the roof of the tavern. It's about a 15 foot drop to the ground. Do you want to drop down [D] or look for another way down? [L]");

  if(choiceTwo == "D") {
    twoA = prompt("You dropped down, more like stumbled and fell. You broke your legs! They're parallel to your thighs now and cannot walk anymore! You're freaking out, you need to go to the doctor but you have no money! Do you want to live your life with broken legs [B] or go to the doctor [D]? ");

      if(twoA == "B") {
          alert("You're leg-broke person, you're known through the city as the drunkard who walked off the roof and broke their legs. Some pity you, others laugh and ask why you didn't find another way down. Those were the choices in life. Nowadays you spend your days in the town square drinking and regretting your decision.");
          end();
      } else if(twoA == "D") {
          twoB = prompt("You decide to go to the doctor! However you're in so much pain! The doctor is " + distance + " miles away! Do you want to crawl [C] there or call for help [H]?");

            if(twoB == "C") {
              alert("As you start crawling. Carriages are passing by you and you get trampled by a horse and die.");
              end();
            } else if(twoB == "H") {
              alert("You start screaming for help and people start gathering around you. A man who drives a taxi carriage decides to take you to the hospital. You arrive and get fixed up and are able to walk again. However since this is fantasy times with the American Healthcare system..");
              alert("ssshhhhh.... just go with it...");
              alert("You collect a great debt from your medical bills! You are now indebted to doctor because you owe " + money + " pesos and so you spend the rest of your days as a nurse! Which is not too bad. Better than breaking your legs. 👀 👀 👀");
              end();
            }

      }
  } else if(choiceTwo == "L") {
      alert("You look around! At the edge of the roof you find a lower roof that you can drop down to so you drop down. Now you're about 8 feet off the ground. At this point you go to the edge and grip it as you slowly lower your body. At this point from feet to ground you are about 2-3 feet off the ground and you let go and make it safely.");
      alert("Why were you in the tavern? Who knows?! You're out now! The world is your oyster! You steal a horse and get out of the city and live your life happily ever after!");
      end();
  }

}


function end() {
    again = confirm("the end! do you want to play again and unlock the other routes?");

    if(again == true) {
      intro();
    } else {
      alert("KTHXBAI!");
      break;
    }

}

// alert("");
