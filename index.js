let aryNums = [ 1, 2, 3, 20, 6, 10, 16, 18];
let num = 0;
function countNum(i){
    if(i>100){
        return;
    }
    let random = Math.floor(Math.random() * aryNums.length);
    let lugar = aryNums[random];
    if(lugar > num){
        num = lugar ;
    }
    return countNum(i+1);
}
countNum(0);
console.log("el numero mayor es ",num); 
let aryPalabras = ["Facundo", "Santiago", "Alexandra", "Nestor", "Adriana", "Bruno", "Pia", "Max"];
let maxLetras = Number.MAX_VALUE;
let aryGuaradar = [];
function countPalabras(e){
    if(e>100){
        return;
    }
    let random1 = Math.floor(Math.random() * aryPalabras.length);
    let random2 = Math.floor(Math.random() * aryPalabras.length);
    let cantletra1 = aryPalabras[random1].length;
    let cantletra2 = aryPalabras[random2].length;
    let cantletras = cantletra1 + cantletra2;
    if(cantletras < maxLetras && aryPalabras[random1] !== aryPalabras[random2]){
        maxLetras = cantletras;
        aryGuaradar[0] = aryPalabras[random1];
        aryGuaradar[1] = aryPalabras[random2];
    }
    return countPalabras(e+1);
}
countPalabras(0);
console.log("los nombres mas cortos son",aryGuaradar);
let aryNums2 = [ 1, 2, 3, 22, 6, 5, 83, 11,2, 3, 5, 7, 11, 13, 61, 67, 71, 73, 79];
let num2 = 0;
function countNum2(i){
    if(i>100){
        return;
    }
    let random2 = Math.floor(Math.random() * aryNums2.length);
    let lugar2 = aryNums2[random2];
    function esPrimo(num2){
        if (num2 <= 1){
            return false;
        }
        for (let h = 2; h <  num2; h++){
            if (num2 % h === 0 ){
                return false;
            }
        }
        return true;
    }
    if(lugar2 > num2 ){
        if(esPrimo(lugar2)){
            num2 = lugar2 ;
        }
        
    }
    return countNum2(i+1);
}
countNum2(0);
console.log("el mayor numero primo es ",num2);  