const sumAll = function(arg1, arg2) {
    let res = 0;

    if (arg1 <= arg2) {
        start = arg1
        end = arg2
    }
    else{
        start = arg2
        end = arg1
    }

    if (arg1 < 0 || arg2 < 0 || !Number.isInteger(arg1) || !Number.isInteger(arg2)){
        return 'ERROR'
    }

    for (let i = start; i <= end; i++){
        res = res + i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
