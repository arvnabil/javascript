function panggilSplit(){
    var kalimat = "Kita sedang Belajar Javascript"
    console.log(kalimat);
    
    var result = kalimat.split(" ");
    return result
}

console.log(panggilSplit());

// split digunakan untuk membuat kalmat menjadi sebuah array
// dengan membuat var result kalimat di split kan / dipotong menjadi array berdasarkan spasi nya
// maka hasilnya adalah 
// Kita sedang Belajar Javascript        ( ini untuk console.log(kalimat);)
// [ 'Kita', 'sedang', 'Belajar', 'Javascript' ]  (ini untuk console.log(panggilSplit()); yang sudah di return kan result nya)

