var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

var multiplyNumeric = function (image) {

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    for (i in image) {
        if (isNumeric(image[i])) {
            image[i] += image[i]
        }
    }
};

multiplyNumeric(image);
console.log(image);