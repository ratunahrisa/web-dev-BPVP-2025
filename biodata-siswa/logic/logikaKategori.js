/**
 *  Fungsi untuk menentukan keterangan lulus berdasarkan tahun lulus
 *  Author: Ratu Nahrisa
 *  Version: 1.0
 *  Date: 12 Agustus 2025
 */

function keteranganLulus(tahun) {

    // Variabel kosong untuk menampung keterangan lulus
    let kondisi;

    if (tahun < 2019) {
        kondisi = "Lulus Sebelum Covid"
    } else if (tahun >= 2019 && tahun <= 2021) {
        kondisi = "Lulus Saat Covid"
    } else if (tahun > 2021) {
        kondisi = "Lulus Setelah Covid"
    }

    // Return kondisi setelah pengkondisian
    return kondisi 
}

// Mengekspor fungsi agar bisa digunakan di file lain
module.exports = keteranganLulus;