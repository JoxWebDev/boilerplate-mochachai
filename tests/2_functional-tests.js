const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const assert = chai.assert;

chai.use(chaiHttp);

suite('Functional Tests', function () {
  test('Test GET /hello with no name', function (done) {
    chai.request(server)
      .get('/hello')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'hello Guest');
        done();
      });
  });

  test('Test GET /hello with your name', function (done) {
    chai.request(server)
      .get('/hello?name=Julia')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'hello Julia');
        done();
      });
  });
});
