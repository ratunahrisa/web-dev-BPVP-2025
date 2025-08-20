/**
 *  Fungsi untuk menampilkan biodata siswa
 *  Author: Ratu Nahrisa
 *  Version: 1.0
 *  Date: 12 Agustus 2025
 */

const siswa = require('../data/siswa'); // Import data siswa
const ketLulus = require('./logikaKategori') // Import fungsi logika keterangan lulus

function tampilkanBiodata() {

    // Menampilkan judul
    console.log('==== Biodata Siswa ====')

    // Perulangan untuk memanggil data siswa
    for (let i = 0; i < siswa.length; i++) {
        console.log(`Nama: ${siswa[i].nama}`);
        console.log(`Umur: ${siswa[i].umur}`);
        console.log(`Asal: ${siswa[i].asal}`);
        console.log(`Sekolah: ${siswa[i].sekolah}`);
        console.log(`Tahun Lulus: ${siswa[i].tahunLulus}`);
        console.log(`Kategori Kondisi: ${ketLulus(siswa[i].tahunLulus)}`);
        console.log(`..................`)
    }
  
}

// Mengekspor fungsi agar bisa digunakan di file lain
module.exports = tampilkanBiodata;