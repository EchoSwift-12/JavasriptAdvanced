// pop
// let arr = [1, 2, 3]
// let poppedElement = arr.pop()
//  console.log(arr)//[1, 2]
// console.log(poppedElement)//3

// // push
// let arr1 = [6, 7, 8]
// let arrLenght = arr1.push(9)   
// console.log(arr1)//[6, 7, 8, 9]
// console.log(arrLenght)//4

// shift
// let arr3 = [1,2,4]
// let shiftElement = arr3.shift()
// console.log(arr3)// [2,4]       
// console.log(shiftElement)//1

// // unshift

// let arr4 = [3,5,7]
// let arr4Lenght = arr4.unshift(1)
// console.log(arr4)//[1,3,5,7]
// console.log(arr4Lenght )//4

//Convert string to Array
// let text = 'Hello'
// let arr = text.split('')

// arr.push('!')
// console.log(arr)//['H', 'e', 'l', 'l', 'o', '!']

// let newText = arr.join('')
// console.log(newText)//Hello!

// --------Stacks and queues-------

// Inital queue
// let partyQueue= ["Bob", "Alice","Charlie"]
// partyQueue.push("David", "Emily")

// console.log(partyQueue)//['Bob', 'Alice', 'Charlie', 'David', 'Emily']


// let person1=partyQueue.shift()
//  let person2= partyQueue.shift()
// console.log(partyQueue)//['Charlie', 'David', 'Emily']
// console.log(person2)//Alice


// partyQueue.unshift("Richard")
// console.log(partyQueue)// ['Richard', 'Charlie', 'David', 'Emily']

let numbers = [1,2,3]

const square=(num)=>{
    return (num*num)
}
let sqarednumbers= numbers.map(square)

or---

let squarednumbers=numbers.map((num)=>{
    return num*num
})
console.log(squarednumbers)//[1, 4, 9]


let celTemp = [0,-40,100]

const celFehTemp= (temp)=>{
     return (temp*(9/5)+32)
    
}
let celFeh = celTemp.map(celFehTemp)
console.log(celFeh)

or---

let celTemp = [0,-40,100]

let fehTemp = celTemp.map((temp)=>{
    return (temp*(9/5)+32)
})

console.log(fehTemp)