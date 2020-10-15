/**
 * Convert each set of numbers to a letter and find out the secret message
 * 
 * @param {*} string 
 */
exports.decode = (string) => {
    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
    
    codeAscii = string.split(' ').map( (number) => number.split('').reduce(reducer))
    return codeAscii.map( (code) => String.fromCharCode(code)).join('');
}