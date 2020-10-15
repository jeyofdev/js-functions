/**
 * Get the number of points compared to a results array
 * 
 * @param {array} array 
 */
exports.getPoints = (array) => {
    let output = 0;
    array.map( (score) => {
        if (score[0] > score[2]) { output += 3 }
        else if (score[0] === score[2]) { output += 1 }
    })

    return output;
}