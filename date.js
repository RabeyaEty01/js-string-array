const myFavDate = new Date('1971-12-16');
//console.log(myFavDate);
const anotherdate = new Date(1971, 3, 26, 11, 50, 40, 80);
//console.log(anotherdate);

if (myFavDate.getTime() > anotherdate.getTime()) {
    console.log('favourite is earlier');
}