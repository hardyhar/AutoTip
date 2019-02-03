const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: "play.hypixel.net",
  port: "25565",
  username: "example@example.com",
  password: "password",
  version: "1.8.8",
});


function getTimeStamp() {
  var now = new Date();
  return ((now.getMonth() + 1) + '/' +
          (now.getDate()) + '/' +
           now.getFullYear() + " " +
           now.getHours() + ':' +
           ((now.getMinutes() < 10)
               ? ("0" + now.getMinutes())
               : (now.getMinutes())) + ':' +
           ((now.getSeconds() < 10)
               ? ("0" + now.getSeconds())
               : (now.getSeconds())));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let number = getRandomInt(56773, 2384827241)
var number2 = getRandomInt(56773, 2384827241)

bot.once('spawn', () => {
console.log("   #                        #######                        ");
console.log("  # #   #    # #####  ####     #    # #####       #  ####");
console.log(" #   #  #    #   #   #    #    #    # #    #      # #");
console.log("#     # #    #   #   #    #    #    # #    #      #  ####");
console.log("####### #    #   #   #    #    #    # #####       #     #");
console.log("#     # #    #   #   #    #    #    # #      #    # #   #");
console.log("#     #  ####    #    ####     #    # #       ####   ####");                                                          
console.log("By hardyhar v1.0");
console.log("Your shutdown code is... " + number)
bot.chat("/tip all");
console.log("Tipped All! " + "[" + getTimeStamp() + "]");
});
setInterval(function() {
bot.chat("/tip all");
console.log('\x1b[42m%s\x1b[37m', "Tipped All! " + "[" + getTimeStamp() + "]");
bot.chat("/lobby")
}, 60000);

function lol() {
bot.on('message', msg => console.log('\x1b[41m%s\x1b[37m', msg.toString()));
};

setTimeout(function() {
lol();
}, 3000);

bot.on("kicked", function(reason, loggedIn) {
  console.log('I got disconnected x.x');
});
