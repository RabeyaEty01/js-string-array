const numbers = [6, 4, 7, 1, 3, 9, 2, 5, 8];
const sortedNumbers = numbers.sort();
//console.log(sortedNumbers);

const friends = ['kabil', 'josim', 'razzak', 'shabana', 'bobita', 'shabnur', 'Apu', 'alomgir', 'dipjol'];
//const sortedFriends= friends.sort();
//console.log(sortedFriends);

// const  reversedFriends =friends.reverse();
// console.log(reversedFriends);

const sortedReversedFreinds = friends.sort().reverse();
//console.log(sortedReversedFreinds);

//number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);
