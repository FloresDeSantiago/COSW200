alert("Welcome to the Parenting Simulation Game!");

// replaced all var with let

let readyToGo = confirm("Are you ready to get started?");

if (readyToGo) {
    alert("Great, let's get started. Please check the console for the game.");
    // no semi colon
    setTimeout(greeting, 5000);
    setTimeout(createKids, 15000);
    setTimeout(getCareer, 25000);
    setTimeout(lifeSituation, 35000);
    setTimeout(endGame, 45000);
}
else {
    alert("Boo. Come back when you are ready to play.")
}
//extra ending bracket



function greeting() {
    let msg1="";
    let playerName = prompt("Before we get started... what is your name?");
    msg1 += "<p>Hi there, " + playerName + "! Glad to have you here.</p>";
    msg1 +="<p>Let the simulation begin. This is a fictional story about your life as a parent. It might be good, it might be bad. Some of it is left up to random chance. Some of it is up to your choices! Choose carefully.</p>";
    document.getElementById('greeting').innerHTML = msg1;
    //return msg1;
}

let totKids = Math.floor((Math.random() * 10) + 1);
//moved this up

function createKids() {
    let msg2 = "";

    if (totKids <= 3) {
        msg2 += "<p>You have " + totKids + " kids. Not bad. Manageable.</p>";
    }
    else {
        msg2 += "<p>Wow. You have " + totKids + " kids! You might need to hire some help!</p>";
    }

    let kidDifficulty = Math.floor((Math.random() * 3) + 1);
    switch(kidDifficulty) {
        case 1:
            msg2 += "<p>Your kids are pretty chill and cool. You lucked out.</p>";
            break;
        case 2:
            msg2 += "<p>Your kids are out of control. You need a lot of wine at the end of the day.</p>";
            break;
        case 3:
            msg2 += "<p>You have the coolest kids. The COOLEST kids.</p>";
            break;
    }

    msg2 += "<p>Your house is like this all day long:</p>";
    for (let k=0; k<totKids; k++){
        msg2 += "<p><i>Mom!! I need some help!</i></p>";
    }
    document.getElementById('kids').innerHTML = msg2;
}

function getCareer() {
    let msg3 = "";
    let careerChoice = prompt("What are you most interested in? [C]omputers, [B]ooks, [V]ideo Games, [M]ovies or the [I]nternet? Type in the letter of your choice to continue.");
    // semicolon missing
    let yourcareer = "";

    //declared yourcareer
    switch(careerChoice) {
        case "C":
            yourcareer = "IT Tech Support";
            break;
        case "B":
            yourcareer = "Medical Researcher";
            break;
        case "V":
            yourcareer = "Video Game Quality Assurance";
            break;
        case "M":
            yourcareer = "B Movie Film Star";
            break;
        case "I":
            yourcareer = "Awesome Full Stack Web Developer";
            break;
        default:
            yourcareer = "Unemployed Musician";
            break;
    }
    console.log(yourcareer);

    let yourSalary = Math.floor((Math.random() * 100000) + 10000);

    msg3 += "<p>You work as a " + yourcareer + ". You support your family on an annual salary of " + yourSalary + " dollars.</p>";
    let yourBudget = (yourSalary/totKids);
    yourBudget = yourBudget.toFixed(2);
    msg3 += "<p>Your budget is " + yourBudget + "</p>";
    document.getElementById('career').innerHTML = msg3;
    //removed extra period
}
function lifeSituation() {
    let msg4 = "";
    let getSpouse = prompt("Do you work well with others? [Y]es, [N]o or [M]aybe");

    if (getSpouse === 'Y') {
        msg4 += "<p>You are married to the love of your life. This person is a great parent and helps around the house whenever an opportunity comes up.</p>"; }
    else {
        if (getSpouse === 'N') {
            msg4 += "<p>You are single. Your parents help out when they can.</p>";
        }
        else {
            msg4 += "<p>You are dating someone... again. No clue if this will turn into anything serious or not.</p>";
        }
    }
    document.getElementById('life').innerHTML = msg4;
}

function endGame() {
    alert("Thank you for playing! This is a work in progress. Check the webpage for the output of your scenario.");
    document.getElementById('goodbye').innerHTML = "<p>I hope you like your story. Goodbye.</p>";
}

