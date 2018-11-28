function panggilJoin(){
    var kota = ["jakarta","Bandung", "Semarang", "Bali"];
    console.log(kota)
    var result = kota.join(",")
    return result

}

console.log(panggilJoin());
// join digunakan untuk memanggil sebuah array dan menjadikan nya sebuah string seperti ini hasilnya
//  [ 'jakarta', 'Bandung', 'Semarang', 'Bali' ]
// jakarta,Bandung,Semarang,Bali // tanda koma bisa dirubah disini var result = kota.join(",")
