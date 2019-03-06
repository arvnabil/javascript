function panggilFilter() {

    var arr = [
        {negara: 'Indonesia', benua: 'Asia'},
        {negara: 'Jerman', benua: 'Eropa'},
        {negara: 'Spanyol', benua: 'Eropa'},
        {negara: 'Korea', benua: 'Asia'},
        {negara: 'Portugal', benua: 'Eropa'},
        {negara: 'Amerika Serikat', benua: 'Amerika'},
    ];

    var benuaEropa = arr.filter((item) => {
        return item.benua === 'Eropa';
    });
    return benuaEropa;  

}

// contoh lain 
function filterGanjil() {
    var arr = ['1','2','3','4','5']
    var arrGanjil = arr.filter((el) => {
        return el % 2 !== 0
    });
    console.log(arrGanjil);
    
}
console.log(panggilFilter()); //akan menghasilkan filter Benua Eropa seperti ini :
/*
[   { negara: 'Jerman', benua: 'Eropa' },
    { negara: 'Spanyol', benua: 'Eropa' },
    { negara: 'Portugal', benua: 'Eropa' } ]
  */
filterGanjil(); // ini menghasilkan array ganjil [1,3,5]


