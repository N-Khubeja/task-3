// TASK 1

// VERSION 1

///////////////////////////////////////////////////////////////

// const calculate = (num1,num2,...args) => {
//     const result = []
//     const one = num1+num2
//     let two = 1
//     for(const i of args){
//         two *= i
//     }

//     result[0] = one
//     result[1] = two

//     return result
// }

// console.log(calculate(2,2,3,3,1,3))

////////////////////////////////////////////////////////////

// VERSION 2

////////////////////////////////////////////////////////////

// const calculate = (...args) => {
//     const result = []
//     let one = 0
//     let two = 1

    

//     for(let i = 0; i < 2; i++){
//         one += args[i]
//     }

//     for(let i = 2; i <= args.length - 1; i++){
//         two *= args[i]
//     }

//     result[0] = one
//     result[1] = two

//     return result
// }


// console.log(calculate(2,2,3,4,5))

///////////////////////////////////////////////////////////////


// VERSION 3

///////////////////////////////////////////////////////////////

// const task = (...numbers) => {
//     if(numbers.length < 3){
//         return 'less than 3'
//     }

//     const first = numbers[0] + numbers[1]
//     const second = numbers.slice(2).reduce((prev,curr) => prev*curr)

//     /// slice(2)- ეს მეორე ელემენტიდან გაწყვიტავს 
//     /// reduce- ეს აკეთებს რას , რო წინას და მის მომდევნოს გადაამავლებს ერთმანეთზე ამ შემთხვევაში

//     return [first,second]
// }

// const func = task(2,2)

// console.log(func)
///////////////////////////////////////////////////////

// TASK 2

///////////////////////////////////////////////////////

// const user = {
//     banks : [
//         {},
//         {},
//         {
//             adress:{
//                 city:'tbilisi'
//             }
//         }

//     ]
// }

// const result = (user) => {
//     const {banks} = user

//     if(banks && banks[2] && banks[2].adress) {
//         const {city} = banks[2].adress
//         return city
//     } else {
//         return false
//     }
    
// }

// console.log(result(user))


// const user = {
//     banks : [
//         {},
//         {},
//         {
//             adress:{
//                 city:'tbilisi'
//             }
//         }

//     ]
// }

// const result = (user) => {
//     const {banks} = user

//     if(banks && banks[2] && banks[2].adress){
//         const {city} = banks[2].adress
//         return city
//     } else {
//         return false
//     }
// }
 
// console.log(result(user))

///////////////////////////////////////////////////

// TASK3

/////////////////////////////////////////////////////


const originalobj = {
    name:'nika',
    age:23,
    adress:{
        city:'tbilisi',
        country:'georgia'
    },
    hobies:['reading','gaming'],
    nestedobj:['value1','value2']
}

const copy = (obj) => {
    const copyobj = {
        ...obj,
        adress:{ ...obj.adress},
        hobies:{...obj.hobies},
        nestedobj:{...obj.nestedobj}
    }

    return copyobj
}   

console.log(copy(originalobj))