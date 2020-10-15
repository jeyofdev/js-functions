/**
 * Edit a specific value in an array
 * 
 * @param {array} scores 
 * @param {string} player 
 * @param {int} modifier 
 */
exports.updateScore = (scores, player, modifier) => {
    return scores.filter( (score) => {
        if (score.player === player) {
            score.score += modifier;
        }

        return score
    })
}



/**
 * Returns the 3 best values of an array sorted in descending order
 * 
 * @param {array} scores 
 */
exports.podium = (scores) => {
    return scores.sort( (a, b) => b.score - a.score).filter( (score, index) => index <= 2);
}