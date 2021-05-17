# 1.1 Check for an Existing, Non-empty String

Checking if a variable is of the type string:

    if(typeof someVar === 'string') {                                  
      return true;
    }
    
Checking that you have a non-empty string (excluding an empty string ''):

    if(typeof someVar === 'string' && someVar.length > 0) {
      return true;
    }
    
Using ```String.trim()``` method to weed out strings made up of whitespace:

    if(typeof someVar === 'string' && someVar.trim().length > 0) {
      return true;
    }
    
REMEMBER: null values, undefined values, and empty strings ('') are all falsy value in JavaScript. So, the following will return true:

    if(someVar) {                           // works if someVar is declared, is not null, and is not the empty string ''
      return true;
    }
    
# 1.2 Convert a Numeric Value to a Formatted String
You want to create a string representation of a number.

https://learning.oreilly.com/library/view/javascript-cookbook-3rd/9781492055747/ch02.html
