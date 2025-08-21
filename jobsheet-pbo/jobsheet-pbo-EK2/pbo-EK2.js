class Produk {
    constructor(nama, id, jurusan) {
        this.nama = nama,
        this.id = id,
        this.jurusan = jurusan
    }

    // method validasi
    validate() {
        if (typeof this.nama !== 'string' || typeof this.id !== 'string' || typeof this.jurusan !== 'string') {
            return 'Data harus berupa string!'
        } else {
            return 'Data valid!'
        }
    }

    // method print
    static print(daftarProduk) {
        console.log('Data Mahasiswa:');
        for (let i = 0; i < daftarProduk.length; i++) {
            const produk = daftarProduk[i];
            console.log(`${produk.nama} - ${produk.id} - ${produk.jurusan}`)
        }
    }

        
}

var siswa1 = new Produk('Ratu', '12451' , 'Teknik Informatika');
var siswa2 = new Produk('Budi', 12452 , 'Teknik Informatika');
var siswa3 = new Produk('Joko', '12453' , 'Teknik Informatika');

console.log(siswa1.validate());
console.log(siswa2.validate());
console.log(siswa3.validate());

const daftarSiswa = [siswa1, siswa2, siswa3];

Produk.print(daftarSiswa);
