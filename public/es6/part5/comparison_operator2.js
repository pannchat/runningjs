/*
let n = 0;
while(true){
    n += 0.1;
    if(n === 0.3) break;
}
console.log(`Stopped at ${n}`)
무한루프
*/ 

let n = 0;
while(true){
    n += 0.1;
    if(Math.abs(n-0.3) < Number.EPSILON) break;
}
console.log(`ex2) Stopped at ${n}`)