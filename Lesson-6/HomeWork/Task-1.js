var obj = {
    className: 'open menu menu'
};

var removeClass = function (obj, cls) {
    array = obj.className.split(' ');
    for (var i = 0; i < array.length; i++) {
        if (array[i] === cls) {
            array.splice(i, 1);
        }
        obj.className = array.join(' ');
    }
};


//removeClass(obj, 'open'); // obj.className='menu'
//console.log(obj);
removeClass(obj, 'menu');
console.log(obj);