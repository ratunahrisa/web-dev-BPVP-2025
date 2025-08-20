/**
 *  Aplikasi Biodata Siswa
 *  Memanggil fungsi dan menampilkan aplikasi
 */

const infoAplikasi = require('./config/aplikasi'); // Import variable informasi aplikasi
const tampilkanSiswa = require('./logic/tampilkanBiodata'); // Import fungsi untuk menampilkan biodata siswa

// Menampilkan nama aplikasi ke terminal
console.log("Aplikasi:", infoAplikasi.APP_NAME);

// Menampilkan biodata siswa
tampilkanSiswa()

// Menampilkan Info Aplikasi
console.log('==== Info Aplikasi ====')
console.log("Versi:", infoAplikasi.VERSION);
console.log("Penanggung Jawab:", infoAplikasi.AUTHOR);
  