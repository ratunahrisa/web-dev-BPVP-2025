const a = 20;
const b = 3;

console.log(`hasil dari penjumlahan adalah ${a+b}`);
console.log(`hasil dari pengurangan adalah ${a-b}`);
console.log(`hasil dari perkalian adalah ${a*b}`);
console.log(`hasil dari pembagian adalah ${a/b}`);
console.log(`hasil dari modulus adalah ${a%b}`);
console.log(`hasil dari pengurangan adalah ${a+b}`);

console.log(`....................`);
console.log(`Operator Asignment`);
console.log(`....................`);

let x = 10;

console.log("x+=2", x+=2) // x = x+2, 10+2
console.log("x-=2", x-=2) // x = x-2, 10-2
console.log("x/=2", x/=2) // x = x/2, 10/2
console.log("x*=2", x*=2) // x = x*2, 10/2
console.log("x%=2", x%=2) // x = x%2, 10%2
console.log("x**=2", x**=2) // x = x**2, 10**2

console.log(`....................`);
console.log(`Operator Perbandingan`);
console.log(`....................`);

const nilai = 65;
const lulus = nilai >= 75;
const hadir = false;

// AND
if (lulus && hadir) {
    console.log('Siswa baik')
} else {
    console.log("Siswa tidak baik")
}

// OR
if (lulus || hadir) {
    console.log('Siswa baik')
} else {
    console.log("Siswa tidak baik")
}

// OR
if (!lulus && !hadir) {
    console.log('Siswa tidak baik')
} else {
    console.log("Siswa baik")
}

//Prosedur
console.log(`....................`);
console.log(`Prosedur`);
console.log(`....................`);

function tampilkanPesan() {
    console.log("Selamat datang di JavaScripts");
}

tampilkanPesan();

// Prosedur dengan parameter
function sapa (nama) {
    console.log(`Halo, ${nama}!`)
}

sapa("Emma")
sapa("Erick")

//Fungsi
console.log(`....................`);
console.log(`Fungsi`);
console.log(`....................`);

function tampilkanWaktu() {
    let jam = new Date().getHours();
    console.log(`Sekarang jam ${jam}`);
}

tampilkanWaktu();

function tampilkanHari() {
    let hari = new Date().getDay();
    console.log(`Sekarang hari ${hari}`)
}

tampilkanHari();

// Fungsi dengan parameter
function hitungLuasPersegi(sisi) {
    return sisi*sisi
}

let luas = hitungLuasPersegi(4);
console.log(`Luas persegi dengan sisi 4 adalah ${luas}`);

function hitungLuasPersegiPanjang(panjang, lebar) {
    const luasPersegiPanjang = panjang * lebar;
    const print = console.log(`Luas persegi panjang dengan panjang: ${panjang} dan lebar: ${lebar} adalah ${luasPersegiPanjang}`);
    return print;
}

hitungLuasPersegiPanjang(10,15);

function cekBilanganGenap(angka) {
    let isBilanganGenap = false;
    if (angka % 2 === 0) {
        isBilanganGenap = true
    } else {
        isBilanganGenap = false
    }

    const print = console.log(isBilanganGenap)

    return print;
}

cekBilanganGenap(4);

function cekBilanganGenap1(angka) {
    if (angka % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(cekBilanganGenap1(3));

// Array
console.log(`....................`);
console.log(`Array`);
console.log(`....................`);

let siswa = [
    {nama: "Ali", nilai: 90, kelas: "1b"},
    {nama: "Budi", nilai: 80, kelas: "1c"},
    {nama: "Cici", nilai: 75, kelas: "1a"}
];

console.log(siswa[0].kelas);
console.log(siswa[1].nama);
console.log(siswa.length);

// Array Iteration
/*
    - forEach() : menjalankan fungsi pada setiap array, tapi ga bikin array baru
    - map() : mengubah nilai setiap elemen dalam array dan mengembalikan array baru
    - filter() : menyaring elemen array berdasarkan kondisi tertentu, dan mengmbalikan array baru yg lolos filter
*/

//forEach()
let angka = [10, 20, 30];

angka.forEach(function (nilai, index) {
    console.log("Index ke " + index + ": " + nilai)
});

//map()
let number = [1,2,3];
let kuadrat = number.map(function (nilai) {
    return nilai * nilai
});

console.log(kuadrat);

//filter()
let num = [70, 80, 45, 20, 100];
let passed = num.filter(function(n) {
    return n > 60;
});

console.log(passed);  


console.log(`....................`);

function faktorial(n) {
    for(i=n; i>0; i--) {
        
    }
}

faktorial(5);
