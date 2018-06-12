function max(numbers){
    let curMax = numbers[0];
    let i = 1;
    while (i < numbers.length){
        if (numbers[i] > curMax){
            curMax = numbers[i];
        }
        i++;
    }
    return curMax;
}


function min(numbers){
    let curMin = numbers[0];
    let i = 1;
    while (i < numbers.length){
        if (numbers[i] < curMin){
            curMin = numbers[i];
        }
        i++;
    }
    return curMin;
}