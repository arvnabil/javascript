function panggilShift()
{
    var kota = ['Jakarta', 'Bandung', 'Malang', 'Makassar', 'Surabaya' ];
    // console.log(kota);
    // console.log('===================');

    // kota = kota.shift();
    // Shift berfungsi untuk mengilangkan salah satu isi array
    var kota2 = kota.shift()
    console.log(kota2)

    return kota

}

console.log(panggilShift() )
// maka hasil yg keluar adalah
// [ 'Bandung', 'Malang', 'Makassar', 'Surabaya' ]