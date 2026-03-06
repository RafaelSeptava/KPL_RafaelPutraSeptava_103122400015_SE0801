function fizzBuzz(params) {
    if(!Array.isArray(params)){
        return "Input tidak valid";
    }

    let hasil = [];

    for(let i = 0; i < params.length; i++){
        let n = params[i];
        let nilai = "";

        if(n % 14 == 0){
            nilai = "FizzBuzz";
        }else if(n % 7 == 0){
            nilai = "Buzz";
        }else if(n % 2 == 0){
            nilai = "Fizz";
        }else{
            nilai = n;
        }

        hasil.push(nilai);
    }

    return hasil.join(", ");
}

module.exports = fizzBuzz;