var fib = function (num) {
    var a = 1,
        b = 1;
    for (var i = 1; i < num - 1; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fib(3)); //2
console.log(fib(7)); //13
console.log(fib(77)); //5527939700884757