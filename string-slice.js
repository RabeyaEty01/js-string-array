const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
//console.log(withoutA);
//console.log(words);


const smallSlice = anthem.slice(5, 13); //first ta holo strat index r second ta  holo last index number  means koto index porjonto print korbe.
//console.log(smallSlice);


//substr
const anotherPart = anthem.substr(11, 9);//first ta holo start index . second ta holo start er por koyta character print korbe shei number
//console.log(anotherPart);

//substring
const anotherAnotherPart = anthem.substring(11, 15); //11 theke 15 tomo index porjonto chaisi print korte
//console.log(anotherAnotherPart);


//concat
const first = 'Amader';
const second = 'City';
//const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('RJ kibria');
//console.log(fullString);



//
 const words2 =['alim','badhon','cajid','david'];
 //const allJoined = words2.join('');
 //const allJoined = words2.join(' ');
 //const allJoined = words2.join(',');
 const allJoined = words2.join(', ');
 console.log(allJoined);