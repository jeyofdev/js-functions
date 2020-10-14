/**
 * Make an array of numbers that is double the first array
 * 
 * @param {array} arr 
 */
exports.doubleNumbers = (arr) => {
    return arr.map( (number) => number * 2);
}



/**
 * Take an array of numbers and make them strings
 * 
 * @param {array} arr 
 */
exports.stringItUp = (arr) => {
    return arr.map( (number) => number.toString());
}



/**
 * Capitalize each name in an array of multiple names
 * 
 * @param {array} arr 
 */
exports.capitalizeNames = (arr) => {
    return arr.map( (name) => name[0].toUpperCase() + name.slice(1).toLowerCase());
}



/**
 * Make an array of name strings from an array of objects
 * 
 * @param {array} arr 
 */
exports.namesOnly = (arr) => {
    return arr.map( (item) => item.name);
}