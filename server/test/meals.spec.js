import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

import meal from './mock-data/meal.json';

chai.use(chaiHttp);

describe('API endpoint /meals', () => {
  // GET  List all meals
  it('it should return all meals', (done) => {
    chai.request(app)
      .get('/api/v1/meals')
      .then((res) => {
        expect(res).to.have.status(200);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.meals).to.be.an('array');
        done();
      });
  });
  // GET  a meal
  it('it should return a meal by the given id', (done) => {
    chai.request(app)
      .get('/api/v1/meals/1')
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
      .send(meal)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  // PUT  Update specific meal/3 by id
  it('it should update meal/3', (done) => {
    chai.request(app)
      .put('/api/v1/meals/3')
      .send(meal.meal)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  // Delete  Delete specific meal/3 by id
  it('it should delete meal/3', (done) => {
    chai.request(app)
      .delete('/api/v1/meals/3')
      .send(meal.meal)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
