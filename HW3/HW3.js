// String Method - 1
do {
    str = prompt("Enter a sentence that has more than 25 characters: ");

    if (str.length < 25) {
        alert("The string has to be greater than 25 characters. Please enter another string.");
    } else {

        stringMethod(str);
        arrayMethod(str);

    }

}while(str.length <= 25);

function stringMethod(str) {
    let myQuote = "There is nothing new under the sun. It has all been done before.";
    document.write("<h1>String Method</h1>");
    // String Method - 2
    document.write("<strong>Original String:</strong> " + str + "<br>");
    // String Method - 3
    document.write("<strong>String in lowercase:</strong> " + str.toLowerCase() + "<br>");
    // String Method - 4
    document.write("<strong>String in uppercase:</strong> " + str.toUpperCase() + "<br>");
    // String Method - 5
    document.write("<strong>Your string is</strong> " + str.length + "<strong> characters long.</strong>" + "<br>");
    let newStr = str.slice(5,10);
    // String Method - 6
    document.write("<strong>Index 5 and index 10: </strong>" + newStr  + "<br>");
    let newStr2 = str.substr(8,5);
    // String Method - 7
    document.write("<strong>Position 8 with the next 5 characters: </strong>" + newStr2  + "<br>");
    // String Method - 8
    document.write("<strong>Combine with another string: </strong>" + myQuote + " " + str  + "<br>")

}


function arrayMethod(str) {
    // String Method - 9
    let newStr3 = str.split(" ");
    document.write("<h1>Array Method</h1>");
    // Array method - 1
    document.write("<strong>List of array values:</strong> " + newStr3  + "<br>");
    // Array method - 2
    document.write("<strong>Total number of items in the array are:</strong> " + newStr3.length + "<br>");
    // Array method - 3
    newStr3.shift();
    document.write("<strong>Remove first item from array:</strong> " + newStr3 + "<br>");
    // Array method - 4
    newStr3.push("banana");
    document.write("<strong>Pushed banana into the mix:</strong> " + newStr3 + "<br>");
    // Array method - 5
    let newStr4 = newStr3.reverse();
    document.write("<strong>Reverse array:</strong> " + newStr4 + "<br>");

    //document.write(newStr3[1] + "<br>");


    // Array method - 6
    newStr3.splice(1,1, 'stardust');
    document.write("<strong>Adding stardust: </strong>" + newStr3 + "<br>");
    // Array method - 7
    let newStr6 = newStr3.sort();
    document.write("<strong>Alphabetical order: </strong>" + newStr6 + "<br>");
}