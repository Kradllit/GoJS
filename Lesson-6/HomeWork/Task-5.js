function isPal(s){
    //a = s.split(' ').join('').toLowerCase();
    //b = s.split('').reverse().join('').toLowerCase().split(' ').join('');
    //console.log("a: " + a);
    //console.log("b: " + b);
    return s.split(' ').join('').toLowerCase() === s.split('').reverse().join('').toLowerCase().split(' ').join('')

}



console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false