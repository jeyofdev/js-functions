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



describe('capitalize', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.capitalize, 'function');
        asserts.strictEqual(map.capitalize.length, 1);
    });

    it('Transform all the characters of a string into uppercase', () => {
        asserts.deepStrictEqual(map.capitalize('whoop'), 'WHOOP');
        asserts.deepStrictEqual(map.capitalize('oh hey girl'), 'OH HEY GIRL');
        asserts.notDeepStrictEqual(map.capitalize('oh hey girl'), 'Oh Hey Girl');
    });
});



describe('swapCase', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.swapCase, 'function');
        asserts.strictEqual(map.swapCase.length, 1);
    });

    it('Return a string where 1 word by 2 word is in upper case', () => {
        asserts.strictEqual(map.swapCase('hey girl, lets javascript together sometime'), 'HEY girl, LETS javascript TOGETHER sometime');
        asserts.notStrictEqual(map.swapCase('hey girl, lets javascript together sometime'), 'hey Girl, lets JAVASCRIPT together SOMETIME');
    });
});



describe('shiftLetters', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.shiftLetters, 'function');
        asserts.strictEqual(map.shiftLetters.length, 1);
    });

    it('Return a coded string by modifying each character by the next character from the ASCII array', () => {
        asserts.strictEqual(map.shiftLetters('hello'), 'ifmmp');
        asserts.strictEqual(map.shiftLetters('abcxyz'), 'bcdyz{');
    });
});



describe('chessboard', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof map.chessboard, 'function');
        asserts.strictEqual(map.chessboard.length, 0);
    });

    it('Returns an array of arrays containing the coordinates of the squares of a chessboard', () => {
        const expectedResult = [
            ['a - 1', 'a - 2', 'a - 3', 'a - 4', 'a - 5', 'a - 6', 'a - 7', 'a - 8'],
            ['b - 1', 'b - 2', 'b - 3', 'b - 4', 'b - 5', 'b - 6', 'b - 7', 'b - 8'],
            ['c - 1', 'c - 2', 'c - 3', 'c - 4', 'c - 5', 'c - 6', 'c - 7', 'c - 8'],
            ['d - 1', 'd - 2', 'd - 3', 'd - 4', 'd - 5', 'd - 6', 'd - 7', 'd - 8'],
            ['e - 1', 'e - 2', 'e - 3', 'e - 4', 'e - 5', 'e - 6', 'e - 7', 'e - 8'],
            ['f - 1', 'f - 2', 'f - 3', 'f - 4', 'f - 5', 'f - 6', 'f - 7', 'f - 8'],
            ['g - 1', 'g - 2', 'g - 3', 'g - 4', 'g - 5', 'g - 6', 'g - 7', 'g - 8'],
            ['h - 1', 'h - 2', 'h - 3', 'h - 4', 'h - 5', 'h - 6', 'h - 7', 'h - 8']
        ];
        asserts.deepStrictEqual(map.chessboard(), expectedResult);
    });
});