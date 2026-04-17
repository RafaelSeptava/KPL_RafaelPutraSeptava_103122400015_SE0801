# Tugas Mandiri 07: Grammar-based Input Processing

Nama : Rafael Putra Septava  
NIM  : 103122400015  
Kelas: SE0801  

## Tugas

Tugas pada kesempatan kali ini adalah membuat fungsi yang menguraikan isi robots.txt menjadi POJO (plain old JavaScript object). Empat properti yang perlu diuraikan dijabarkan di bawah berikut.

User-agent adalah nama robot perayapnya  
Allow adalah daftar halaman-halaman yang boleh dirayap  
Disallow adalah daftar halaman-halaman yang tidak boleh dirayap  
Sitemap adalah sebuah pranala yang menunjuk pada "denah" situs web (biasanya berformat XML).  

Kamu akan mengerjakannya di dalam sebuah fungsi bernama parseRobots di index.js dan. Buka direktori 07 di sini untuk mengunduh berkas yang dimaksud, berkas-berikas robots.txt di dalam direktori daftar, dan berkas pengujiannya yaitu test.js.

## Program/Kode

tersedia di [index.js](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/blob/main/07_Grammar-based_Input_Processing/TM/index.js), [test.js](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/blob/main/07_Grammar-based_Input_Processing/TM/test.js), [structure.d.ts](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/blob/main/07_Grammar-based_Input_Processing/TM/structure.d.ts), [daftar](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/tree/main/07_Grammar-based_Input_Processing/TM/daftar)

## Output

<img src="TM 07.png">

## Deskripsi

Program membaca dan mengolah file robots.txt lalu mengubahnya menjadi JavaScript yang terstruktur dengan cara memisahkan baris dan mengenali directive seperti allow, disallow, sitemap, dan user-agent. Lalu dikelompokan berdasarkan user agen yang aktif.