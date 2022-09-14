const chakram = require('chakram');
expect = chakram.expect;
const ENV = require('../support/common/Env');
const USER = require('../support/data/User');

describe('POST REQUESTS', function () {
  it('Deve criar um usuario', function () {
    return chakram
      .post(`${ENV.baseUrl}/users`, {
        name: USER.create.name,
        job: USER.create.job,
      })
      .then(function (res) {
        console.log(res.body);
        expect(res).to.have.status(201);
      });
  });
});
