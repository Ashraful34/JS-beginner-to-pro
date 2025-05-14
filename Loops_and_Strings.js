//loop and strings
// for (let count =1 ; count<=5; count++){
//     console.log("welccome to js full course");  //loop executed 5 times
// }
// console.log("loop closed here");


//calculate sum of 1 to 10

// let sum =0;
// for(let i=1; i<=10; i++){
//     sum = sum+i;
// }
// console.log("sum of 1 to 10 is= ", sum);


//print number 1 to 5

// for(let i =1; i<=5; i++){
//     console.log("i = ",i);
// }

//while loop

// let i =1;
// while(i<=5){
//     console.log("welcome");
//     i++;
// }


//do-while loop

// let i = 1;

// do{
//     console.log("welcome to college");
//     i++;
// }while(i<=10);

//for-of loop, use in string and array only

// let str = "Rajshahi";
// let size = 0;

// for(let i of str){    //iterator -> characters
//     console.log("i = ", i);
//     size++
// }

// console.log("string size: ",size);


//for-in loop, use in object

// let student ={
//     name:"Ashraful Haque",
//     age: 28,
//     isPass: true
// };

// for(let i in student){
//     console.log("i= ",i," ", student[i]);
// }


//printing all even numbers from 0 to 100
// let ev = 0;

// for (ev=0; ev<100; ev++){
// if (ev%2==0){
//     console.log("even number: ", ev);
// }
// }


// //geuss the right number until the user enters correct value

// let gameValue = 25;

// let userNumb = prompt("geuss the correct number");
// while(userNumb!=gameValue){
//     userNumb = prompt("you entered wrong number.geuss again. ");
// }
// console.log("congratulations, you entered the right number: ", userNumb);

 //strings

//   let str = "Welcome to js";
//  let str2 = " php is dead";
//  console.log(str.length);

// let obj = {
//     item: "pen",
//     price: 10
// };
// console.log("the cost of", obj.item ,"is", obj.price,"taka");
// console.log(typeof(obj));

// let output = `the cost of ${obj.item} is ${obj.price} taka`;
// console.log(output);

// console.log(str.toUpperCase());  //convert to uppercase
// console.log(str.toLowerCase());  //convert to lowercase
// console.log(str.trim());  //removing space from starting and ending

// let str3 = str.concat( str2); //join str2 with str
// console.log(str3);

// console.log(str3.slice(11, 16));  //jsphp


// let str = "i love js";

// console.log(str);
//    str = str.replace("i", "you"); //replace only one word
//    console.log(str);

// let strv = "hellolo";

// strv = strv.replaceAll("lo","p"); //replace all the words to be replaced
// console.log(strv);

// str = str.charAt(0); //showing the character in index
// console.log(str);


//ask user to enter full name and finally add "@"" and "length" of your name 
// eg: user = "ashrafulhaque", output = @ashrafulhaque13

// let fullName = prompt("enter your full name: ");

// let userNam= "@" + fullName + fullName.length;
// console.log(userNam);


//finding string with starting and ending


// const browserType = "mozilla";

// if (browserType.startsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }


// if (browserType.endsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }
