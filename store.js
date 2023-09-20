const moment = require("moment");

function tellMeTime() {
    console.log(`ayni vaqt bizda  ${moment().format("DD MM YYYY HH:mm")} ni ko'rsatyadi`)}


class appleShop {

    constructor(iphone, ipad, mackBook) {
        this.iphone = iphone;
        this.ipad = ipad;
        this.mackBook = mackBook;
    }


    sotish(iphone, ipad, mackBook) {
        if (this.iphone > iphone) {
            this.iphone -= iphone;
            console.log(`hozirda sizning appleStoredan ${this.iphone}ta iphone sotildi va ${this.iphone}ta iphone qoldi`);
        } else {
            console.log(`hozida sizning apple store dan : ${this.iphone} dona iphone mavjud. uzur soraymiz siz istagan miqdorda iphone bizda mavjud emas`);}

        if (this.ipad > ipad) {
            this.ipad -= ipad; this.mackBook -= mackBook;
            console.log(`hozirda sizning appleStoreda ${ipad} dona ipad sotildi va  ${this.ipad} dona ipad qoldi`);
        } else {
            console.log(`hozida sizning apple storeda : ${this.ipad} dona ipad mavjud emas. uzur soraymiz siz istagan miqdorda ipad bizda mavjud emas`);}

        if (this.mackBook > mackBook) {
            this.mackBook -= mackBook;
            console.log(`hozirda sizning appleStoreda ${mackBook} dona mackBook sotildi va  ${this.mackBook} dona mackBook qoldi`);
        } else {
            console.log(`hozida sizning apple storeda : ${this.mackBook} dona mackBook mavjud. uzur soraymiz siz istagan miqdorda  mackBook mavjud emas`);
        }
        tellMeTime();
    }


    qoshish(iphone, ipad, mackBook) {
        this.iphone += iphone; this.ipad +=ipad; this.mackBook +=mackBook;
        console.log(`hozirda sizning appleStoreda ${iphone} ta iphone ${ipad} ta ipad va ${mackBook} ta mackBook qoshildi`);
        tellMeTime();
    }

    qoldiq() {
        console.log(`Salom hurmatli Xodim bugun bizning appleStoreda  ${this.iphone} dona iphone, ${this.ipad} dona ipad, va ${this.mackBook} dona Mackbook qoldi.`);
        console.log("Bugun juda yaxshi xizmat korsatiyz. Hayirli tun !!");
        tellMeTime();
    }
}

module.exports = appleShop;






// class shop {
//     constructor(bread, coffee, tea,) {
//         this.bread = bread;
//         this.coffee = coffee;
//         this.tea = tea;
//     };
//
//
//     function productName() {
//         return this.productName();
//     }
// }
// this.orders = {};
//
// qoldiq() {
//     const presentTime = new Date();
//     const pastTime = presentTime.toLocaleTimeString();
//     console.log(`Hozirda ${pastTime}da ${this.bread}ta bread, ${this.coffee}ta coffee va ${this.tea}ta tea bor.`);
// }
//
// sotish(productName, number)
// if (this.products[productName] -= number); {
//     console.log(`${number} ta ${productName} sotildi,`);
// } else {
//     console.log(`${productName} yetarli emas.`);
// }
//
// qabul(productName, number) {
//     if (this.orders[productName]) {
//     } else {
//         this.orders[productName] = number;
//     }
//     console.log(`${number} ta ${productName} buyurtma qabul qilindi.`);
// }
// }
// module.exports = shop;
