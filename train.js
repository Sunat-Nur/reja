console.log("train task tekshirilish uchun tayyyor");

// TASK --- F

const getReverse = function(str) {
    for(let i = 0; i <= str.length; i++) {
        for(let a = i+1; a <= str.length; a++) {
            if(str[a] === str[i]) {
                return true;
            }
        }
    }
    return false;
}

const input = "hello";
const result = getReverse(input);
console.log(result)


// task - E

// function reverse (str) {
//     if (str === "")
//         return "";
//     else
//         return reverse(str.substring(1)) + str.charAt(0);
// }
// let str = "hello";
// const output = reverse(str);
// console.log(output);
//


//  callback function
//
// console.log("Jack Ma maslahatlari");
// const list = [
//     'yaxshi talaba boling', //0-20
//      'togri boshiq tanlang va koproq hato qiling', // 20-30
//      'oz ishingizni boshlang', // 30-40
//      'siz kuchli bolgan narsalarni qiling', //40-50
//      'yoshlarga investitsiya qiling', // 50-60
//      'endi dam oling, foydasi yoq'
//  ];
//
//
// function maslahatbering (a, callback) {
//     if ( typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }
//
// console.log("passed here 0")
// maslahatbering(25, (err, data) => {
//     if(err) console.log("ERROR:", err)
//     else {
//         console.log("javob:", data);
//     }
// });
//
//  console.log("passed here 1");
//



//task D

// const AppleShop = require("./store");
// console.log('================');
//
// const myAppleShop = new AppleShop(20,15,10);
//
// myAppleShop.sell(3,6,6);
// console.log('================');
//
//
// myAppleShop.qoshish(10,8,9);
//  console.log('================');
//
//
//  myAppleShop.qoldiq();
//  console.log('================');



//TRAIN-C

// function checkSimilarity(check, letter) {
//     if (check.length === letter.length) {
//         return true;
//     } else if (check.length !== letter.length ) {
//         return false;
//     }
// }
//
// const result = checkSimilarity("samad", "damas");
// console.log(result);
//
// const answer = checkSimilarity("nodir", "ridoo");
// console.log(answer);



// TRAIN B
//
// function file(Hello) {
//     let count = 0;
//     for (let i = 0; i < Hello.length; i++) {
//         const new_file = Hello.charAt(i);
//         if (!isNaN(new_file)) {
//             count++;
//         }
//     }
//     return count;
// }
//
// const input = "uiidsufdsfsdf342342";
// const result = file(input);
// console.log(result);


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