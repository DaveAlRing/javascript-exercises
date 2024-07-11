// const removeFromArray = function(inputArray, ...inputArg) {
//     let loopLength = inputArray.length;
//     for (i=0; i<loopLength;i++) {
//         if (inputArray[i] == inputArg) {
//             inputArray.splice(i,1);
//         };
//     };
//     return inputArray;
// };

const removeFromArray = function(inputArray, ...inputArg) {
    let newArray = [];
    inputArray.forEach((item)=> {
        if(!inputArg.includes(item)){
            newArray.push(item);
        };
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
