var checkSpam = function (string) {
    if (string.indexOf("Sex") > 0) {
        return true;
    }
    else if (string.indexOf("sex") > 0) {
        return true;
    }
    else if (string.indexOf("SPAM") > 0) {
        return true;
    }
    else {
        return false;
    }
};

console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));