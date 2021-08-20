function addNumbers(num1, num2) {
    //console.log(arguments);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }

    return result;
}
const sum = addNumbers(23, 13, 50, 100, 12, 200, 420, 900, 50);
//console.log(sum);



function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part+' ';
    }
    return fullName;
}
const name = getFullName('Rabeya', 'Aktar', 'Ety','Bin','tomuk');
console.log(name);