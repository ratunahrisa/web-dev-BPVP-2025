/**
 * Fungsi untuk menampilkan salam ke terminal
 * Author: Intruktur TIK
 * Version: 1.0
 * Date: 8 Juli 2025
 */

function tampilkanSalam() {
    // Menyimpan pesan salam
    const pesan = "Halo selamat datang di dunia Node.Js";

    //Menampilkan pesan ke terminal
    console.log(pesan);

}

// Mengekspor fungsi agar bisa digunakan di file lain
module.exports = tampilkanSalam;