
let characterClassList = ["Warrior", "Knight", "Wanderer", "Thief", "Bandit", "Hunter", "Sorcerer", "Pyromancer", "Clewric", "Deprived"];
let characterGiftsList = ["None", "Goddess\'s Blessing", "Black Firebomb", "Twin Humanities", "Binoculars", "Pendant", "Master Key", "Tiny Being\'s Ring", "Old Witch\'s ring"];
// no race in dark souls, weight instead
let characterPhysiqueList = ["Average", "Slim", "Very Slim", "Large", "Very Large", "Large Upper Body", "Large Lower Body", "Top-heavy", "Tiny Head"];

function Character() {
    this.level = Math.floor(Math.random() * Math.floor(50));
    this.vitality = Math.floor(Math.random() * Math.floor(50));
    this.attunement = Math.floor(Math.random() * Math.floor(50));
    this.endurance = Math.floor(Math.random() * Math.floor(50));
    this.strength = Math.floor(Math.random() * Math.floor(50));
    this.dexterity = Math.floor(Math.random() * Math.floor(50));
    this.resistance = Math.floor(Math.random() * Math.floor(50));
    this.intelligence = Math.floor(Math.random() * Math.floor(50));
    this.faith = Math.floor(Math.random() * Math.floor(50));
    this.humanity = Math.floor(Math.random() * Math.floor(50));

    this.age = Math.floor(Math.random() * 50) + 10;
}

Character.prototype.roll = function () {
    this.charClass = characterClassList[Math.floor(Math.random()*charRaceList.length)];
    this.charGifts = characterGiftsList[Math.floor(Math.random()*charClassList.length)];
    this.charPhysique = characterPhysiqueList[Math.floor(Math.random()*charWeaponList.length)];
}



function startGame() {
    document.getElementById("output").innerHTML = "This is the output of the character generator";
}

startGame();


