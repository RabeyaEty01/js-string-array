const numbers =[3,6,4,8,9,19,15,21,45,87];
//slice
const numberSliced = numbers.slice(4,8); //slice(begenning index, end index)
// console.log(numberSliced);
// console.log(numbers);


//splice to remove an element from an array
//const numberSpliced = numbers.splice(4,2); // splice(start index, koyta index delete korbo tar number)
// console.log(numberSpliced);
// console.log(numbers);


const numberSpliced2 = numbers.splice(4,3,99,9999,10203,'hello');

console.log(numberSpliced2);
console.log(numbers);