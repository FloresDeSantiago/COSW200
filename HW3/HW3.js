



do {
    str = prompt("Enter a sentence that has more than 25 characters: ");

    if (str.length < 25) {
        alert("The string has to be greater than 25 characters. Please enter another string.");
    } else {

        stringMethod(str);

    }

}while(str.length <= 25)

function stringMethod(str) {

    let myQuote = "There is nothing new under the sun. It has all been done before.";

    document.write("Original String: " + str + "<br>");
    document.write("String in lowercase: " + str.toLowerCase() + "<br>");
    document.write("String in uppercase: " + str.toUpperCase() + "<br>");
    document.write("Your string is " + str.length + " characters long." + "<br>");
    let newStr = str.slice(5,11);
    document.write(newStr);
    let newStr2 = str.substring(8,5);
    document.write(newStr2);


    document.write(myQuote + " " + myQuote)

}






















/*

Create a program in CodePen that prompts for the input of at least five words (a total of 25+ characters) string from a user and performs the following functions to it:

STRING METHODS

TODO Check to see if the string input meets the 25+ character limit. If it does not, send a message and ask for another string. ----------- DONE
TODO Output the original string as it was entered onto the web page document. ---------------------------------------------------------- DONE
TODO Output the original string in all lower case letters. Do not change the original string value. ------------------------------------------ DONE
TODO Output the original string in all upper case letters. Do not change the original string value. ----------------------------------------- DONE
TODO Output a message indicating the total characters within the string. ----------------------------------------------------------------- DONE
TODO Output the characters between index 5 and index 10. ----------------------------------------------------------------- DONE
TODO Output 5 characters starting from position 8. ----------------------------------------------------------------- DONE
TODO Combine the string with another string of your choice that also has 25+ characters. Output the new string. ----------------------- DONE
TODO Finally, split your string into an array for the 2nd part of the assignment. Each word (not each character) should be a value for the array.


todo ---------------------------------------------ARRAY METHODS---------------------------------------------
TODO ----------------------------------------------------------------------------------------------------------------------------------
TODO Output the list of array values.
TODO Output the total number of items in the array.
TODO Remove the first item in the array. Output the new array values.
TODO Add the word "banana" to the end of the array. Output the new array values.
TODO Reverse the elements in the array. Output the new array values.
TODO Replace the item in the 2nd position/key with the word stardust. Output the new array values showing the word in the correct position.
TODO Sort the array in alphabetical order. Output the alphabetical list of array values.



 */