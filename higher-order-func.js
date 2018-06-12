/*
created a for loop that loops n times
each time it loops runs fn()
created hello and goodbye funcs


*/

function hello(){
    console.log('hello world');
}
function goodbye(){
    console.log('goodbye world');
}

function repeat(fn, n){
    let i = 1;
    while (i <= n){
        fn();
        i++;
    }
}

repeat(hello, 7);