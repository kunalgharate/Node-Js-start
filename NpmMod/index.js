const chalk = require("chalk");
const validator = require("validator");


const isEmail = validator.isEmail("ram@gmail.com")
console.log(isEmail ? chalk.green(isEmail) : chalk.red(isEmail));
