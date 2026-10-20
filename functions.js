//DECLARE FUNCTION
function sayHello() {
  console.log("HELLO THE FUNCTION WAS CALLED")

  return "Hello"
}

//CALL FUNCTION/INVOKE FUNCTION
sayHello() // console log the invokation, logs the return of the function

function greet(name) {
  return `Hello and welcome, ${name}`
}

// greet with type guard, only runs if when called the argument is string
// function greet(name) {
//   if (typeof name === "string") {
//     return `Hello and welcome, ${name}`
//   } else {
//         return "Invalid data type"
// }
// }

console.log(greet()) // OUTPUT Hello and welcome, undefined
console.log(greet("Jordi")) // OUTPUT Hello and welcome, Jordi
console.log(greet("Emma")) // OUTPUT Hello and welcome, Emma
console.log(greet("Jorge")) // OUTPUT Hello and welcome, Jorge
console.log(greet("Simi")) // OUTPUT Hello and welcome, Simi
console.log(greet(false)) // OUTPUT Hello and welcome, Simi
console.log(greet(1)) // OUTPUT Hello and welcome, Simi
console.log(greet([])) // OUTPUT Hello and welcome, Simi

function add(num1, num2) {
  console.log("CALLING add")
  return num1 + num2
}

function subtract(num1, num2) {
  console.log("CALLING subtract")
  return num1 - num2
}

function multiply(num1, num2) {
  console.log("CALLING multiply")
  return num1 * num2
}

function division(num1, num2) {
  console.log("CALLING division")
  return num1 / num2
}

console.log(calculator(1, 2, "+"))
console.log(calculator(10, 10, "+"))
console.log(calculator(1, 2, "-"))
console.log(calculator(10, 10, "-"))
console.log(calculator(1, 2, "*"))
console.log(calculator(10, 10, "*"))
console.log(calculator(1, 2, "/"))
console.log(calculator(10, 10, "/"))
console.log(calculator(10, 10, "|"))

function calculator(num1, num2, operator) {
  if (operator === "*") {
    return multiply(num1, num2)
  } else if (operator === "+") {
    return add(num1, num2)
  } else if (operator === "-") {
    return subtract(num1, num2)
  } else if (operator === "/") {
    return division(num1, num2)
  } else {
    return "Invalid operator, our calculator is simple"
  }
}

const result = calculator(5, 5, "+")

console.log("result >>", multiply(result, 2))

function makeJuice(fruit1, fruit2) {
  const juice = `This juice is delicious made with ${fruit1}, and ${fruit2}`
  return juice
}
// console.log(juice) // juice is not defined
console.log(makeJuice("strawberry", "banana"))
console.log("SEE SOMETHING")
console.log("SEE SOMETHING")
console.log("SEE SOMETHING")
console.log("SEE SOMETHING")
console.log("SEE SOMETHING")

function crazyExpression(num1, num2, num3) {
  return num3 + num2 * num1
}

console.log(crazyExpression(1, 2, 3))
