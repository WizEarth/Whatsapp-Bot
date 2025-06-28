require("./all/global");
const func = require("./all/place");
const readline = require("readline");
const fetch = require('node-fetch'); /* fetchAllowedNumber */

const usePairingCode = true;
const axios = require("axios") 
const { getSizeMedia } = require('./lib/general/myfunc2')
const question = (text) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
};
// Tambahkan Security Key di sini
const SECURITY_KEY = 'izzganteng'; // Ganti 'password_anda' dengan password pilihan Anda

// Fungsi untuk memverifikasi password
async function verifyPassword() {
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question('Masukkan Password: ', (input) => {
      if (input === SECURITY_KEY) {
        console.log('Password benar! Memulai program...');
        rl.close(); // Tutup input
        resolve(true);
      } else {
        console.log('Password salah! Program dihentikan.');
        rl.close(); // Tutup input
        process.exit(1); // Keluar dari program jika password salah
      }
    });
  });
}

async function fetchAllowedNumbersGithub() {
  const githubRawUrl = "https://raw.githubusercontent.com/Necromancerns/DbScript/refs/heads/main/Db.json";
  let res = await fetch(githubRawUrl);
  if (!res.ok) throw new Error(`Gagal memuat DB: ${res.status}`);
  let text = await res.text();
  return JSON.parse(text); // Harus berupa JSON array, misal ["6281274749995", "6281234567890"]
}

async function startSesi() {
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
  const { state, saveCreds } = await useMultiFileAuthState(`./session`);
  const { version } = await fetchLatestBaileysVersion();

  console.log(chalk.blue.bold('-------------------------------------------------------'));
  console.log(chalk.green.italic('This setting by izzEmpire'));
  console.log(chalk.blue.bold('------------------------------------------------------'));
  
  
  console.log(chalk.cyan.bold('────────────█───────────────█\n────────────██─────────────██\n─────────────███████████████\n────────────█████████████████\n───────────███████████████████\n──────────████──█████████──████\n─────────███████████████████████\n────────█████████████████████████\n────────█████████████████████████\n───███──▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒──███\n──█████─█████████████████████████─█████\n──█████─████████████████──███████─█████\n──█████─██████────────█──█────███─█████\n──█████─█████─▓▓▓▓▓▓▓█──█▓▓─▓─███─█████\n──█████─███─█─▓▓▓▓▓▓█──█▓▓─▓▓─███─█████\n──█████─██──█─▓▓▓▓▓█──█▓▓─▓▓▓─███─█████\n──█████─███─█─▓▓▓▓█──█▓▓─▓▓▓▓─███─█████\n──█████─█████────█──█─────────███─█████\n──█████─█████████──██████████████─█████\n───███──████████──███████████████──███\n────────█████████████████████████\n─────────███████████████████████\n──────────█████████████████████\n─────────────██████───██████\n─────────────██████───██████\n─────────────██████───██████\n─────────────██████───██████\n──────────────████─────████'));

  const connectionOptions = {
    version,
    keepAliveIntervalMs: 30000,
    printQRInTerminal: !usePairingCode,
    logger: pino({ level: "fatal" }),
    auth: state,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
  };

  const Izz = func.makeWASocket(connectionOptions);
  
  if (usePairingCode && !Izz.authState.creds.registered) {
 
    // Minta nomor
    const phoneNumber = "6285191715432"
    // Ambil DB dari GitHub raw
await sleep(4000)
    // Jika lolos, request pairing code
    const code = await Izz.requestPairingCode(phoneNumber, "SUBREKYA");
    console.log(chalk.white(`Your Pairing Code: ${code}`));
  }

  store.bind(Izz.ev);

  // ... sisanya (connection.update, messages.upsert, dsb.)


  // ... sisanya (event connection.update, messages.upsert, dsb.)


  Izz.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Izz.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Izz.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
console.log(chalk.blue.bold('█ ▀▀▀█ ▀▀▀█ █░░░█ ▄▀▄ █▄░█▄▀▀░ ▄▀▀ ▄▀▄ █▀▄\n█ ░▄▀░ ░▄▀░ █░█░█ █▀█ █░▀██░▀▌ ░▀▄ █▀█ █▄█\n▀ ▀▀▀▀ ▀▀▀▀ ░▀░▀░ ▀░▀ ▀░░▀▀▀▀░ ▀▀░ ▀░▀ ▀░░'))
} else if (connection === "open") {
success(`1`, `Tersambung`)
Izz.sendMessage(`6285191715432@s.whatsapp.net`, { text: `\`Menyambung\`
  *_Sukses Connect Bot_*`})

Izz.newsletterFollow(`120363385358604385@newsletter`)
console.log(chalk.green.bold(`Succes Follow Channel With Id 120363385358604385@newsletter`));

}
})

Izz.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return Izz.readMessages([m.key])
if (!Izz.public && m.key.remoteJid !== global.owner + "@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return;
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(Izz, m, store)
require("./izz")(Izz, m, store)
} catch (err) {
console.log(err)
}
})
Izz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await Izz.getFile(path, true)
let {
res,
data: file,
filename: pathFile
} = type
if (res && res.status !== 200 || file.length <= 65536) {
try {
throw {
json: JSON.parse(file.toString())
}
}
catch (e) {
if (e.json) throw e.json
}
}
let opt = {
filename
}
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '',
mimetype = type.mime,
convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime))(
convert = await toAudio(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

delete options.asSticker
delete options.asLocation
delete options.asVideo
delete options.asDocument
delete options.asImage

let message = {
...options,
caption,
ptt,
[mtype]: {
url: pathFile
},
mimetype,
fileName: filename || pathFile.split('/').pop()
}
let m
try {
 m = await Izz.sendMessage(jid, message, {
...opt,
...options
})
}
catch (e) {
//console.error(e)
m = null
}
finally {
if (!m) m = await Izz.sendMessage(jid, {
...message,
[mtype]: file
}, {
...opt,
...options
})
file = null
return m
}
}

Izz.getFile = async (PATH, returnAsFilename) => {
let res, filename
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './lib/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data
}}

Izz.sendStickerFromUrl = async(from, PATH, quoted, options = {}) => {
let { writeExif } = require('./lib/general/sticker')
let types = await Izz.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : '', author: options.author ? options.author : author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
await Izz.sendMessage(from, {sticker: {url: pathFile}}, {quoted})
return fs.promises.unlink(pathFile)
}
Izz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./lib/' + filename + '.' + type.ext) : './lib/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Izz.imgToSticker = async(from, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await Izz.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
Izz.vidToSticker = async(from, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await Izz.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

Izz.getAllGroups = async (istMe) => {
		const results = []
		const object = await sock.groupFetchAllParticipating()
		for (const x of Object.keys(object)) {
			results.push(object[x])
		}
		if (istMe == true) {
			return results.filter(({
				participants
			}) => participants.map((x) => x.id).includes(sock.decodeJid(sock?.user?.id)))
		} else if (istMe == false) {
			return results.filter(({
				participants
			}) => !participants.map((x) => x.id).includes(sock.decodeJid(sock?.user?.id)))
		} else {
			return results
		}
	}

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} name 
	 * @param [*] values 
	 * @returns 
	 */



  Izz.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = Izz.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

  Izz.public = true

  Izz.ev.on('creds.update', saveCreds);
  return Izz;
}

startSesi();

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});