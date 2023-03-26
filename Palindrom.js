function inputKata(kata){
  if(kata.length <= 2){
      console.log("Teks harus lebih dari 2 huruf");
      return;
  }else{
      var kataTerbalik = "";
      for (var i = kata.length - 1; i >= 0; i--) {
      kataTerbalik += kata[i];
      }

      if (kata === kataTerbalik) {
      console.log("Palindrom");
      } else {
      console.log("Bukan Palindrom");
      }
  }
}

inputKata('ka');