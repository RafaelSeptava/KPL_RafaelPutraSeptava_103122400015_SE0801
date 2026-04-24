# Tugas Mandiri 08: Runtime Configuration dan Internationalization

Nama : Rafael Putra Septava  
NIM  : 103122400015  
Kelas: SE0801  

## Tugas

Waktunya menukar uang!

Pada tugas ini kamu akan membuat program yang menampilkan kurs rupiah (IDR) terhadap renminbi luar Tiongkok (CNH) dan euro (EUR). Gunakan link API ini untuk mengambil data.

Tantangan

Simpanlah URL API ke dalam .env sebagai BASE_API

Gunakan Intl untuk memformat nilai mata uang dan waktu kamu mengambil data kurs.

Hapus pesan promosi dotenv

Lalu pastikan outputnya tampak seperti di bawah ini.

Ujilah dengan Rp25000, Rp50000, dan Rp100000.

## Program/Kode

tersedia di [index.js](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/blob/main/08_Runtime_Configuration_dan_Internationalization/TM/index.js)

## Output

<img src="TM 08.png">

## Deskripsi

Program tukar mata uang dari IDR ke CNH dan EUR. Menggunakan Intl.DateTimeFormat sebagai format tanggal dan menggunakan Intl.NumberFormat sebagai nilai rupiah. Lalu di fungsi tampilkan program mengkonversi jumlah nominal rupiah ke cnh dan eur berdasarkan kurs yang diperoleh, lalu menampilkan kedalam console log. 