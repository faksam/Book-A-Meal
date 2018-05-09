import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import meal from './mock-data/meal.json';
import user from './mock-data/user.json';

let userToken;

chai.use(chaiHttp);

describe('API endpoint /meals', () => {

  before((done) => {
    chai.request(app)
    .post('/api/v1/auth/signin')
    .send(user)
    .end((err, res) => {
      userToken = res.body.token;
      done();
    });
  });
  // GET  List all meals
  it('it should return all meals', (done) => {
    chai.request(app)
      .get('/api/v1/meals')  
      .set('authorization', 'Bearer '+ userToken)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  // POST  Add new meal
  it('it should add new meal', (done) => {
    chai.request(app)
      .post('/api/v1/meals')   
      .set('authorization', 'Bearer '+ userToken)
      .send(meal)
      .then((res) => {
        expect(res).to.have.status(201);
        done();
      });
  });

  // PUT  Update specific meal/3 by id
  it('it should update meal/4', (done) => {
    chai.request(app)
      .put('/api/v1/meals/4')
      .set('authorization', 'Bearer '+ userToken)
      .send(meal)
      .then((res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  // Delete  Delete specific meal/3 by id
  it('it should delete meal/:id', (done) => {
    chai.request(app)
      .delete('/api/v1/meals/27')
      .set('authorization', 'Bearer '+ userToken)
      .send(meal.meal)
      .then((res) => {
        expect(res).to.have.status(204);
        done();
      });
  });
});
