//start();
update();

let bool = false;
//let firstList = document.getElementsByTagName('ul')[0];

//function start() {
//    document.getElementById('button').addEventListener('click', function(event) {
//        action();
//    });
//}

function action() {
    let userInput = prompt("Add a new quality to the list:");
    bool = true;
    console.log(userInput);

    let newItem = document.createElement('li');
    let newQuality = document.createTextNode(userInput);
    newItem.appendChild(newQuality);

    let firstList = document.getElementsByTagName('ul')[0];
    firstList.appendChild(newItem);
    update(bool);
}

function update(bool) {
    let count = document.getElementById("qualities").childElementCount;
    document.getElementById("listStats").innerHTML = "Total Qualities: " + count;

/*

    let confirmAction = document.createElement("P");
    confirmAction.innerHTML = "New item has been added to the list";
    console.log("New item has been added");
    document.getElementById("real").appendChild(confirmAction);
*/





    if(bool == true) {
        let confirmAction = document.createElement('p');

        confirmAction.innerHTML = "New item has been added to the list";
        console.log("New item has been added");

        document.getElementById('real').appendChild(confirmAction);
    }

/*

    if(bool == true) {
        document.getElementById("stuff").innerHTML = "New item has been added to the list";
        console.log("New item has been added");
    } else if(bool == false) {
        document.getElementById("stuff").innerHTML = "Item has been removed";
        console.log("Item has been removed");
    }

     */

}


function highlight() {
    let list = document.getElementsByTagName('li');

    if(list.length >= 3) {
        let r1 = Math.floor((Math.random() * list.length));
        let r2 = Math.floor((Math.random() * list.length));
        let r3 = Math.floor((Math.random() * list.length));
        let i1 = list[r1];
        let i2 = list[r2];
        let i3 = list[r3];
        i1.className = 'must';
        i2.className = 'must';
        i3.className = 'must';

    }
}





// TODO Create a second button that will call a function that will highlight three random qualities using Math.random() from the list.
// TODO The highlight should be a different background color (similar to "cool" in the example) or somehow noticeably different.
// TODO --------
// TODO Additionally add a paragraph that says "The top qualities are highlighted below" somewhere on the page.
// TODO Create a third button that will call a function that will randomly remove 1 of the qualities from the list.
// TODO Add a paragraph that confirms an item was removed.