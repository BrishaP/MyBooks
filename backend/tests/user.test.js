const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../app'); // Your Express app
const { User } = require('../models'); // Your Sequelize model

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /users', () => {
  let findAllStub;

  beforeEach(() => {
    findAllStub = sinon.stub(User, 'findAll');
  });

  afterEach(() => {
    findAllStub.restore();
  });

  it('should return a list of users', async () => {
    findAllStub.resolves([{ id: 1, name: 'John Doe' }]);

    const res = await chai.request(app).get('/users');
    expect(res).to.have.status(200);
    expect(res.body).to.deep.equal([{ id: 1, name: 'John Doe' }]);
  });
});
