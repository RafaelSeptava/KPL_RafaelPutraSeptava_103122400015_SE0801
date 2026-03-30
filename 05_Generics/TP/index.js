// Function
function hitung(str, type) {
    let jumlah = 0;

    for (const c of str) {
        if (type == "huruf") {
            if (c == ' ') continue;
        }

        jumlah++;
    }

    return jumlah;
}

// Main
const str = "Bar bar bar";

console.log(
   hitung(str, "semua") // Harusnya 11
);

console.log(
  hitung(str, "huruf") // Harusnya 9
);

hitung(str, "huruf"); // Tidak terjadi apa-apa