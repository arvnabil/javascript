function panggilSplice(){
    var kota = ['Jakarta', 'Bandung', 'Makasar', 'Medan'];
    console.log(kota)
    // untuk penambahan array
    // kota.splice(2,1,'Palembang')
    // untuk menghapus array
    kota.splice(1,1)
    return kota
}
console.log(panggilSplice());
// array splice digunakan untuk membuat isi array dan posisi array-nya sesuai dengan keinginan kita
// kota.splice(2,0,'Palembang') 
// 2 itu posisi array tempat kita mau tambah
// jakrta[0]
// Bandung[1]
// Palembang[2]
// kota.splice(2,0,'Palembang') 
// nah 0 itu digunakan supaya array selanjutnya tidak hilang dan sehabis palembang akan dimulai dari 0 
// maka jadinya seperti ini
// [ 'Jakarta', 'Bandung', 'Makasar', 'Medan' ]
// [ 'Jakarta', 'Bandung', 'Palembang', 'Makasar', 'Medan' ]

// kota.splice(2,0,'Palembang') 
// tetapi jika kita menuliskan nya 1 maka akan dimulai dari 1 maka hasil nya seperti ini jika di console.log
// [ 'Jakarta', 'Bandung', 'Makasar', 'Medan' ]
// [ 'Jakarta', 'Bandung', 'Palembang', 'Medan' ]
// makasar[0]
// medan[1] // maka sehabis palembang selanjut nya dimulai dari medan 

// untuk menghapus array sesuai keinginan kita bisa melakukan perintah seperti ini 
// kota.splice(1,1)
// angka 1 pertama untuk memulai dari Jakarta
// angka 1 kedua untuk memulai nya dari makasar jadi seperti ini
// [ 'Jakarta', 'Bandung', 'Makasar', 'Medan' ]
// [ 'Jakarta', 'Makasar', 'Medan' ]

