function panggilPerulangan() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];

    // contoh menggunakan perulangan For
        for (var i = 0; i < dataKota.length; i++ ) {
        console.log(dataKota[i]);
        console.log(i);
        console.log(dataKota);
    } 

    /*for (var i = 0; i < 10; i++) {
        console.log('putaran ke: ', i);
    }*/
    // melakukan perulangan berdasarkan jumlah yang sudah ditentukan 
    

    // contoh menggunakan perulangan forEach
/*    dataKota.forEach((item, index, array) => {
        console.log(item);
        console.log(index);
        console.log(array);

    }); */
    // melakukan perulangan berdasarkan panjang dari sebuah array.

    // contoh menggunakan perulangan MAP
        // dataKota.map((item, index, array) => {
        //     console.log(item);
        //     console.log(index);
        //     console.log(array);
        // });

        /*var dataBaru = dataKota.map((item, index, array) => {
            return 'Kota : ' + item;
        });
        console.log(dataBaru); */
        // Dapat menghasilkan array baru jadi tidak perlu lagi menggunakan tambahan perintah PUSH.
        
}

panggilPerulangan();

// kesimpulannya 

/* 
a. Jika kita ingin melakukan perulangan berdasarkan jumlah data yang sudah ditentukan, maka gunakanlah perintah FOR
b. Jika kita ingin melakukan perulangan berdasarkan panjang array dan tidak ingin mencetak array baru lagi, maka gunakanlah forEach
c. Jika kita ingin melakukan perulangan dan ingin menghasilkan array baru, maka gunakanlah MAP
*/