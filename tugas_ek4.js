console.log('=== Soal 1 ===')

let tinggi = [
    {name: "Rose", height: 178},
    {name: "Magnolia", height: 153},
    {name: "Daisy", height: 165},
    {name: "Jasmine", height: 161},
    {name: "Violet", height: 159},
];

for (let i = 0; i < tinggi.length; i++) {
    console.log(`${tinggi[i].name} memiliki tinggi ${tinggi[i].height} cm`);
}


console.log('=== Soal 2 ===')

function tampil () {
    
    let sorted = tinggi.sort((a,b) => a.name.localeCompare(b.name));

    console.log('Data yang diurutkan:')
    for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i].name + ' : ' + sorted[i].height)
    }
} 

tampil();


console.log('=== Soal 3 ===')

let buah = [];
buah.push('Apel', 'Mangga', 'Jeruk', 'Semangka', 'Pisang', 'Anggur', 'Nanas');

buah.sort()

console.log(buah);

for(let i = 0; i < buah.length; i++) {
    console.log(`${i+1}. ${buah[i]}`)
}


console.log('=== Soal 5 ===')

let daftarBelanja = [];

daftarBelanja.push('Beras', 'Minyak', 'Gula');

console.log(daftarBelanja);

daftarBelanja.push('Telur', 'Sayur', 'Buah');

console.log(daftarBelanja);

console.log(daftarBelanja.indexOf("Minyak"))

daftarBelanja.splice(daftarBelanja.indexOf("Minyak"), 1);

console.log(daftarBelanja);

for(let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i+1}. ${daftarBelanja[i]} `)
}


console.log('=== Soal 4 ===')

let sepatu = [
    {nama: "New Balance NB530", harga: 390000},
    {nama: "Nike Vomero 5", harga: 350000},
    {nama: "Adidas Samba", harga: 180000},
    {nama: "Onitsuka Tiger Mexico", harga: 420000},
];

let totalBelanja = 0;

function cetakSepatu () {
    console.log('===== Rincian Belanja Sepatu =====')
    
    let no = 1;
    for (let i = 0; i < sepatu.length; i++) {
        console.log(`${no}. ${sepatu[i].nama} - ${sepatu[i].harga.toLocaleString("id-ID")}`);
        no++;

        totalBelanja += sepatu[i].harga;
    }

    console.log(`Total belanja: ${totalBelanja.toLocaleString("id-ID")}`)
}

cetakSepatu()

console.log(`..............`)

let modal = 1200000;

function hitung (total) {

    if (total < 250000) {
        let hargaDiskon = total * 0
        let setelahDiskon = total - hargaDiskon
        console.log(`Total diskon: 0%`)
        console.log(`Harga diskon = ${hargaDiskon}`)
        console.log(`Total setelah diskon = ${setelahDiskon}`)
        console.log(`Pembayaran = ${modal}`)
        console.log(`Kembalian = ${modal - setelahDiskon}`)
    } else if (total >= 250000 && total <= 499999) {
        let hargaDiskon = total * 0.05
        let setelahDiskon = total - hargaDiskon
        console.log(`Total diskon: 5%`)
        console.log(`Harga diskon = ${hargaDiskon}`)
        console.log(`Total setelah diskon = ${setelahDiskon}`)
        console.log(`Pembayaran = ${modal}`)
        console.log(`Kembalian = ${modal - setelahDiskon}`)
    } else if (total >= 500000 && total <= 799000) {
        let hargaDiskon = total * 0.10
        let setelahDiskon = total - hargaDiskon
        console.log(`Total diskon: 10%`)
        console.log(`Harga diskon = ${hargaDiskon}`)
        console.log(`Total setelah diskon = ${setelahDiskon}`)
        console.log(`Pembayaran = ${modal}`)
        console.log(`Kembalian = ${modal - setelahDiskon}`)
    } else if (total >= 800000) {
        let hargaDiskon = total * 0.15
        let setelahDiskon = total - hargaDiskon
        console.log(`Total diskon: 15%`)
        console.log(`Harga diskon = ${hargaDiskon}`)
        console.log(`Total setelah diskon = ${setelahDiskon}`)
        console.log(`Pembayaran = ${modal}`)
        console.log(`Kembalian = ${modal - setelahDiskon}`)
    }
}

hitung(totalBelanja);

console.log(`..............`)

console.log(`total belanja: ${totalBelanja.toLocaleString("id-ID")}`);


let diskon = totalBelanja < 250000 ? 0 : totalBelanja < 500000 ? 5 : totalBelanja < 800000 ? 10 : 15;
let afterDiskon = totalBelanja - (totalBelanja*diskon/100);

console.log(`diskon= ${diskon} %`);
console.log(`harga setelah diskon ${afterDiskon.toLocaleString("id-ID")}`);
console.log(`pembayaran: ${modal.toLocaleString("id-ID")}`);
console.log(`kembalian: ${(modal - afterDiskon).toLocaleString("id-ID")}`)