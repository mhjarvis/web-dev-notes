/* 
 * You want to verify that a variable is defined, is a string, and is not empty before using it.
 */


/* Get user string input */
let str = prompt("Please enter a string to test: ");

while(checkEmpty(str) === true) {
    str = prompt("You entered a empty string\nPlease enter a non-empty string: ");
}

console.log("The string you entered is: " + str);

function checkEmpty(str) {
    if(typeof str === 'string' && str.trim().length > 0) {
        return false;
    }
    return true;
}