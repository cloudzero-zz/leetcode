/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.split(/\s+/).reverse().join(" ").trim();
};