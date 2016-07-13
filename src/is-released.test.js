const assert = require('assert');
const sinon = require('sinon');

const createIsReleased = require('./is-released');

suite('isReleased', () => {
  let resultPromise;
  let fetchPromise;
  let fetchMock;

  setup(() => {
    resultPromise = {
      then: sinon.stub()
    };
    fetchPromise = {
      then: sinon.stub().returns(resultPromise)
    };
    fetchMock = sinon.stub().returns(fetchPromise);
  });

  test('calls fetchMock once', () => {
    const isReleased = createIsReleased(fetchMock);
    isReleased();
    assert.ok(fetchMock.calledOnce);
  });

  test('calls fetchMock with the passed country', () => {
    const isReleased = createIsReleased(fetchMock);
    isReleased('de');
    assert.equal(
      fetchMock.lastCall.args[0],
      'https://itunes.apple.com/de/app/pokemon-go/id1094591345'
    );
  });

  test('calls fetchMock with the passed country', () => {
    const isReleased = createIsReleased(fetchMock);
    isReleased('de');
    assert.equal(
      fetchMock.lastCall.args[0],
      'https://itunes.apple.com/de/app/pokemon-go/id1094591345'
    );
  });

  test('throws an error when response status is 404', () => {
    const isReleased = createIsReleased(fetchMock);
    fetchPromise.then.callsArgWith(0, { status: 404 });
    assert.throws(
      () => isReleased('de'),
      /Bad response from server/
    );
  });
});
