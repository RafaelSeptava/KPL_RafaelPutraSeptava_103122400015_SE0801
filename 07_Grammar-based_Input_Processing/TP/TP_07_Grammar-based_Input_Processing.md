# Tugas Pendahuluan 07: Grammar-based Input Processing

Nama : Rafael Putra Septava  
NIM  : 103122400015  
Kelas: SE0801  

## Tugas

Buatlah fungsi yang mengubah deretan angka bertipe string menjadi larik angka.

## Program/Kode

tersedia di [index.js](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/blob/main/07_Grammar-based_Input_Processing/TP/index.js)

## Output

<img src="TP 07.png">

## Deskripsi

Program menjalankan sebuah function toNumberArray untuk mengubah data string atau array string menjadi larik angka. Jika variabel number adalah string maka akan diubah menjadi array dengan split. Jika variabel number sudah berupa array, maka akan langsung digunakan. Jika bukan keduanya maka akan menghasilkan input TypeError. Lalu setiap fungsi akan memproseskan tiap elemen array dengan map() dan membersihkan spasi dengan trim(). Lalu mengonversi menjadi angka menggunakan parseFloat(). Terakhir menggunakan filter untuk menghapus nilai yang bukan angka.(NaN).