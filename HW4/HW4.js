
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
    this.humanity = Math.floor(Math.random() * Math.floor(2));

    this.age = Math.floor(Math.random() * 50) + 10;
}

Character.prototype.roll = function () {

    classValue = Math.floor(Math.random()*characterClassList.length);

    this.charClass = characterClassList[classValue];
    this.charGifts = characterGiftsList[Math.floor(Math.random()*characterGiftsList.length)];
    this.charPhysique = characterPhysiqueList[Math.floor(Math.random()*characterPhysiqueList.length)];
}



function startMenu() {
    stats();
    document.getElementById('button').addEventListener('click', function(event) {
        stats();
    });

}

function stats() {
    let choose = new Character();
    choose.roll();
    document.getElementById("output").innerHTML = "Stats: <br>Class: " + choose.charClass + "<br>Gift: " + choose.charGifts + "<br>Physique: " + choose.charPhysique;
    document.getElementById("chara").innerHTML = "Age: " + choose.age + "<br>Level: " + choose.level + "<br>Vitality: " + choose.vitality + "<br>Attunement: " + choose.attunement + "<br>Endurance: " + choose.endurance + "<br>Strength: " + choose.strength + "<br>Dex: " + choose.dexterity + "<br>Resistance: " + choose.resistance + "<br>Intelligence: " + choose.intelligence + "<br>Faith: " + choose.faith + "<br>Humanity: " + choose.humanity;

    let class1 = ['https://i.imgur.com/RLr0ibq.jpg', 'https://i.imgur.com/ZqtGDzi.jpg', 'https://i.imgur.com/VbpJpp3.jpg', 'https://i.imgur.com/b9OxGh6.jpg', 'https://i.imgur.com/DPIHd6i.jpg', 'https://i.imgur.com/Z19AZRG.jpg', 'https://i.imgur.com/JhnBoLS.jpg', 'https://i.imgur.com/TT4GDJN.jpg', 'https://i.imgur.com/UPpRQBf.jpg', 'https://i.imgur.com/JR6TonF.jpg'];


    document.getElementById('class1').src = class1[classValue];

}

startMenu();


