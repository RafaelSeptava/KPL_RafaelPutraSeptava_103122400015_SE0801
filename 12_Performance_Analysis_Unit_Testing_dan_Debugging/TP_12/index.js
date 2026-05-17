function main() {
  const data = [
    "123",
    456,
    "hello",
    78.9,
    true,
  ];

  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);

    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}


function processData(data) {

  // 1. Jika datanya berupa NUMBER
  if (typeof data === "number") {

    // Maka langsung kalikan 2
    return `Number: ${data * 2}`;
  }

  // 2. Jika datanya berupa STRING
  if (typeof data === "string") {

    // Maka ubah menjadi huruf kecil
    const str = data.toLowerCase();

    // Lalu konversi string ke number
    const num = Number(str);

    // Jika hasil konversi bukan Nan
    if (!isNaN(num)) {

      // Maka langsung kalikan 2
      return `Number: ${num * 2}`;
    }

    // Jika hasil konversi adalah NaN, maka kembalikan string dengan panjangnya
    return `Teks: ${str} (panjangnya: ${str.length})`;
  }

  // 3. Jika datanya berupa BOOLEAN
  if (typeof data === "boolean") {

    // Maka kembalikan string dengan nilai boolean
    return `Boolean: ${data}`;
  }

  // 4. Jika datanya berupa tipe lain
  return `Tipe tidak dikenali`;
}

main();