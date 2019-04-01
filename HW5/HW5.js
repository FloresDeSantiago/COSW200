update();

let bool = false;

function action() {
    let userInput = prompt("Add a new quality to the list:");
    bool = true;

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

    if(bool == true) {
        let confirmAction = document.createElement('p');

        confirmAction.innerHTML = "New item has been added to the list";
        document.getElementById('real').appendChild(confirmAction);
    }



}


function highlight() {
    let list = document.getElementsByTagName('li');
    let r1 = Math.floor((Math.random() * list.length));
    let r2 = Math.floor((Math.random() * list.length));
    let r3 = Math.floor((Math.random() * list.length));
    let i1 = list[r1];
    let i2 = list[r2];
    let i3 = list[r3];

    if(list.length >= 3) {

        i1.className = 'must', i2.className = 'must', i3.className = 'must';

        //let confirmAction = document.createElement('p');

        //confirmAction.innerHTML = "New item has been added to the list";
        //document.getElementById('real').appendChild(confirmAction);


    }

    //displayHighlight(i1, i2, i3);
}


/* function displayHighlight(i1, i2, i3) {


    console.log(i1);
    console.log(i2);
    console.log(i3);

    let go2ul = document.getElementById("test");

    go2ul.appendChild(i1);
    let thisnode = document.createTextNode(i1);
    //go2ul.appendChild(thisnode);


    console.log(go2ul);
    console.log(thisnode);
    */



/*
    todo info i've passed the bullet points to this function now im getting confused on how to display them



    let topItems = document.create('il');
    let newQuality = document.createTextNode(i1);
    topItems.appendChild(newQuality);

    let firstList = document.createElement('ul')[1];
    firstList.appendChild(topItems);

 */

}


// TODO Create a second button that will call a function that will highlight three random qualities using Math.random() from the list.
// TODO The highlight should be a different background color (similar to "cool" in the example) or somehow noticeably different.
// TODO --------
// TODO Additionally add a paragraph that says "The top qualities are highlighted below" somewhere on the page.
// TODO Create a third button that will call a function that will randomly remove 1 of the qualities from the list.
// TODO Add a paragraph that confirms an item was removed