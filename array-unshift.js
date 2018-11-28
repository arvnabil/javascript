function panggilUnshift(){
    var data = ["jakarta", "bandung", "malang", "makasar"];
    console.log(data)
    data.unshift("Surabaya", "Palembang")
    
    return data
}

console.log(panggilUnshift());

// unshift digunakan untuk menambah isi array di posisi pertama 
// maka akan menjadi seperti ini 
// [ 'jakarta', 'bandung', 'malang', 'makasar' ]
// [ 'Surabaya','Palembang','jakarta','bandung','malang','makasar' ]
