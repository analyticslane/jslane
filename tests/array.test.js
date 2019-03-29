const chai = require('chai');
const chaiDeepCloseTo = require('chai-deep-closeto');
const expect = chai.expect;
const jslane = require('../index.js');

// Provides deep.closeTo for the Chai assertion
chai.use(chaiDeepCloseTo);

suite('Array test', function() {
  test('Array sum test', function(done) {
    expect(jslane.array.sum([1, 1, 1])).to.be.equal(3);
    expect(jslane.array.sum([1, 2, 3])).to.be.equal(6);

    expect(jslane.array.sum([1, 2, 4])).to.be.equal(7);

    done();
  });

  test('Array mean test', function(done) {
    expect(jslane.array.mean([1, 1, 1])).to.be.equal(1);
    expect(jslane.array.mean([1, 2, 3])).to.be.equal(2);

    expect(jslane.array.mean([1, 2, 4])).to.be.closeTo(2.3333333333, 1e-6);

    done();
  });

  test('Array mean test', function(done) {
    expect(jslane.array.summary([1, 1, 1])).to.deep.equal({
      sum: 3,
      mean: 1
    });

    expect(jslane.array.summary([1, 2, 3])).to.deep.equal({
      sum: 6,
      mean: 2
    });

    done();
  });

  test('Array multiply test', function(done) {
    expect(jslane.array.multiply([1, 1, 1], 2.50001)).to.deep.closeTo(
      [2.5, 2.5, 2.5],
      1e-4
    );

    expect(jslane.array.multiply([1, 1, 1])).to.deep.equal([1, 1, 1]);

    done();
  });
});
