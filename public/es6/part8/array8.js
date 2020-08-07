const cart =[{ name: "widget", price: 9.95}, {name: "Gadget", price: 22.95}];
const name= cart.map(x=> x.name);
const price = cart.map(x=> x.price);
const discountPrice = cart.map(x=> x.price*0.8)

console.log(name);  //[ 'widget', 'Gadget' ]
console.log(price); //[ 9.95, 22.95 ]
console.log(discountPrice); //[ 7.96, 18.36 ]
