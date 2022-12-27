const sumAll = function(firstNum, lastNum) {
let numOfIntegers;

if (lastNum !== Number(lastNum)) {
    return 'ERROR'
}

if (lastNum > firstNum && firstNum > 0) {
    numOfIntegers = (lastNum - firstNum) + 1;
} else if (lastNum < firstNum && lastNum > 0) {
    numOfIntegers = Math.abs(lastNum - firstNum) + 1;
} else {
    return 'ERROR'
}
    
let sumOfConsecutiveIntegers = (numOfIntegers * (firstNum + lastNum)) / 2;
console.log(sumOfConsecutiveIntegers);
return sumOfConsecutiveIntegers
};

// Do not edit below this line
module.exports = sumAll;
