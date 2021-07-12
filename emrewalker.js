const Discord = require("discord.js");
const delay = ms => new Promise(res => setTimeout(res, ms));
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

const emrewalker = new Discord.Client();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

emrewalker.on("ready", () => {
  setInterval(function(){ 
    var random = Math.floor(Math.random()*2)
    if (random == 0) {
      emrewalker.channels
        .get("798041147578122271").join(); // hangi sese girsin
    } else {
        emrewalker.channels
        .get("798041232969302027").join(); // 5 saniye sonra hangi ses kanalına girsin
      }
    }, 5000); // KAÇ SANİYEDE KANAL DEĞİŞTİRSİN // 1000 = 1 SANİYE
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

emrewalker.on("ready", () => {
  setInterval(() => {
    emrewalker.channels
      .get("815549195900551199") // KANAL ID
      .send("merhaba nasılsınız"); // YAZACAĞI MESAJ
  }, 50000); // KAÇ SANİYEDE KANALA YAZSIN // 1000 = 1 SANİYE
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

emrewalker.login("");// token
























































