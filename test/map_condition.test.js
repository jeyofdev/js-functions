const asserts = require('assert');
const mapCondition = require('../modules/map_condition');



describe('getPoints', () => {
    it('is a function accepting one argument', () => {
        asserts.strictEqual(typeof mapCondition.getPoints, 'function');
        asserts.strictEqual(mapCondition.getPoints.length, 1);
    });

    it('Get the number of points compared to a results array', () => {
        asserts.strictEqual(mapCondition.getPoints([
            "1:0",
            "2:0",
            "3:0",
            "4:4",
            "2:2",
            "3:3",
            "1:4",
            "2:3",
            "2:4",
            "3:4"
        ]), 12);
    });
});