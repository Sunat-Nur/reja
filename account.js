const moment = require("moment");

class account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    tellMeBalance() {
        console.log(`sizning hisobingizda qoldiq: ${this.#amount}$ tashkil etadi`);
        return this.#amount;
    }

    withdrawMoney(amount) {
        if (this.#amount > amount) {
            this.#amount -= amount;
            console.log(`sizning hisobingizdan ${amount} $ yechildi hozirda hisobingizda ${this.#amount} $ bor`);
        } else {
            console.log(`hisobingizda yetarli mablag yoq: ${this.#amount}$`);
        }
    }

    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`hisobingiz ${amount}$ ga to'ldirildi, hozirda ${this.#amount}$ pul  bor`);
    }

    giveMeDetails() {
        console.log(`Salom hurmatli ${this.name} hozirda sizng hisobingizda ${this.#amount}$ni tashkil etadi`);
        console.log(`hisob raqamingiz ${this.#account_id}`);
    }

    static tellMeAboutClass() {
        console.log("bu class accountlari yasash uchun xizmat qiladi");
    }

    static tellMeTime() {
        console.log(`hozirgi vaqt ${moment().format("YY MM DD HH:mm:ss")}`)
    }
}

module.exports = account;