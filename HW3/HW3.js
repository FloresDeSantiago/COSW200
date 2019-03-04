
do {
    str = prompt("Enter a sentence that has more than 25 characters: ");

    if (str.length < 25) {
        alert("The string has to be greater than 25 characters. Please enter another string.");
    } else {

        stringMethod(str);
        arrayMethod(str);

    }

}while(str.length <= 25)

function stringMethod(str) {
    let myQuote = "There is nothing new under the sun. It has all been done before.";

    document.write("<h1>String Method</h1>");
    document.write("Original String: " + str + "<br>");
    document.write("String in lowercase: " + str.toLowerCase() + "<br>");
    document.write("String in uppercase: " + str.toUpperCase() + "<br>");
    document.write("Your string is " + str.length + " characters long." + "<br>");
    let newStr = str.slice(5,11);
    document.write(newStr  + "<br>");
    let newStr2 = str.substr(8,5);
    document.write(newStr2  + "<br>");
    document.write(myQuote + " " + str  + "<br>")

}


function arrayMethod(str) {
    let newStr3 = str.split(" ");
    document.write("<h1>Array Method</h1>");
    document.write("List of array values: " + newStr3  + "<br>");
    document.write("Total number of items in the array are: " + newStr3.length + "<br>");
    newStr3.shift();
    document.write("Remove first item from array: " + newStr3 + "<br>")
    newStr3.push("banana");
    document.write("Pushed banana into the mix: " + newStr3 + "<br>");
    let newStr4 = newStr3.reverse();
    document.write("Reverse array: " + newStr4 + "<br>");
    document.write(newStr3[1] + "<br>");
    newStr3.splice(1,1, 'stardust');
    document.write("adding stardust:" + newStr3 + "<br>");
    let newStr6 = newStr3.sort();
    document.write("Alphabetical order: " + newStr6 + "<br>");
}