function panggilPush(){
    var data = [1, 2, 3, 5, 7, 8, 5, 3];
    console.log(data)
    // data.push(9)
    data.push('Jakarta')
    return data

}

console.log(panggilPush())
// array Push digunakan untuk menambah isi array dibagian terakhir
// jika data.push yang dimasukkan angka 9 maka jika di console log akan menjadi seperti ini 
// [ 1, 2, 3, 5, 7, 8, 5, 3 ]
// [ 1, 2, 3, 5, 7, 8, 5, 3, 9 ]
// bisa juga data.push yang dimasukkan bervalue string 'Jakarta' maka jika di console log akan menjadi seperti ini 
// [ 1, 2, 3, 5, 7, 8, 5, 3 ]
// [ 1, 2, 3, 5, 7, 8, 5, 3, 'Jakarta' ]