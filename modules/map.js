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



/**
 * Filter an array based on the value of a property
 * 
 * @param {array} arr 
 */
exports.makeStrings = (arr) => {
    return arr.map( (item) => (item.age > 18) ? `${item.name} can go to The Matrix` : `${item.name} is under age!!`)
}



/**
 * Make an array of the names in <h1>, and the ages in <h2>
 * 
 * @param {*} arr 
 */
exports.readyToPutInTheDOM = (arr) => {
    return arr.map( (item) => `<h1>${item.name}</h1><h2>${item.age}</h2>`)
}



/**
 * Transform all the characters of a string into uppercase
 * 
 * @param {array} string 
 */
const capitalize = (string) => {
    return string.split('').map( (word) => word.toUpperCase()).join('')
}

exports.capitalize = capitalize;



/**
 * Return a string where 1 word by 2 word is in upper case
 * 
 * @param {array} string 
 */
exports.swapCase = (string) => {
    return string.split(' ').map( (word, index) => (index % 2 === 0) ? capitalize(word) : word).join(' ')
}