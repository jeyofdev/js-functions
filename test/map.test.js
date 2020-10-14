const asserts = require('assert');
const { assert } = require('console');
const map = require('../modules/map');



describe('doubleNumbers', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.doubleNumbers, 'function');
        asserts.strictEqual(map.doubleNumbers.length, 1);;
    });

    it('Make an array of numbers that is double the first array', () => {
        asserts.deepStrictEqual(map.doubleNumbers([2, 5, 100]), [4, 10, 200]);
        asserts.notDeepStrictEqual(map.doubleNumbers([4, 5, 10]), [8, 10, 10]);
    });
});



describe('stringItUp', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.stringItUp, 'function');
        asserts.strictEqual(map.stringItUp.length, 1);
    });

    it('Take an array of numbers and make them strings', () => {
        asserts.deepStrictEqual(map.stringItUp([2, 5, 100]), ["2", "5", "100"]);
        asserts.notDeepStrictEqual(map.stringItUp([2, 5, 100]), [2, 5, 100]);
    });
});



describe('capitalizeNames', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.capitalizeNames, 'function');
        asserts.strictEqual(map.capitalizeNames.length, 1);
    });

    it('Capitalize each name in an array of multiple names', () => {
        asserts.deepStrictEqual(map.capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]), ["John", "Jacob", "Jingleheimer", "Schmidt"]);
        asserts.notDeepStrictEqual(map.capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]), ["John", "JACOB", "Jingleheimer", "Schmidt"]);
    });
});



describe('namesOnly', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.namesOnly, 'function');
        asserts.strictEqual(map.namesOnly.length, 1);
    });

    it('Make an array of name strings from an array of objects', () => {
        asserts.deepStrictEqual(map.namesOnly([
            { name: "Angelina Jolie", age: 80 },
            { name: "Eric Jones", age: 2 },
            { name: "Paris Hilton", age: 5 },
            { name: "Kayne West", age: 16 },
            { name: "Bob Ziroll", age: 100 }
        ]), ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]);
    });
});