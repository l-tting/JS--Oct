let number = Number(prompt("Enter a random number"));

if (number % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

function check_even() {
    if (number % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

check_even() //func call


//write a function that adds any two numbers

function sum_numbers(){
    let a = 12
    let b = 110
    console.log(a + b)
}

sum_numbers()


function sum_numbers2(a,b){
   return a + b
   
}

let sum1 = sum_numbers2(20,25)
let sum2 = sum_numbers2(22,1)

console.log(sum1)
console.log(sum2)


//write a program using functions that checks whether a person is eligible to drive-> assume legal age is 18years 
//take user input and use parameters


let age = Number(prompt("Enter age"))

function check_eligible(age){
    let result
    if(age >=18){
        result = "Eligible to drive"
    }else{
        result = "Ineligible to drive"
    }
    return result
}

let can_drive = check_eligible(age)
console.log(can_drive)