console.log("train task tekshirilish uchun tayor");



const AppleShop = require("./store");
console.log('================');

const myAppleShop = new AppleShop(20,40,60);

myAppleShop.sotish(10,10,10);
console.log('================');

myAppleShop.qoshish(10,2,4);
console.log('================');


myAppleShop.qoldiq();
console.log('================');





// //task-C
//
//
// // function checkSimilarity(check, letter) {
// //     if (check.length === letter.length) {
// //         return true;
// //     } else if (check.length !== letter.length ) {
// //         return false;
// //     }
// // }
// //
// // const result = checkSimilarity("samad", "damas");
// // console.log(result);
// //
// //
// // //false
// // function checkSimilarity2(check2, letter2) {
// //     if (check2.length === letter2.length) {
// //         return true;
// //     } else if (check2.length !== letter2.length ) {
// //         return false;
// //     }
// // }
// //
// // const answer = checkSimilarity2("samad", "dojjmas");
// // console.log(answer);
// //
//
//
//
//
//
// //train B
//
// // function file(Hello) {
// //     let count = 0;
// //     for (let i = 0; i < Hello.length; i++) {
// //         const new_file = Hello.charAt(i);
// //         if (!isNaN(new_file)) {
// //             count++;
// //         }
// //     }
// //     return count;
// // }
// //
// // const input = "uiidsufdsfsdf342342";
// // const result = file(input);
// // console.log(result);

//
// //shop ni yaratamiz;
// const myShop = new Shop(7, 3, 5);
//
// //qoldiqni kursatish
// shop.qoldiq();
//
// //mahsulyni sotish va qabul qilish.
// nyShop.sotish('bread', 2);
// myShop.qabul('coffee', 4);
//
// //yangi qoldiq
// myShop.qoldiq();