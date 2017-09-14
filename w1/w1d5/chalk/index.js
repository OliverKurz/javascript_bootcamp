var chalk = require("chalk");

var message = function(){
var yellow = chalk.yellow("World")
var blue = chalk.blue("World")
var red = chalk.red("World")
var green = chalk.green("World")
var yellow1 = chalk.bold.yellow("World")
var blue1 = chalk.blue.underline.bold('World')

  console.log (yellow, blue, red, green, yellow1, blue1, red1, green1);
}

message()