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


// ------------map Function--------
// let numbers = [1,2,3]

// const square=(num)=>{
//     return (num*num)
// }
// let sqarednumbers= numbers.map(square)

// or---

// let squarednumbers=numbers.map((num)=>{
//     return num*num
// })
// console.log(squarednumbers)//[1, 4, 9]

//  1.task 
// let celTemp = [0,-40,100]

// const celFehTemp= (temp)=>{
//      return (temp*(9/5)+32)

// }
// let celFeh = celTemp.map(celFehTemp)
// console.log(celFeh)

// or---

// let celTemp = [0,-40,100]

// let fehTemp = celTemp.map((temp)=>{
//     return (temp*(9/5)+32)
// })

// console.log(fehTemp)

// 2.task

// let celArr = [0, -40, 100]

// const celtoObj = (cel) => {
//     return ({
//         c: cel,
//         f: cel * (9 / 5) + 32
//     })
// }
// console.log(celtoObj(0))//{c: 0, f: 32}



// let resObj = celArr.map(celtoObj)
// console.log(resObj)//// {c: 0, f: 32}
// {c: -40, f: -40}
// {c: 100, f: 212}



// --------Find Function-------------

// const isEven = (num) => {
//     return num % 2 === 0
// }

// let numbers = [1, 2, 3, 4, 5]

// let firstEvenNum = numbers.find(isEven)
// console.log(firstEvenNum)//2

// let evenNum = numbers.filter(isEven)
// console.log(evenNum)//[2, 4]


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const threediv=(num)=>{
    return num % 3===0
}

let threeDivArr=arr.filter(threediv)
console.log(threeDivArr)//[3, 6, 9]

let threeArr=arr.find(threediv)
console.log(threeArr)//3



