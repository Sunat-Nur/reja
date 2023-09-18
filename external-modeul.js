// module package

//moment package
const moment = require('moment');
const time = moment(). format();
console.log(time);


//random package
const { v4: uuidv4 } = require('uuid');
const random = uuidv4();
console.log('random ishlayabdi:', random);

//chalk package
const chalk = require("chalk");
const log = console.log;

log(chalk.blue(`uuid creates ${random}`));


// require package
const inquirer = require('inquirer');
inquirer
   .prompt([{ type: "input",  name: "raqam", message: "raqamni kiriting!!!"}])
   .then((answer) => {
       console.log("men kiritgan raqam qiymati:", answer.raqam);
   })

   .catch((err) => console.log(err));

