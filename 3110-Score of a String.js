/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    var charCode = [];
    for(var i = 0; i < (s.length - 1); i++) {
        charCode.push(Math.abs((s.charCodeAt(i) - s.charCodeAt(i + 1))));
    }
    let output = charCode.reduce((accumulator, currentValue) => {
        return accumulator + currentValue},0);
        return output;
};
