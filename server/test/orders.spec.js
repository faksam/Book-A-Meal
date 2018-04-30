import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

// import json file
// import meals from '../book-meal/meals.json';


// const { expect } = chai.expect;
// const expect = chai.expect;

chai.use(chaiHttp);

const order = {
  id: '2',
  meal: [
    {
      id: 1,
      name: 'Fried Rice & CHicken',
      description: 'Dem Fry Rice with groundnut oil and put plenty maggi, abeggi I no know',
      price: 1500,
      categories: 'Breakfast, Lunch, Dinner',
      status: 'Ready',
      pictures: 'fried_rice.jpg',
      caterer_id: '123456qwerty'
    }
  ],
  meal_quantity: 2,
  customer_id: 2,
  date: '20-04-2018',
  status: 'Ready',
  price: 3000
};

describe('API endpoint /orders', () => {
  // this.timeout(5000); // How long to wait for a response (ms)

  before(() => {

  });

  after(() => {

  });

  // GET - List all orders
  it('it should return all orders', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
      .then((res) => {
        expect(res).to.have.status(200);
        // //expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.orders).to.be.an('array');
        done();
      });
  });
  // GET - a order
  it('it should return a order by the given id', (done) => {
    chai.request(app)
      .get('/api/v1/orders/1')
      .then((res) => {
        expect(res).to.have.status(200);
        // //expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.orders).to.be.an('array');
        done();
      });
  });

  // GET - Invalid path
  // it('it should return Not Found', () => chai.request(app)
  //   .get('/INVALID_PATH')
  //   .then((res) => {
  //     expect(res).to.have.status(200);
  //     throw new Error('Path exists!');
  //   })
  //   .catch((err) => {
  //     expect(err).to.have.status(404);
  //   }));

  // POST - Add new order
  it('it should add new order', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(order)
      .then((res) => {
        expect(res).to.have.status(201);
        // //expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.results).to.be.an('array').that.includes('YELLOW');
        done();
      });
  });

  // PUT - Update specific order/3 by id
  it('it should update order/3', (done) => {
    chai.request(app)
      .put('/api/v1/orders/3')
      .send(order)
      .then((res) => {
        expect(res).to.have.status(200);
        // //expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.results).to.be.an('array').that.includes('YELLOW');
        done();
      });
  });

  // Delete - Delete specific order/3 by id
  it('it should delete order/3', (done) => {
    chai.request(app)
      .delete('/api/v1/orders/:3')
      .send(order)
      .then((res) => {
        expect(res).to.have.status(200);
        // //expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        // expect(res.body.results).to.be.an('array').that.includes('YELLOW');
        done();
      });
  });
  // // POST - Bad Request
  // it('should return Bad Request', function () {
  //    return chai.request(app)
  //        .post('/orders')
  //        .type('form')
  //        .send({
  //            order: 'YELLOW'
  //        })
  //        .then(function (res) {
  //            throw new Error('Invalid content type!');
  //        })
  //        .catch(function (err) {
  //            expect(err).to.have.status(400);
  //        });
  // });
});
