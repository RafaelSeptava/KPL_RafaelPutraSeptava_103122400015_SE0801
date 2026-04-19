# Tugas Pendahuluan 08: Runtime Configuration dan Internationalization

Nama : Rafael Putra Septava  
NIM  : 103122400015  
Kelas: SE0801  

## Tugas

Tampilkan tanggal sekarang dengan format seperti ini:

Sabtu, 18 April 2026

Nilai waktu tidak harus sama, asalkan formatnya benar dan bisa tampil di komputer terpisah pada waktu tertentu. Gunakan Intl.DateTimeFormat (bukan string manual).

## Program/Kode

tersedia di [index.js](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/blob/main/08_Runtime_Configuration_dan_Internationalization/TP/index.js)

## Output

<img src="TP 08.png">

## Deskripsi

Program mengambil waktu saat ini menggunakan Intl.DateTimeFormat untuk menampilkan hari, tanggal, bulan, dan tahun sesuai pada negara Indonesia. Pada bagian variabel weekday dan month menggunakan 'long' untuk output berupa teks. Sedangkan bagian variabel day dan year menggunakan 'numeric' untuk output berupa angka.