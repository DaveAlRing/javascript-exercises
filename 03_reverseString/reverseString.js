const reverseString = function(inputString) {
    let inputArray = [];
    let loopLength = inputString.length;
    let outputString = '';
    for (let i=0; i<loopLength;i++) {
        inputArray += inputString.charAt(i);
    };
    for (let j=loopLength -1; j>=0;j--){
        outputString += inputArray[j];
    };
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
