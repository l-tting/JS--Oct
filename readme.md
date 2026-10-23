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

12. split() -> splits a string into substrings using a specified char
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
  

  Create a variable called year and enter the a random year. Check if the year is a leap year or not. A leap year is a year that is divisible by 4  not divisible by 100 or divisible  by 400.
   -> if a year is not divisible 4 , it is definitely not leap
   -> if a year is divisible by only 100 , it is also definitely not leap
   -> but if a year is divisible by both 100 and 400 , it is automatically leap



   1800 -> by 100
        -> 400

   1600 , 2000-> divisible by 100 and 400 


   *ternary operator*
-> Is a shorthand / a simpler way to write a simple if-else statement
-> Just like a simple if-else statement , it is only used when there is one condition being checked
-> Symbol : ? 

-> syntax : condition ?  what happens if condition is true : what happens if condition is false


*JS COLLECTIONS*
-> Are structures that can hold more than one value at a time
1.Arrays
2.Objects

*JS ARRAYS*
-> Are the equivalent of Python lists
   *properties of arrays*
1.They can hold multiple values of any data type
2.They are ordered -> array items can be accessed via index
  *N/B:* By default JS arrays dont allow -ve indexing , to use -ve indexing we use a method called at()
3.They are mutable -> values can be changed 
4.They have access to methods
5.Values in an array are comma-separated 


  *JS OPERATIONS*
1.Accessing array items - using indexing 
     -> default indexing []
     -> use at() method : allows for -ve indexing
2.Updating array values -> use indexing
3.Length - gives the no of items in an array
      -> by default when you output an array it shows length 
4.Slicing -> extracts a portion of an array
      -> slice(start, end) : end point not inclusive
      slice (2,6)
5.Adding items 
    -> push() : add items at the end of an array
    -> unshift() : add items at the start of an array
6.Removing items
    -> pop() : removes the last element in an array
    -> shift() : removes the first element in an array
7.Splice : can be used to remove , add or replace items in an array
   -> splice(start, delete_count, items to add)
8.Concat -> combining two or more arrays
9.reverse -> reverses the order of an array 
10.includes -> checks whether an element is contained in an array
11.sort -> sorts array items in alphabetical order
12.join -> used to combine array elements using a specified char

   *Task*
1.Find out what concat(), includes(),reverse(),sort() methods do and attempt to use them
2.Do all tasks on slide 72 & 73


*JS OBJECTS*
-> Are collections that store data in key-value pair format
-> they are the equivalent of Python dictionaries

   *properties of objects*
1.Store data in key-value pairs
2.Key is used to access the value
3.They key must be unique
4.They keys are considered to be strings
5.Values can be of any data type

*property*
-> property = key + value
*how to access values*
 -> use the key to access the values
 -> we have 2 ways of accessing values using keys:
  *1.Dot Notation*
     -> used when the key follows variable / identifier naming rules 
  *2.Bracket notation*
     -> used whether the key follows variable / identifier naming rules or not

*Object methods*
1.Object.keys() -> returns all keys of an object in an array
2.Object.values() ->returns all object values in an array
3.Object.entries() -> returns each key value pair in a subarray and all subarrays in on one array
*Complex structures*

*Task*
1. slide 78 & 79

2. In the structure below, output: "PostgreSQL" and "Deploy to Netlify"

      const userProfile = {
         id: 101,
         name: {
            first: "Brian",
            last: "Letting",
         },
         contact: {
            email: "jeff@example.com",
            phones: ["+254700000001", "+254700000002"],
         },
         address: {
            current: {
               city: "Nairobi",
               street: "Westlands Ave",
               postalCode: "00100",
            },
            previous: [
               {
               city: "Eldoret",
               street: "Main Street",
               postalCode: "30100",
               },
               {
               city: "Kisumu",
               street: "Lake View Road",
               postalCode: "40100",
               },
            ],
         },
         preferences: {
            theme: "dark",
            language: "en",
            notifications: {
               email: true,
               sms: false,
               push: ["promotions", "updates"],
            },
         },
         projects: [
            {
               id: 1,
               name: "POS System",
               technologies: ["React", "FastAPI", "PostgreSQL"],
               tasks: [
               { title: "Set up DB", done: true },
               { title: "Design UI", done: false },
               ],
            },
            {
               id: 2,
               name: "Portfolio Website",
               technologies: ["HTML", "CSS", "JavaScript"],
               tasks: [
               { title: "Create About Page", done: true },
               { title: "Deploy to Netlify", done: false },
               ],
            },
         ],
      };

*Task3*
1. Remove a middle character: Given "planet", produce "planet" without the third character, resulting in "planet" with the a removed: "plnet".

2. Compare fractions: Given a = 3, b = 7, c = 4, d = 9, determine which fraction is larger without dividing the fractions.

3. Insert a character: Given "helloworld", produce "hello-world" by inserting a hyphen

4. Discount calculator: A customer gets a 5% discount for spending at least 1,000 and a 15% discount for spending at least 5,000. Calculate the final price.

5. Electricity billing: Calculate a bill using these rates: the first 100 units cost 5 per unit, the next 100 cost 8 per unit, and units above 200 cost 12 per unit.

----> push your work to github and share your github link in the group-------->



*JS LOOPS*
==> Are structures that are used to execute a task repeatedly until a specified condition is met
-> meant to remove tediousness from tasks
*Types of loops and syntax*


1.for loop 
    -> is used when the no of iterations is known before hand
    -> uses the for keyword
    *syntax*

    for( initialization; condition ; update ){
        //block of code to be executed repeatedly
    }

   *initialization*
      -> the starting point of a loop
      e.g loop from 1 to 1000 -> initialization is 1
   *condition*
      -> this is what keeps the loop running -> as long as the condition is met , the loop keeps running
      -> when the condition is no longer met, the loop breaks
   *update*
      -> increment / decrement after each iteration (++ / --)


2.while loop
*Looping through arrays*
   -> when looping through arrays , i will represent index


*while loop*
   -> is only concerned with the condition -> as long as the condition is met the loop keeps running
*Nested Loops*



*task*
slide 82


0-50m           51-100m           >100m
////             //


let x = 6


RAM
ROM -> 


let x = 5


*NESTED LOOPS* 
--> A loop within another loop


for(let i = 0; i <= 10; i++){
    for( let j= 0 ; j<= 5; j++){
        ///-------
    }
}
For every single iteration of the outer loop , the inner loop must execute to completion

*TASK*
Link in slide 83 intermediary questions -> questions 1 to 


*TASK*
-> questions 12,13,14


*FUNCTIONS*
-> A block of reusable code meant to perform a specific task

*Why use functions?*
1.Reusability
2.Modularity
3.Code organization and maintanability
4.Scalability
5.Better debugging


*Parts of a function*
1.Function definition
  -> function keyword + function name + possible parameters
2.Function body
  -> block containing the specific task to be executed by the function
3.Function call
  -> calling a function by its name so that it executes the task in the function body

*Syntax of a function in JS*

function function_name(){
    //function body
}

e.g. function check_even(){
     ....
}

function check_even(x){
   .....
}

check_even() -> func call

*Making functions reusable*
-> a function is made reusable by allowing it to take parameters

*parameters vs arguments*
Parameter : a placeholder value passed in the function definition meant to make a function reusable .
    -> It is not a real value
Argument : real value passed in place of the parameters when calling the function 
    -> It is a real value

N/B:- The no and order of parameters must match the no and order of arguments


-> Functions typically use the return keyword instead of a direct console.log()
*return* -> gives back a result after a function has executed its task and signifies the end of the function
-> No code after the return keyword can be executed


*task*
slide 83 intermediate tasks -> redo questions 1 to 6 using JavaScript functions

*SCOPE*
--> Determines where a variable can be accessed in a program
-> We have 2 types of scope:
*1.Global Scope*
  --> This contains global variables and data
  -> Global variables and data are accessible in the entire program
  -> global variables are accessible in both the local and global scope
*2.Local Scope*
  --> Contains local variables and data
  -> Local variables are only accessible within their defined block


*TASK*
_Create a new project called TaxCalculator and have the following files:
1. index.html -> must be called exactly that
2. tax.js

-> Do questions 15 to 20 in the intermediate tasks (slide 83 link) -> must use functions for each question
-> Once done push to Github and share Github link