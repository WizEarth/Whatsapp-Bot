function initTelegram(conn, waChatId) {
  try {
    require('./sc-tele-izz'); // Memulai bot Telegram dari modul yang sudah Anda sediakan
    conn.sendMessage(waChatId, { text: '✅ SC-Tele-IZZ terhubung dan berjalan.' });
  } catch (err) {
    console.error('Gagal memulai SC-Tele-IZZ:', err);
    conn.sendMessage(waChatId, { text: '❌ Gagal menghubungkan SC-Tele-IZZ. Cek log server.' });
  }
}

module.exports = { initTelegram };