function f(x){
    return `in f: x=${x}`;
}
console.log(f());

function getSentence({subject,verb,object}){
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "I",
    verb: "love",
    object:"JavaScript",
};

console.log(getSentence(o)); // I love JavaScript

function addPrefix(prefix, ...words){
    const prefixedWords = [];
    for(let i = 0; i< words.length; i++){
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

console.log(addPrefix("con","verse","vex")); // ["convers","convex"]

