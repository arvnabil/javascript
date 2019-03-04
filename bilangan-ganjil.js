function panggilBilanganGanjil() {
    var bilanganGanjil = []
    for (var i = 1; i < 10; i++) {
       if (i%2 !== 0) {
           bilanganGanjil.push(i)
       }
       
    }
    return bilanganGanjil
}
console.log(panggilBilanganGanjil());

// if (i%2 !== 0) {
//     bilanganGanjil.push(i)
// }

// jadi i sisa hasil dibagi 2 nya tidak sama dengan 0 maka tampilkan bilanganGanjil.push(i)