const chakram = require('chakram');
expect = chakram.expect;
const ENV = require('../support/common/Env');

describe('GET REQUESTS', function () {
  it('Deve listar usuario pelo id', function () {
    return chakram.get(`${ENV.baseUrl}/users/2`).then(function (res) {
      console.log(res.body);
      expect(res).to.have.status(200);
    });
  });
});
