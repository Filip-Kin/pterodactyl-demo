const colors = require('colors/safe');
const process = require('process');

console.log(colors.red.bold('Hello, world!'));
console.log('This is the example app for the pterodactyl panel');
console.log('Note that it downloads a repository, builds the app, and then runs it automatically');
setTimeout(() => {
    console.log('Look at the files tab and you\'ll find all the app\'s files which you can edit through this panel');
    console.log('Note however if you have repository pulling enabled you might run into merge issues if you change files in there');
    console.log('Of course you could also just upload your app manually either through the panel or the FTP server');
}, 1000);
setTimeout(process.exit, 5000)
