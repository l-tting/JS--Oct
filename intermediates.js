// // Write a program which gets a phone number from a form input or terminal. 
// // Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254..
// //  or 01... or  1.. Convert the number to start with +254… 
// // e.g if a user enters “0712345678”, the program should display “+254712345678”
// // e.g if a user enters “0112345678”, the program should display “+254112345678”
// // e.g if a user enters “712345678”, the program should display “+254712345678”



// let phone_number = prompt("Enter a phone number")


// if (phone_number.startsWith("+254") && phone_number.length==13){
//      console.log("Phone number is valid")
// }else if(phone_number.startsWith("254") && phone_number.length == 12){
//     console.log("+" + phone_number)
// }else if( (phone_number.startsWith("07") || phone_number.startsWith("01")) && phone_number.length ==10){
//     console.log("+254" + phone_number.slice(1))
// }else if((phone_number.startsWith("7") || phone_number.startsWith('1')) && phone_number.length == 9){
//     console.log("+254" + phone_number)
// }else{
//     console.log("Invalid format, try again")
// }




// // Write a program that lets the user input a password. 
// // Give them only 4 attempts to check the passwords entered against 
// // “admin@123”. If the password is correct access is granted.
// //  After you show them a message , the account is blocked.


// let limit = 4
// let correct_password = "admin@123"

// for(let attempt=1; attempt<=4; attempt++){
   
//     let password = prompt("Enter password")

//     if (password == correct_password){
//         console.log("Access granted")
//         break //loop terminates at this point
//     }else{
//         if( attempt == limit ){
//             console.log("Access blocked")
//         }
//     }

// }

// let attempt = 1
// let correct_password = "admin@123"

// while (attempt <= 4){
//     let password = prompt("Enter password")

//     if(password == correct_password ){
//         console.log("Access blocked")
//         break
//     }else{
//         attempt++
//         if(attempt > 4){
//             console.log("Access blocked")
//         }
//     }
// }

// Write a program called stars. It should prompt the user for a number,
//  and it should print the number of stars till the number entered.
// Example If rows is 5, it should print the following:
// *
// **
// ***
// ****
// *****.....


let number = Number(prompt("Enter a random number"))

for(let i=1; i<= number; i++){
  
   let row = ""

   for(let j=1 ; j<= i; j++){
       row += "*"
   }
   console.log(row)

}

// Write a program that calculates the total stock in a
//  company from the array/list below if we know that the
//   stock is the last digit in every array/list.

let prods = [['omo','30kshs','300'], ['milk','50kshs','200'],['bread','45kshs','359'], ['coffee','5kshs','79']]

let total_stock = 0

for(let i=0; i < prods.length ; i++){

    let stock = Number(prods[i][2])
    total_stock += stock
}

console.log(total_stock)


