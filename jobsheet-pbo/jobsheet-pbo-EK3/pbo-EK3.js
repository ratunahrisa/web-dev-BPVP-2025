class Produk {
    constructor (nama, harga, methodDeskripsi) {
        this.nama = nama,
        this.harga = harga,
        this.harga = methodDeskripsi
    }

    // method deskripsi
    deskripsi() {
        console.log('Deskripsi Produk:');
    }
}

class Elektronik extends Produk {
    constructor(nama, harga, garansi) {
        super(nama, harga)
        this.garansi = garansi;
    }

    deskripsi() {
        return console.log(`Elektronik: ${this.nama}, Harga: ${this.harga}, Garansi: ${this.garansi}`)
    }
}

class Pakaian extends Produk {
    constructor (ukuran) {}
}

let produk1 = new Produk('Kamera', 5000000);
produk1.deskripsi();

let produk2 = new Elektronik('Laptop', 800000, '2 Tahun');
produk2.deskripsi();