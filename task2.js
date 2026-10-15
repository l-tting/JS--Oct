let a = 3
let b = 4
let c = 7
let d = 9


if ((a * d) > (b * c)){
     console.log(`${a/b} is larger`)
}else if((a * d) < (b * c)){
    console.log(`${c/d} is larger`)
}else{
    console.log("Both are equal")
}



let money_spent = Number(prompt("Enter money spent"))

if (money_spent >= 1000){
    console.log(`Final price is ${money_spent * 0.95}`)
}else if (money_spent >= 5000){
    console.log(`Final price is ${money_spent * 0.85}`)
}else{
    console.log(`Final price is ${money_spent}, no discount applied`)
}


let units_used = Number(prompt("Enter units used"))

if (units_used >= 0 && units_used <= 100){
    console.log(`Total electric bill is ${units_used * 5}`)
}else if(units_used > 100 && units_used <=200){
    console.log(`Total electric bill is ${units_used * 8}`)
}else{
    console.log(`Total electric bill is ${units_used * 12}`)
}