const chakram = require('chakram');
expect = chakram.expect;
const ENV = require('../support/common/Env');
const USER = require('../support/data/User');

describe('PUT REQUESTS', function () {
  it('Deve listar um usuario', function () {
    return chakram
      .put(`${ENV.baseUrl}/users/2`, {
        name: USER.update.name,
        job: USER.update.job,
      })
      .then(function (res) {
        console.log(res.body);
        expect(res).to.have.status(200);
      });
  });
});
