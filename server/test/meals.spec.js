import chai, { expect } from 'chai';
import chaiHttp from 'chaihttp';
import app from '../app';

// import json file
// import meals from '../bookmeal/meals.json';


// const expect = chai.expect;
// const expect = chai.expect;

chai.use(chaiHttp);

const meal = {
  id: '3',
  name: 'Pounded Yam',
  description: 'Trust me I know how to make pounded yam, but no time',
  price: 1500,
  categories: 'Breakfast, Lunch, Dinner',
  status: 'Ready',
  pictures: "fried_rice.jpg",
  caterer_id: '123456qwerty'
};

describe('API endpoint /meals', () => {
  // this.timeout(5000); // How long to wait for a response (ms)

  before(() => {

  });

  after(() => {

  });

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
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.meals).to.be.an('array');
        done();
      });
  });

  // GET  Invalid path
  // it('it should return Not Found', () => chai.request(app)
  //   .get('/INVALID_PATH')
  //   .then((res) => {
  //     expect(res).to.have.status(200);
  //     throw new Error('Path exists!');
  //   })
  //   .catch((err) => {
  //     expect(err).to.have.status(404);
  //   }));

  // POST  Add new meal
  it('it should add new meal', (done) => {
    chai.request(app)
      .post('/api/v1/meals')
      .send(meal)
      .then((res) => {
        expect(res).to.have.status(201);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.results).to.be.an('array').that.includes('YELLOW');
        done();
      });
  });

  // PUT  Update specific meal/3 by id
  it('it should update meal/3', (done) => {
    chai.request(app)
      .put('/api/v1/meals/3')
      .send(meal)
      .then((res) => {
        expect(res).to.have.status(200);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.results).to.be.an('array').that.includes('YELLOW');
        done();
      });
  });

  // Delete  Delete specific meal/3 by id
  it('it should delete meal/3', (done) => {
    chai.request(app)
      .delete('/api/v1/meals/3')
      .send(meal)
      .then((res) => {
        expect(res).to.have.status(200);
        // expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.results).to.be.an('array').that.includes('YELLOW');
        done();
      });
  });

  // // POST  Bad Request
  // it('should return Bad Request', function () {
  //    return chai.request(app)
  //        .post('/meals')
  //        .type('form')
  //        .send({
  //            meal: 'YELLOW'
  //        })
  //        .then(function (res) {
  //            throw new Error('Invalid content type!');
  //        })
  //        .catch(function (err) {
  //            expect(err).to.have.status(400);
  //        });
  // });
});