const assert = require('assert');

const calc = require('../calculator/calculator.js'); // this is the path to our calculator.js file


describe('Calculator Tests', function() {

    it('it should return zero when passed in an empty string', function(done) {
        assert.equal(calc.stringCalculator(''), 0); // the empty string is what we pass the function and the zero is the expected output
        done();
    });
});

//testing git hub