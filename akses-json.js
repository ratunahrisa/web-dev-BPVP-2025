const fs = require("fs");

// membuka dan membaca file JSON
// otomatis membuka
const teks = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(teks);

console.log("Isi Awal: ", data);

// menulis data baru ke array
data.push({id: 4, nama: "Jeremy", usia: 29});

// menyimpan (menulis ulang)
// otomatis menutup
fs.writeFileSync("data.json", JSON.stringify(data, null, 2));


// data.pop()

// fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

console.log("Data berhasil ditambahkan dan disimpan ulang");
console.log("Isi Akhir: ", data);
 