const assert = require('assert');
const sinon = require('sinon');

const createIsReleased = require('./is-released');

suite('isReleased', () => {
  let requestMock;

  setup(() => {
    requestMock = sinon.stub().returns(Promise.resolve());
  });

  test('calls requestMock once', () => {
    const isReleased = createIsReleased(requestMock);
    isReleased();
    assert.ok(requestMock.calledOnce);
  });

  test('calls requestMock with correct url', () => {
    const isReleased = createIsReleased(requestMock);
    isReleased('de');
    assert.equal(
      requestMock.lastCall.args,
      'https://itunes.apple.com/de/app/pokemon-go/id1094591345'
    );
  });

  test('returns true on match', (done) => {
    requestMock.returns(Promise.resolve('foo action view-in-itunes bar'));

    const isReleased = createIsReleased(requestMock);
    isReleased('de').then((result) => {
      assert.deepEqual(
        result,
        true
      );
      done();
    });
  });

  test('returns false on mismatch', (done) => {
    requestMock.returns(Promise.resolve('foo bar'));

    const isReleased = createIsReleased(requestMock);
    isReleased('de').then((result) => {
      assert.deepEqual(
        result,
        false
      );
      done();
    });
  });
});
