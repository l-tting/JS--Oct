*INTRODUCTION TO JAVASCRIPT*
-> Create a new project called JS-Trainer
-> Then create index.html file 

HTML - skeleton structure of a webpage
CSS - styling and aesthetics

JS -> user interactivity and reactivity

*JS* -> a programming language that runs in the browser used to make html pages dynamic

-> It has 2 core purposes:
*1.User Interactivity*
  -> allow a user to interact with a page ---> anything / any action that a user can perform when using a webpage
  -> e.g. click, scroll, focus, submit, typing, focus, copy, cut , paste
*2.Reactivity*
  -> content is updated dynamically / automatically without having to reload manually


  *where to write JS*
   -> use script tags
1.Internal JS
     -> head section
     -> body section -> right above the closing body tag
2.External JS
     -> a separate JS file linked to html via a script with a src attribute
     -> best used when there is a lot of JS to write or when a developer wants better code organization / management
     -> best practice

*VARIABLES*
-> A named container used to hold / store values

*Variable naming rules*
1.A variable can only contain letters, numbers , underscores and $
2.A variable can only begin with letters ,underscores or $
3.Variable names cannot be reserved keywords
4.Uppercase and lowercase names imply different variables e.g Name, name, NAME, NAMe
5.Variable names should always try and be meaningful


*declaring variables in JS*
1. let keyword
    -> used to declare variables that can be reassigned
2. const keyword
    -> used to declare variables whose values are constant 
    -> values in these variables cannot be changed once assigned
3. var keyword
    -> works just like let but is outdated (depracated)
    -> was replaced by let
    -> was used in older browser versions


let x = 10 --> assignment
x = 12 ---> reassignment (changing value)

let y  -> variable declaration
y = 12 -> assignment
y = 450 -> reassignment


const num = 34
num = 12

*how to output in JS*
-> use console.log() function -> the equivalent of print in Python
-> it outputs in the console window of the browser


*JS DATA TYPES*
1.String
 -> set of alphanumeric char(s) enclosed in single or double quotes
2.Number
-> accounts for both integers and floats
3.Boolean
-> represents Truth values (true or false)


-> to check for data type in JS we use *typeof()* function


*String Operations or Methods*
1. Concatenation 
   -> joining or combining two or more strings
   -> +  -> operator
   -> concat()

2. Template literals -> the equivalent of f-string in Python
      ->embed a variable in a string
      -> uses backticks and a dollar sign

3. Accessing characters in a string
   -> use indexing 
   -> N/B: In JS we dont have -ve indexing
   -> only zero-based indexing is supported
4. Determine the no of characters in a string
     -> length

5. slicing -> extracting a portion of a string to get a substring
       -> slice(start, end)
       -> ending point is not included

6. toUpperCase()->converts all char(s) to upper case format
7. toLowerCase() -> converts all char(s) to lower case format
8. includes() -> checks whether a string has a specific char or set of chars and returns boolean
9. startsWith() -> checks whether a string starts with a specific char or set of chars and returns boolean
10. endsWith() -> checks whether a string ends with a specific char or set of chars and returns boolean
11. trim() - remove whitespaces from a string  from both sides
           -> trimLeft() or trimStart()
           -> trimRight() or trimEnd()

12. split() -> splits a string into substrings using a speicified char
13. replace() -> replace a char with another
*Numeric Operations*
1. Addition -> +
2. Subtraction -> -
3. Multiplication -> *
4. Division -> /
5. Modulus -> %
6. Exponent -> ** e.g. 2**4 -> 2 * 2 * 2 * 2
7. increment -> increase initial value by 1
8. decrement -> decrease initial value by 1

*Comments*
-> A way to document code 
1.Single line comments 
2.Block Comments  
 //



*Task* 
1. Find out what the followingg string methods do :
   -> split()    -> replace()
2. Task on slide 56


*JS OPERATORS*
*1.Arithmetic Operators*
    -> used for arithmetic functions
    -> + , - , / , * , **, %, ++ , --
*2.Comparison Operators*
  -> used to compare two or more values and return a boolean
  -> == : loose equality sign : checks for value alone and ignores data types -> allows for type coercion
  -> === : strict equality sign : checks for both value and data type -> doesnt allow for type coercion 
  -> != : loose inequality sign
  -> !== : strict inequality sign
  -> > , < , >= , <=
*3.Logical Operators*
   -> used for logical operations
   -> logical and : returns true only if all conditions are true ---> &&
   -> logical or : returns true if at least one is true ----> ||
   -> logical not : negates a boolean value  ----> !
*4.Assignment Operators*
   -> used to assign values to variables
   -> = : default assignment operator
   -> += : add then assign
   -> -= : subtract then assign 
   -> /= , *= ,**=, %=


   + -> has 2 functions
     -> strings (concat)
     -> numeric values (sum)

     *Polymorphism* -> where an object takes more than form / function
        -> method and operator overloading
        -> operator overloading : an operator has more than more than one function e.g. (+)


"5" , 5 => 5 + "5" => "5" + "5" = "55"

5 * "5" => 5 * 5 = 25


*Type coercion vs Type conversion*
*Type coercion*  -> the automatic / implicit  conversion of data from one type to another -> done 
   by the program / language
*Type conversion* -> the explicit conversion of data from one type to another -> done by the 
   programmer


   *N/B:* -> The only string that can be converted to a number is a digit string
   *digit string* -> a string made up only of numbers


   let str = "123"

   5 == 5 -> true


*CONDITIONAL STATEMENTS*
-> These are structures that allow a program to make decisions based on some predefined conditions after taking an input

-> Types of conditional statements:
1. if statement
2. ternary operator

*if statement*
-> uses the if keyword 
-> syntax :
     if ( condition..){
         //what happens if the condition is met / true
     }else{
        // what happens if the condition isnt met / is false
     }

  *taking user input in JS*
  -> We take user input using prompt()
  -> Any data coming from user input is usually a string


  *multiple conditions with if statements*
  if (condition 1...){
    //what happens if condition 1 is met
  }else if(condition 2){
    //what happens if condition 2 is met
  }else{
    //what happens if all conditions arent met
  }


  *write a program that takes 3 user inputs as numbers and compares which is the largest -> output the largest of the 3*

  *task on conditional statements*
  -> slide 69 : do all questions
  