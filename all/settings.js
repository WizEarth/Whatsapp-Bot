require("./module")
//isi
global.dana = '081274749995'
global.ovo = '081274749995'
global.gopay = '081274749995'
global.gtds = "GataDios"
global.xyro = "5dRkJDWvIG"
global.nlkey = "AdpStore"
global.skizapi = "SanTampan"
global.neoxrapi = "sanolan"
global.ariekey = "DVMsILTHCnP2lTz8kqUIN7vjFQrnEMPg"
global.wm = "© offc izzWangsap"
//═════════━━━━━━━━━━━━━
global.pairing_code = true // Jangan ubah
global.sessionName = "session"
global.autoPromosiActive = true; 
global.image = 'https://pomf2.lain.la/f/x94ggopr.jpg'
global.owner = "6281274749995" 
global.namabot = "𝐈𝐳𝐳𝐁𝐨𝐭𝐳𝐖𝐡𝐢𝐭𝐞" 
global.namaCreator = "𝐈𝐳𝐳𝐖𝐡𝐢𝐭𝐞𝐀𝐭𝐭𝐚𝐜𝐤" 
global.autoJoin = false 
global.antilink = false 
global.versisc = '3.0.0' 
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = 'https://gazyxgembel.tyl.web.id' 
global.apikey = 'ptla_Md8LqAxy07A5Y0vYHoINrs6mrPRlZC3uqOfHv04Yz2E' 
global.capikey = 'ptlc_RSjiWqWnE7IfG1Br0YSAlcdcNQtJXBzJNdaO82eKgWJ'
global.domain2 = 'https://manzzystoree.serverindo.me' 
global.apikey2 = 'ptla_An8tbDwM2C8vgQtVWYpSsmUepeXEZ5dnQ7neEVIglln' 
global.capikey2 = 'ptlc_mZOZ1CUXqVQqVaH8XdXEYry2OQC4eNSNeoxhrH74mb2' 
global.domain3 = 'https://manzzystoree.serverindo.me' 
global.apikey3 = 'ptla_An8tbDwM2C8vgQtVWYpSsmUepeXEZ5dnQ7neEVIglln' 
global.capikey3 = 'ptlc_mZOZ1CUXqVQqVaH8XdXEYry2OQC4eNSNeoxhrH74mb2' 
global.eggsnya = '15' 
global.location = '1'
global.isLink = 'https://whatsapp.com/channel/0029VanHK8s5fM5apuOgIo1P' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.lagu = fs.readFileSync("./lagu.mp3") 
global.tekspushkon = "" 
global.tekspushkonv2 = ""
global.packname = "𝐈𝐳𝐳𝐖𝐡𝐢𝐭𝐞𝐀𝐭𝐭𝐚𝐜𝐤" 
global.author = "𝐈𝐳𝐳𝐖𝐡𝐢𝐭𝐞𝐀𝐭𝐭𝐚𝐜𝐤" 
global.jumlah = "5" //𝐣𝐚𝐧𝐠𝐚𝐧 𝐠𝐚𝐧𝐭𝐢
global.simbol = '🇵🇸'
global.freepalestina = '𝐖𝐄 𝐀𝐑𝐄 𝐋𝐎𝐕𝐄 𝐀𝐍𝐃 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐏𝐀𝐋𝐄𝐒𝐓𝐈𝐍𝐄'
global.idch = ""
global.welcome = false // welcome+left


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})