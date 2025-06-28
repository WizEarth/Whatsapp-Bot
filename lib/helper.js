const axios = require("axios");

/**
 * Fungsi untuk mengunduh gambar sebagai buffer
 * @param {string} url - URL gambar yang akan diambil
 * @returns {Promise<Buffer>} - Mengembalikan buffer gambar
 */
async function getBuffer(url) {
    try {
        const response = await axios.get(url, {
            responseType: "arraybuffer",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });
        return Buffer.from(response.data);
    } catch (error) {
        console.error("❌ Error saat mengambil buffer:", error.message);
        return null;
    }
}

module.exports = { getBuffer };