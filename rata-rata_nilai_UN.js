function nilaiRataRata(bahasaIndonesia,bahasaInggris,mtk,ipa){
    if(isNaN(bahasaIndonesia)||isNaN(bahasaInggris)|| isNaN(mtk)|| isNaN(ipa)){
        console.log('Nilai harus diisi');
        return;
    }else{
        var jumlah = (bahasaIndonesia + bahasaInggris + mtk + ipa);
        var nilai = jumlah/4;

        if(nilai <= 59){
            console.log("Nilai rata-rata: " + nilai);
            console.log("Grade: E");
        }
        else if(nilai <= 69){
            console.log("Nilai rata-rata: " + nilai);
            console.log("Grade: D");
        }
        else if(nilai <= 79){
            console.log("Nilai rata-rata: " + nilai);
            console.log("Grade: C");
        }

        else if(nilai <= 89){
            console.log("Nilai rata-rata: " + nilai);
            console.log("Grade: B");
        }

        else if(nilai <= 100){
            console.log("Nilai rata-rata: " + nilai);
            console.log("Grade: A");
        }
    }
}

nilaiRataRata( 70, 90, 87);