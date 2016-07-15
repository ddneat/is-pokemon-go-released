const assert = require('assert');
const sinon = require('sinon');

const createRequest = require('./request');

suite('Request', () => {
  let fetchPromise;
  let fetchMock;

  setup(() => {
    fetchPromise = {
      then: sinon.stub()
    };
    fetchMock = sinon.stub().returns(fetchPromise);
  });

  test('calls fetchMock once', () => {
    const request = createRequest(fetchMock);
    request();
    assert.ok(fetchMock.calledOnce);
  });

  test('calls fetchMock with the passed country', () => {
    const request = createRequest(fetchMock);
    request('some-url');
    assert.equal(
      fetchMock.lastCall.args[0],
      'some-url'
    );
  });

  test('calls fetchMock with the passed country', () => {
    const request = createRequest(fetchMock);
    request('some-url');
    assert.equal(
      fetchMock.lastCall.args[0],
      'some-url'
    );
  });

  test('throws an error when response status is 404', () => {
    const request = createRequest(fetchMock);
    fetchPromise.then.callsArgWith(0, { status: 404 });
    assert.throws(
      () => request('some-url'),
      /Bad response from server/
    );
  });
});
