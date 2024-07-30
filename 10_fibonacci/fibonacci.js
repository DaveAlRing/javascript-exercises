const fibonacci = function(num) {
    let total = 0;
    let preTotal = 1;
    if(num<0){
        return "OOPS";
    }
    for(let i=1; i<=num; i++) {
        let varC = total;
        total += preTotal;
        preTotal = varC;
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
