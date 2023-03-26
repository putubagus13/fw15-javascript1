function inputKata(kata){
    if(typeof kata !== 'string'){
        console.log('Tipe data harus string');
    }else{
        var kataDiubah='';
        for( var i = 0; i < kata.length; i++){
        if(kata[i] == 'a'){
            kataDiubah += 'o';
        }else{
            kataDiubah += kata[i];
        }
    }
    console.log(kataDiubah);
    }
}
inputKata('kamu anaknya siapa');