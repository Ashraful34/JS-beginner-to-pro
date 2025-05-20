// function sum(x, y){
//     sum = x+y;
//     // return sum;
   
// }

// sum(3,4);
//  console.log("after return: ", sum);
// let val = 
// console.log(val);

// function sum(){
//     sum = 5+6;
//     console.log("sum of 5 & 6 is = ",sum);
// }

// sum();

//sum function

// function sum(a, b){
//     sum = a+b;
// }

// sum(10, 5);
// console.log(sum);

// function mul(a, b){
//     mul = a*b;
// }
// mul(5,6);
// console.log(mul);


// arrow function

// const arrowSum =(a,b)=>{
//     console.log(a+b);
// }


//finding vowels in a string
// function countVowels(str){
//     //a,e,i,o,u
//     let count = 0;
//     for(const char of str){
//         console.log(char);

//         if(
//             char=="a" ||
//             char=="e" ||
//             char=="i" ||
//             char=="o" ||
//             char=="u"
//         ){
//             count++;
//         }
//     }
//     console.log(count);
// }

//create arrow function to the same task

// const countVo = (str)=>{
    
//     //a,e,i,o,u
//     let count = 0;
//     for(const char of str){
//         console.log(char);

//         if(
//             char=="a" ||
//             char=="e" ||
//             char=="i" ||
//             char=="o" ||
//             char=="u"
//         ){
//             count++;
//         }
//     }
//     return count;
// }


//array methods
//call back function
//a callback function passed as an argument to another function.

//ex:

// let arr =[1,3,4,5,6];

// arr.forEach(function printVal(val){ //each value at each index
//     console.log(val);
// })

// arr.forEach((val)=>{
//     console.log(val);
// })

// let valStr = ["Rajshahi","Dhaka","Khulna"];

// valStr.forEach((vsl, idx, valStr)=>{ //we can use value/items, index, array in foreach loop
//     console.log(vsl.toLocaleUpperCase(), "=", idx , "|| ", valStr);
// })


// higher order function
// those function who use another function's parameter, or use return


//practice

//for a given array of numbers, print the square of each value using the foreach loop

// [1,2,3] =[1,4,9]

// let sqrNum = [1,2,3,4];

// sqrNum.forEach((num)=>{
// console.log(num**2); //num*num
// })

//using callback function
// console.log("after callback function using");
// let calSquar = (num)=>{
// console.log(num**2); //num*num
// }

// sqrNum.forEach(calSquar);


//map

// let nums = [67,52,39];

// let newArr = nums.map((val)=>{
//     return val*2;
// });
// console.log(newArr);

// let calSquar = (num)=>{
//     console.log(num*num);
// };


//filter

// let arr = [1,2,3,4,5,6,7];

// const evArr = arr.filter((val)=>{
//     return val % 2 ==0;
// });

// console.log(evArr);

// const oddArr = arr.filter((val)=>{
//     return val % 2 !=0;
// });

// console.log(oddArr);

// const bigArr = arr.filter((val)=>{
//     return val > 3 ;
// });

// console.log(bigArr);

// const smallArr = arr.filter((val)=>{
//     return val < 3;
// });

// console.log(smallArr);


//reduce

// let redArr = [1,2,3,4];

// const outPut = redArr.reduce((previousValue, currentValue) =>{
//     return (previousValue+currentValue);
// });

// console.log("sum of array: ",outPut);

// const bigElement = redArr.reduce((previousValue, currentValue) =>{
//     return previousValue > currentValue ? previousValue : currentValue;
// });

// console.log("biggest element of array: ",bigElement);

//finding average value

//classic way
// let sum = 0;

// for (let i = 0; i < redArr.length; i++) {
//     sum += redArr[i];
// }

// let average = sum / redArr.length;

// console.log("Average:", average); // Output: 2.5

//using arrow function
// const avg = redArr.reduce((preValue , curValue)=>{
//     let sum = (preValue + curValue);
//     return sum;
    
// })

// let avera = sum / redArr.length;
// console.log("average value of array: ",avera);


//practice
//ex: we are given array of marks of students. filter out of the marks of students that scored 90+

// let marks = [97,64,32,49,99,96,86];

// let toppers = marks.filter((val)=>{
//     return val>90;
// })
// console.log(toppers);

//ex:2.a take a number n as input from user. create an array of numbers from 1 to n
//2.b use the reduce method to calculate sum of all numbers in the array
//2.c use the reduce method to calculate product/factorial of all numbers in the array

//Ans 2.a

let n = prompt("enter your number: ");
let userArr = [];
for(let i = 1; i <= n; i++){
    userArr[i-1]= i;
}

console.log(userArr);

let sumOfArr = userArr.reduce((preValue, curValue)=>{
    return (preValue+curValue);
});

console.log("sum of array: ",sumOfArr);

let factorial = userArr.reduce((preValue, curValue)=>{
    return (preValue*curValue);
});

console.log("factorial of array: ",factorial);
