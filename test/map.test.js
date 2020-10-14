const asserts = require('assert')
const map = require("../modules/map")


describe('doubleNumbers', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.doubleNumbers, 'function')
        asserts.strictEqual(map.doubleNumbers.length, 1)
    });

    it('Make an array of numbers that is double the first array', () => {
        asserts.deepStrictEqual(map.doubleNumbers([2, 5, 100]), [4, 10, 200])
    });
});