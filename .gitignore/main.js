const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
bot.user.setPresence({ game: { name: 'Hunterz', type: 0}});
    console.log("Bot Prét !");
});

bot.login('NTEyNzEyOTA3OTE0NzM5NzIz.Ds9dGA.neJ9mnKSbuhlCdtQR3sg8VpSUsg');

bot.on('message', message => {
    if (message.content === prefix + "pagefacebook"){
        message.reply("Notre page facebook c'est : \n https://facebook.com/ferme/");
        console.log('facebook'); 
    }

    if (message.content === prefix + "stafflp"){
        message.reply("\n List Des Staff \n @Alek xd#0379 \n @_/__Simikey__\_#4411 \n Nous recrutons")
        console.log('staff')
    }

    if (message.content === prefix + "recrutement"){
        message.reply("Pour les recrutement il faut passe un recrutement vocal et donne un CV pour plus de chance merci et bonne chance a vous !")
        console.log('recrutement')
    }

    


    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#11111')
            .addField("Comment ça marche !", "   !ccm => Vous expliquera comment ça marche !")
            .addField(" Commandes Help !",   "   !help => Pour affichez les commandes !")
            .addField("Page Facebook !", "  !pagefacebook => Rejoind nous sur notre page facebook !")
            .addField("List Staff !", " !stafflp => List des staff !")
            .addField("Recrutement Staff !",    "   !recrutement => Comment ça marche pour étre recruté ?")
            message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes de PlayTheParks :\n -/help pour afficher les commandes");
        console.log("Commande Help demandée !");
        }
    });
