const sumAll = function(integerOne, integerTwo) {
    let sum = 0;
    let i = 0;
    if((integerOne || integerTwo) < 0) {
        return "ERROR";
    }
    if(!Number.isInteger(integerOne) || !Number.isInteger(integerTwo)) {
        return "ERROR";
    }
    if(integerOne<integerTwo) {
        while (i<integerTwo) {
            sum += (integerOne + i);
            i++;
        }
        return sum;
    } else {
        while (i<integerOne) {
            sum += (integerTwo + i);
            i++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
