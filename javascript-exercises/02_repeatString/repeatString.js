const repeatString = function(text, paramTimes) {

    let times = parseInt(paramTimes);
    let textReturn = "";

    // No negative numbers
    if (times < 0) return 'ERROR';

    for (let index = 0; index < times; index++) {
        textReturn = textReturn + text;     
    }

    return textReturn;
};

// Do not edit below this line
module.exports = repeatString;
 