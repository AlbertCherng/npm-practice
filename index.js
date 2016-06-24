var chalk = require("chalk");

var message = "Hello " + chalk.grey("World");
console.log(message);

var string = chalk.blue.bgYellow.underline.bold('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz');
console.log(string);