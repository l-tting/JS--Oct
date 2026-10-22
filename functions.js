// let number = Number(prompt("Enter a random number"));

// if (number % 2 == 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// function check_even() {
//   if (number % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }

// check_even(); //func call

// //write a function that adds any two numbers

// function sum_numbers() {
//   let a = 12;
//   let b = 110;
//   console.log(a + b);
// }

// sum_numbers();

// function sum_numbers2(a, b) {
//   return a + b;
// }

// let sum1 = sum_numbers2(20, 25);
// let sum2 = sum_numbers2(22, 1);

// console.log(sum1);
// console.log(sum2);

// //write a program using functions that checks whether a person is eligible to drive-> assume legal age is 18years
// //take user input and use parameters

// let age = Number(prompt("Enter age"));

// function check_eligible(age) {
//   let result;
//   if (age >= 18) {
//     result = "Eligible to drive";
//   } else {
//     result = "Ineligible to drive";
//   }
//   return result;
// }

// let can_drive = check_eligible(age);
// // console.log(can_drive)

// // Write a program that lets the user input a password.
// // Give them only 4 attempts to check the passwords entered against “admin@123”.
// // If the password is correct access is granted. After you show them a message , the account is blocked

// function check_password() {
//     for (let i = 1; i <= 4; i++) {
//         let password = prompt("Enter your password");
//         let result

//         if (password == "admin@123") {
//             result = "Access granted"
//             break;
//         } else {
//         if (i > 4) {
//             result = "Access blocked"
//         }
//         }
//     }
//     return result
// }

// let password_checker = check_password()
// console.log(password_checker)

// // Write a program that prompts the user to enter the base and height of a triangle and returns its area.

// let base = Number(prompt("Enter the base"))
// let height = Number(prompt("Enter the height"))


// function calculate_area(base, height){
//     return 0.5 * base * height
// }

// let area = calculate_area(base,height)
// // console.log(area)


// // Write a program that calculates the total stock in a company from the array/list below 
// // if we know that the stock is the last digit in every array/list.
// // prods = [[‘omo’,’30kshs’,’300’], [‘milk’,’50kshs’,’200’],[‘bread’,’45kshs’,’359’], [‘coffee’,’5kshs’,’79’]]




// let prods = [['omo','30kshs','300'], ['milk','50kshs','200'],['bread','45kshs','359'], ['coffee','5kshs','79']] 


// function calculate_stock(products){
//     let total_stock = 0
//     for(let i=0; i <= products.length; i++){
//         let stock = Number(products[i][2])
//         total_stock += stock
//     }
//     return total_stock
// }

// let count_stock = calculate_stock(prods)
// console.log(count_stock)


// // A company has three branches. Each branch records its daily sales for five days, Monday to Friday.
// // Write a JavaScript program that calculates the following:
// // 1. The total sales across all branches for the five days.
// // 2. The total sales for each branch.
// // 3. The branch with the highest total sales.
// // 4. The average daily sales across the entire company (all branches combined).
// // Use the data below:
let sales = [
    ["Nairobi", 12000, 15000, 10000, 18000, 14000], //69000
    ["Mombasa", 9000, 11000, 13000, 8000, 12000], //53000
    ["Kisumu", 7000, 10000, 9000, 12000, 11000] //49000
];


let total_company_sales = 0
let highest_sales = 0
let highest_branch = ""

for(let i = 0; i < sales.length; i++ ){
    
    let branch_total = 0
    for(let j= 1; j < sales[i].length; j++ ){
        branch_total += sales[i][j]
    }

    total_company_sales += branch_total

    console.log(`${sales[i][0]} : `,branch_total)

    if(branch_total > highest_sales){
        highest_sales = branch_total
        highest_branch = sales[i][0]
    }


}

console.log(total_company_sales) //171000
console.log(highest_branch)


