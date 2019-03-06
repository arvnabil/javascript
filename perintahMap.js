function panggilPerintahMap(){
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    dataKota.map((item,index,array) => {

        console.log(item);
        console.log(index);
        console.log(array);
        
    });
}

panggilPerintahMap();

// maka hasil nya ketika diketik node (filejs nya ) hasilnya seperti ini
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
