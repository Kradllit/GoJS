var str = function (str) {
    if (str.length > 20) {
        return str.substr(0, 20) + "...";
    }
    else return str;
}


console.log(str("dfdsfjflgkjhjhjlkhlkjhlhlkjhljkkjhkljhhjhlkjhdfkl"));