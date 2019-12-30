const sam1 = {
    name : 'Sam',
    age : 4,
};

const sam2 ={ name: 'Sam', age :4};

const sam3 = {
    name : 'Sam',
    classification : {
        kingdom : 'Anamalia',
        phylum: 'Chordata',
        class : 'Mamalia',
        order : 'Carnivoria',
        family: 'Felidae',
        subfamily : 'Felinae',
        genus: 'Felis',
        species : 'catus',
    }
}
//sam3의 classification은 이 자체가 객체임
console.log(sam3.classification["family"]);

sam3.speak = function () { return "Meow!";}; 
//객체에 함수를 추가함
