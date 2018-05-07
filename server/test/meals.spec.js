import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

import meal from './mock-data/meal.json';

chai.use(chaiHttp);

describe('API endpoint /meals', () => {
  // GET  List all meals
  it('it should return all meals', (done) => {
    chai.request(app)
      .get('/api/v2/meals')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        //expect(res.body).to.be.an('array');
        done();
      });
  });
  // GET  a meal
  // it('it should return error Not', (done) => {
  //   chai.request(app)
  //     .get('/api/v2/meals/1')
  //     .then((res) => {
  //       expect(res).to.have.status(200);
  //       //expect(res.body).to.be.an('object');
  //       done();
  //     });
  // });
  // // GET unavailable meal
  // it('it should return a meal by the given id', (done) => {
  //   chai.request(app)
  //     .get('/api/v2/meals/20')
  //     .then((res) => {
  //       expect(res).to.have.status(404);
  //       ////expect(res.body).to.be.an('object');
  //       done();
  //     });
  // });

  // POST  Add new meal
  it('it should add new meal', (done) => {
    chai.request(app)
      .post('/api/v2/meals')
      .send(meal)
      .then((res) => {
        expect(res).to.have.status(201);
        //expect(res.body).to.be.an('object');
        done();
      });
  });

  // PUT  Update specific meal/3 by id
  it('it should update meal/4', (done) => {
    chai.request(app)
      .put('/api/v2/meals/4')
      .send(meal)
      .then((res) => {
        expect(res).to.have.status(200);
        //expect(res.body).to.be.an('object');
        done();
      });
  });

  // Delete  Delete specific meal/3 by id
  it('it should delete meal/2', (done) => {
    chai.request(app)
      .delete('/api/v2/meals/8')
      .send(meal.meal)
      .then((res) => {
        expect(res).to.have.status(204);
        done();
      });
  });
});
