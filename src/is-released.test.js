const assert = require('assert');
const sinon = require('sinon');

const createIsReleased = require('./is-released');

suite('isReleased', () => {
  let requestPromise;
  let requestMock;

  setup(() => {
    requestPromise = {
      then: sinon.stub()
    };
    requestMock = sinon.stub().returns(requestPromise);
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
});
