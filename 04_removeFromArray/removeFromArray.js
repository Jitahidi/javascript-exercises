const removeFromArray = function(array, removeElement1, removeElement2, removeElement3, removeElement4) {
    let myArray = array;
    let removeValues = [removeElement1, removeElement2, removeElement3, removeElement4];
    myArray = myArray.filter(item => !removeValues.includes(item));
    console.log(myArray);
    return myArray
};

// Do not edit below this line
module.exports = removeFromArray;
