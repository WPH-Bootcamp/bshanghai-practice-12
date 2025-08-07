let sekarang = new Date();
console.log(sekarang);

// 1 januari 1970
let jan01_1970 = new Date(0);
console.log(jan01_1970);

// number param = milidetik
let jan02_1970 = new Date(24 * 3600 * 1000); //lewati 1 hari setelah 1 januari 1970
console.log(jan02_1970);

// string param = tanggal
let tanggal = new Date("2017-01-20");
console.log(tanggal);

// number param = tahun, bulan, tanggal
let tanggal2 = new Date(2011, 1, 1);
console.log(tanggal2);

// date punya method juga
let tanggal3 = new Date(2011, 1, 1, 2, 3, 4, 567);

console.log(tanggal3);
console.log(tanggal3.getFullYear());
console.log(tanggal3.getMonth());
console.log(tanggal3.getDate());
console.log(tanggal3.getHours());
console.log(tanggal3.getMinutes());
console.log(tanggal3.getSeconds());
console.log(tanggal3.getMilliseconds());

// mengatur komponen tanggal

let today = new Date();
today.setHours(0, 0, 0, 0);
console.log(today); //utc+0

// koreksi otomatis
let tanggal4 = new Date(2013, 1, 32);
console.log(tanggal4);

// perhitungan tanggal
let mulai = new Date();

for (let i = 0; i < 1000000; i++) {
  let doSomething = i * i * i;
}

let selesai = new Date();
console.log(`looping memakan waktu: ${selesai - mulai} ms`);

// date now
let start = Date.now();
for (let i = 0; i < 1000000; i++) {
  let doSomething = i * i * i;
}
let end = Date.now();
console.log(`looping memakan waktu: ${end - start} ms`);

let ms = Date.parse("2017-01-20"); //konversi menjadi unix timestamp
console.log(ms);
