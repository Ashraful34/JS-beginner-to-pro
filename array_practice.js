// function and Methods
//finding maximum value in an array

const a = [22,65,1,39];

let max = a[0];

//using for loop

for(let i =1; i<a.length;i++){
    if(a[i]>max)
        max = a[i];
}

console.log(max);

//Using the Spread Operator
console.log(Math.max(...a));

// Using the filter() Method

a.filter(num => {
        if (num > max) {
            max = num;
        }
    });

console.log(max);

// Using Math.max() and apply() Methods

console.log( Math.max.apply(null, a));

// Using reduce() Method

const ans = a.reduce(function (b, c) {
    return (b > c) ? b : c
});
console.log(ans);

// Using sort() Method

a.sort((b, c) => c - b);
console.log(a[0]);

// Using the forEach Method

a.forEach(num => {
    if (num > max) {
        max = num;
    }
});
console.log(max);

