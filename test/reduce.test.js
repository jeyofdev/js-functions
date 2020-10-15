const asserts = require('assert');
const reduce = require('../modules/reduce');



describe('decode', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof reduce.decode, 'function');
        asserts.strictEqual(reduce.decode.length, 1);;
    });

    it('Convert each set of numbers to a letter and find out the secret message', () => {
        asserts.deepStrictEqual(reduce.decode('361581732726247521644353 4161492813593986955 84654117917337166147521'), 'abc');
    });
});