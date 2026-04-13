function toNumberArray(number) {
    let listArray;

    if (typeof number === "string") {
        listArray = number.split(",");
    } else if (Array.isArray(number)) {
        listArray = number;
    } else {
        throw new TypeError("Input harus berupa string atau array!");
    }

    return listArray
        .map(item => parseFloat(item.trim()))
        .filter(num => !isNaN(num));
}

console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]