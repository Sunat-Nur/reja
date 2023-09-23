const moment = require("moment");

function tellMeTime() {
    console.log(`ayni vaqt bizda  ${moment().format("DD MM YYYY HH:mm")} ni ko'rsatyabdi`)}


class appleShop {

    constructor(iphone, ipad, mackBook) {
        this.iphone = iphone;
        this.ipad = ipad;
        this.mackBook = mackBook;
    }

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





