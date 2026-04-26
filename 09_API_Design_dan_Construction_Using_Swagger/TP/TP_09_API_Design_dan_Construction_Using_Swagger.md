# Tugas Pendahuluan 09: API Design dan Construction Using Swagger

Nama : Rafael Putra Septava  
NIM  : 103122400015  
Kelas: SE0801  

## Tugas

Buatlah satu endpoint lagi beserta dokumentasi OpenAPI-nya, yaitu GET /menu yang menampilkan daftar semua nama kategori menu yang ada.

## Program/Kode

tersedia di [index.js](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/blob/main/09_API_Design_dan_Construction_Using_Swagger/TP/index.js), [swagger.js](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/blob/main/09_API_Design_dan_Construction_Using_Swagger/TP/swagger.js)

## Output

<img src="TP 09 dokumentasi.png">

<img src="TP 09 hasil GET.png">

## Deskripsi

Program membuat API untuk mengelola dan menampilkan daftar menu makanan berdasarkan kategori. Terdapat endpoint /menu untuk menampilkan kategori menu makanan yang menampilkan bakmi dan rames. Selain itu endpoint root / berfungsi sebagai landing page dengan informasi penggunaan API. Dokumentasi ini dibuat otomatis menggunakan Swagger dan bisa diuji menggunakan endpoint /docs. Dan program berjalan pada server local dengan port 3000.