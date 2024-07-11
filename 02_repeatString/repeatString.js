const repeatString = function(string, num) {
    let i = 0;
    let container = '';
    if (num < 0) {
        return "ERROR";
    }
    while(i<num){
        i++;
        container += string;
    };
    return container;
};

// Do not edit below this line
module.exports = repeatString;
