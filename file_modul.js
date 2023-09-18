

const Account = require("./account");

Account.tellMeAboutClass();
Account.tellMeTime();


console.log("********************")

const  myAccount = new Account("Sunat_nur", 2000000, 42098409284309);
myAccount.giveMeDetails();
myAccount.makeDeposit(80);
myAccount.tellMeBalance();
myAccount.withdrawMoney(100);