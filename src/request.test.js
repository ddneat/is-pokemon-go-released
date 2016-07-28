const assert = require('assert');
const sinon = require('sinon');

const createRequest = require('./request');

suite('Request', () => {
  let fetchMock;

  setup(() => {
    fetchMock = sinon.stub().returns(Promise.resolve());
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

  test('throws an error when response status is 404', (done) => {
    fetchMock.returns(Promise.resolve({ status: 404 }));
    const request = createRequest(fetchMock);

    request('some-url').catch((error) => {
      assert.deepEqual(
        error,
        /Bad response from server/
      );
      done();
    });
  });

  test('returns text', (done) => {
    fetchMock.returns(Promise.resolve({ text: () => 'foobar' }));
    const request = createRequest(fetchMock);

    request('some-url').then((result) => {
      assert.deepEqual(
        result,
        'foobar'
      );
      done();
    });
  });
});
