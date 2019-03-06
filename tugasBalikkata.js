function balikKata(kata){
    var hasil,p; 
        hasil=""; // untuk menginisialisasi variabel hasil dengan tanda kutip
        p=kata.length; // mengambil panjang dari tulisan yang akan di reverse
        for (a=p-1; a>=0; a--){ 
            // melakukan perulangan for dimulai dari p-1 karena tulisan string sama seperti array of char.
            // a dimulai dari index ke 0 sehingga jika panjang-nya n maka tulisan berakhir di n-1
            
            hasil = hasil+kata.charAt(a); // mengambil tulisan dari index a untuk di tampung di variabel hasil
        }

        return kata = hasil; // mengembalikan hasil ke parameter kata
}
console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));