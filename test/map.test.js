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
        asserts.deepStrictEqual(map.stringItUp([2, 5, 100]), ['2', '5', '100']);
        asserts.notDeepStrictEqual(map.stringItUp([2, 5, 100]), [2, 5, 100]);
    });
});



describe('capitalizeNames', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.capitalizeNames, 'function');
        asserts.strictEqual(map.capitalizeNames.length, 1);
    });

    it('Capitalize each name in an array of multiple names', () => {
        asserts.deepStrictEqual(map.capitalizeNames(['john', 'JACOB', 'jinGleHeimer', 'schmidt']), ['John', 'Jacob', 'Jingleheimer', 'Schmidt']);
        asserts.notDeepStrictEqual(map.capitalizeNames(['john', 'JACOB', 'jinGleHeimer', 'schmidt']), ['John', 'JACOB', 'Jingleheimer', 'Schmidt']);
    });
});



describe('namesOnly', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.namesOnly, 'function');
        asserts.strictEqual(map.namesOnly.length, 1);
    });

    it('Make an array of name strings from an array of objects', () => {
        asserts.deepStrictEqual(map.namesOnly([
            { name: 'Angelina Jolie', age: 80 },
            { name: 'Eric Jones', age: 2 },
            { name: 'Paris Hilton', age: 5 },
            { name: 'Kayne West', age: 16 },
            { name: 'Bob Ziroll', age: 100 }
        ]), ['Angelina Jolie', 'Eric Jones', 'Paris Hilton', 'Kayne West', 'Bob Ziroll']);
    });
});



describe('makeStrings', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.makeStrings, 'function');
        asserts.strictEqual(map.makeStrings.length, 1);
    });

    it('Filter an array based on the value of a property', () => {
        asserts.deepStrictEqual(map.makeStrings([
            { name: 'Angelina Jolie', age: 80 },
            { name: 'Eric Jones', age: 2 },
            { name: 'Paris Hilton', age: 5 },
            { name: 'Kayne West', age: 16 },
            { name: 'Bob Ziroll', age: 100 }
        ]), [
            'Angelina Jolie can go to The Matrix',
            'Eric Jones is under age!!',
            'Paris Hilton is under age!!',
            'Kayne West is under age!!',
            'Bob Ziroll can go to The Matrix'
        ]);
    });
});



describe('readyToPutInTheDOM', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.readyToPutInTheDOM, 'function');
        asserts.strictEqual(map.readyToPutInTheDOM.length, 1);
    });

    it('Make an array of the names in <h1>, and the ages in <h2>', () => {
        asserts.deepStrictEqual(map.readyToPutInTheDOM([
            { name: 'Angelina Jolie', age: 80 },
            { name: 'Eric Jones', age: 2 },
            { name: 'Paris Hilton', age: 5 },
            { name: 'Kayne West', age: 16 },
            { name: 'Bob Ziroll', age: 100 }
        ]), [
            '<h1>Angelina Jolie</h1><h2>80</h2>',
            '<h1>Eric Jones</h1><h2>2</h2>',
            '<h1>Paris Hilton</h1><h2>5</h2>',
            '<h1>Kayne West</h1><h2>16</h2>',
            '<h1>Bob Ziroll</h1><h2>100</h2>'
        ]);
    });
});