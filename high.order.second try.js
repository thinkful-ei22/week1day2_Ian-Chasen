// function hello(){
//     console.log("hello world");
// }
// function goodbye(){
//     console.log("goodbye cruel world");
// }

// function repeat(fn, n){
//     for(let i = 0; i < n; i++){
//         fn();
//     }
// }

// repeat(goodbye, 7);


// // DO NOT EDIT BETWEEN THESE LINES ----->
// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
//     newArray = [];
//     for(let i = 0; i < arr.length; i++){
//         if(fn(arr[i]) === true){
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }

////BONUS!!!!!

// console.log(filter(myNames, name => name[0] === 'R'));

// //includes BONUS!!

// function hazardWarningCreator(typeOfWarning){
//     let warningCounter = 0;
//     return function(location){
//         warningCounter ++;
//         console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//         if(warningCounter < 2){
//             console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
//         }
//         else{
//             console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
//         }
// }
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');


// rocksWarning("San Francisco");
// rocksWarning("San Francisco");


// let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// forwardMovements = movements.filter(movement => movement[0] >= 0 && movement[1] >= 0);

// eachMove = forwardMovements.map(move => move[0] + move[1]);

// eachMove.forEach(step => console.log(`the turtle took ${step} steps`));

function decode(str){
    decodedArr = [];
    wordArr = str.split(' ');
    for(let i = 0; i < wordArr.length; i++){
        if(wordArr[i].length === 3){
            decodedArr.push(' ');
        }
        else{
            decodedArr.push(wordArr[i][wordArr[i].length-1].toUpperCase());
        }
    }
    return console.log(decodedArr.reduce((accum, curVal) => accum + curVal));
}

decode('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest');