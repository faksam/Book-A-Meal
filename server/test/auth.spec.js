import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

import user from './mock-data/user.json';

chai.use(chaiHttp);

describe('API endpoint /auth/signin & /auth/signup', () => {
  // this.timeout(5000); // How long to wait for a response (ms)

  before(() => {

  });

  after(() => {

  });
  // POST - Signup user
  it('it should add new user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });


  // POST - Signin user
  it('it should login user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(user)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
