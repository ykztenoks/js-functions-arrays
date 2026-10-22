const students = ["juliana", "amidu", "silviu", "michele", "santosh"]
const matrix = [
  [1, 2, 3],
  ["a", "b", "c"],
  [false, true, false],
]

const fruits = ["banana", "strawberry", "watermelon", "grapes"]

console.log(fruits.includes("nana"))
console.log(fruits.includes("kiwi"))
console.log("banana".includes("nana"))
console.log("indexOf watermelon", fruits.indexOf("watermelon"))
const favoriteFruits = fruits.slice(2)
console.log("fav", favoriteFruits)
console.log("fruits", fruits)

console.log(`My favorite fruits are ${favoriteFruits.join(", and ")}!`)
// console.log(fruits[0]) //banana
// console.log(fruits[1]) //strawberry
// console.log(fruits[3]) //grapes
// console.log(fruits[0][2]) // n from banana
// console.log(fruits.at(0))
// console.log(fruits.at(-1)) // get the last element
// console.log(fruits[fruits.length - 1]) // gets last element
// console.log(fruits.length)
// console.log(students.length)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

nums.push(10)
nums.push(12)
nums.pop()
nums.unshift(0)
nums.unshift(136)
nums.shift()

console.log(nums)

let total = 0

for (let i = 0; i < nums.length; i++) {
  const currentNumber = nums[i]
  total += currentNumber
  console.log(total)
}

console.log(total)

for (let i = 0; i < fruits.length; i++) {
  // for let
  console.log(fruits[i])
}

for (const fruit of fruits) {
  // for of
  console.log(fruit)
}

fruits.forEach((fruit, index) => {
  console.log(`index ${index}: element ${fruit}`)
})

// (() => {})
