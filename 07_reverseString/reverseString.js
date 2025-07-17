const reverseString = function(str) {
    const arr = str.split("");
    res = ""
    for (let i = arr.length - 1; i >= 0; i--){
        res = res + arr[i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
