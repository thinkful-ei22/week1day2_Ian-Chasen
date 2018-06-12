
// function max(numbers){
//   let curMax = numbers[0];
//   let i = 1;/     while (i < numbers.length){
//         if (numbers[i] > curMax){
//             curMax = numbers[i];
//         }
//         i++;
//     }
//     return curMax;
// }


// function min(numbers){
//     let curMin = numbers[0];
//     let i = 1;
//     while (i < numbers.length){
//         if (numbers[i] < curMin){
//             curMin = numbers[i];
//         }
//         i++;
//     }
//   return curMin;
// }


function average(arr) {
    let totalSum = 0
    arr.forEach(num => totalSum += num)
    return totalSum/arr.length     
}


function fizzBuzz(countTo) {
    let answer = [];
    for(let i = 1; i <= countTo; i++){
      if (i % 5 === 0 && i % 3 === 0){
        answer.push('fizzbuzz');
      }
      else if (i % 5 === 0){
        answer.push('buzz');
      }
      else if (i % 3 === 0){
        answer.push('fizz');
      }
      else {
        answer.push(i);
      }
    }
    return answer;
  }