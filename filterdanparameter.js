function panggilFilterParameters(value){
    var arr = [
        {negara: 'Indonesia', benua: 'Asia'},
        {negara: 'Jerman', benua: 'Eropa'},
        {negara: 'Spanyol', benua: 'Eropa'},
        {negara: 'Korea', benua: 'Asia'},
        {negara: 'Portugal', benua: 'Eropa'},
        {negara: 'Amerika Serikat', benua: 'Amerika'},
    ];

    // var benuaEropa = arr.filter((item) => {
    //     value = item.benua === 'Asia';
    //     return value;
    // });

    var benuaEropa = arr.filter((item) => {
        value = item.benua === 'Eropa';
        return value;
    });
    console.log(benuaEropa);
    
    
}

panggilFilterParameters();