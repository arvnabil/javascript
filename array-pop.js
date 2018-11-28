function panggilPop(){
    var kota = ['jakarta', 'bandung', 'malang', 'makasar', 'medan'];
    console.log(kota)
    kota.pop()
    return kota

}

console.log(panggilPop())
// Array pop digunakan untuk menghapus isi array dibagian terakhir 
// maka hasil console.log nya seperti ini 
// [ 'jakarta', 'bandung', 'malang', 'makasar', 'medan' ]
// [ 'jakarta', 'bandung', 'malang', 'makasar' ]