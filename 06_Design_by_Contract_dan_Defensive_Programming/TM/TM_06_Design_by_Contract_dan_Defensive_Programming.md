# Tugas Mandiri 06: Design by Contract dan Defensive Programming

Nama : Rafael Putra Septava  
NIM  : 103122400015  
Kelas: SE0801  

## Tugas

Tugasmu adalah membuat fungsi yang menolak bilangan-bilangan kelipatan 3, 5, atau 15, menerima bilangan-bilangan bukan "fizz buzz", dan melempar yang bukan bilangan bulat.

## Program/Kode

tersedia di [index.js](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/blob/main/06_Design_by_Contract_dan_Defensive_Programming/TM/index.js)

## Output

<img src="TM 06.png">

## Deskripsi

Program ini menampilkan sebuah fungsi is_not_fizzbuzz yang digunakan untuk mengecek sebuah angka yang termasuk bilangan aturan fizzbuzz atau tidak. jika bernilai true, maka angka tersebut akan bukan kelipatan 3 atau 5 (bukan aturan fizzbuzz).  

typeof number !== 'number' artinya bukan tipe number (seperti null, string, dll)
Number.isNaN(number) artinya not a number (bukan angka)
!Number.isFinite(number) artinya bukan angka yang terbatas (infinity)  

Saya menambahkan const isFizz dan isBuzz supaya lebih mudah saat melakukan return !(isFizz || isBuzz).  

lalu terdapat error handling berupa type('Input harus berupa angka!). itu terjadi karena bukan number, error karena Nan, dan error karena tidak finite.

