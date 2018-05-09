import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

import menuItem from './mock-data/menu.json';
import user from './mock-data/user.json';

let userToken;

chai.use(chaiHttp);

describe('API endpoint /menu', () => {

  before((done) => {
    chai.request(app)
    .post('/api/v1/auth/signin')
    .send(user)
    .end((err, res) => {
      userToken = res.body.token;
      done();
    });
  });

  // GET - List all menu items
  it('it should return menu for "05-05-2018"', (done) => {
    chai.request(app)
      .get('/api/v1/menu?date="05-05-2018"')
      .set('authorization', 'Bearer '+ userToken)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  // POST - Add new menu
  it('it should add new menu', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', 'Bearer '+ userToken)
      .send(menuItem)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

