// const o = {
//     name : 'Julie',
//     greetBackwards : function(){
//         function getReverseName(){
//             let nameBackwords ='';
//             for (let i=this.name.length-1; i>=0; i--){
//                 nameBackwords += this.name[i];
//             }
//             return nameBackwords;
//         }
//         return `${getReverseName()} si eman ym, olleH`;
//     },
// };
// console.log(o.greetBackwards());

// const o ={
//     name :'Julie',
//     greetBackwards:function(){
//         const self = this;
//         function getReverseName(){
//             let nameBackwards = '';
//             for(let i=self.name.length-1; i>=0; i--){
//                 nameBackwards += self.name[i];
//             }
//             return nameBackwards;
//         }
//         return `${getReverseName()} si eman ym, olleH`;
//     },
// };
// console.log(o.greetBackwards());

const o = {
    name : 'Julie',
    greetBackwards : function(){
        const getReverseName = () =>{
            let nameBackwords ='';
            for (let i=this.name.length-1; i>=0; i--){
                nameBackwords += this.name[i];
            }
            return nameBackwords;
        }
        return `${getReverseName()} si eman ym, olleH`;
    },
};
console.log(o.greetBackwards());
