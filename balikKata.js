function balikKata(kata){
    return kata.split('').reverse().join('');
}
console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));

// keterangan:
// Split : untuk memecah suatu string menjadi array yang berisi substring
// Reverse : untuk membalikkan urutan elemen dari suatu array.
// Join : untuk menggabungkan element pada array menjadi suatu string.