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