const palindromes = function (inputString) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz123456789';
    let cleanedArray = inputString
                        .toLowerCase()
                        .split('')
                        .filter(char => alpha.includes(char))
                        .join('');
    let reversedArray = cleanedArray.split('').reverse().join('');
    return charArray === reversedArray;
};

// Do not edit below this line
module.exports = palindromes;
