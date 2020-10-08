import _chai from 'chai';
import _mocha from 'mocha';
import _rollOfYears from '../js/roll-of-years.js';

_mocha.describe('roll-of-years', () => {
    _mocha.it('should export an object', () => {
        _chai.expect(_rollOfYears).to.be.an('object');
    });

    _mocha.it('should have a string property for every year in range', () => {
        for (let year = -700; year <= 1600; year += 1) {
            _chai.expect(_rollOfYears).to.have.property(year).that.is.a('string').that.matches(/^Year of /u);
        }
    });
});
