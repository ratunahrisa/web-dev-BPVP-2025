const fs = require("fs");

const teks = fs.readFileSync("film.json", "utf-8");
const data = JSON.parse(teks);

console.log("Daftar Film: ", data);

data.push({judul: "Film Baru", tahun: 2025, genre: "Romantis, Komedi"})

// data.pop();

fs.writeFileSync("film.json", JSON.stringify(data, null, 2))

let no = 0;

console.log("Daftar Film: ");

for (let i = 0; i < data.length; i++) {
    no++;
    console.log(`${no}. ${data[i].judul} (${data[i].tahun}) - ${data[i].genre}`)
}