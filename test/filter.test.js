const asserts = require('assert');
const filter = require('../modules/filter');

const scores = [
    { "player": "Maggie", "score": 762 },
    { "player": "Annie", "score": 102 },
    { "player": "Sanchez", "score": 882 },
    { "player": "Dee", "score": 609 }
];



describe('updateScore', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof filter.updateScore, 'function');
        asserts.strictEqual(filter.updateScore.length, 3);;
    });

    it('Edit a specific value in an array', () => {
        asserts.deepStrictEqual(filter.updateScore(scores, "Sanchez", 100), [
            { "player": "Maggie", "score": 762 },
            { "player": "Annie", "score": 102 },
            { "player": "Sanchez", "score": 982 },
            { "player": "Dee", "score": 609 }
        ]);
    });
});



describe('podium', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof filter.podium, 'function');
        asserts.strictEqual(filter.podium.length, 1);;
    });

    it('Returns the 3 best values of an array sorted in descending order', () => {
        asserts.deepStrictEqual(filter.podium(scores), [
            { "player": "Sanchez", "score": 982 },
            { "player": "Maggie", "score": 762 },
            { "player": "Dee", "score": 609 }
        ]);
    });
});