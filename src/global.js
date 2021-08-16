var hello = 'Hello';
var hello = 'Hello+';
let world = 'Hello World+';
const helloWord = 'Hello World!';

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWord);
}

anotherFunction();

///// other function global into a function, this is a bad practice

const helloWord = () => {
    globalVar = 'im global';
}
helloWord();
console.log(globalVar)