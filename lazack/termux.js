"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "termux", reaction: "💯", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*LAZACK-MD* The following are the tools of termux used in different hacking sites\n\n ' + "Click the links below to fork the repo and use it on termux rooted and non rooted device. Powered by *Lazack md.*\n\n";
    let d = ' 1️⃣ https://github.com/XPH4N70M/WA_CRASHER';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/2cbb7abbf988bf9e7a088.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});