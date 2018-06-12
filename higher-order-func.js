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





// // DO NOT EDIT BETWEEN THESE LINES ----->
// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
//     let newArray = [];
//     for (let i=0; i<arr.length; i++){
//         if (fn(arr[i]) === true){
//             newArray.push(arr[i]);
//         }
//     return newArray;
//     }
// }

// const biggerThanSix = filter(myNames, function(name){return name.length<6});


//created a warningCounter
//return a function that logs a danger message
//returning another log message
//where to increase counter??????




// function hazardWarningCreator(typeOfWarning){
//     let warningCounter = 0;
//     return function(location){
//         warningCounter++;
//         console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//         console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
//     }
// }

// const rocksWarning = hazardWarningCreator("Rocks on the Road");
// const windWarning = hazardWarningCreator("It's too windy!");
// const lightningWarning = hazardWarningCreator("look out for lightning!");

// rocksWarning("California");
// windWarning("Kansas");
// rocksWarning("California");


turtlesMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let turtlePostiveNum = turtlesMovements.filter( num => num[0]>=0 && num[1]>=0);
console.log(turtlePostiveNum);
let turtleSteps = turtlePostiveNum.map(num => num[0]+num[1]);
console.log(turtleSteps);
turtleSteps.forEach(move => console.log(`Turtle took ${move} steps`));



