const repeatString = function(str, numRepeat) {
    if (numRepeat < 0) {
        return 'ERROR';
    }
    
    res = ''
    for (let i = 0; i < numRepeat; i++){
        res = res + str
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
