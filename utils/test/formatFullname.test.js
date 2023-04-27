const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('if nothing is given, the function should return "Error"', () => {
        expect(formatFullname('')).to.equal('Error');
    });

    it('if something else than string is given, the function should return "Error"', () => {
        expect(formatFullname(20)).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname(null)).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
    });

    it('if the format of the received data is different than <firstname> <lastname>, the function should return "Error"', () => {
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('Doe')).to.equal('Error');
        expect(formatFullname('John Doe Test')).to.equal('Error');
    });
})
