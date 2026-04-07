# Tugas Pendahuluan 06: Design by Contract dan Defensive Programming

Nama : Rafael Putra Septava  
NIM  : 103122400015  
Kelas: SE0801  

## Tugas

Menurutmu, kapankah kita saatnya menggunakan asersi atau eksepsi untuk fungsi seperti ini di atas? Apakah kita harus sepenuhnya asersi, atau sepenuhnya eksepsi? Lakukan riset dan berikan jawabannya dalam bentuk esai minimal 300 kata.

## Program/Kode

tersedia di [index.js](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/blob/main/06_Design_by_Contract_dan_Defensive_Programming/TP/index.js)

## Output

<img src="TP 06.png">

## Deskripsi

Menurut saya yang bagian Asersi itu digunakan saat tahap ngoding atau debugging, intinya untuk mengecek apakah program yang kita buat benar atau salah. Contohnya pada fungsi divide(a,b), cuma bakal dikasih input angka dan b tidak mungkin 0. Asersi dipakai untuk mengecek apakah asumsinya itu benar atau salah. Dan kalau kena error asersi berarti, kemungkinan terdapat bug pada bagian code lain yang sedang dibuat.

Sedangkan Eksepsi cocok untuk kondisi yang inputnya dari user atau sumber luar. Contohnya user memasukan string atau angka 0 untuk pembagian. Harusnya menggunakan throw error supaya program bisa memberi input yang jelas dan errornya bisa ditangkap dengan try catch. Sehingga program tidak langsung crash, tetapi ditangani dengan lebih rapi.  

Intinya Asersi digunakan untuk mengecek hal hal yang seharusnya tidak mungkin salah. Sedangkan Eksepsi dipakai untuk error handling yang memang mungkin terjadi. Untuk program index.js sebaiknya lebih cocok menggunakan Eksepsi karena user tidak bisa menjamin inputnya selalu benar.