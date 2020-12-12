const colors = require('colors/safe');

let messages = [
    colors.green.bold('Hello, world!'),
    'This is the example app for the pterodactyl panel',
    'Note that it downloads a repository, builds the app, and then runs it automatically',
    'Look at the files tab and you\'ll find all the app\'s files which you can edit through this panel',
    'Note however if you have repository pulling enabled you might run into merge issues if you change files in there',
    'Of course you could also just upload your app manually either through the panel or the FTP server',
    'This demo application will continue running until the scheduled exit task runs (every 5 minutes)'
];

const out = (i: number) => {
    if (!(i < messages.length)) return;
    console.log(messages[i]);
    setTimeout(() => out(i+1), 500);
};

out(0);

// don't exit for atleast 5 minutes to avoid auto restarting
setTimeout(() => {}, 60e3*5);
