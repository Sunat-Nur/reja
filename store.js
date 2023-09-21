const moment = require("moment");

function tellMeTime() {
    console.log(`ayni vaqt bizda  ${moment().format("DD MM YYYY HH:mm")} ni ko'rsatyabdi`)}


class appleShop {

    constructor(iphone, ipad, mackBook) {
        this.iphone = iphone;
        this.ipad = ipad;
        this.mackBook = mackBook;
    }

    // sell(iphone, ipad, mackBook) {
    //     if (this.iphone > iphone,  this.ipad > ipad, this.mackBook > mackBook) {
    //         this.iphone -=iphone;  this.ipad -=ipad; this.mackBook -=mackBook;
    //         console.log(`hozirda sizning appleStoredan ${this.iphone}ta iphone, ${this.ipad} ta ipad, ${this.mackBook} ta mackbook sotildi`);
    //     }
    //     // else {
    //     //     console.log(`hozida sizning apple store dan : ${this.iphone} ta iphone, ${this.ipad} ta ipad, ${this.mackBook} ta mackBook mavjud. uzur soraymiz siz istagan miqdorda iphone bizda mavjud emas`);}
    //
    //     // if (this.ipad > ipad) {
    //     //     this.ipad -= ipad; this.mackBook -= mackBook;
    //     //     console.log(`hozirda sizning appleStoreda ${ipad} dona ipad sotildi va  ${this.ipad} dona ipad qoldi`);
    //     // } else {
    //     //     console.log(`hozida sizning apple storeda : ${this.ipad} dona ipad mavjud emas. uzur soraymiz siz istagan miqdorda ipad bizda mavjud emas`);}
    //     //
    //     // if (this.mackBook > mackBook) {
    //     //     this.mackBook -= mackBook;
    //     //     console.log(`hozirda sizning appleStoreda ${mackBook} dona mackBook sotildi va  ${this.mackBook} dona mackBook qoldi`);
    //     // } else {
    //     //     console.log(`hozida sizning apple storeda : ${this.mackBook} dona mackBook mavjud. uzur soraymiz siz istagan miqdorda  mackBook mavjud emas`);
    //     // }
    //
    //     tellMeTime();
    // }

    sell(iphone, ipad, mackBook) {
        this.iphone -= iphone; this.ipad -=ipad; this.mackBook -=mackBook;
        console.log(`hozirda sizning appleStoreda ${iphone} ta iphone ${ipad} ta ipad va ${mackBook} ta mackBook sotildi`);
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






//
// const moment = require("moment");
//
// function tellMeTime() {
//     console.log(`ayni vaqt bizda ${moment().format("DD MM YYYY HH:mm")} ni ko'rsatyabdi`)};
//
//
//
//
// class shop {
//
//     constructor(bread, coffee, tea) {
//         this.bread = bread;
//         this.coffee = coffee;
//         this.tea = tea;
//     }
//
//     sotish(bread, tea, coffee) {
//         this.bread -= bread; this.coffee -= coffee, this.tea -= tea;
//         console.log(`bugun ${bread}dona non, ${coffee} kofe va ${tea}dona choy sotildi.`);
//         tellMeTime();
//     };