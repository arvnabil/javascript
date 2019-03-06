function panggilPerulangan() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];

    // contoh menggunakan perulangan For
/*    for (var i = 0; i < dataKota.length; i++ ) {
        console.log(dataKota[i]);
        console.log(i);
        console.log(dataKota);
    } */

    // contoh menggunakan perulangan forEach
/*    dataKota.forEach((item, index, array) => {
        console.log(item);
        console.log(index);
        console.log(array);

    }); */

    // contoh menggunakan perulangan MAP
        dataKota.map((item, index, array) => {
            console.log(item);
            console.log(index);
            console.log(array);
        });
}

panggilPerulangan();

// hasil nya akan sama seperti ini 
/*

Jakarta
0
[ 'Jakarta', 'Balikpapan', 'Medan' ]
Balikpapan
1
[ 'Jakarta', 'Balikpapan', 'Medan' ]
Medan
2
[ 'Jakarta', 'Balikpapan', 'Medan' ]

*/

// keterangan 
// Item dari setiap array. Jakarta - Balikpapan - Medan
// index dari setiap array.  0 - 1 - 2     
// data array itu sendiri [ 'Jakarta', 'Balikpapan', 'Medan' ] yang dicetak berulang 3x.