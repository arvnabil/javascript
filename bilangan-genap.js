function panggilBilanganGenap() {
    var bilanganGenap = []
    for (var i = 1; i < 10; i++) {
       if (i%2 === 0) {
           bilanganGenap.push(i)
       }
       
    }
    return bilanganGenap
}
console.log(panggilBilanganGenap());

// if (i%2 === 0) {
//     bilanganGenap.push(i)
// }

// jadi i sisa hasil diabgi 2 nya adalaah 0 maka tampilkan bilanganGenap.push(i)