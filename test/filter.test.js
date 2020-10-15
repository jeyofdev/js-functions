const asserts = require('assert');
const filter = require('../modules/filter');



describe('updateScore', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof filter.updateScore, 'function');
        asserts.strictEqual(filter.updateScore.length, 3);;
    });

    it('Edit a specific value in an array', () => {
        asserts.deepStrictEqual(filter.updateScore([
            { "player": "Maggie", "score": 762 },
            { "player": "Annie", "score": 102 },
            { "player": "Sanchez", "score": 882 },
            { "player": "Dee", "score": 609 }
        ], "Sanchez", 100), [
            { "player": "Maggie", "score": 762 },
            { "player": "Annie", "score": 102 },
            { "player": "Sanchez", "score": 982 },
            { "player": "Dee", "score": 609 }
        ]);
    });
});