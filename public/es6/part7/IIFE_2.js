const f = (function(){
    let count = 0;
    return function(){
        return `I have been called ${++count} time(s)`;
    }
})();
console.log(f()); 
console.log(f());
console.log(f());
console.log(f());
console.log(f());
// I have been called 1 time(s)
// I have been called 2 time(s)
// I have been called 3 time(s)
// I have been called 4 time(s)
// I have been called 5 time(s)