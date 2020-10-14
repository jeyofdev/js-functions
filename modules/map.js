/**
 * Make an array of numbers that is double the first array
 * 
 * @param {array} arr 
 */
exports.doubleNumbers = (arr) => {
    return arr.map( (number) => number * 2)
}



/**
 * Take an array of numbers and make them strings
 * 
 * @param {arr} arr 
 */
exports.stringItUp = (arr) => {
    return arr.map( (number) => number.toString())
}