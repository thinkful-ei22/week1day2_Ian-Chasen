/*
created a for loop that loops n times
each time it loops runs fn()
created hello and goodbye funcs


*/

// function hello(){
//     console.log('hello world');
// }
// function goodbye(){
//     console.log('goodbye world');
// }

// function repeat(fn, n){
//     let i = 1;
//     while (i <= n){
//         fn();
//         i++;
//     }
// }

// repeat(hello, 7);

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
    let newArray = [];
    for (let i=0; i<arr.length; i++){
        if (fn(arr[i]) === true){
            newArray.push(arr[i]);
        }
    return newArray;
    }
}

filter(myNames, filteredNames);