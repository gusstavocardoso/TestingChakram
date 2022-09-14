const chakram = require('chakram');
expect = chakram.expect;
const ENV = require('../support/common/Env');

describe('DELETE REQUESTS', function () {
  it('Deve remover um usuario', function () {
    return chakram.delete(`${ENV.baseUrl}/users/1`).then(function (res) {
      console.log(res.body);
      expect(res).to.have.status(204);
    });
  });
});
