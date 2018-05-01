import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

import order from './mock-data/order.json';

chai.use(chaiHttp);

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

  // POST - Add new order
  it('it should add new order', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(order)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
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
        expect(res.body).to.be.an('object');
        done();
      });
  });

});
