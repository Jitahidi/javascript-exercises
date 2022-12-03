const repeatString = function(string, number) {
    let holdString = "";
    if (number < 0) {
        return 'ERROR'
    }

    if (string === '') {
        return ''
    }

    for (let i = 0; i < number; i++) {
        holdString = holdString + string;
    }
    return holdString
};

// Do not edit below this line
module.exports = repeatString;
