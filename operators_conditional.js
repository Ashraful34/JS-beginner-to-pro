// //arthmetic operators

// let a =5;
// let b = 2;

// console.log("a = ",a ,"& b = ", b);
// console.log("a+b =" ,a+b);
// console.log("a-b =" ,a-b);
// console.log("a*b =" ,a*b);
// console.log("a/b =" ,a/b);
// console.log("a%b =" ,a%b);
// console.log("a**b =" ,a**b);

// //unary operators
// //  a = a+1;
// a++; //post increment
//  console.log("a is post increment = ",a);

// ++a; //pre increment
// console.log('a is pre increment = ',a);

// //a = a-1;
//  a--; //post decrease
//  console.log('a is post decrease = ',a);
//  --a;
//  console.log('a is pre decrease = ',a);

////assignment operators
// let a = 5;
// let b = 2;

// a+= 4; // a = a+4

// console.log("a = ",a);

// a= a ** 4;

// console.log("a= ",a);

// comparison operators

// console.log("5!=2", a!=b);  //true
// console.log("5==2", a==b);  //false

// let a = 5;
// let b = "5";

// console.log("5===5", a===b);  //false
// console.log("5!==5", a!==b); //true
// console.log("5>5", a>b); //false
// console.log("5<5", a<b); //false
// console.log("5>=5", a>=b);  //true
// console.log("5<=5", a<=b);  //true



//logical operators

//logical and &&
//logical or ||
//logical not !

// let a = 6;
// let b = 5;

// let cond1 = a > b; //true
// let cond2 = a===6 //true

// console.log("cond1 && cond2 = ", cond1 && cond2);  //true
// console.log("cond1 || cond2 = ", cond1 || cond2);  //true
// console.log("!(a<b) = ", !(a<b));  //true



///conditional statement

// let color;
// let mode = "blue"

// if(mode === "dark-mode"){
//     color = "black";
// } else color = "white";

// console.log(color);


// let age = prompt("Please enter your age: ");

// if(age>=18){
//     console.log("you can vote.");
// } else console.log("you can not vote.");


// let a = 5;

// if (a%2==0){
//    console.log("the number (a =5) is odd");
// } else console.log("the number (a =5) is even");

let age = prompt("enter your age: ");

if (age < 18){
    console.log("you are adult." , age);
}else if (age < 50){
    console.log("middle", age);
}else {
    console.log("senior.", age);
}
