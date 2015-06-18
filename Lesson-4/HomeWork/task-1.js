var str = function (num) {
    var a = 1,
        b = 1;
    for (var i = 1; i < num - 1; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}


console.log(str("dfdsfjkhdlkjhdflgkjhdfkl"));